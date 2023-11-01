// reference type
var object1 ={value:10};
var object2 =object1;
var object3 ={value:10};
//context
// instantiation

class player {
	contructor(name,type){
		console.log('player', this);
		this.name =name;
		this.type =type;
	}

	intruduction(){
		console.log('Hi, i am'${this.name}, I' m a ${this.type}');
	}
}

class Wizard extends players {
	constructor(name,type){
		super(name,type)
		console.log('wizard', this);
	}

	play(){
		console.log('WEEEEEEE I m a ${this.type}');

	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');