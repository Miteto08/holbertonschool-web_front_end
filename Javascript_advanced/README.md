# JavaScript Advanced

## Tasks

0. Lexical Scoping and Welcome Message 

* Create a function "welcome" that takes two arguments (firstName and lastName) to display a welcome message. 
* Inside this function, define another function named "displayFullName" that alerts a welcome message with the full name provided.

1. Closure Scope Chain 

* Define a global variable "globalVariable" with the value "Welcome" and create nested functions to demonstrate scope chaining. 
* The functions should alert the content of globalVariable, course, and exclamation in a specific order.

2. Closure

* Implement a function named "welcomeMessage" that generates an alert message welcoming a person whose full name is provided as an argument. 
* Create variables that call this function with different names to display multiple welcome alerts.

3. Closure and Loops

* Develop a function "createClassRoom" that generates student seat numbers using closures and loops. 
* Populate an array with seat numbers based on the number of students passed as an argument and return this array.

4.  Complex Closure 

* Create functions for division and addition operations using closures. 
* Define closures like addBy100, addBy1000, divideBy10, and divideBy100 to perform specific arithmetic operations.

5. Changing DOM with Closure 

* Implement a function "changeMode" that dynamically changes the styling of a webpage based on different modes using closure. 
* Add buttons to switch between themes like spooky, dark mode, and scream mode.

6. Private Methods with Closure 

* Write a module "studentHogwarts" with private variables and methods for managing student scores. 
* Create instances of this module for students like Harry and Draco, rewarding and penalizing them accordingly.

7. Stack Order and setTimeout 

* Log messages in a specific order using setTimeout to demonstrate stack execution order in JavaScript. 
* Use a loop to log iteration numbers sequentially.

8. Stack Order in Functions 

* Define functions to process payments and orders, logging messages for each step of order processing including payment collection.

9. Prime Numbers & Timing Execution 
 
* Create a function to count prime numbers from 2 to 100 and log the time taken to execute it using the performance API.

10. Execution Stack & Timing Execution 

* Repeatedly execute the prime number counting function and log the total time taken for 100 executions.

11. Changing Stack Order using setTimeout 

* Reuse the prime number counting function but change the stack order using setTimeout to optimize execution time.

12. Binding 

* Create an object with dimensions attributes and a method to calculate area, then bind this method to the object for easy access.

13. Binding + Closure 

* Define an object with user attributes and create a function that logs personalized welcome messages by binding it to the user object.

14. Simple Callback

* Function createElement: This function accepts a string argument (data) and creates a paragraph element with the content set to the data. It then appends this paragraph to the document body.
* Function queryWikipedia: Accepts a callback function as an argument. Using XMLHttpRequest, it fetches the article of Stack Overflow from a specific URL. Once the fetch is successful, it calls the callback function with the extracted content from the API response.
* Requirements: Vanilla JavaScript should be used for the Ajax query without frameworks like jQuery. The createElement function should not be called directly within queryWikipedia.


These tasks cover various advanced JavaScript concepts such as lexical scoping, closures, DOM manipulation, private methods, stack execution order, timing execution, binding, callbacks, and more, providing hands-on experience in these areas of JavaScript programming.