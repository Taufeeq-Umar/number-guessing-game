#! /usr/bin/env node 
import inquirer from "inquirer";
// 1 )computer will generate a random number  - Done.
// 2) user input a guessing number -Done.
// 3) compare user input with computer generate number and show result  - Done.
const randomeNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6"
    }
]);
if (answer.userGuessedNumber === randomeNumber) {
    console.log("Congratulation you guess the right number");
}
else {
    console.log("you guessed the wrong number , please try again");
}
