let counter = 0;
let increment = document.querySelector('.incrementNum');
let decrement = document.querySelector('.decrementNum');
let reset = document.querySelector('.reset');
function handleAddClick(){
counter++;
 console.log(counter);
  const counterDisplay = document.querySelector('.displayVal');
   counterDisplay.textContent = counter; 
}
increment.addEventListener('click',handleAddClick);
function handleMinusClick(){
counter--;
 console.log(counter);
  const counterDisplay = document.querySelector('.displayVal');
   counterDisplay.textContent = counter; 
}
decrement.addEventListener('click',handleMinusClick);
function handleResetClick(){
counter = 0;
 console.log(counter);
  const counterDisplay = document.querySelector('.displayVal');
   counterDisplay.textContent = counter; 
}
reset.addEventListener('click',handleResetClick);
