var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, floatTotalPts, stringMessage, intGradeOption;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);
    intGradeOption = parseInt($("grade_option").value);
    console.log(floatTotalPts);


if (intGradeOption===1)
{
    if(floatTotalPts >= 90) {
        stringMessage = "A";
    }
    else {
        if (floatTotalPts >= 80 && floatTotalPts <=89) {
            stringMessage = "B";
        }
        else {
            if (floatTotalPts >= 70 && floatTotalPts <=79) {
                stringMessage = "C";
        }
        else {
            if (floatTotalPts >= 60 && floatTotalPts <=69) {
                stringMessage = "D";
            }
            else {
                if (floatTotalPts <= 59) {
                    stringMessage = "F";
                }
 else {               
                if (intGradeOption===2) {
                
                    if (floatTotalPts  >= 80) {
                        stringMessage = "Pass";
                    }
                    else {
                        stringMessage = "Fail";
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