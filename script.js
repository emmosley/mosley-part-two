//declaring the variables
var eventType = prompt("What type of event are you going to?");
var tempFahr = prompt("What is the weather?");

//determing the type of event
if (eventType === 'casual') {
    result1 = "something comfy";
  }
    else if (eventType === 'semi-formal') {
    result1 = "a polo";
}
   else if (eventType === 'formal') {
    result1 = "a suit";
}

//determining the weather
if (tempFahr < 54) { 
    result2 = "a coat";
  }
    else if (54 <= tempFahr <= 70) {
    result2 = "a jacket";
}
   else if (tempFahr > 70) {
    result2 = "no jacket";
}

//final output
  var final = "Since it is "+ tempFahr +" degrees and you are going to a "+ eventType +" event, you should wear "+ result1 +" and "+ result2 +".";
    console.log(final);
