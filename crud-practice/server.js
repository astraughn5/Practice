const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://astraughn:o6L7sAkZop00UOhH@cluster0.weren.mongodb.net/?retryWrites=true&w=majority') .then(client => {
	console.log('Connected to Database')
	const db = client.db('crud-practice')
	const quotesCollection = db.collection('quotes')
	app.set('view engine', 'ejs')
	app.use(bodyParser.urlencoded({ extended: true}))
	app.use(express.static('public'))
	app.use(bodyParser.json())
	app.get('/', (req,res) => {
		//res.send('hello world')
		//console.log(__dirname) prints /Users/alexstraughn/Desktop/Devs/Practice/crud-practice
	//res.sendFile(__dirname + '/index.html')
		db.collection('quotes').find().toArray()
		.then(results => {
			console.log(results)
			res.render('index.ejs', {quotes: results})
		})
		.catch(error => console.error(error))
		
	})
	app.put('/quotes', (req, res)=>{
		quotesCollection.findOneAndUpdate(
			{ name: 'trick' },
			{
			  $set: {
				name: req.body.name,
				quote: req.body.quote
			  }
			},
			{
			  upsert: true
			}
		  )
		  .then(result => {
			res.json('Success')
		  })
		  .catch(error => console.error(error))
	})
	app.delete('/quotes', (req,res)=>{
		quotesCollection.deleteOne(
			{ name: req.body.name }
		)
		.then(result => {
			if (result.deletedCount === 0){
				return res.json('No quote to delete')
			}
			res.json(`Deleted Darth Vadar's quote`)
		})
		.catch(error => console.error(error))
	})
	app.post('/quotes', (req , res )=>{
		quotesCollection.insertOne(req.body)
		.then(result => {
			res.redirect('/')
		})
		.catch(error => console.error(error))
	})
	app.listen(3000, function(){
		console.log('listening on 3000')
	})
})
.catch(error => console.error(error))

