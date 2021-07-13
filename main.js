NOS = [];
function submit() {
var Name1 = document.getElementById("name1").value;
var Name2 = document.getElementById("name2").value;
var Name3 = document.getElementById("name3").value;
var Name4 = document.getElementById("name4").value;

NOS.push(Name1);
NOS.push(Name2);
NOS.push(Name3);
NOS.push(Name4);

console.log(NOS);
document.getElementById("outputDiv").innerHTML = NOS;

document.getElementById("submitButton").style.display="none";
document.getElementById("sortButton").style.display="inline-block";
}
function sort() {
NOS.sort();
console.log(NOS);
document.getElementById("outputDiv").innerHTML = NOS;
}