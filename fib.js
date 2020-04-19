//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var inCount, i, j, k, stringOutput;
    
     i=0;  // sets the first number in the Fibonacci series to 0
	 j=1;//sets the second number in the Fibonacci series to 1
     k;//k is calculated by adding i + j and represents the next fibonacci number 
	 stringOutput = i + " " + j;//initialize the Fibonacci series output to include the first two numbers
     
    intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate that intCount is a number
	
    //The if/else statement verifies the input is between 1 and 100
    //It will only work is the input is valid
     if (isNaN(intCount)||intCount<1||intCount>100)
     {
        $("total_fib").value = " ";
        $("output").value = "Please enter valid input";
        alert ("You need to enter a number between 1 and 100");
     }
     else
     {
        //The loop, intCount, will count down from 2 since it states the first fibonacci number
        While (intCount >2)
        {
            k=i+j;
            i=j;//sets i to the new j value
            j=k;//sets new j to the current k value
            intCount--;//decrements the counter values
            stringOutput = stringOutput + " " + k;
        }
        $("output").value = stringOutput;// applies output to html DOM
     }
     
	

}; 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};
