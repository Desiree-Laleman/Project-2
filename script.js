//Prompts for the user to input into the system for custom outputs!
//Also declaring variables so the PROMPTINPUT will then BE the varibles; something something variables in this case being STRINGS and not NUMBERS
let playerName = prompt("Welcome to Grand Circus Minigolf! What is your name?");
let holes = prompt("Hello " + playerName + "! Would you like to play 3 or 6 holes today?");

//Declaring Variables!!
let par = holes * 3; //I have no idea what this means in Golf Terms but I think I'm on the right track...
let total = 0;
let golfScore = 0;

//Loop for Hole Scores!
/*While i is LESSTHAN the number of holes the player wants to play, add 1 to the variable i
And keep going UNTIL i is GREATERTHAN or EQULE to the variable 'holes'*/
for (let i = 0; i < holes; i++) {
    //golfSore = 0, golfScore = PROMPTINPUT, total += PROMPTINPUT, REPEAT. golfScore = 0... ect ect.
    golfScore = Number(
        prompt("How many putts for hole " + (i + 1) + "? (par is 3)")
    )
    //Total is the container of ALL of the loops being preformed, and or the truest of true totals!!!
    total += golfScore;
}

//This is for Debugging and seeing what goes wrong where and if things are out of order...
console.log("Player Name: " + playerName);
console.log("Holes to Play: " + holes);
console.log("Active Total: " + total);
console.log("Par to Beat: " + par);

//Output for totals dependent on the score!
//IF the total EQULES the PAR, then vomit out 0 in a mathimatical way
if (total === par) {
    console.log("Good game, " + playerName + "! Your total par was: " + (total-par));
}
//IF the total is LESSTHAN the PAR, then spit out a negative number... possibly
else if (total < par) {
    console.log("Great game, " + playerName + "! Your total par was: " + (total - par));
}
//IF the total is MORE than PAR, then we serve up a chunky number with par taken out of it still... I think... Golf is not my kind of game
else if (total > par) {
    console.log("Nice try " + playerName + ". Your total par was: " + (total - par));
}