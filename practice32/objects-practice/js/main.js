// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor{
    constructor(name, role, location, salary){
        this._name = name
        this._role = role
        this._location = location
        this._salary = salary
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    get location (){
        return this._location
    }
    get salary() {
        return this._salary
    }
    sayHello(){
        console.log(`Hello my name is ${this._name} and I am a ${this._role}.`)
    }
}

class FrontEndDeveloper extends Contractor{
    constructor(name,role,location,salary, techLanguage){
        super(name,role,location,salary)
        this.techLanguage = techLanguage
    }
    get tech(){
        return this.techLanguage
    }
    sayHello(){
        console.log(`My name is ${this.name}, I live in ${this.location}.`)
    }
}

class BackEndDeveloper extends Contractor{
   constructor(name,role,location,salary, techLanguage){
    super(name,role,location,salary)
    this.techLanguage = techLanguage
   }
   get tech(){
    return this.techLanguage
    }
}

let Alex = new Contractor('Alex', 'Boss', 'Chi Town', 100000)
let Jules = new FrontEndDeveloper('Julie', 'Frond End Developer', 'San Diego', 125000, 'React')
let Al = new BackEndDeveloper('Big Al', 'Back End Dev', 'St. Pete, FL', 115000,'C#')

let agencyList = [Alex, Jules, Al]

for (person of agencyList){
    person.sayHello()
}















// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
