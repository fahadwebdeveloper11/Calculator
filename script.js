const displayInput = document.querySelector('.input')

const btns = document.querySelectorAll('button')


btns.forEach(function (buttons) {
    buttons.addEventListener('click', function (e) {
       let value = e.target.innerText 
        // displayInput.value += value
        if (value === "DE") {
            displayInput.value = displayInput.value.slice(0, -1)
        }
        else if(value === "AC"){
            displayInput.value = ''
        }

        else if(value === "="){
            calculateResult(value)
        }
        else {
             displayInput.value += value
        }
    })

})

function calculateResult(displayValue) {
    try {
        displayInput.value = eval(displayInput.value);
    } catch (error) {
        // displayInput.value = 'Error';
        alert("Please Enter a valid Value")
    }
}