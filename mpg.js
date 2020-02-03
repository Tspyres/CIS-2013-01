 var floatMiles, floatGallons, floatMpg;
     floatMiles = prompt("Enter miles driven");
     miles = parseFloat(miles);
     floatGallons = prompt("Enter gallons of gas used");
     gallons = parseFloat(gallons);
     floatMpg = floatMiles/floatGallons;
     alert("Miles per gallon = " + floatMpg);