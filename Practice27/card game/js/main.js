//Example fetch using deck of Cards API
let deckID = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => res.json()) // parse response as JSON
.then(data => {
  deckID = data.deck_id
  // localStorage.setItem('deckID', deckID)
  console.log(deckID)
})
.catch(err => {
    console.log(`error ${err}`)
});

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image

        let player1Val = convertToNum(data.cards[0].value)
        let player2Val = convertToNum(data.cards[1].value)
        if (player1Val > player2Val){
          document.querySelector('h3').innerText = 'Player 1 Wins'
          }
        else if (player1Val < player2Val){
          document.querySelector('h3').innerText = 'Player 2 Wins'
        }
        else {
          document.querySelector('h3').innerText = 'WARR'
        }


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function convertToNum(value){
if(value === 'ACE'){
  return 14
}
else if(value === 'KING'){
  return 13
}
  else if(value === 'QUEEN'){
  return 12
  }
  else if(value === 'JACK'){
  return 11
  }
  else {
    return Number(value)
  }
}