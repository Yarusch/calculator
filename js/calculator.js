let operation= prompt("Enter your operation (add, sub, mult, div)")

let  value1= parseFloat(prompt("Enter your first value"));

let  value2= parseFloat(prompt("Enter your second value"));

sum = value1 + value2
sub = value1 - value2
mult = value1 * value2
div = value1 / value2

if (operation === 'add') {
    result = sum;
} else if (operation === 'sub') {
    result = sub;
} else if (operation === 'mult') {
    result = mult;
} else if (operation === 'div') {
    result = div;
}

alert(result);