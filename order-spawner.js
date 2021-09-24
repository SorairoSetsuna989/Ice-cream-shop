// Similar to `card-spawner.js`, this function requires that
// a script tag that contains an object named `foods` be present
// in the page that imports this script. This object should follow
// the given format:
//
// let foods = {
//   "element-id": "Food Name",
// }
//
// Additionally, the `orderState` object is used to maintain the
// state of the user's cart during the order interaction.

// The DOM element we're interested in appending to.
let orderSelection = document.getElementById("order-selection");

console.log(orderSelection);

// Iterate over the `foods` object using its entries.
Object.entries(foods).forEach((entry => {
    // Array deconstruction
    let [name, value] = entry;

    orderSelection.innerHTML += `
      <div id="${name}" class="order-selection-button">
        <div class="order-selection-button-wrapper">
          <span class="order-selection-button-name">${value}</span>
          <div class="spacer"></div>
          <button class="order-selection-button-minus" onclick="orderSelectionMinus('${name}')">-</button>
          <span class="order-selection-button-count">${orderState[name]}</span>
          <button class="order-selection-button-plus" onclick="orderSelectionPlus('${name}')">+</button>
        </div>
      </div>
    `;
}));

// Script to run after modifying the order selection
// such as modifying the contents of the page.
function orderSelectionHook(element) {
    document.querySelectorAll(
        `#${element} .order-selection-button-count`
    )[0].innerText = orderState[element];
}

// Callback function for the minus button, making
// sure that we don't go below zero
function orderSelectionMinus(element) {
    if (orderState[element] > 0) {
        orderState[element] -= 1;
    } else {
        return;
    }
    orderSelectionHook(element);
}

// Callback function for the plus button, makig
// sure that we do't go above 3
function orderSelectionPlus(element) {
    if (orderState[element] < 3) {
        orderState[element] += 1;
    } else {
        return;
    }
    orderSelectionHook(element);
}