function calculateExponent(number1, exponent1)
{
    //OBJECT
    this.number1 = number1;
    this.exponent1 = exponent1;
    //METHOD
    return (Math.pow(this.number1, this.exponent1));
}

var Calc1 = new calculateExponent(num1, num2);
var elCalc1 = document.getElementById('calculate');

Calc1 += " ";
elCalc1.textContent = "The power of " + Calc1.number1 + " to " + Calc1.exponent1 + " is: " + Calc1;
console.log(Calc1);
