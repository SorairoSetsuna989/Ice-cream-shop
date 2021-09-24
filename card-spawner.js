// Script usage:
// In the html document's head tag in which you have linked this file, create a script tag
// inside it declare a javascript object called "obj"
// Right before the colon, type the text that you want to see in the card-info div class.
// After the colon, Put the image's url that you want to see as the background for the div that has a class: card-image.
// see desserts.html to see it in action

//Example: 
// var obj = {
//  "text" : "path or url of the image"
// }

const main = document.getElementById("main");

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