const toggleMenuMobile = document.querySelector(".toggle-menu-mobile");
const menuMobile = document.querySelector(".menu-mobile");
const layout = document.querySelector(".layout");
const closeMenu = document.querySelector(".menu-mobile .close");
const modal = document.querySelector(".modal");
const layoutReserve = document.querySelector(".modal-layout");
const closeReserve = document.querySelector(".modal .close");
const reserve = document.querySelector(".hero-cta");
const submitReserve = document.querySelector(".form-reserve .btn.primary");

// Menu on mobile and tablet
toggleMenuMobile.addEventListener("click", handleShowMenuMobile);
closeMenu.addEventListener("click", handleCloseMenuMobile);
layout.addEventListener("click", handleCloseMenuMobile);

function handleShowMenuMobile() {
    menuMobile.classList.add("active");
    layout.classList.add("active");
}

function handleCloseMenuMobile() {
    menuMobile.classList.remove("active");
    layout.classList.remove("active");
}

// Modal form for reserve a table
reserve.addEventListener("click", handleShowModalReserve);
layoutReserve.addEventListener("click", handleCloseModalReserve);
closeReserve.addEventListener("click", handleCloseModalReserve);

function handleShowModalReserve() {
    modal.classList.add("active");
}

function handleCloseModalReserve() {
    modal.classList.remove("active");
}

// ajax request
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

    const postObj = {
        name: nameBooker.value,
        email: emailBooker.value,
        request: requestBooker.value,
    };
    const post = JSON.stringify(postObj);
    const url = "https://jsonplaceholder.typicode.com/posts";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(post);
    xhr.onload = function () {
        if (xhr.status === 201) {
            alert("A reservation successfully created!");
        }
    };

    modal.classList.remove("active");
    nameBooker.value = "";
    emailBooker.value = "";
    requestBooker.value = "";
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
