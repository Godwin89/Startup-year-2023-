const basket =['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples:5,
	oranges:2000,
	grapes:10000
}




//1
//for (let i=0; i<basket.length; i++){
	//console.log(basket[i]);
//}
//2
//basket.forEach(item => {
	//console.log(item);
//}


//	)



//for of
for (item of basket){
	console.log(item);
}

for (item in detailedBasket){
	console.log(item)
}