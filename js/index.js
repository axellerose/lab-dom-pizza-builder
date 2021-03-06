// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

//Refactor code to reduce lines
function showIngredients(stateKey, el) {
  document.querySelectorAll(el).forEach(item => {
    item.style.visibility = stateKey ? 'visible' : 'hidden';
});
}

function renderPepperoni() {
  showIngredients(state.pepperoni, '.pep');
}

function renderMushrooms() {
  showIngredients(state.mushrooms, '.mushroom');
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
showIngredients(state.greenPeppers, 'section.green-pepper');
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  showIngredients(state.whiteSauce, 'section.sauce.sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('section.crust');
    if (state.glutenFreeCrust) {
      crust.classList.remove('crust-gluten-free');
    } else {
      crust.classList.add('crust-gluten-free');
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let buttons = document.querySelectorAll('button.btn');
  
  for (let i = 0; i < buttons.length; i++){
    state.pepperoni ? buttons[0].classList.add('active') : buttons[0].classList.remove('active')
    state.mushrooms ? buttons[1].classList.add('active') : buttons[1].classList.remove('active')
    state.greenPeppers ? buttons[2].classList.add('active') : buttons[2].classList.remove('active')
    state.whiteSauce ? buttons[3].classList.add('active') : buttons[3].classList.remove('active')
    state.glutenFreeCrust ? buttons[4].classList.add('active') : buttons[4].classList.remove('active')
  }

}
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const cart = document.querySelector('.panel.price ul').innerHTML;
  let total = 10;

  if (state.pepperoni) {
    cart.innerHTML += `<li>$ ${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    total += ingredients.pepperoni.price;
  }
  if (state.mushrooms) {
    cart.innerHTML += `<li>$ ${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    total += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    cart.innerHTML += `<li>$ ${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    total += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    cart.innerHTML += `<li>$ ${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    total += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    cart.innerHTML += `<li>$ ${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    total += ingredients.glutenFreeCrust.price;
  }
  document.querySelector('aside strong').innerHTML = `Total price: $ ${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
