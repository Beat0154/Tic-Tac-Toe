var numberArray = [0,1,2,3,4,5,6,7,8];
var remainingNumbers = [0,1,2,3,4,5,6,7,8];
var userMoves = [];
var botMoves = [];
var possibleWins = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"]];
function userClick(num){
    userMoves.push(num);
    var boxString = "box";
    var boxNum = boxString.concat(num);
    var box = document.getElementById(boxNum);
    var spanString = "span";
    var spanNum = spanString.concat(num);
    var span = document.getElementById(spanNum);
    box.style.backgroundColor = "yellow";
    span.innerHTML = "X";
    delete remainingNumbers[num];
    var randomMove = remainingNumbers[~~(Math.random() * remainingNumbers.length)];
    while(randomMove==undefined){
        randomMove = remainingNumbers[~~(Math.random() * remainingNumbers.length)];
    }
    box.setAttribute("onclick","");
    botClick(randomMove);
    for(x of possibleWins){
        if(containsAll(x,userMoves)){
            alert("winner. gagner.");
        }
    }
    console.log(botMoves);
}

function botClick(move){
    botMoves.push(move);
    for(x of possibleWins){
        if(containsAll(x,botMoves)){
            alert("loser. u stupid fack.");
        }
    }
    var boxString = "box";
    var boxNum = boxString.concat(move);
    var box = document.getElementById(boxNum);
    box.style.backgroundColor = "orange";
    box.innerHTML = "O";
    box.setAttribute("onclick","");
    delete remainingNumbers[move];
}

function containsAll(needles, haystack){ 
  for(var i = 0; i < needles.length; i++){
     if($.inArray(needles[i], haystack) == -1) return false;
  }
  return true;
}