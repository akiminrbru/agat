const observer = new IntersectionObserver((entries) => {
    // перебор записей
    entries.forEach((entry) => {
        // если элемент появился
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add("about__img_animation");
        }
        if (!entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.remove("about__img_animation");
        }
    });
});
observer.observe(document.querySelector(".about__img"));

const observer2 = new IntersectionObserver((entries) => {
    // перебор записей
    entries.forEach((entry) => {
        // если элемент появился
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add("about__line_animation");
        }
        if (!entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.remove("about__line_animation");
        }
    });
});
observer2.observe(document.querySelector(".about__line"));
