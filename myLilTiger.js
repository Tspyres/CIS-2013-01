var $ = function (id) 
{
    return document.getElementById(id);
}

var mainProgram = function () 
{
    var stringNickname = prompt("What is your nickname?");
    if (!isNaN(stringNickname)) {
        alert("You know this babe, so try again.");
    } else
    {
        alert("Yup, thats right. I love my "+ stringNickname +"!");  
    }
}

window.onload = function () 
{
    $("click").onclick = mainProgram;
    $("item_cost").focus(); //puts the cursor on the first DOM text input box
}