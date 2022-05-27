document.querySelector('#start').addEventListener('click', makeReq)

async function makeReq(){

  const date = document.querySelector("#date").value;
  // console.log(userName)
  // const res = await fetch(`/api`)
  const res = await fetch(`/api?date=${date}`)

  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
  // dateCount = data.Date.getTime()
  
}