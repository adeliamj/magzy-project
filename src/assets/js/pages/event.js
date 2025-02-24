// ARRROW DOWN
document.addEventListener("DOMContentLoaded", function () {
    // mengambil semua elemen dengan kelas .nav__menu--left yang ada 
    const leftMenuItems = document.querySelectorAll(".nav__menu--left");
    // mengambil elemen dengan kelas .nav__menu--icon-down
    const iconDown = document.querySelector(".nav__menu--icon-down");

    // menampilkan elemen iconDown di console untuk memeriksa di console
    console.log(iconDown);

    // mengecek apakah elemen leftMenuItems ada dan iconDown terdefinisi
    if (leftMenuItems.length > 0 && iconDown) {
        // mengambil elemen terakhir dari leftMenuItems
        const lastChild = leftMenuItems[leftMenuItems.length - 1];

        // menambahkan event listener untuk event hover (mouseenter)
        lastChild.addEventListener("mouseenter", function () {
            // jika elemen terkahir sudah memiliki kelas active atau tidak
            if (lastChild.classList.contains("active") || !lastChild.classList.contains("active")) {
                // memabahkan kelas active-hover ke iconDown
                iconDown.classList.add("active-hover");
            }
        });

        // menambahkan event listener untuk event hover (mouseleave)
        lastChild.addEventListener("mouseleave", function () {
            // jika elemen terakhir tidak memiliki kelas active
            if (!lastChild.classList.contains("active")) {
                // menghapus kelas active hover dari iconDown
                iconDown.classList.remove("active-hover");
            }
        });

        // menambahkan event listener untuk event klik (click)
        lastChild.addEventListener("click", function () {

            // mengubah status dari kelas aktif pada elemen terakhir toggle
            lastChild.classList.toggle("active");

            // jika elemen terkahir memiliki kelas active
            if (lastChild.classList.contains("active")) {
                // menambahkan kelas active-hover ke iconDown
                iconDown.classList.add("active-hover");
            }
            else {
                // jika tidak menghapus active-hover dari iconDown
                iconDown.classList.remove("active-hover");
            }
        });
    }
});


// ACTIVE LIST MENU
document.addEventListener("DOMContentLoaded", function () {
    // mengambil semua elemen dengan kelas .nav__menu--left
    const leftMenuItems = document.querySelectorAll(".nav__menu--left");
    // mengambil semua elemen dengan kelas .nav__menu--icon-cart
    const cartIcon = document.querySelectorAll(".nav__menu--icon-cart");


    // menggunakan forEach untuk menambahkan event listener pada setiap item menu
    leftMenuItems.forEach(item => {

        // menambahkan event listener untuk event click pada setiap item menu
        item.addEventListener("click", function () {
            // mengecek apakah icon cart active
            if (cartIcon.length > 0 && cartIcon[0].classList.contains("active")) {
                // jika aktif maka menu left tetap
                return
            }

            // menghapus kelas aktive dari list menu kiri
            leftMenuItems.forEach(i => i.classList.remove("active"));
            // menambahkan kelas aktif pada item menu yang diklik
            item.classList.add("active");
        });
    });

    // mengaktifkan list right
    cartIcon.forEach(item => {
        item.addEventListener("click", function () {
            // menghapus kelas aktif dari list menu kiri
            leftMenuItems.forEach(i => i.classList.remove("active"));
            // menambahkan kelas active untuk icon cart
            item.classList.add("active");
        });

    });
});


// SLIDER IMAGES
document.addEventListener("DOMContentLoaded", () => {
    // mengatur event untuk setiap elemen dengan kelas .event__content
    document.querySelectorAll(".event__content").forEach(event => {

        // menyimpan indeks gambar yang aktif
        let currentIndex = 0;
        // mengambilsemua gambar dengan kelas carousel__image di dalam event 
        const images = event.querySelectorAll(".carousel__image");
        // mengambil button dengan id next
        const nextButton = event.querySelector("#next");
        // mengambil elemen slider dengan nama icon__slider
        const slider = event.querySelector("icon-slider");
        // mmendapatkan total jumlah gambat
        const totalImages = images.length;

        // menyimpan daftar gambar beserta atribut src dan alt dalam array 
        let imageSources = Array.from(images).map(img => ({
            src: img.src,
            alt: img.alt
        }));

        // fungsi untuk mengganti-ganti gambar
        function swapImageSources() {
            // mengupdate indeks gambar yang aktid dengan menggunakan operator modulus agar dapat kembali ke awal ketika gambar sudah terakhir 
            currentIndex = (currentIndex + 1) % totalImages;

            // update gambar dengan imageSources
            images.forEach((img, i) => {
                // mengupdate src dan alt setiap gambar berdasarkan urutan yang baru
                img.src = imageSources[(currentIndex + i) % totalImages].src;
                img.alt = imageSources[(currentIndex + i) % totalImages].alt;
            });

            // mengupdate slider width
            if (slider) {
                slider.updateIndex(currentIndex, totalImages);
            }

            //mengatur kelas untuk tombol nextButton menandakan gambar sampai yang terakhir 
            if (currentIndex === totalImages - 1) {
                nextButton.classList.add("icon__carousel--right");
            } else {
                nextButton.classList.remove("icon__carousel--right");
            }
        }

        // menamahkan event listener klik pada tombol
        if (nextButton) {
            nextButton.addEventListener("click", swapImageSources);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // mengambil elemen kelas menu
    const menu = document.querySelector(".menu");
    // mengambil elemen dengan id #all-menu
    const menuButton = document.querySelector("#all-menu");

    // memastikan menubutton dan menu ada di elemen
    if (menuButton && menu) {
        // menambahkan event listener untuk klik pada tombol menu 
        menuButton.addEventListener("click", (event) => {
            // mencegah aksi default dari elemen
            event.preventDefault();

            // toggle menjalankan kelas menu--active
            menu.classList.toggle("menu--active");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Mengambil elemen kelas menu
    const menu = document.querySelector(".menu");
    // Mengambil elemen dengan kelas .nav__hamburger
    const menuButton = document.querySelector(".nav__hamburger");

    // Memastikan menuButton dan menu ada di dalam elemen
    if (menuButton && menu) {
        // Menambahkan event listener untuk klik pada tombol menu 
        menuButton.addEventListener("click", (event) => {
            // Mencegah aksi default dari elemen
            event.preventDefault();

            // Toggle menjalankan kelas menu--active
            menu.classList.toggle("menu--active");
        });
    }
});









