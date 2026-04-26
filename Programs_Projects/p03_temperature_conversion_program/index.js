// Temperature Conversion Program

const textBox = document.getElementById("textBox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelcius = document.getElementById("tocelcius");
const result = document.getElementById("result");

let temp;

function convert(){
    if(tofahrenheit.checked){
        temp = Number(textBox.value);
        temp = (temp * 9/5) + 32;
        result.textContent = `${temp.toFixed(1)}°F.`;
    }
    else if(tocelcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = `${temp.toFixed(1)}°C.`;
    }
    else{
        result.textContent = "Please select a unit / conversion type.";
    }
}