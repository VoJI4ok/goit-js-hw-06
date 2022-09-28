const input = document.querySelector('#validation-input');
const requiredLength = Number(input.dataset.length);
input.addEventListener('blur', handleInput);

function handleInput() {
    if (input.value.length === requiredLength){
        input.classList.remove('inavalid');
        return input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        return input.classList.add('invalid');
    }
}