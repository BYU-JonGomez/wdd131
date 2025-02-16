const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
	nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
	nav.classList.remove("visible");
})

const date = new Date(document.lastModified);


const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;
