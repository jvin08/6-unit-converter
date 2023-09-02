/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("quantity")
const buttonEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-units")
const volumeEl = document.getElementById("volume-units")
const massEl = document.getElementById("mass-units")

buttonEl.addEventListener("click", convertUnits);

function convertUnits(){
    let value = inputEl.value;
    // console.log(inputEl.value * meterToFeet)
    let meterToFeet =  (value * 3.2808).toFixed(3)
    let feetToMeter = (value * 0.3048).toFixed(3)
    lengthEl.textContent = `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters`
    let literToGalon = (value * 0.264).toFixed(3)
    let galonToLiter = (value * 3.785).toFixed(3)
    volumeEl.textContent = `${value} liters = ${literToGalon} gallons | ${value} gallons = ${galonToLiter} liters`
    let kilogramToPound = (value * 2.204).toFixed(3)
    let poundToKilo = (value * 0.453).toFixed(3)
    massEl.textContent = `${value} kilos =${kilogramToPound} pounds | ${value} pounds = ${poundToKilo} kilos`
}

