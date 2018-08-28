$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var score = 0;
    
    //using jquery on html ID's with the var here
    $("#score").text("Score: " + score);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    //random number between 1-12 for each fruit.  the +1 is so that it can include the 1
    var strawberry = Math.floor(Math.random() * 12) + 1
    var blueberry = Math.floor(Math.random() * 12) + 1
    var blackberry = Math.floor(Math.random() * 12) + 1
    var raspberry = Math.floor(Math.random() * 12) + 1

    //random number between 19-120 for the target goal.  The +19 is so that it can include the 19
    var targetGoal = Math.floor(Math.random() * 102) + 19
    $("#random").text(targetGoal);

    
    function resetGame() {
        score = 0;
        $('#score').text(score);

        targetGoal = Math.floor(Math.random() * 102) + 19
        $('#random').text(targetGoal);

        strawberry = Math.floor(Math.random() * 12) + 1
        blueberry = Math.floor(Math.random() * 12) + 1
        blackberry = Math.floor(Math.random() * 12) + 1
        raspberry=  Math.floor(Math.random() * 12) + 1  
    } 

    
    function winGame() {
        alert("Berry Delicious!!!!");
        wins++; 
        $('#wins').text(wins);
        resetGame();
    }

    
    function loseGame() {
        alert ("Go Eat a Different Fruit Loser");
        losses++;
        $('#losses').text(losses);
        resetGame()
    }

    $(".strawberry").on("click", function () {
        score = score + strawberry;
        $('#score').text(score); 
        
        if (score === targetGoal) {
            winGame();
        }
        else if ( score > targetGoal) {
            loseGame();
        }
    })

    $(".blueberry").on("click", function () {
        score = score + blueberry;
        $('#score').text(score); 
        
        if (score === targetGoal) {
            winGame();
        }
        else if ( score > targetGoal) {
            loseGame();
        }
    })

    $(".blackberry").on("click", function () {
        score = score + blackberry;
        $('#score').text(score); 
        
        if (score === targetGoal) {
            winGame();
        }
        else if ( score > targetGoal) {
            loseGame();
        }
    })

    $(".raspberry").on("click", function () {
        score = score + raspberry;
        $('#score').text(score); 
        
        if (score === targetGoal) {
            winGame();
        }
        else if ( score > targetGoal) {
            loseGame();
        }
    })
})