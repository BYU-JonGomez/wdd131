$(document).ready(main);
var contador = 1;
function main(){
	$('.menu_bar').click(function(){
		if(contador == 1){
			$('nav').animate({
                left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};

const date = new Date(document.lastModified);

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;


const temples = [
	{
	  	templeName: "Aba Nigeria",
	  	location: "Aba, Nigeria",
	  	dedicated: "2005, August, 7",
	  	area: 11500,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
		alt: "Aba Nigeria Temple"
	},
	{
	  	templeName: "Manti Utah",
	  	location: "Manti, Utah, United States",
	  	dedicated: "1888, May, 21",
	  	area: 74792,
	  	imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
		alt: "Manti Utah Temple"
	},
	{
	  	templeName: "Payson Utah",
	  	location: "Payson, Utah, United States",
	  	dedicated: "2015, June, 7",
	  	area: 96630,
	  	imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
		alt: "Payson Utah Temple"
	},
	{
	  	templeName: "Yigo Guam",
	  	location: "Yigo, Guam",
	  	dedicated: "2020, May, 2",
	  	area: 6861,
	  	imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
		alt: "Yigo Guam Temple"
	},
	{
	  	templeName: "Washington D.C.",
	  	location: "Kensington, Maryland, United States",
	  	dedicated: "1974, November, 19",
	  	area: 156558,
	  	imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
		alt: "Washington D.C. Temple"
	},
	{
	  	templeName: "Lima Perú",
	  	location: "Lima, Perú",
	  	dedicated: "1986, January, 10",
	  	area: 9600,
	  	imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
		alt: "Lima Perú Temple"
	},
	{
	  	templeName: "Mexico City Mexico",
	  	location: "Mexico City, Mexico",
	  	dedicated: "1983, December, 2",
	  	area: 116642,
	  	imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
		alt: "Mexico City Mexico Temple"
	},
	{
		templeName: "Anchorage Alaska",
		location: "Alaska, United States",
		dedicated: "1999, January, 9",
		area: 11937,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-44885.jpg",
		alt: "Anchorage Alaska Temple"
	},
	{
		templeName: "Calgary Alberta",
		location: "Alberta, Canada",
		dedicated: "2012, October, 28",
		area: 33000,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/calgary-alberta-temple/calgary-alberta-temple-3888.jpg",	
		alt: "Calgary Alberta Temple"
	},
  ];

  function createTempleCard(temple) {
	const figure = document.createElement("figure");
    figure.style.background = "#abdbe3";
	figure.loading = "lazy";
    figure.style.width = "300px";
    figure.style.height = "350px";
	figure.style.boxShadow = "1px 1px 1px #333";
	figure.style.padding = "2%";
	figure.style.fontFamily = "Arial, sans-serif";
	figure.style.textAlign = "center";

	const figcaption = document.createElement("figcaption");
	figcaption.textContent = temple.templeName;
	figcaption.style.fontSize = "1.5em";
	figcaption.style.padding = "2%";
	
	const img = document.createElement("img");
	img.src = temple.imageUrl;
	img.alt = temple.alt;
    img.loading = "lazy";
	img.style.width = "300px";
    img.style.height = "200px";
    img.style.border = "2px solid #000";
    img.style.opacity = "100";
    img.style.animation = "fadeIn 3s forwards";
    img.style.backgroundColor = "black";
	img.style.boxShadow = "5px 5px 10px #333";
	
	const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${new Date(temple.dedicated).toLocaleDateString()}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area} sq ft`;

    figure.appendChild(figcaption);
	figure.appendChild(img);
    figure.appendChild(location);
    figure.appendChild(dedicated);
    figure.appendChild(area);

    return figure;
}

function displayTemples(filteredTemples) {
    const imagesDiv = document.querySelector(".images");
    imagesDiv.innerHTML = "";
    filteredTemples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        imagesDiv.appendChild(templeCard);
    });
}

displayTemples(temples); 

document.querySelector(".bt-menu").addEventListener("click", (e) => {
    e.preventDefault();
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("open"); 
});

document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        e.preventDefault();
        const category = e.target.textContent.toLowerCase();
        let filteredTemples = [];
        switch (category) {
            case "old":
                filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date("1900-01-01"));
                break;
            case "new":
                filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date("2000-01-01"));
                break;
            case "large":
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case "home":
                filteredTemples = temples;
                break;
        }
        displayTemples(filteredTemples);
    }
});


