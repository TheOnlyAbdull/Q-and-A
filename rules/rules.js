//getting the name from L.S
const getName = localStorage.getItem('name');

//display user name
const currName = document.getElementById('curr-name');
currName.textContent = getName;

//FUNCTION remove name from local storage
const removeFromLS = ()=>{
    localStorage.removeItem("name");
}

//Go back and remove LC
const prev = document.getElementById('home');
prev.addEventListener('click', ()=>{
    removeFromLS();
})