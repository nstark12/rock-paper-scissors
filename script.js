// declare variables
var wins = 0;
var losses = 0;
var ties = 0;

// declare the options
var options = ['R', 'P', 'S'];

// create game function
var playGame = function() {
    // prompt user for choice
    var userChoice = window.prompt("Choose R, P, or S: ");

    // if user hits cancel end function
    if(!userChoice) {
        return;
    }
}