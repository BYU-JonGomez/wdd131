const date = new Date(document.lastModified);

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;







@media screen and (min-width: 500px) {
    header {
        background-color: black;
        color: white;
        
    }
    main {
        grid-template-columns: 1fr 1fr;
    }
}

$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 

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