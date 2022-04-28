//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
//did a coffee shop instead of type of espresso machine
class CoffeeShop{
	constructor(coffeeType, groundOrBean, icedOrHot, groundType, name){
		this.coffeeType = coffeeType
		this.groundOrBean = groundOrBean
		this.icedOrHot = icedOrHot
		this.groundType = groundType
		this.name = name
	}
	purchase(){
		console.log('Thank you for your purchase.')
	}
	repeatOrder(){
		console.log(`You want me to use a ${this.groundType} for a ${this.coffeeType} that will be ${this.icedOrHot}, is that correct?`)
	}
	orderUp(){
		alert(`Order ready for ${this.name}`)
	}
}

let order1 = new CoffeeShop('Mocha', 'bean', 'iced', 'Light Bean', 'Alex')
let order2 = new CoffeeShop('Latte', 'ground', 'hot', 'Brazilian', 'Julie' )