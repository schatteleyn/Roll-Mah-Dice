function rollDice()
{
  var numberRoll = document.getElementById('number').value.match(/^\d+$/); 
  var type_dice = document.getElementById('type').value.match(/^\d+$/);
  
  if (numberRoll == null || type_dice == null) {
   alert('The fields require numbers, you fool !');
  } else {
  
     for(var i = 0; i < numberRoll; i++) {
        // Make dah roll !
        var roll = 1+Math.floor(Math.random()*type_dice);
        // Display the result
        document.getElementById('result').innerHTML += roll + " ";
     }
    document.getElementById('result').innerHTML += "<br />";
  
  }
}

var j=1;
function addDice()
{

  j++;
  document.getElementById('increment').innerHTML+="Type of dice "+j+": <span id='increment'></span><input type=\"text\" id=\"type\" /><br />";
  document.getElementById('addRoll').innerHTML += "Number of roll, dice "+j+": <span id='addRoll'></span><input type=\"text\" id=\"number\" /><br />";
}