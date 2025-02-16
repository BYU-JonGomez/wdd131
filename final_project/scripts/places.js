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

//localstorage//
const localstorage = document.querySelector("#nav");


function saveName() {
	let name = document.getElementById("name").value;
	if (name) {
		localStorage.setItem("userName", name);
		alert("You're subscribed. Welcome to our community");
	} else {
		alert("Please enter a name.");
	}
}

// Function to display the stored name
function showName() {
	let savedName = localStorage.getItem("userName");
	if (savedName) {
		document.getElementById("result").innerText = "Stored name: " + savedName;
	} else {
		document.getElementById("result").innerText = "No name saved.";
	}
}
