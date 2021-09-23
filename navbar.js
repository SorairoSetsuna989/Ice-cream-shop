const nav = document.getElementById("navbar");

// An object to store all page names and their respective links
const pages = {
    "Home":"index.html",
    "Dishes": "dishes.html",
    "Desserts": "desserts.html",
    "Order Online": "order.html",
    "About": "about.html",
};

// Adds the company name in every page
nav.innerHTML += "Flavors of the Modern World | "

// Adds nav bar links based on the dictionary entries of pages
Object.keys(pages).forEach(name => {
    const href= pages[name];
    const title = document.title.toLocaleLowerCase()
    const _name = name.toLocaleLowerCase();
    const is_current = (title.search(_name) != -1) ? "id=current":"";

    nav.innerHTML += `<a href=${href} ${is_current}>${name}</a>`;
})