//Data
const questions = [

]

//SELECTING ELEMENTS FROM THE DOM
const form = document.querySelector('.input-form');
const nameInput = document.getElementById('name-input');
const startLink = document.querySelector('.start-link')
const startBtn = document.querySelector('.start-btn');
const err = document.querySelector('.error');


//WHEN BUTTON CLICK
startBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    //Get input value
    const userName = nameInput.value;
    //if input value is > 0
    if(userName.length > 0){
        //save to local storage
        localStorage.setItem('name', userName);
        window.location.href ='../rules/rules.html';
    }else{
        errMsg();
    }
});

//-------------------FUNCTIONS----------------------

//error function
const errMsg = ()=>{
    err.style.visibility = 'visible';

    setTimeout(()=>{
        err.style.visibility = 'hidden';
    },1500);
}