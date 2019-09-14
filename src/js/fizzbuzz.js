function FizzBuzz() {
    this.check = (number) => {
        if (number % 15 === 0) {
            return 'FizzBuzz!'
        }
        else if (number % 3 === 0) {
        return 'Fizz'
        }
        else if (number % 5 === 0) {
        return 'Buzz'
        } else {
        return number
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FizzBuzz;
}