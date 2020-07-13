var p1Score=0;
var p2Score=0;
var p1Button =document.querySelector("#p1Button");
var p2Button =document.querySelector("#p2Button");
var resetButton =document.querySelector("#reset");
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var input=document.querySelector("input");
var winningDisplay=document.querySelector("p span");
var winnerNumber=5;
var gameOver= false;
p1Button.addEventListener("click" , function() {
	if(!gameOver){
		p1Score++;
		p1Display.textContent=p1Score;
		if(p1Score===winnerNumber){
			p1Display.classList.add("green");
			gameOver =true;
			
		}
		
	}
});

p2Button.addEventListener("click" , function() {
	if(!gameOver){
		p2Score++;
		p2Display.textContent=p2Score;
		if(p2Score===winnerNumber){
			p2Display.classList.add("green");
			gameOver =true;

		}
		
	}
});

function reset() {
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("green");
	p2Display.classList.remove("green");
	gameOver=false;

}

resetButton.addEventListener("click" , function() {
	reset();
});



input.addEventListener("change" , function() {
	winningDisplay.textContent=input.value;
	winnerNumber =Number(input.value);
	reset();
});