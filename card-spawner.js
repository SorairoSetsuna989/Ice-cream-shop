const main = document.getElementById("main");

// How to use the function below:
  // In the html document's head tag create a script tag
  // inside it create an object called obj
  // Put the text that you want to see in the div that has a class: card-info right before the colon.
  // Put the image's url that you want to see as the background for the div that has a class: card-image after the colon.
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