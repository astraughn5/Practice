//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class VentureBros {
	constructor(mainCharacter, goodOrEvil, teamName, seasonAppearance){
	this.mainCharacter = mainCharacter
	this.goodOrEvil = goodOrEvil
	this.teamName = teamName
	this.seasonAppearance = seasonAppearance
	}
	catchPhrase(){
		alert('Go Team Venture')
	}
	rollCredits(){
		console.log('Shows Over')
	}
	exit(){
		console.log('Closing Streamg')
	}

}

let Brock = new VentureBros('Brock', 'Good', 'OSI', 'All Seasons')

