// Template strings

//const pet ="horse";
//const greetingsBest ="Hello" +name+"you seem to be doing"+greating+"!"
//const greetingBest ='Hello${name} you seem to be ${age-10}. What a lovely ${pet} you have';

//default arguments
//function greet(name ='', age=30, pet='cat'){
	//return 'Hello${name} you seem to be ${age-10}. What a lovely ${pet} you have';
//}

//arrow functions
//function add (a,b){
	return a + b;
//const add2 = (a ,b) =>a+b;

//const greet = 'Hi';
//const second = ()=>{
//	alert(greet);

//}
//}
//const newFunc =first();
//newFunc();

const multiply = (a, b)=> a + b;
const curriedMultiply = (a)=>(b)=>a * b;
const multiplyBy5 = curriedMultiply(5);


//Compose
const compose = (f, g) => (a) => f(g(a));

const sum =(num) => num + 1;

compose (sum, sum)(5);

//Advanced Arrays

const array = [1, 2, 10, 16];

const double[]
const newArray = arrays.forEach((num) =>{
	double.push(num * 2);
})

console.log('forEach',double);

//map, filter, reduce
const mapArray =array.map((num) =>{
	return num * 2;
});
console.log('map', mapArray);

//context vs scope
const object4 ={
	a: function(){
		console.log(this);
	}
}


//instantiation
class Player {
	constructor(name, type) {
		console.log('player',this);
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log('hi i am ${this.name}, i am a ${this.type}');
	}
}
class Wizard extends player {
	constructor(name,type){
		super(name,type)
		console.log('wizard', this);

	}
	play(){
		console.log('WEEEEEEE i am a ${this.type}');
	}
}
const wizard1 = new Wizard ('Shelly', 'Healer');
const wizard2 = new Wizard ('Shawn', 'Dark Magic');



//scope
//Root scope (window)
var fun =5;
function funFunction(){
	//child scope
	var fun = "what's up";
	console.log(1, fun);

}
 
 function funerFunction(){
 	//child scope
 	var fun ="Byee";
 	console.log(2, fun);

 }
  function funestFunction(){
  	//child scope
  	fun ="AHHHHHHH";
  	console.log(3, fun);
  }

  console.log("window", fun);
  funFunction();
  funerFunction();
  funestFunction();