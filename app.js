// import functions and grab DOM elements
const gameForm = document.getElementById('user-questions');

const currentPoll = document.getElementById('current-poll');
const pastPoll = document.getElementById('past-poll');

const questionAaddButton = document.getElementById('add-a');
const questionAsubtractButton = document.getElementById('subtract-a');
const questionBaddButton = document.getElementById('add-b');
const questionBsubtractButton = document.getElementById('subtract-b');

const startPollButton = document.getElementById('start-poll');
const endPollButton = document.getElementById('end-poll');
// let state

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;
// set event listeners
gameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = new FormData(gameForm);
    question = userInput.get('user-question');
    optionA = userInput.get('user-option-a');
    optionB = userInput.get('user-option-b');
    displayCurrentPoll();
    gameForm.reset();
});

questionAaddButton.addEventListener('click', () => {
    votesA++;
});

questionAsubtractButton.addEventListener('click', () => {
    votesA--;
});

questionBaddButton.addEventListener('click', () => {
    votesB++;
});

questionBsubtractButton.addEventListener('click', () => {
    votesB--;
});

endPollButton.addEventListener('click', async () => {
    const currentPoll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB,
    };

  
});






function displayCurrentPoll() {
    const questionEl = document.getElementById('question');
    questionEl.textContent = question;
    const optionAel = document.getElementById('option-a');
    optionAel.textContent = optionA;
    const optionBel = document.getElementById('option-b');
    optionBel.textContent = optionB;
    questionAaddButton.textContent = votesA;
    questionBaddButton.textContent = votesB;
}




// get user input
// use user input to update state 
// update DOM to reflect the new state

