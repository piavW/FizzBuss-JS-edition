# FizzBuzz - JavaScript edition
Built by: [Pia von Wachenfelt](https://github.com/piavW)
Deployed with GitHub Pages. 

This was built over a weekend-challenge in september 2019, the answer to the questions in the course-material is at the bottom of this README. 

## What the code does
This code allows your to play the FizzBuzz-game. 
If a number if divisible by 3 it replies Fizz, if it's divisible by 5 it replies Buzz, if it's divisible by 15 it replies FizzBuzz!

## Dependencies & code
NPM, e2e-training-wheels: (chai, superstatic).

## License
MIT-license

# Bootcamp questions:
1. To the best of your knowledge please explain what the following lines of code do: 
global.browser = new BrowserHelpers()
global.expect = chai.expect;
    The code makes it so that whenever the keywords browser or expect are called upon it is understood through chai or e2es functionalities and helpers/assertion styles. Which means we can use those programs built-in helpers and assetion styles when we write our tests.
2. To the best of your knowledge please explain why we are placing the let fizzBuzz = new FizzBuzz outside the it block?
    We're placing it there so that the coded context is true for all the following it-blocks within that descriptions context.
    If we placed it in an it-block it would only happen/give that context to that specific it-block.

3. To the best of your knowledge please explain the difference between using === and == in JS?
    === is also called the identity operator, it  compares if the operators are equal and whether of the same type. The equality operator == compares operators equality and does a typeconversion if neccessary before it checks for equality. Because of this the identity operator is stricter than the equality operator. 

4. To the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?
    Because if we don't the code will start to check if it's divisible by 3 and if it is it'll be satisfied and not check if it's divisible by 5. Since the code reads from top to bottom we need to have the bigger numbers or unlikely if-statements at the top. 

5. To the best of your knowledge please explain the difference between feature and unit test?
    Unit testing is when we test a specific piece of code or a smaller part of an application. We test that the code functions the way we programed it to. 
    
    Feature testing is when we test how an entire application works when it's used by a user, we test if the application does what we want it to do from a user's point of view. We question whether the functionality of the application makes sense to a user, administrator, or other roles.

6. To the best of your knowledge please explain what this following code does (references the describe-block with before, beforeEach and after in application.feature.js)?
    The code first adds a context through the describe, within that context it specifies that before any async function is used the code will wait until the browser visits the page. 
    The code also specifies that after the page has been visited, each beforeEach async function with the await-keyword shall do a reload of page before the code after the await-keyword is run. 
    The code also specifies that after the page has been visited, and after all async-function with an await-keyword has been run the browser shall close. 

7. To the best of your knowledge please explain what expectations in the context of testing are?
    Expectations - when testing - are assertions that tell the test what outcome to expect regarding the value/object/argument it is given within the parenthesis. The expect checks if the argument given within it's parentesis are whatever scenario you tell it to be after the parenthesis through chainable getters (.to.eql or .to be...). 

8. To the best of your knowledge please write a line to line explanation of what is happening in this code:
```js
<script src="js/fizzbuzz.js"></script> //tells us where the script can find the document we're refering to below.
    <script> //opens script
        document.addEventListener('DOMContentLoaded', () => { //tells the document to run the code-block after the DOMContent is fully loaded
            let button = document.getElementById('button') // creates the HTMLelement button and links it with the html-button-element written in the html
            let displayDiv = document.getElementById('display_answer')//creates the HTMLelement displayDiv and links it with the display_answer-element in the html
            button.addEventListener('click', () =>{ //tells the document to run the following code-block after the event click has occured
                let value = document.getElementById('value').value //creates the value and sets it to be the value of the element with the id value
                let fizzBuzz = new FizzBuzz //creates a new instance of the FizzBuzz function, the new instance is named fizzBuzz
                let result = fizzBuzz.check(value) //creates result object which is set as the value given when the fizzBuzz instance uses the method check with the inputted value
                displayDiv.innerHTML = result; //makes the object result show in the displayDiv-element
            }) //closes the button.addEventListener
        }) 
    </script> //closes the document.addEventlistener and closes the script-tag.
```

9. To the best of your knowledge please explain what a CDN (Content Delivery Network) is?
    A CDN is a global network of servers and datacenters in multiple locations which delivers specific web-based content. We use it to access already done styling to our webpage. 

