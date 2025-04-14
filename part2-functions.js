// 1. Dog Age Converter
function dogToHumanYears(dogAge) {
    let humanYears = dogAge * 7;
    console.log(`Your dog is ${humanYears} human years old.`);
  }
  
  // 2. Tip Calculator
  function calculateTip(total, percentage) {
    let tip = total * (percentage / 100);
    console.log(`Your tip should be $${tip.toFixed(2)}`);
  }
  
  // 3. Even or Odd
  function checkEvenOdd(num) {
    if (num % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }
  