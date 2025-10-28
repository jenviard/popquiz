"use strict";
const qa =  [
        {
            question: "What year was the University of Miami founded?",
            answer: "1925"
        },
        {
            question: "What year did the University of Miami get its first female president?",
            answer: "2001"
        },
        {
            question: "What year did the University of Miami accept its first Black students?",
            answer: "1961"
        },
        {
            question: "What year did the University of Miami open its medical school?",
            answer: "1952"
        },
        {
            question: "What year did the University of Miami open its law school?",
            answer: "1926"
        }
    ];//array of objects

/*
An Object is a variable that can hold many variables.

Objects are collections of key-value pairs, where each key (known as property names) has a value.

Objects can describe anything like houses, cars, people, animals, or any other subjects.

*/

let currentQuestion = 0;
let selectedAnswer;

let questionPop = getQuestion();
console.log(questionPop);
console.log(qa.length);


//console.log(qa[0].question);
document.getElementById("question").innerHTML = questionPop.question;

document.getElementById("submit").addEventListener("click", function() {
     const selected = document.querySelector('input[name="option"]:checked');
     console.log(selected.value);
     if(selected.value == questionPop.answer){
        document.getElementById("result").innerHTML = "Correct!";
     } else {
        document.getElementById("result").innerHTML = "Incorrect. The correct answer is " + qa[currentQuestion].answer + ".";
     }
     nextQuestion();
     setTimeout(()=>{
         document.getElementById("result").innerHTML = "";
        }, 3000);

});



function nextQuestion() {
    questionPop = getQuestion();
    if(questionPop != null) {
        document.getElementById("question").innerHTML = questionPop.question;
    } else {
        document.getElementById("question").innerHTML = "Quiz Complete!";
        document.getElementById("submit").style.display = "none";
        document.getElementById("result").innerHTML = "You have completed the quiz.";
        document.getElementById("optionsForm").style.display = "none";
    }

}

function getQuestion() {
    if(qa.length > 0){
        let popQuestion = qa.pop();
        console.log(popQuestion);
        return popQuestion;
    }else{
        return null;
    }
    
}