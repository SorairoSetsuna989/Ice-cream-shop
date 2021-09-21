const nav = document.getElementById("navbar");

const pages = {
    "Home":"index.html",
    "Ice Cream Flavors": "flavors.html",
    "Order Online": "order.html",
    "About": "about.html",
};

// Adds nav bar links based on the dictionary entries of pages
Object.keys(pages).forEach(name => {
    const href= pages[name];
    nav.innerHTML += `<a href=${href}>${name}</a>`;
})