const input = require('readline-sync');
//My workflow wasn't active when I pushed inititally.
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = [
"Who was the first American woman in space? ",
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride", "true","40","Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
userName = input.question("What is your name?");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for(let i = 0; i < questions.length; i++){
  let addedAnswer = candidateAnswers.push(input.question(`${questions[i]}`));
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for(let i = 0; i < candidateAnswers.length; i++){
    if(i == correctAnswers){
      console.log(`${candidateAnswers} is correct!`);
    }
}

  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
  if(candidateAnswers[0] == correctAnswers[0] || candidateAnswers[0] == "sally ride"){
    console.log("Correct!")
    grade = grade + 1
    }
   
    if(candidateAnswers[1] == correctAnswers[1] || candidateAnswers[1] == "TRUE"){
    console.log("Correct!")
    grade = grade + 1
    }

    if(candidateAnswers[2] == correctAnswers[2] || candidateAnswers[2] == "40"){
    console.log("Correct!")
    grade = grade + 1
    }

    if(candidateAnswers[3] == correctAnswers[3] || candidateAnswers[3] == "TrAjEcToRy"){
    console.log("Correct!")
    grade = grade + 1
    }
    if(candidateAnswers[4] == correctAnswers[4] || candidateAnswers[4] == "3"){
    console.log("Correct!")
    grade = grade + 1
    }
    else {
    console.log("Incorrect!");
    }
    

  return grade / 5 * 100;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello!, ${userName}.`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};