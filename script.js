var count = 0;

function cc(card) {
  // Only change code below this line
  
switch(card){
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++;
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count--;
  break;
}
var decision="Hold";
if(count>0){
  decision="Bet";
}
return count+' '+decision;

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
