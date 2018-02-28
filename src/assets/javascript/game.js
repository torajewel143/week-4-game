$( document ).ready(function(){
    var Random=Math.floor(Math.random()*199+1);
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 1-200
    //
    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber id in the html doc
    //
    var num1= Math.floor(Math.random()*19+1);
    var num2= Math.floor(Math.random()*19+1);
    var num3= Math.floor(Math.random()*19+1);
    var num4= Math.floor(Math.random()*19+1);
    // Setting up random numbers for each Gems
    // Random number has to be between 1 - 20
    //
    var userTotal= 0;
    var wins= 0;
    var losses = 0;
    //  Decaring variables for tallies

    $('#numWins').text(wins);
    $('#numLosses').text(losses);
            //resets the game

    function reset(){
        Random=Math.floor(Math.random()*199+1);
        console.log(Random);
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*19+1);
        num2= Math.floor(Math.random()*19+1);
        num3= Math.floor(Math.random()*19+1);
        num4= Math.floor(Math.random()*19+1);
        user_Total= 0;
        $('#finalTotal').text(userTotal);
    }

    function win(){
        alert("You won!");
        wins++;
        $('#numWins').text(wins);
        reset();
    }

    function loser(){
        alert ("You lose!");
        losses++;
        $('#numLosses').text(losses);
        reset()
    }

    $('#one').on ('click', function(){
        userTotal = userTotal + num1;
        console.log("New user_Total= " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == Random){
            win();
        }
        else if ( userTotal > Random){
            loser();
        }
    });
    $('#two').on ('click', function(){
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random){
            win();
        }
        else if ( userTotal > Random){
            loser();
        }
    });
    $('#three').on ('click', function(){
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == Random){
            win();
        }
        else if ( userTotal > Random){
            loser();
        }
    });
    $('#four').on ('click', function(){
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == Random){
            win();
        }
        else if ( userTotal > Random){
            loser();
        }
    });
});