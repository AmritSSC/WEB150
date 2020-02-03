//object constructor
function calculateExponent(number1, exponent1)
{
    //OBJECT
    this.number1 = number1;
    this.exponent1 = exponent1;
    //METHOD
    this.checkResult = function(){
        return Math.pow(this.number1, this.exponent1);
    }
}

//define instance
var Calc1 = new calculateExponent(num1, num2);
var elCalc1 = document.getElementById('calculate');

get result:
//elCalc1.textContent = "The power of " + Calc1.number1 + " to " + Calc1.exponent1 + " is: " + Math.pow(Calc1.number1, Calc1.exponent1);
elCalc1.textContent = "The power of " + Calc1.number1 + " to " + Calc1.exponent1 + " is: " + Calc1.checkResult();
