var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, floatTotalPts, stringMessage;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    floatTotalPts = parseFloat("hw_pts" + "mid_pts" + "fin_pts");
    intGradeOption = parseInt($("grade_option").value);
    console.log(floatTotalPts);


if (intGradeOption===1)
{
    if(floatTotalPts >= 90) {
        stringMessage = "Congrats, you have earned an A++ in the class.";
    }
    else {
        if (floatTotalPts >= 80 && floatTotalPts <=89) {
            stringMessage = "Nice B, so close to that A.";
        }
        else {
            if (floatTotalPts >= 70 && floatTotalPts <=79) {
                stringMessage = "Ehh, you passed the course, I guess. A C's better than nothing.";
        }
        else {
            if (floatTotalPts >= 60 && floatTotalPts <=69) {
                stringMessage = "Well you got a D, I guess I'll see you next semester.";
            }
            else {
                if (floatTotalPts <= 59) {
                    stringMessage = "Really, you failed?!?! I literally gave you all the answers, like actually how?!?!";
                }
 else {               
                if (intGradeOption===2) {
                    if (floatTotalPts  >= 80) {
                        stringMessage = "Congrats, you have passed the course instead of failing it. Noice!";
                    }
                    else {
                        stringMessage = "Boo, you failed.";
                    }
                }
                }
            }
        }
    }
    }
}
 $("final_grade").value = stringMessage;
};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};
