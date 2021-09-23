const main = document.getElementById("main");

// How to use the function below
// In the html document create a script tag
// inside it create an object called obj
// each key  will be the caption of the card and its paired value will be the background image's url
// see desserts.html as an example
function spawn_cards(obj) {
  Object.keys(obj).forEach(key => {
    main.innerHTML += `
      <div class="card-wrapper">
      <div class="card-image" style="background-image: url('${obj[key]}');">
      </div>
      <div class="card-info">
        <p>
          ${key}
        </p>
      </div>
    </div>`
  })
}


spawn_cards(obj)