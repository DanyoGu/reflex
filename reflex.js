	
let clickedTime; 
let createdTime;
let reactionTime;
let count = 0;
let totalReactionTime = 0;
let averageReactionTime;
let highestscore = 0;
let difficulty = "easybox";

document.getElementById("scoreboard").style.display="none";
document.getElementById("reset-button").style.display="none";
document.getElementById("game-border").style.display="none";
		
function makeBox() {



        document.getElementById(difficulty).style.borderRadius="25px";
                            
        let top = Math.random();
        top = top * 95;
        let left = Math.random();
        left = left * 95;
        
        console.log(top);
        console.log(left);
                            
        document.getElementById(difficulty).style.top = top + "%";
        document.getElementById(difficulty).style.left = left + "%"; 
                    
        document.getElementById(difficulty).style.display="flex";
                        
        createdTime=Date.now();

				
		
}


function startGame() {
    count = 0;
    averageReactionTime = 0;
    totalReactionTime = 0;
    //resets all scores for one game
    makeBox();
    countDown();

    document.getElementById("difficulty-buttons").style.display="none";
    document.getElementById("titlescreen").style.display="none";
    document.getElementById("game-border").style.display="block";
    

}

function countDown(){
    const timeLeftDisplay = document.querySelector('#timer');
    let timeLeft = 5;
    document.getElementById("timer").style.display="flex"
    myVar = setInterval(function(){
        if(timeLeft < 1) {
            document.getElementById("timer").style.display="none"
            document.getElementById(difficulty).style.display="none"
            calcScore(count, highestscore, averageReactionTime);
            clearInterval(myVar)
        }
        timeLeftDisplay.innerHTML = timeLeft;
        timeLeft -= 1;
    },1000)
}

function calcScore(score, highscore, avgTime) {
    if(score >= highscore) highestscore = score;
    const currentScore = document.querySelector('#score');
    currentScore.innerHTML = score;
    const currentHighScore = document.querySelector('#highscore');
    currentHighScore.innerHTML = highestscore;
    const currentAverageReactionTime = document.querySelector('#average-reaction-time');
    currentAverageReactionTime.innerHTML = avgTime.toFixed(2) + " s";
    document.getElementById("game-border").style.display="none";
    document.getElementById("scoreboard").style.display="flex"
    document.getElementById("reset-button").style.display="block"
}

document.getElementById("easy-button").onclick=function() {
    difficulty = "easybox";
    startGame();
}
document.getElementById("medium-button").onclick=function() {
    difficulty = "mediumbox";
    startGame();
}
document.getElementById("hard-button").onclick=function() {
    difficulty = "hardbox";
    startGame();
}
document.getElementById("reset-button").onclick=function() {
    document.getElementById("scoreboard").style.display="none";
    document.getElementById("reset-button").style.display="none";
    startGame();
}
document.getElementById("menu-button").onclick=function() {
    location.reload();
}
document.getElementById("easybox").onclick=function() {
    
	count++;		
    clickedTime=Date.now();             
    reactionTime=(clickedTime-createdTime)/1000;
    totalReactionTime += reactionTime;           
    averageReactionTime = totalReactionTime/count;
    this.style.display="none";               
    
    makeBox();			
				
}
document.getElementById("mediumbox").onclick=function() {
    
	count++;		
    clickedTime=Date.now();             
    reactionTime=(clickedTime-createdTime)/1000;
    totalReactionTime += reactionTime;           
    averageReactionTime = totalReactionTime/count;
    this.style.display="none";               
    
    makeBox();			
				
}
document.getElementById("hardbox").onclick=function() {
    
	count++;		
    clickedTime=Date.now();             
    reactionTime=(clickedTime-createdTime)/1000;
    totalReactionTime += reactionTime;           
    averageReactionTime = totalReactionTime/count;
    this.style.display="none";               
    
    makeBox();			
				
}

// end code


			
		
		
		