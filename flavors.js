const main = document.getElementById("main");

// Todo: Remove the duplicates later
const flavors = {
    "Panna Cotta": 'media/panna-cotta.jpg',
    "Panna Cott": 'media/panna-cotta.jpg',
    "Panna Cot": 'media/panna-cotta.jpg',
    "Panna Co": 'media/panna-cotta.jpg',
    "Halo-Halo": "media/halo-halo.jpg"
}

Object.keys(flavors).forEach(name => {
    main.innerHTML += `
    <div class="card-wrapper">
    <div class="card-image" style="background-image: url('${flavors[name]}');">
    </div>
    <div class="card-info">
      <p>
        ${name}
      </p>
    </div>
  </div>`
})