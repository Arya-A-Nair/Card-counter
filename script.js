var count = 0;
function cc() {
    var x = document.getElementById("btn1").value;   
    
    switch(x){
    case '1':
    
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    count++;
    break;
    case '10':
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
document.getElementById('result').innerHTML=count+' '+decision;
}

