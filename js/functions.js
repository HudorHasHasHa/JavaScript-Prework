function printMessage(msg){
    let div = document.createElement('div');
    let argcomputerMove = 'pusty';
    let argplayerMove = 'papier';
	div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }
    else if(argMoveId == 2){
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nożyczki';
    } 

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  
  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } 
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyczki'){
        printMessage('Ty wygrywasz!');
      }

    else if( argComputerMove == 'nożyczki' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == argPlayerMove){
        printMessage('Mamy Remis!');
    }
    else if(argPlayerMove == 'nieznany ruch'){
        printMessage('Nie podałeś liczby z przedziału <1;3>! spróbuj ponownie po odświeżeniu strony.');
    }
    else{
        printMessage('Niestety Przegrałeś :(');
    }

    return 0;
  }