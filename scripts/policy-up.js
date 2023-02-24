const policyUp = {
    el: document.querySelector(".policy__modal"),
    show() {
        this.el.classList.add("policy__modal_hide");
    },
    hide() {
        this.el.classList.remove("policy__modal_hide");
    },
    addEventListener() {
        window.addEventListener("scroll", () => {
            const scrollY =
                window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
    },
};

policyUp.addEventListener();
