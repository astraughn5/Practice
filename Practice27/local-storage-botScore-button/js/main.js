//Create a button that adds 1 to a botScore stored in localStorage 
if (localStorage.getItem('botScore') === 'null'){
	localStorage.setItem('botScore',0)
}
else {
	document.querySelector('h2').innerHTML = localStorage.getItem('botScore')
}
	

document.querySelector('button').addEventListener('click', counter)


function counter(){
	let botScoreValue = Number(localStorage.getItem('botScore'))
	botScoreValue += 1
	localStorage.setItem('botScore',botScoreValue)
	console.log(botScoreValue)
	document.querySelector('h2').innerHTML = botScoreValue 
}
