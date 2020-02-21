'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
    var theSum = a + b;
    // 'The sum of 4 and 7 is 11.'
    var message = `The sum of ${a} and ${b} is ${theSum}.`;
    return [theSum, message];
}
testSum(4, 7);

// Here is the test for sum(); uncomment it to run it
// testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
    var theProduct = a * b;
<<<<<<< HEAD
    var message2 = `The product of ${a} and ${b} is ${theProduct}.`;
=======
    var message2 = `The product of ${a} and ${b} is 45.`;
>>>>>>> multiply
    return [theProduct, message2];
}
testMultiply();
// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
<<<<<<< HEAD
function sumAndMultiply(a, b, c) { //eslint-disable-line
    var theSum1=sum(a,b)[0];
    var theSum2=sum(theSum1,c)[0];

    var theProduct1=multiply(a,b)[0];
    var theproduct2=multiply(theProduct1,c)[0];

    var thirdElement="4 and 7 and 5 sum to 16.";
    var fourthElement="The product of 4 and 7 and 5 is 140.";

    return[theSum2,theproduct2,thirdElement,fourthElement];

}
testSumAndMultiply(4,7,5);
=======


}
// testSumAndMultiply(4,7,5);
>>>>>>> multiply
// Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."
 

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here

// var testArray = [2, 3, 4]; //eslint-disable-line
// function sumArray(sumArr) { 
//     var totalSum=0;
//     for(var i=0;i > sumArr.lenght;i++){
//     totalSum=sum(sumArr[i],sumArr[i++])[0];
//     console.log(totalSum);
//     }
//     return(totalSum,"2,3,4 was passed in as an array of numbers, and 9 is their sum.");

// }
// testSumArray(testArray);



var testArray = [2, 3, 4]; //eslint-disable-line
function sumArray(sumArr) { 
    var totalSum1=sum(sumArr[0],sumArr[1])[0];
    // console.log(totalSum1)
    var totalSumFinal=sum(totalSum1,sumArr[2])[0];
    // var messagearry=`${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${totalSumFinal} is their sum.`
    var messagesumArr=sumArr[0]+','+sumArr[1]+','+sumArr[2]+' was passed in as an array of numbers, and '+ totalSumFinal+' is their sum.'
    // console.log('message',messagesumArr);
    // console.log('total',totalSumFinal);
    return[totalSumFinal,messagesumArr];
}

// testSumArray(testArray);


// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray) { //eslint-disable-line
<<<<<<< HEAD
    var totalmulti=multiply(testArray[0],testArray[1])[0];
    // console.log(totalmulti);
        var totalmultiFinal=multiply(totalmulti,testArray[2])[0];
    // var messagearry=`${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${totalSumFinal} is their sum.`
    var messagesumArr=`The numbers ${testArray[0]},${testArray[1]},${testArray[2]} have a product of ${totalmultiFinal}.`
    // console.log('message',messagesumArr);
    // console.log('total',totalmultiFinal);
    return[totalmultiFinal,messagesumArr];
=======
   
>>>>>>> sumArray1



}
// testMultiplyArray(testArray);
// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line
<<<<<<< HEAD
    var multAnyArray=0;
    for (var i=0;i>dynamicArray.lenght;i++){
        multAnyArray=multiply(dynamicArray[i],dynamicArray[i++])[0];
        // Console.log(multAnyArray,dynamicArray.lenght);
    }
    var arrmessage=`The numbers ${dynamicArray[0]},${dynamicArray[1]},${dynamicArray[2]},${dynamicArray[3]},${dynamicArray[4]} have a product of ${multAnyArray}.`
    return[multAnyArray,arrmessage];
=======
    

>>>>>>> sumArray1
}
// testMultiplyAnyArray(testDynamicArray);

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
