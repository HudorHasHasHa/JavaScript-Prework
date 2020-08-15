function printMessage(msg){
    let div = document.createElement('div');
    let playerMove = 'papier';
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}