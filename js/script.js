    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = 'nieznany ruch';
    console.log('Komputer wylosował: '+ randomNumber);
    if(randomNumber == 1){
        computerMove = 'kamień';
    }
    else if(randomNumber == 2){
        computerMove = 'pamier';
    }
    else if(randomNumber == 3){
        computerMove = 'nożyczki'
    }   

    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = 'nieznany ruch';
    if(playerInput == '1'){
        playerMove = 'kamień';
    }
    else if(playerInput == '2'){
        playerMove = 'papier';
    }
    else if(playerInput == '3'){
        playerMove = 'nożyczki'
    }   
    printMessage('Twój ruch to: ' + playerMove);

    if( computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }

    else if( computerMove == 'papier' && playerMove == 'nożyczki'){
        printMessage('Ty wygrywasz!');
      }

    else if( computerMove == 'nożyczki' && playerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }
    else if( randomNumber == playerInput){
        printMessage('Mamy Remis!');
    }
    else if(playerMove == 'nieznany ruch'){
        printMessage('Nie podałeś liczby z przedziału <1;3>! spróbuj ponownie po odświeżeniu strony.');
    }
    else{
        printMessage('Niestety Przegrałeś :(');
    }

    


    /*let randomNumer2 = Math.floor(Math.random() * 9 + 11);
    printMessage('wynik działania:' + randomNumber2);*/