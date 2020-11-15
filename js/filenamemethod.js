/*
method to handle filenames during multipe editing sessions
1. prefix for project is extracted from the original file chosen via Browse input from html file.


2. how to: 
	
				search for filename
			 check how many versions there are
			 load the most recent version for further editing.
3. save final version
*/
    
'use strict';

class Creature {
    constructor(legs, mouthtype, color) {
        this.legs = legs;
        this.mouthtype = mouthtype;
        this.color = color;
    };
  	/* this is a method */
    creatureStats() {
        let message = 'This creature has ' +this.legs+ ' legs, eats with a ' +
        this.mouthtype +
         ' and a beautiful ' + this.color + ' color!';
         return message;
    }
    /* used when comparing */
    static totalLegs(insect1,insect2){
		const legs1 = insect1.legs;  
		const legs2 = insect2.legs;   
		return legs1+legs2;
    }
};

  class Dog extends Creature {
    	constructor(legs, mouthtype, color,animaltype,creatureStats) {
    	super(legs, mouthtype, color,creatureStats);
    	this.animaltype = animaltype;
    	this.legs=4;
    	this.tail=1;
    }
    myType(){
		return console.log('this creature is an ' + this.animaltype);        
    	}
    }
/*console.log(sayHI());*/
const insect = new Creature(6,'mandible', 'green');
const spider = new Creature(8,'mandible', 'black');

const dog = new Dog(4,'teeth','brown','beagle');
//console.log(insect);
console.log("dog: ",dog);
//console.log("dog mytype: ",dog.myType('beagle'));
/*console.log(insect.creatureStats());
console.log(Creature.totalLegs(insect,spider))*/

/*

function sayHI(){
	let message = "this function can be called anywhere";
return message ;
}
*/
