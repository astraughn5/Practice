//Create a pizza object that has four properties and three methods
let pizza = {}
pizza.style = "deepdish"
pizza.size = 'large'
pizza.topping1 = 'pepperoni'
pizza.topping2 = 'cheese'
pizza.cut = function (){
	console.log("Time to cut the pizza")
}
pizza.done = function (){
	console.log('Pizza is ready!')
}
pizza.order = function (){
	console.log(`I would like a ${pizza.size} ${pizza.style} with ${pizza.topping1} and ${pizza.topping2}.`)
}
