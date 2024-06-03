//not related to bio page
//just created to practice js...






// let myVar="hemanth";

// console.log(myVar.indexOf("a"));
// //returns -1 if charecter is not present in the string
// console.log(myVar.lastIndexOf("h"));
// console.log(myVar.slice(1,6));
// //excludes 6 th element in printing
// console.log(myVar.toUpperCase());
// console.log(myVar.includes("man"));

// let x=Math.floor((Math.random() * myVar.length))
// console.log(x);
// console.log(myVar.charAt(x));

// //just a rock paper scissor
// let choices=["rock","paper","scissor"];
// let comp_choice=Math.floor(Math.random() * 3);
// let computers_choice = choices[comp_choice];

// let players_choice=prompt("What's your choice? rock or paper or scissor:");
// let result="won";
// if(computers_choice === players_choice){
//     result = "tie";
// }
// if(players_choice === "rock" && computers_choice === "paper"){
//     result = "lost";
// }
// else if(players_choice === "scissor" && computers_choice === "rock"){
//     result = "lost";
// }
// else if(players_choice === "paper" && computers_choice === "scissor"){
//     result = "lost";
// }
// console.log("Computer's choice is : "+ computers_choice);
// console.log("Player's choice is : "+ players_choice);
// console.log("You "+result);



//Arrays
const fruits = ["Banana","Orange","Apple","Mango"];
fruits.splice(2,1,"Lemon","kiwi");
console.log(fruits);
const deleted = fruits.splice(3,2);
console.log(deleted);
const newArr = fruits.slice(1,3);
console.log(fruits);
console.log(newArr);

//splice() function returns the array of elements removed from the array 
//slice() functions returns the sliced array
//some other functions
//1) push()
//2) pop()
//3) unshift()
//4) shift()
//5) reverse()
//6) join()
//7) split()
//8) concat()