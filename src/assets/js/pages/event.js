// ARRROW RIGHT
document.addEventListener("DOMContentLoaded", function () {
    const leftMenuItems = document.querySelectorAll(".nav__menu--left");
    const iconDown = document.querySelector(".nav__menu--icon-down");

    console.log(iconDown); 

    if (leftMenuItems.length > 0 && iconDown) {
        const lastChild = leftMenuItems[leftMenuItems.length - 1];

        // Event untuk hover
        lastChild.addEventListener("mouseenter", function () {
            if (lastChild.classList.contains("active") || !lastChild.classList.contains("active")) {
                iconDown.classList.add("active-hover");
            }
        });

        lastChild.addEventListener("mouseleave", function () {
            if (!lastChild.classList.contains("active")) {
                iconDown.classList.remove("active-hover");
            }
        });

        // Event untuk klik
        lastChild.addEventListener("click", function () {
            lastChild.classList.toggle("active");

            if (lastChild.classList.contains("active")) {
                iconDown.classList.add("active-hover");
            } else {
                iconDown.classList.remove("active-hover");
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




