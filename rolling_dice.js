var j=1;

function rollDice()
{
  var numberRoll = document.getElementById('number').value.match(/^\d+$/); 
  var type_dice = document.getElementById('type').value.match(/^\d+$/);
  var result = document.getElementById('result');
  
  if (numberRoll == null || type_dice == null) {
   alert('The fields require numbers, you fool !');
  } else {
    result.innerHTML += "Result of dice 1: ";
     for(var i = 0; i < numberRoll; i++) {
        // Make dah roll !
        var roll = 1+Math.floor(Math.random()*type_dice);
        // Display the result
       result.innerHTML += roll + " ";
     }
    result.innerHTML += "<br />";
  
  }
}

function addDice()
{
  j++;
  document.getElementById('addDice').innerHTML+="<label>Type of dice "+j+":</label> <span id='increment'></span><input type='text' id='type' /><br />";
  document.getElementById('addRoll').innerHTML += "<label>Number of roll, dice "+j+":</label> <span id='addRoll'></span><input type='text' id='number' /><br />";
}