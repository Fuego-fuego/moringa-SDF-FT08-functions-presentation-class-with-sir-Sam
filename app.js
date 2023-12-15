/*********1.DEFINED FUNCTION*********/

// 1.1 No parameters 
// sayHelloToIsabel();

// function sayHelloToIsabel() {
//     console.log("Hello, Isabel!");
//     }

//         // sayHelloToIsabel();










// 1.2 With parameters
// function say(greeting, firstName, question) {
//     console.log(`${greeting}, ${firstName}! ${question}?`);
//     }

//     say("Hello", " Morty ", "do you like to move it move it");














//*********2. ANONYMOUS FUNCTION*********/

//2.1 FUNCTION EXPRESSION 

// (function () {
    
//     console.log("i have no name");
//   })();











// whoAreYou()

// const whoAreYou = (function () {
//     console.log("my name is whoAreYOu");
//         });

    
        // whoAreYou();












//2.2 ARROW FUNCTION

/* Without a parameter 
   single line expression             */

const withoutArguments = () => 1+1;















// As a function expression 
const withoutArguments2 = function (){
    
    return 1+1;
}

// As a declared function expression 
function withoutArguments3 (){

    return 1+1;
}








/* With a single parameter 
   single line expression             */

const withASinglePara = param => console.log(param);


const withASinglePara2 = (param) => console.log(param);









/* Two or more parameters 
   single line expression             */

const withTwoOrMOreParam = (param1, paramN) => param1 * paramN;















/* With more than one statment */
// Looking for the average of two numbers 
const moreThanOneStatment = (param1, param2) => {
    const sum = param1 + param2;
    const average = sum /2;

    return average;

}













/*********3. WHAT THEY CAN RETURN*********/

//3.1 PriMITIVE VALUES 

const iReturnAString = (aString) => aString;
const iReturnANumber = (aNumber) => aNumber;
const iReturnBooleanValues = (aBooleanValues) => aBooleanValues;

// console.log(iReturnAString('my awesome string'));
// console.log(iReturnANumber(20));
// console.log(iReturnAString(true));

// function iReturnNull (value = null){

//     return value;
// }

// console.log(iReturnNull());


// function iReturnUndefined (value = undefined){
    
//     return value;
// }

// console.log(iReturnUndefined());























// 3.2 More meaning full examples

// function add(x, y) {
//     return x + y;
// }

// console.log(add(1, 2));





// 3.3 Callback or Higher order functions  

function greetings (){

return `I just says hello`;
}

// console.log(greetings());

function iCallFunctions( functionICall ){

    return functionICall();
}




// console.log(iCallFunctions(greetings));




// 3.3.2 
// CallBack a function expression

// function callBackFunction(){

//     return function (){
        
//         console.log(`all that for just a console log `)
//     }();
// }

// console.log(callBackFunction());




// 3.3. Its Application 
const ourNiceArray = [1, 2, 3, 4, 5];

const output = ourNiceArray.map(function (num) { 
    
                        return num += 10}
                        );
console.log(ourNiceArray); // [1, 2, 3, 4, 5]
console.log(output); // [11, 12, 13, 14, 15]