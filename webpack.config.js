/**
 * We use webpack as our main module bundler.
 * You can easily modify, add or improve the configurations as needed.
 * For more information, read the docs here: https://webpack.js.org/
 */

// Import only necessary packages
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

// Import plugins here
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WebpackMessages = require('webpack-messages');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Our variables, path, etc
const rootPath = path.resolve(__dirname);
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');
const isProduction = process.env.NODE_ENV === 'production';
const { name: appName } = require('./package.json');

/**
 * Function to get our SCSS and JavaScript file entries
 * 
 * @returns {Object} entries - Generated entries 
 */
const getEntryFiles = () => {
  const entries = {
    'assets/css/styles.bundle': path.resolve(srcPath, 'assets/scss/styles.scss'),
    'assets/js/scripts.bundle': path.resolve(srcPath, 'assets/js/scripts.js'),
  };

  glob.sync(srcPath + '/assets/scss/pages/**/!(_)*.scss').forEach(file => {
    const output = file.replace(/.*scss\/(.*?)\.scss$/ig, 'assets/css/$1');
    entries[output] = path.resolve(srcPath, file.replace(/.*scss\/(.*?)$/ig, 'assets/scss/$1'));
  });

  glob.sync(srcPath + '/assets/js/**/!(_)*.js').forEach(file => {
    const output = file.replace(/.*js\/(.*?)\.js$/ig, 'assets/js/$1');
    if (output === 'assets/js/scripts') return; // Avoid duplicate entry
    entries[output] = path.resolve(srcPath, file.replace(/.*js\/(.*?)$/ig, 'assets/js/$1'));
  });

  return entries;
};

/**
 * Function to get our HTML file entries
 * 
 * @returns {Array} entries - Generated entries 
 */
const getHTMLEntries = () => {
  const entries = [];
  glob.sync(srcPath + '/**/!(_)*.html').forEach(file => {
    const output = file.replace(/.*src\/(.*?)$/ig, '$1');
    if (!output.includes('partials/')) {
      entries.push(output); // Exclude partials
    }
  });
  return entries;
};

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: getEntryFiles(),
  output: {
    path: distPath,
    filename: '[name].js',
    assetModuleFilename: 'media/bundle/[hash][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false, // Prevents loading urls in css files
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer', {}],
                ],
              },
            },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // Enable source maps for debugging
              warnRuleAsWarning: false,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.html$/,
        loader: 'handlebars-loader',
        options: {
          runtime: path.resolve(__dirname, 'helpers/handlebars.js'),
          precompileOptions: {
            knownHelpersOnly: false, // Disabled due to custom helpers
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      jquery: path.resolve(__dirname, 'node_modules/jquery/src/jquery'),
    },
    extensions: ['.js', '.scss'],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserJSPlugin({ minify: TerserJSPlugin.uglifyJsMinify }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    isProduction && new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new WebpackMessages({
      name: appName,
      logger: str => console.log(`>> ${str}`),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(srcPath, 'assets/media'),
          to: path.resolve(distPath, 'assets/media'),
          noErrorOnMissing: true,
        },
        {
          from: path.resolve(srcPath, 'assets/plugins'),
          to: path.resolve(distPath, 'assets/plugins'),
          noErrorOnMissing: true,
        },
      ],
    }),
    ...getHTMLEntries().map(entry => (
      new HtmlWebpackPlugin({
        template: path.resolve(srcPath, entry),
        filename: entry,
        inject: false,
      })
    )),
  ].filter(Boolean), // Removes falsy values from plugins array
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true,
  },
  cache: !isProduction,
  devtool: !isProduction && 'source-map',
  performance: {
    hints: false, // Disable performance warnings
  },
  stats: isProduction ? 'errors-warnings' : 'errors-only',
};
