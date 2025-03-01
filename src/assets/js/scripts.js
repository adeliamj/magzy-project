/** You can import all css in js, it will injecting a `<style>` tag
 * e.g: import '../scss/styles.scss'
 * But you should change the config in webpack.config.js
 * You can call me if you need help about this
 */

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import jQuery
import * as $ from 'jquery'

import "./icons/icon-arrow-right";
import "./icons/icon-arrow-down";
import "./icons/icon-cart";
import "./icons/icon-search";
import "./icons/icon-carousel";
import "./icons/icon-slider";
import "./icons/icon-location";
import "./icons/icon-arrow-right-top";
import "./icons/icon-hamburger";
import "./pages/event";

$(document).ready(function () {
  console.log('Welcome');
})