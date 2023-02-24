const fabUp = {
    el: document.querySelector(".fab"),
    show() {
        this.el.classList.remove("fab__hide");
    },
    hide() {
        this.el.classList.add("fab__hide");
    },
    addEventListener() {
        window.addEventListener("scroll", () => {
            const scrollY =
                window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector(".fab").onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        };
    },
};

fabUp.addEventListener();
