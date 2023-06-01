import {removeFromLS} from "./rules";
//getting the name from L.S
const getName = localStorage.getItem('name');

//display user name
const currName = document.getElementById('Uname');
currName.textContent = getName;

//Go back and remove LC
// const goHome = document.querySelector('Go-home');
// goHome.addEventListener('click', ()=>{
//     removeFromLS();
// })