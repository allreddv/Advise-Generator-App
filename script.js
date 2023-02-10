





const advice = document.getElementById('advice');
const idNum = document.getElementById('idNum');
let counter = 0;

function fetchAdvice() {
  fetch(`https://api.adviceslip.com/advice?counter=${counter}`)
    .then(response => response.json())
    .then(json => {
      idNum.innerText = json.slip.id;
      advice.innerText = json.slip.advice;
    })
    .catch(error => console.error(error));

  counter++;
}

const dice = document.getElementById('dice');
dice.addEventListener('click', fetchAdvice);

fetchAdvice()




















