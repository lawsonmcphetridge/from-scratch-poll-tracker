export function renderPoll(poll) {
    const pollContainer = document.createElement('div');

    const pollQuestion = document.createElement('h3');
    pollQuestion.textContent = poll.question;

    const firstOption = document.createElement('p');
    firstOption.textContent = `${poll.option}`
}