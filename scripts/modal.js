function openModal() {
    let modal = document.querySelector(".modal");

    modal.classList.add("modal__on");
}

function closeModal() {
    let modal = document.querySelector(".modal");
    modal.classList.remove("modal__on");
}

function closePolicy() {
    let policy = document.querySelector(".policy__modal");
    policy.classList.add("policy__off");
}
