import { removeFromLS } from "../rules/rules";

//on GO HOME click
const goHome = document.querySelector('.Go-home');
goHome.addEventListener('click', (e)=>{
    removeFromLS();
    console.log('pop');
})

/*
//getting the name from L.S
const getName = localStorage.getItem('name');

//display user name
const currentName = document.getElementById('Uname');
currentName.textContent = getName;
*/