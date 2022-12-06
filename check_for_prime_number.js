// Check whether a number is Prime or not

let a=13;
let count=0;
for(let i=1;i<=13;i++){

	if(a%i==0){
	count++

	}

}
if(count==2){
	
	console.log("It is a prime number");

}

else{
	console.log("It is not a prime number");

}

