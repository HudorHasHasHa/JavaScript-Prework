{
function playGame(playerInput){
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);
}
    


document.getElementById('play-rock').addEventListener('click', function(){
    printMessage('Zagrałeś kamień');
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    printMessage('Zagrałeś papier');
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    printMessage('Zagrałeś nożyce');
    playGame(3);
  });
}
    /*let randomNumer2 = Math.floor(Math.random() * 9 + 11);
    printMessage('wynik działania:' + randomNumber2);*/