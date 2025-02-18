// ARRROW RIGHT
document.addEventListener("DOMContentLoaded", function () {
    const leftMenuItems = document.querySelectorAll(".nav__menu--left");
    const iconRight = document.querySelector(".nav__menu--icon-right");

    console.log(iconRight); 

    if (leftMenuItems.length > 0 && iconRight) {
        const lastChild = leftMenuItems[leftMenuItems.length - 1];

        // Event untuk hover
        lastChild.addEventListener("mouseenter", function () {
            if (lastChild.classList.contains("active") || !lastChild.classList.contains("active")) {
                iconRight.classList.add("active-hover");
            }
        });

        lastChild.addEventListener("mouseleave", function () {
            if (!lastChild.classList.contains("active")) {
                iconRight.classList.remove("active-hover");
            }
        });

        // Event untuk klik
        lastChild.addEventListener("click", function () {
            lastChild.classList.toggle("active");

            if (lastChild.classList.contains("active")) {
                iconRight.classList.add("active-hover");
            } else {
                iconRight.classList.remove("active-hover");
            }
        });
    }
});

// ACTIVE LIST LEFT
document.addEventListener("DOMContentLoaded", function () {
    const leftMenuItems = document.querySelectorAll(".nav__menu--left");

    leftMenuItems.forEach(item => {
        item.addEventListener("click", function () {
            leftMenuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active"); 
        });
    });
});

// ACTIVE LIST RIGHT
document.addEventListener("DOMContentLoaded", function () {
    const leftMenuItems = document.querySelectorAll(".nav__menu--icon-cart"); 
    leftMenuItems.forEach(item => {
        item.addEventListener("click", function () {
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            } else {
                leftMenuItems.forEach(i => i.classList.remove("active"));
                item.classList.add("active");
            }
        });
    });
});




