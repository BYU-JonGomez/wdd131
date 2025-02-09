document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");

    // Populate Product Name select options
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    const productSelect = document.getElementById("product-select");
    if (productSelect) {
        products.forEach(product => {
            let option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Increment review counter in localStorage
    if (window.location.pathname.includes("form.html")) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem("reviewCount", reviewCount);
        console.log(`Review count updated: ${reviewCount}`);
    }

    // Example: Adding an event listener to navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "red";
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "#1E90FF";
        });
    });

});
