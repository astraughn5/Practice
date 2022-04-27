// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 
let bulLevel = 5
let catLevel = 1
let weedLevel = 1


let bulEvolve = 16 - bulLevel
let catEvolve = 7 - catLevel
let weedEvolve = 7 - weedLevel
let totalCandies = bulEvolve + catEvolve + weedEvolve
console.log(totalCandies)

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle
function tempConvert (fah){
cel = (fah - 32) * (5/9)

return cel
}
function charBattle (currentTemp){
	let converted = tempConvert(currentTemp)
	return (converted > 0) ? console.log('Time to battle') : console.log('Too cold')
	
	// if (currentTemp > 0){
	// 	console.log('Time to battle')
	// }
	// else{
	// 	console.log('Too cold')
	// }
	
}

charBattle(0)

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function battleRoyale(num){
for (let i = 1; i <= num; i++){
	console.log('Pikachu I choose you')
}
}
battleRoyale(3)

// if using arrays
function battleRoyaleArray(num){
	for (let i = 1; i <= num.length; i++){
		console.log('Pikachu I choose you')
	}
	}
	battleRoyaleArray(['bulbasaur', 'weedle', 'charmander'])