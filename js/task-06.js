const inpRef = document.querySelector('#validation-input');

const handleInput = (event) => { 
    const { value, dataset } = event.target;
    const requiredLength = Number(dataset.length);

    if (value.length === requiredLength) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    }
    else { 
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
}

inpRef.addEventListener('blur', handleInput);