

const allAnimals = document.querySelectorAll(".item")

console.log(`Number of categories: ` + allAnimals.length);

const categoriesArray = [...allAnimals]


categoriesArray.map(
   categories => `Category: ${categories.children[0].textContent}
 Elements: ${categories.children[1].children.length} \n`
 )
.join('n')
console.log(categoriesArray)
