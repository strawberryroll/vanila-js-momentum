const todoIcon = document.querySelector("#todo-icon");
const todoWrapper = document.querySelector("#todo-wrapper");

const infoIcon = document.querySelector("#info-icon");
const infoModal = document.querySelector("#info-modal");
const closeModal = document.querySelector("#close-modal");


todoIcon.addEventListener("click", () => {
    todoWrapper.classList.toggle("hidden");
});

infoIcon.addEventListener("click", () => {
    infoModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    infoModal.classList.add("hidden");
});





