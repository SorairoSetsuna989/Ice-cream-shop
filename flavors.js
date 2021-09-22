const main = document.getElementById("main");

const flavors = {
    "Panna Cotta": 'https://assets.epicurious.com/photos/5761d0268accf290434553aa/1:1/w_1600,c_limit/panna-cotta.jpg',
}

Object.keys(flavors).forEach(name => {
    main.innerHTML += `
    <div class="card-wrapper">
    <div class="card-image" style="background-image: url('${flavors[name]}');"></div>
    <div class="card-info">
      <p>
        Panna Cotta
      </p>
    </div>
  </div>`
})
