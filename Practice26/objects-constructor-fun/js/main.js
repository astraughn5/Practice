//Create a constructor with 4 properties and 3 methods
function Golf (golfer, dominantHand, height, age){
this.golfer = golfer
this.dominatHand = dominantHand
this.height = height
this.age = age
this.drive = function (){
	console.log('Driver Swing')
}
this.holeInOne = function (){
	console.log('AYEEE')
}
this.fore = function (){
	console.log('FOREEEEREE')
}
}

let tigerWoods = new Golf ('Tiger Woods', 'Rightie', `'6'2"`, '41')