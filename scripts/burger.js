let burger = document.querySelector(".burger");

function openBurger() {
    burger.classList.remove("close");
    burger.classList.add("open");
}

function closeBurger() {
    burger.classList.remove("open");
    burger.classList.add("close");
}
