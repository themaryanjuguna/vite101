import './style.css';
import { calculateArea } from './src/geometry.js';
import { add, subtract } from './src/math.js'; // Import individual functions

let radius = 5;
console.log(add(2, 3));
console.log(calculateArea(radius));
console.log(subtract(5, 3));

document.querySelector("#calculate-button").addEventListener("click", () => {
  const radius = document.querySelector('#radius-input').value; // Fix the selector
  const area = calculateArea(radius);
  document.querySelector('#area-output').innerHTML = area; // Fix the selector
});
