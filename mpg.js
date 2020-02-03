 var floatMiles, floatGallons, floatMpg;
     floatMiles = prompt("Enter miles driven");
     floatMiles = parseFloat(floatMiles);
     floatGallons = prompt("Enter gallons of gas used");
     floatGallons = parseFloat(floatGallons);
     floatMpg = floatMiles/floatGallons;
     alert("Miles per gallon = " + floatMpg);