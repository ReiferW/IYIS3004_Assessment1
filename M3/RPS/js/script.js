/* Name: script.js
   Author: Ruifu Wang
   Description: Scripting for RPS
   Version: 1.0

This is a simplified version of the game.
The Computer ALWAYS picks ROCK.  
Does the user's choose win,lose, or tie vs ROCK? */
function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
    }
    if (user === 'paper') {
        result = "win";
    }
    if (user === 'scissors') {
        result = "lose";
    }
    alert("Computer chose rock, you " + result + "!");
}

function say(myMessage) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(myMessage);
    synth.speak(utterThis)
}