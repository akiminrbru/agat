const observer3 = new IntersectionObserver((entries) => {
    // перебор записей
    entries.forEach((entry) => {
        // если элемент появился
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            startNumberMain();
            observer3.disconnect();
        }
    });
});
observer3.observe(document.querySelector(".stat"));

let number1 = document.querySelector(".main__number1");
let start1 = +number1.innerHTML;
let end1 = 10;

function startNumberMain() {
    let interval1 = setInterval(function () {
        number1.innerHTML = ++start1;

        if (start1 >= end1) {
            clearInterval(interval1);
            startNumber2();
        }
    }, 70);
}

function startNumber() {
    let number = document.querySelector(".main__number");
    let start = +number.innerHTML;
    let end = 200;

    let interval = setInterval(function () {
        number.innerHTML = (++start * 10000000).toLocaleString("ru-RU");
        let numb = number.innerHTML;

        if (start >= end) {
            number.innerHTML = "2 000 000 000";
            clearInterval(interval);
            startNumber3();
        }
    }, 0.1);
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

function startNumber3() {
    let number3 = document.querySelector(".main__number3");
    let start3 = +number3.innerHTML;
    let end3 = 23;

    let interval3 = setInterval(function () {
        number3.innerHTML = ++start3;

        if (start3 >= end3) {
            clearInterval(interval3);
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
