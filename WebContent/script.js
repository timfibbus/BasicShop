
let apple = {name:"apple", price:1.29};
let orange = {name:"orange", price:1.99};
let banana = {name:"banana", price:0.69};
let toaster = {name:"toaster", price:4.20};
console.log(apple.name);

let goods = [];
goods.push(apple);
goods.push(orange);
goods.push(banana);
goods.push(toaster);

let total = [];

console.log(goods);

console.log(goods[0].name);


for (let i = 0; i < goods.length; i++){
	console.log(goods[i].name);
}

let buttonEl1 = document.getElementById("one");
buttonEl1.addEventListener("click", (event) =>{
	total.push(apple);
});
let buttonEl2 = document.getElementById("two");
buttonEl2.addEventListener("click", (event) =>{
	total.push(orange);
});
let buttonEl3 = document.getElementById("three");
buttonEl3.addEventListener("click", (event) =>{
	total.push(banana);
});
let buttonEl4 = document.getElementById("four");
buttonEl4.addEventListener("click", (event) =>{
	total.push(toaster);
});
let buttonEl5 = document.getElementById("trig");
buttonEl5.addEventListener("click", (event) =>{
	console.log(total);
	

	let sum = 0;
	for (let i=0; i < total.length; i++){
		sum+=total[i].price;
		
		total[i].name.toString 
	}
	sum = (Math.round(sum*100)/100).toFixed(2);
	console.log(sum);
			
	let totalNum = document.getElementById("total");
    totalNum.innerHTML = "Total: $" + sum;
    }
);