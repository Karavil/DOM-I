class Timer {
   constructor(startTimeMS, semiColon, digit1, digit2, digit3, digit4) {
      console.log('Timer constructed');
      this.currentMS = startTimeMS;
      this.digits = [semiColon, digit1, digit2, digit3, digit4];
   }

   increaseTimer(durationMS) {
      this.currentMS += durationMS;
      this.updateDigits();
      return this.currentMS;
   }

   updateDigits() {
      let tempCurrentMS = this.currentMS;
      if (this.currentMS >= 10000) {
         this.digits.forEach((digit) => digit.style.color = 'red');
         tempCurrentMS = 10000;
      }

      let tenThousands = Math.floor(tempCurrentMS / 10000);
      this.digits[1].textContent = tenThousands;
      tempCurrentMS -= tenThousands * 10000;

      let thousands = Math.floor(tempCurrentMS / 1000);
      this.digits[2].textContent = thousands;
      tempCurrentMS -= thousands * 1000;

      let hundreds = Math.floor(tempCurrentMS / 100);
      this.digits[3].textContent = hundreds;
      tempCurrentMS -= hundreds * 100;

      let tens = Math.floor(tempCurrentMS / 10);
      this.digits[4].textContent = tens;
      tempCurrentMS -= tens * 10;
   }
}

const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const semiColon = document.getElementById('colon');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

const myTimer = new Timer(0, semiColon, secondTens, secondOnes, msHundreds, msTens);

const timer10MS = setInterval(function() {
   let currentTimeMS = myTimer.increaseTimer(10);
   if (currentTimeMS >= 10000) {
      clearInterval(timer10MS);
   }
}, 10);
