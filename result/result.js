import { removeFromLS } from "../rules/rules";

//on GO HOME click
const goHome = document.querySelector('.Go-home');
goHome.addEventListener('click', (e)=>{
    removeFromLS();
    console.log('pop');
})