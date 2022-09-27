const actions = document.querySelectorAll('#counter button');
const counter = document.querySelector('#counter>span');

let counterValue = 0;

actions[0].addEventListener('click', (event) => {
    console.log('event.target: ', counterValue)
    counterValue = counterValue-1;
    counter.textContent = counterValue;
});

actions[1].addEventListener('click',(event) => {
    console.log('event.target: ', counterValue)
    counterValue = counterValue+1;
    counter.textContent = counterValue;
});