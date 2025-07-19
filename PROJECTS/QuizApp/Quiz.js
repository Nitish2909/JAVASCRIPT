const questions =[
    {
       question:"which is the largest animal in the world ?",
       answers: [
        { text: "shark" , correct: false},
        { text: "Elephant" , correct: false},
        { text: "Blue Whale" , correct: true},
        { text: "Giraffe" , correct: false},

       ]
    },
        {
       question:"which is the largest country accordings to the population in the world ?",
       answers: [
        { text: "Bhuttan" , correct: false},
        { text: "China" , correct: false},
        { text: "India" , correct: true},
        { text: "America" , correct: false},

       ]
    },
     {
       question:"which of the following is the capital of India ?",
       answers: [
        { text: "Mumbai" , correct: false},
        { text: "kolkata" , correct: false},
        { text: "India" , correct: false},
        { text: "New delhi" , correct: true},

       ]
    } ,
       {
       question:"who was the first Prime Minister of India?",
       answers: [
        { text: " Pandit Jawaharlal Nehru" , correct: true},
        { text: "Subhash Chandra Bose" , correct: false},
        { text: "Rajendra Prasad" , correct: false},
        { text: "Mahatma Gandhi" , correct: false},

       ]
    },
        {
       question:"who was the first President of India?",
       answers: [
        { text: " Pandit Jawaharlal Nehru" , correct: false},
        { text: "Subhash Chandra Bose" , correct: false},
        { text: " Dr. Rajendra Prasad" , correct: true},
        { text: "Mahatma Gandhi" , correct: false},

       ]
    },
    
    {
       question:"which of the following is the capital of Haryana ?",
       answers: [
        { text: "Mumbai" , correct: false},
        { text: "kolkata" , correct: false},
        { text: "India" , correct: false},
        { text: "Chandigarh" , correct: true},

       ]
    } ,

       {
       question:"which of the following is the capital of Punjab?",
       answers: [
        { text: "Mumbai" , correct: false},
        { text: "kolkata" , correct: false},
        { text: "India" , correct: false},
        { text: "Chandigarh" , correct: true},

       ]
    } ,
    
     
     

];

const questionElement= document.querySelector("#question");
const answerButtons=document.querySelector(".ans-button");
const nextButton=document.querySelector("#next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML="Next";
     showQuestion();
}
function showQuestion(){
    resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer =>{
    const button= document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if(answer.correct)
    {
        button.dataset.correct=answer.correct;
    }

    button.addEventListener("click",selectAnswer)
});
}

function resetState(){
 nextButton.style.display="none";
 while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
 }
}

function selectAnswer(e){
    const selectbtn=e.target;
    const isCorrect=selectbtn.dataset.correct==="true";
    if(isCorrect){
        selectbtn.classList.add("correct");
          score++;
    }
    else{
        selectbtn.classList.add("incorrect")
    }
Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct === "true")
    {
        button.classList.add("correct");
    }
    button.disabled=true;
});  
nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();


