// import functions and grab DOM elements
import { createPoll, getPolls } from './fetch-utils.js';
import { renderPoll } from './render-utils.js';


const gameForm = document.getElementById('user-questions');

const questionAaddButton = document.getElementById('add-a');
const questionAsubtractButton = document.getElementById('subtract-a');
const questionBaddButton = document.getElementById('add-b');
const questionBsubtractButton = document.getElementById('subtract-b');
const votesTotalA = document.getElementById('votes-amount-a');
const votesTotalB = document.getElementById('votes-amount-b');


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
    displayCurrentPoll();
});

questionAsubtractButton.addEventListener('click', () => {
    votesA--;
    displayCurrentPoll();
});

questionBaddButton.addEventListener('click', () => {
    votesB++;
    displayCurrentPoll();
});

questionBsubtractButton.addEventListener('click', () => {
    votesB--;
    displayCurrentPoll();
});

endPollButton.addEventListener('click', async () => {
    const currentPoll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB,
    };

    await createPoll(currentPoll);
    question = '';
    optionA = '';
    optionB = '';
    votesA = 0;
    votesB = 0;
    displayCurrentPoll();
    displayPolls();
});





function displayCurrentPoll() {
    const questionEl = document.getElementById('question');
    questionEl.textContent = question;
    const optionAel = document.getElementById('option-a');
    optionAel.textContent = optionA;
    const optionBel = document.getElementById('option-b');
    optionBel.textContent = optionB;
    votesTotalA.textContent = votesA;
    votesTotalB.textContent = votesB;
}



async function displayPolls() {
    const pollList = document.getElementById('past-poll');
    pollList.textContent = '';
    const polls = await getPolls();
    for (let poll of polls) {
        const div = renderPoll(poll);
        pollList.append(div);
    }
}


displayPolls();




// get user input
// use user input to update state 
// update DOM to reflect the new state

