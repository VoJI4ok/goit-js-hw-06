const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

ingredients.forEach(function(element){
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  console.log(element);
  list.append(itemEl);
})