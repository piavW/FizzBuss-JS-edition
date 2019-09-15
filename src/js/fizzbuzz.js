if (typeof module !== 'undefined' && module.exports) {
    module.exports = FizzBuzz;
}

function FizzBuzz() {
    this.check = (number) => {
        if ((number == '') || (number == 0 ) || (isNaN(number)) || (number % 1 !== 0)) {
            return 'Please input a number'
        } else if (divisible(number, 15)) {
            return 'FizzBuzz!';
        } else if (divisible(number, 5)) {
            return 'Buzz';
        } else if (divisible(number, 3)) {
            return 'Fizz';
        } else {
            return number
        }
    }
}

function divisible(number, divider){
    return number % divider == 0
}