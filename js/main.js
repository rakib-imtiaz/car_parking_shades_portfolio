// Product Data
const products = [
    {
        id: 1,
        name: "Car Park Shades",
        description: "Premium car parking shade solutions for maximum protection",
        image: "images/products/car-shade.jpg"
    },
    {
        id: 2,
        name: "Pergola Shades",
        description: "Elegant pergola designs for outdoor spaces",
        image: "images/products/pergola.jpg"
    },
    {
        id: 3,
        name: "Sun Shades",
        description: "Custom sun shade solutions for any space",
        image: "images/products/sun-shade.jpg"
    },
    {
        id: 4,
        name: "Stars Collection",
        description: "Decorative shade solutions with star patterns",
        image: "images/products/stars.jpg"
    }
];

// Populate Products
function loadProducts() {
    const productGrid = document.querySelector('.product-grid');

    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <button onclick="requestQuote('${product.name}')" class="quote-btn">
                    Request Quote
                </button>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message. We will contact you soon!');
    this.reset();
});

// Language Switch
function switchLanguage() {
    // Add language switching logic here
    alert('Language switch functionality will be implemented soon');
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    loadProducts();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 