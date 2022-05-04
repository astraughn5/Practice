//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
	constructor(name){
		this.name = name
	}
	speak() {
		console.log(`${this.name} makes a sound`)
	}
}

class Dog extends Animal {
	constructor(name,domesticatedOrWild){
		super(name)
		this.domesticatedOrWild = domesticatedOrWild
	}
}

let chester = new Dog('Chester', 'Domesticated')



//how to add a child to a child?
class Domesticated extends Dog{
	constructor(name, domesticatedOrWild, breed){
		super(name)
		this.breed = breed
	}
}
let hank = new Domesticated('Hank', 'Domesticated','West Highland Terrier')