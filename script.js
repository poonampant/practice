/*var listOFAnimal = ["tiger", "cat", "bear", "bird"];
alert(listOFAnimal[0]);*/
/*
var list = ["apple", 3 ,undefined, true,function apple(){
	console.log("apples")
}];
list.shift();
list.pop();
list.push("poonam");
var newlist=list.concat(["hi","ekta","rashika"]);
newlist.sort();*/

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
array.sort();
array.push("kiwi");
array.splice(0,1);
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[0][1][0];