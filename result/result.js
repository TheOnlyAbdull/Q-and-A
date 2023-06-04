//make the name display
const getName = localStorage.getItem('name');
console.log(getName); //debugging

//display name to result
const perName = document.getElementById('person-name');
perName.textContent = getName; 