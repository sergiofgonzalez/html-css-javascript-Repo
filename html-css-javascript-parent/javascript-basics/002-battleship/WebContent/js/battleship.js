/*
 * Battleship in 1D: 
 *  There are 7 positions arranged in one single dimension.
 *  A ship that is three cells long is laid out in the line.
 *  The user is given the opportunity to take guesses at the ship location.
 *  
 *  pseudocode:
 *  	+ Declare three variables to hold the location of the ship: location1, location2, location3
 *  	+ Declare a variable to hold the user's current guess (a number from 0 to 6): guess
 *  	+ Declare a variable to hold the number of hits: hits, initialized to 0
 *  	+ Declare a variable to hold the number of guesses: guesses, initialized to 0
 *  	+ Declare a variable to keep track of whether the ship is sunk or not: isSunk, initialized to false
 *  
 *  	+ The ship will always be located on location 3, 4, 5
 *  
 *  	Loop: while the ship is not sunk
 *  		Get the user's guess
 *  		Compare the user's input to valid input values
 *  		if the user's guess is invalid
 *  			Tell user to enter a valid number
 * 			else
 * 				add +1 to guesses
 * 				if the user's guess matches a location
 * 				add one to number of hits
 * 				if number of hits is 3
 * 					set isSunk to true
 * 					tell user "You sank my battleship"
 *  			end-if
 *  		end-if
 * 		end-loop
 * 		tell user stats
 */

var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	} else {
		guesses++;
		if (guess == location1 || guess == location2 || guess == location3) {
			hits = hits + 1;
			alert("HIT!");
		} else {
			alert("MISS");
		}
		if (hits == 3) {
			isSunk = true;
			alert("You sank my battleship!");
		}
	}
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + 
			"which means your shooting accuracy was " + (3/guesses);
alert(stats);