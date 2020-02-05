function youth() {
    var age = prompt("current age");
    var ageWeek = parseFloat(age*52);
    var ageDay = parseFloat(age*365.25);
    var ageFortnight = parseInt(ageDay/14);
    var ageMonth = parseInt(age*12);

     alert("You are " + age + " years old" + "/ You are " + ageMonth + " month old" + "/ You are " + ageFortnight + " fortnights old" + "/ You are " + ageWeek + " weeks old" + "/ You are " + ageDay + " days old");
}
youth();