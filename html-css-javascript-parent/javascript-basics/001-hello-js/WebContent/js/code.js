/*
 * Code for the external-js.html
 */

var word = "bottles";
var count = 99;

while (count > 0) {
	console.log(count + " " + word + " of beer on the wall");
	console.log(count + " " + word + " of beer,");
	console.log("Take one down, pass it around,");
	count = count - 1;
	if (count > 2) {
		console.log(count + " " + word + " of beer on the wall.");				
	} else if (count == 1) {
		word = "bottle";
		console.log(count + " " + word + " of beer on the wall.");
	} else if (count == 0) {
		word = "bottles";
		console.log("No more " + word + " of beer on the wall.")
	}			
}
