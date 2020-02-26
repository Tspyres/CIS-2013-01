
//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringMessage;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter Midterm pts (0-35):"));

floatFinPts = parseFloat(prompt("Please enter Final pts (0-35):"));

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseInt(prompt("Enter 1 for A-F scale or enter 2 for pass/fail course"));

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

alert (stringMessage);





