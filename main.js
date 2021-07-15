NOS = [];
function submit() {
var nots = [];
for(var i = 1; i<=4; i++) {
var display_student_name = document.getElementById("name"+i).value;
console.log(display_student_name);
NOS.push(display_student_name);
}
console.log(NOS);
var length_of_NOS = NOS.length;
console.log(length_of_NOS);
for(var o = 0; o < length_of_NOS; o++) {
nots.push("<h4>Name- "+ NOS[o] + "</h4>")
console.log(nots);
}
console.log(nots);
document.getElementById("WithC").innerHTML = nots;
var NoCNos = nots.join(" ");
console.log(NoCNos);
document.getElementById("WithoutC").innerHTML = NoCNos;
document.getElementById("submitButton").style.display = "none";
document.getElementById("sortButton").style.display = "inline-block";
}
function sort() {
    NOS.sort();
    console.log(NOS);
    var sortedNOS = [];
    var length_of_NOS = NOS.length;
    console.log(length_of_NOS);
    for(var o = 0; o < length_of_NOS; o++) {
        sortedNOS.push("<h4>Name- "+NOS[o] + "</h4>");
        console.log(sortedNOS);
       }
       var NoCNos = sortedNOS.join(" ");
       console.log(NoCNos);
       document.getElementById("WithoutC").innerHTML = NoCNos;
}
function newUpdate(){
    document.getElementById("WithoutC").innerHTML = "<h1>" + NOS + "</h1>";
}