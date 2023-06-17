const main = document.querySelector(".main");

const swiper4 = new Swiper(".swiper4", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,

    // If we need pagination
    pagination: {
        el: ".custom-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
});

const progressBar = document.querySelector(".progress");

progressBar.addEventListener("animationend", myEndFunction);

function myEndFunction() {
    swiper4.slideNext();
    progressBar.style.animation = "none";
    void progressBar.offsetWidth; // Triggers Reflow
    progressBar.style.animation = null;
}

// Reset Progress Bar On Slide Change

swiper4.on("slideChange", function () {
    progressBar.style.animation = "none";
    void progressBar.offsetWidth; // Triggers Reflow
    progressBar.style.animation = null;

    if (document.querySelector(".swiper-pagination-current").innerText == 1) {
        // main.classList.add("main__img_animation");
        main.style.backgroundImage = `url(${images[0]})`;
        // setInterval(() => {
        //     main.classList.remove("main__img_animation");
        // }, 2000);
    } else {
        // main.classList.add("main__img_animation");
        main.style.backgroundImage = `url(${images[1]})`;
        // setInterval(() => {
        //     main.classList.remove("main__img_animation");
        // }, 2000);
    }
});

const images = ["../assets/main/bg1.webp", "../assets/main/bg2.webp"];

// let number1 = document.querySelector(".main__number1");
// let start1 = +number1.innerHTML;
// let end1 = 10;

// function startNumber3() {
//     let interval1 = setInterval(function () {
//         number1.innerHTML = ++start1;

//         if (start1 >= end1) {
//             clearInterval(interval1);
//             startNumber2();
//         }
//     }, 70);
// }

// function startNumber() {
//     let number = document.querySelector(".main__number");
//     let start = +number.innerHTML;
//     let end = 666;

//     let interval = setInterval(function () {
//         number.innerHTML = (++start * 3000000).toLocaleString("ru-RU");
//         let numb = number.innerHTML;

//         if (start >= end) {
//             number.innerHTML = "2 000 000 000";
//             clearInterval(interval);
//         }
//     }, 0.01);
// }

// function startNumber2() {
//     let number2 = document.querySelector(".main__number2");
//     let start2 = +number2.innerHTML;
//     let end2 = 100;

//     let interval2 = setInterval(function () {
//         number2.innerHTML = ++start2;

//         if (start2 >= end2) {
//             clearInterval(interval2);
//             startNumber();
//         }
//     }, 10);
// }
