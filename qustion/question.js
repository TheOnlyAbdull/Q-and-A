//  Quiz questions
const quizQuestions = [
    {
        que : 'What is the largest planet in our solar system?',
        opt : ['Jupiter', 'Saturn', ' Mars', 'Neptune'],
        ans : 0
    },
    {
        que : 'Which country is known as the "Land of the Rising Sun"?',
        opt : ['China', 'Japan', 'South Korea', 'Thailand'],
        ans : 1
    },
    {
        que : 'which country is the artiste Wizkid from ?',
        opt : ['Atlanta', 'Ghanna', 'Togo', 'Nigeria'],
        ans : 1
    },
    {
        que : 'Which artist painted the Mona Lisa?',
        opt : ['Leonardo da Vinci', 'Vincent van Gogh', ' Pablo Picasso', 'Michelangelo'],
        ans : 0
    },
    {
        que : 'Which continent is home to the largest desert in the world, the Sahara?',
        opt : ['Africa', ' Asia', 'South America', 'Australia'],
        ans : 0
    },
    {
        que : 'Who is the author of the Harry Potter book series?',
        opt : ['J.R.R. Tolkien', 'J.K. Rowling', 'George R.R. Martin', 'Stephenie Meyer'],
        ans : 1
    },
    {
        que : 'What is the tallest mountain in the world?',
        opt : ['Mount Everest', 'K2', 'Mount Kilimanjaro', 'Mount McKinley'],
        ans : 0
    },
    {
        que : 'What is the capital city of Canada?',
        opt : ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
        ans : 2
    },
    {
        que : 'Who invented the telephone?',
        opt : ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Isaac Newton'],
        ans : 0
    },
    {
        que : 'What is the currency of Brazil?',
        opt : ['Peso', 'Euro', 'Real', 'Rupee'],
        ans : 2
    }
]

//add questions to local storage 
if(!localStorage.getItem(quizQuestions)){
    localStorage.setItem('quizQuestions', JSON.stringify(quizQuestions));
}
//Accessing questions
const storedQuestions = JSON.parse(localStorage.getItem("quizQuestions"));
//Display questions
const question = document.querySelector('.quest');
const options = document.querySelector('.options');



// display currunt index question
const displayQuestion = () =>{
    const currentQuestion = storedQuestions[currentQuestionIndex];
    question.textContent = currentQuestion.que;

    //Loop over options and create option
    let displayOption = currentQuestion.opt.map((option, index)=>{
        // index = 0;
        return `<p class="opt" data-index="${index}">${option}</p>`
    });
    displayOption = displayOption.join('');
    options.innerHTML = displayOption;

    //when an option is clicked
    const paragraphs = document.querySelectorAll('.opt');
    paragraphs.forEach((paragraph, index)=>{
    paragraph.addEventListener('click', ()=>{
        const selectedOptionIndex = parseInt(paragraph.dataset.index);
        const currentQuestion = storedQuestions[currentQuestionIndex];

        if(selectedOptionIndex === currentQuestion.ans){
            console.log('correct');
            score++;
            //storing the score
            localStorage.setItem('score', JSON.stringify(score));
            console.log(score);
            
        }else{
            console.log(`wrong`);
        }
        currentQuestionIndex++;

        //if there are more question
        if(currentQuestionIndex < storedQuestions.length){
            displayQuestion();
        }else{
            console.log(`your score is ${score}`);
            window.location.href = "../result/result.html";
        }
    });

    });

};

// Question index
let currentQuestionIndex = 0;


// Call the displayQuestion function to show the first question
displayQuestion();

// initial score
let score = 0;




