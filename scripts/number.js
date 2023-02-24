let number1 = document.querySelector(".main__number1");
let start1 = +number1.innerHTML;
let end1 = 10;

setTimeout(() => {
    let interval1 = setInterval(function () {
        number1.innerHTML = ++start1;

        if (start1 >= end1) {
            clearInterval(interval1);
            startNumber2();
        }
    }, 70);
}, 3000);

function startNumber() {
    let number = document.querySelector(".main__number");
    let start = +number.innerHTML;
    let end = 666;

    let interval = setInterval(function () {
        number.innerHTML = (++start * 3000000).toLocaleString("ru-RU");
        let numb = number.innerHTML;

        if (start >= end) {
            number.innerHTML = "2 000 000 000";
            clearInterval(interval);
        }
    }, 0.01);
}

function startNumber2() {
    let number2 = document.querySelector(".main__number2");
    let start2 = +number2.innerHTML;
    let end2 = 100;

    let interval2 = setInterval(function () {
        number2.innerHTML = ++start2;

        if (start2 >= end2) {
            clearInterval(interval2);
            startNumber();
        }
    }, 10);
}

setTimeout(() => {
    let doc = document.querySelector(".main__animation");
    doc.classList.add("main__animation_anime");
}, 2000);

setTimeout(() => {
    let doc = document.querySelector(".main__animation");
    doc.classList.add("main__animation_no");
}, 3000);

setTimeout(() => {
    let doc = document.querySelector(".main__animation_img");
    doc.classList.add("main__animation_img_no");
}, 2500);

let doc1 = document.querySelector(".header");

setTimeout(() => {
    let doc = document.querySelector(".header");
    doc1.classList.remove("header__opacity");
    doc.classList.add("header__block");
}, 2500);

// setTimeout(() => {
//     let doc = document.querySelector(".fab");
//     doc.classList.remove("fab__opacity");
//     doc.classList.add("fab__block");
// }, 2500);

setTimeout(() => {
    let doc = document.querySelector(".main");
    doc.classList.add("main-anime");
}, 3000);
