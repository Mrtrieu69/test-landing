const toggleMenuMobile = document.querySelector(".toggle-menu-mobile");
const menuMobile = document.querySelector(".menu-mobile");
const layout = document.querySelector(".layout");
const closeMenu = document.querySelector(".menu-mobile .close");
const modal = document.querySelector(".modal");
const layoutReserve = document.querySelector(".modal-layout");
const closeReserve = document.querySelector(".modal .close");
const reserve = document.querySelector(".hero-cta");
const submitReserve = document.querySelector(".form-reserve .btn.primary");

// Toggle menu on mobile and tablet
function handleShowMenuMobile() {
    menuMobile.classList.add("active");
    layout.classList.add("active");
}

function handleCloseMenuMobile() {
    menuMobile.classList.remove("active");
    layout.classList.remove("active");
}

toggleMenuMobile.addEventListener("click", handleShowMenuMobile);
closeMenu.addEventListener("click", handleCloseMenuMobile);
layout.addEventListener("click", handleCloseMenuMobile);

// Modal form for reservation
function handleShowModalReserve() {
    modal.classList.add("active");
}

function handleCloseModalReserve() {
    modal.classList.remove("active");
}

reserve.addEventListener("click", handleShowModalReserve);
layoutReserve.addEventListener("click", handleCloseModalReserve);
closeReserve.addEventListener("click", handleCloseModalReserve);

// Ajax request
const url = "https://jsonplaceholder.typicode.com/posts";

async function postData(data) {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return result.json();
}

submitReserve.addEventListener("click", (e) => {
    e.preventDefault();

    const nameBooker = document.querySelector(".form-reserve .form-input[name='name']");
    const emailBooker = document.querySelector(".form-reserve .form-input[name='email']");
    const requestBooker = document.querySelector(
        ".form-reserve .form-input[name='request']"
    );

    if (emailBooker.value.trim() === "" || nameBooker.value.trim() === "") {
        alert("Name and email is required!");
        return;
    }

    const data = {
        name: nameBooker.value,
        email: emailBooker.value,
        request: requestBooker.value,
    };

    // Post request
    postData(data)
        .then((res) => {
            modal.classList.remove("active");
            nameBooker.value = "";
            emailBooker.value = "";
            requestBooker.value = "";
            console.log(res);
            alert("Booking Success!");
        })
        .catch((err) => {
            console.log(err);
            alert("Booking Failed!");
        });
});

// Slider (swiper)
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

// Animate on scroll
function showAnimate() {
    const animateItems = document.querySelectorAll("[data-animate]:not(.show)");

    // Return when all animate items are showing
    if (!animateItems.length) return;

    animateItems.forEach((item) => {
        const { innerHeight } = window;
        const { top } = item.getBoundingClientRect();
        if (top < innerHeight) {
            item.classList.add("show");
        }
    });
}

showAnimate();

document.addEventListener("scroll", showAnimate);
