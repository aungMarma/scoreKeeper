
//////////////////////////////////////////////////////////////////////////////////

// left and right player socre
var winning = document.getElementsByTagName("h1")[0];
var defaultHTML = winning.innerHTML;
var defaultCSS = winning.getAttribute("style");
var leftPlayerScore = document.getElementsByTagName("span")[0];
var leftPlayerScoreDefaultCSS = leftPlayerScore.getAttribute("style");
var rightPlayerScore = document.getElementsByTagName("span")[1];
var rightPlayerScoreDefaultCSS = rightPlayerScore.getAttribute("style");

//  show score, playing to win
var playingTo = document.getElementsByTagName("h2")[0];
var rule = playingTo.firstChild.nextSibling;   // span

// to set highest score playing to
var ruleSetting = document.getElementsByTagName("input")[0];
ruleSetting.value = 5;
ruleSetting.addEventListener("click", function(argument) {
	rule.textContent = this.value;

})

// left-side player scores
var leftPlayer = document.getElementsByTagName("input")[1];
leftPlayer.addEventListener("click", function(){
	if(Number(rightPlayerScore.textContent) < Number(rule.textContent)){
		if(Number(rule.textContent) > Number(leftPlayerScore.textContent)){
			leftPlayerScore.textContent = Number(leftPlayerScore.textContent) + 1;
			var score = Number(leftPlayerScore.textContent);
			if(score === Number(rule.textContent)){
				leftPlayerScore.style.border = "3px solid red";
			}
		}
	}
})

// right-side player scores
var rightPlayer = document.getElementsByTagName("input")[2];
rightPlayer.addEventListener("click", function(){
	if(Number(leftPlayerScore.textContent) < Number(rule.textContent)){
		if(Number(rule.textContent) > Number(rightPlayerScore.textContent)){
			rightPlayerScore.textContent = Number(rightPlayerScore.textContent) + 1;
			var score = Number(rightPlayerScore.textContent);
			if(score === Number(rule.textContent)){
				rightPlayerScore.style.border = "3px solid red";
			}
		}
	}
})


// reset game to five
var reset = document.getElementsByTagName("input")[3];
reset.addEventListener("click", function(){
	rule.textContent = 5;
	ruleSetting.value = 5;
	rightPlayerScore.textContent = 0;
	leftPlayerScore.textContent = 0;
	rightPlayerScore.setAttribute("style", rightPlayerScoreDefaultCSS);
	leftPlayerScore.setAttribute("style", leftPlayerScoreDefaultCSS);
})
