
//Check whether a string is palindrome or not.

let str="madam";
let bag="";
for(let i=str.length-1; i>=0; i--){
	
	bag=bag+str[i];

}

if(bag==str){

	console.log("It is a palindrome");

}
else{

	console.log("It is not a palindrome);

}