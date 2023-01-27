const toggleMenuMobile = document.querySelector(".toggle-menu-mobile");
const menuMobile = document.querySelector(".menu-mobile");
const layout = document.querySelector(".layout");
const closeMenu = document.querySelector(".close");

toggleMenuMobile.addEventListener("click", handleShowMenuMobile);
closeMenu.addEventListener("click", handleCloseMenuMobile);
layout.addEventListener("click", handleCloseMenuMobile);

function handleShowMenuMobile() {
    menuMobile.classList.add("active");
    layout.classList.add("active");
    document.body.style.position = "fixed";
}

function handleCloseMenuMobile() {
    menuMobile.classList.remove("active");
    layout.classList.remove("active");
    document.body.style.position = "static";
}

const feedbackSwiper = new Swiper(".feedback .swiper", {
    direction: "horizontal",
    loop: true,
    navigation: {
        nextEl: ".feedback .btn.next",
        prevEl: ".feedback .btn.prev",
    },
});

const viewSwiper = new Swiper(".view .swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".view .btn.next",
        prevEl: ".view .btn.prev",
    },
});

viewSwiper.slideTo(1, 0);
