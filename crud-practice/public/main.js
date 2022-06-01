const update = document.querySelector('#update-button')

update.addEventListener('click', _=>{
	fetch('/quotes', {
		method: 'put',
		headers: {'Content-Type' : 'application/json'},
		body: JSON.stringify({
			name: 'Darth Vadar',
			quote: 'I find your lack of faith distrubing.'
		})
	})
	.then(res => {
		if (res.ok) return res.json()
	  })
	  .then(response => {
		console.log(response)
		window.location.reload(true)
	  })
})

const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

deleteButton.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'delete',
	headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vadar'
    })
  })
 	.then(response => {
		if (response === 'No quote to delete'){
			messageDiv.textContent = 'No Darth Vadar quote to delete' //issue with getting message in DOM
		}
		else{
			window.location.reload(true)
		} 
	 }) 
  .then(res => {
		if (res.ok) return res.json()
    })
    .then(data => {
      window.location.reload()
    })
})