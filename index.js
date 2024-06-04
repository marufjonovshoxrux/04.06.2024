
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('.btn');

let inputValues = {};

inputs.forEach((input, index) => {
    input.oninput = () => {
        inputValues[index] = input.value; 
    }
});

btn.onclick = () => {
    console.log(inputValues); 
};
