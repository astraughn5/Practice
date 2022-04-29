//Object
const circle1 = {
	radius: 1,
	location: {
		x: 1,
		y: 1
	},
	draw: function (){
		console.log('draw')
	}
};
// circle.draw();

//Factory Function
function createCircle(radius){
	return {
		radius,
		draw: function (){
			console.log('draw')
		}
	}
}
const circle = createCircle(1);

//Constructor Function

function Circle(radius){
	this.radius = radius;
	this.draw = function(){
		console.log('draw')
	}
};

const anotherCircle = new Circle(1);

//Primitives vs Reference types
let obj = {value: 10};
function increase (obj){
	obj.value++;
}
increase(obj);
console.log(obj.value)


//adding & removing properties 
function Circle(radius){
	this.radius = radius;
	this.draw = function(){
		console.log('draw')
	}
};

const circle2 = new Circle(1);
circle2['location'] = {x: 1};
// or circle2.location = {x: 1}; will add location to circl2
// delete -> delete circle2['location'];

for (let key in circle2){
	console.log(key, circle2[key])
}

const keys = Object.keys(circle2);
console.log(keys);


// Stopwatch exercise - could only get the stopwatch to add +1 then the stop function will run unlimited
// function Stopwatch(){
// 	this.duration = {time: 0};
// 	this.start = function (){
// 		this.duration.time+= 1
// 	}
// 	this.stop = function(){
// 		setInterval(this.start, this.stop)
// 	}
// 	this.reset = function(){
// 		this.duration.time = 0
// 	}
// }

//solution
function Stopwatch(){
	let startTime, endTime, running, duration = 0;

	this.start = function (){
		if (running){
			throw new Error('Stopwatch is already running')
		};
		running = true;
		startTime = new Date();
	};
	this.stop = function(){
		if (!running){
			throw new Error ('Stopwatch is not running')
		};
		running = false;
		endTime = new Date();
		let seconds = (endTime.getTime() - startTime.getTime())/1000;

		duration += seconds;

	};
	this.reset = function(){
		startTime = null;
		endTime = null;
		running = false; 
		duration = 0;
	};
	Object.defineProperty(this, 'duration', { get: function(){ 
		return duration
	}
	});
}
const sw = new Stopwatch()
