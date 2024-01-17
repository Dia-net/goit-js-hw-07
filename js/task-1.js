
const list = document.getElementById("categories");
const item = list.getElementsByClassName("item");
console.log("Number of categories:", item.length);

Array.from(item).forEach(category =>{
    const name = category.querySelector('h2').textContent;
    const element = category.querySelectorAll('li').length;
    console.log(`Category: ${name}`);
    console.log (`Elements: ${element}`);
})