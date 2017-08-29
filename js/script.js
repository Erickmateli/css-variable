//get the inputs
var inputs = document.querySelectorAll(".controls input");
console.log(inputs);
//write a function to update the inputs
function handleupdates(){
	// console.log(this.value);
	//get the suffix for px
	var suffix = this.dataset.sizing || "";
	// console.log(suffix);
	//select the entire document and update it with the variable
	document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}
//loop through the inputs and listen for events
inputs.forEach(function(input){
	input.addEventListener("change", handleupdates);
	input.addEventListener("mouseover", handleupdates);
});