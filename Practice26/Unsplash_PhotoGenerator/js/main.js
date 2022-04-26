// API Key is not generating on website and unable to complete assignment

// function getDrink(){
var token = config.MY_API_TOKEN;

let photoGenerator = `https://api.unsplash.com/photos/random/?client_id=${token}`;

	fetch(photoGenerator)
		.then(res => res.json()) // parse response as JSON
		.then(data => {
		console.log(data)	
		document.body.style.backgroundImage = data.urls.regular
		document.querySelector('img').src = data.urls.regular
		})
		.catch(err => {
			console.log(`error ${err}`)
		});