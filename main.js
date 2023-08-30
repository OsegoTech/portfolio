
const date = new Date();
const year = date.getFullYear();
console.log(year);

const yearElement = document.querySelector(".year");
yearElement.textContent = year;

