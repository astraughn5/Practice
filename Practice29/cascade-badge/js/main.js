//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reverse(arr){
return arr.reverse()
}
console.log(reverse(['pikachu','charzar','ribbit','bulbasaur']))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

//Alex Solution - it works
function program(a,b){
let aSquare = a.map((x,i) => (x*x))
let bCube = b.map((x,i) => (x*x*x))
// console.log(aSquare)
// console.log(bCube)
const aSum = aSquare.reduce((previous, current) => previous + current)
const bSum = bCube.reduce((previous, current) => previous + current)
// console.log(aSum)
// console.log(bSum)
return (aSum > bSum) ? console.log('true') : console.log('false')
}
program([1,3,18],[2,3,2])

// solution -- you can use reduce and allow math function to be done on the current value. Math.pow is the same as using c**3
function compareSquareAndCube(a,b){
	return a.reduce((acc, c) => acc + c**2, 0 ) > b.reduce((acc, c) => acc + Math.pow(c,3), 0)
}

console.log(compareSquareAndCube([2,5,6,3],[3,4,2]))


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

//Solution
function isMultiple(arr){
	return arr.filter( (x,i) => x % i === 0 )
}
console.log(isMultiple([22, -6, 32, 82, 9, 25]))

// Alex solution - hit an error
function multipleIndex(arr){
	let multiple = arr.map((x,i) => {
		if(x%i === 0){
			return x
		}
		else{
		}
	
	})
}
console.log(multipleIndex([1,2,3,4,5]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function numberArray (arr){
return arr.reduce((acc, c ) => acc + Number(c), 0 )
}

console.log(numberArray(['5','2',4,'15']))

