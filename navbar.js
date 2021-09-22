const nav = document.getElementById("navbar");

const pages = {
    "Home":"index.html",
    "Desserts": "desserts.html",
    "Order Online": "order.html",
    "About": "about.html",
};

// Adds nav bar links based on the dictionary entries of pages
Object.keys(pages).forEach(name => {
    const href= pages[name];
    const title = document.title.toLocaleLowerCase()
    const _name = name.toLocaleLowerCase();
    const is_current = (title.search(_name) != -1) ? "id=current":"";

    nav.innerHTML += `<a href=${href} ${is_current}>${name}</a>`;
})