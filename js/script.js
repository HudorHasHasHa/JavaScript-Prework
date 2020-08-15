    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);

    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);

    


    /*let randomNumer2 = Math.floor(Math.random() * 9 + 11);
    printMessage('wynik działania:' + randomNumber2);*/