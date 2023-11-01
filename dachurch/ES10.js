let will_pokemon = {

}

let godwin_pokemon = {
	pikachu: {
		species:'Mouse Pokemom',
		height: 0.8,
		Weight:30
	}
}

let weight3 = godwin_pokemon?.pikachu?.weight
console.log(weight3)


//debbugging

const flattened = [[0,1], [2,3],[4, 5]].reduce (
	(accumulator, array) =>{

	debbugger;
	return accumulator.concat(array)
	},


	[]);


//Recursion
function foo() {
	foo()
}
foo()

//call stack
console.log('1');
setTimeout (() =>{
	console.log('2');

}, 2000)
console.log('3');