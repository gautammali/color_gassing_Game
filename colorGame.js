  //diffetrebt color of squre
var numSquare=6;
var colors=[];
var modeButton=document.querySelectorAll(".mode");
var resetButton=document.querySelector(".reset");
var squire=document.querySelectorAll(".squire")
var colorSelect;
var h1=document.querySelector("h1");
var result=document.getElementById("result");
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=colorSelect;

init();
function init(){
        modeSelector();
        setupsqure();
        reset();

}

function  modeSelector(){
		for(var i=0;i<modeButton.length;i++){
			modeButton[i].addEventListener("click",function(){
			modeButton[1].classList.remove("selected");
			modeButton[0].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="EASY" ? numSquare=3 :numSquare=6;
			reset();
		});
	
	}
}


function reset(){
	colors=generateRandomColors(numSquare);
	colorSelect=randomPicker();
	colorDisplay.textContent=colorSelect;
	h1.style.background="#4682b4";
	resetButton.textContent="new game";
	result.textContent="";
	for(var i=0;i<squire.length;i++){
		if (colors[i]) {
			squire[i].style.display="block";
			squire[i].style.background=colors[i];
		}else{
			squire[i].style.display="none";
		}
	}
}




function setupsqure(){
		for(var i =0; i<squire.length; i++){
			squire[i].style.background=colors[i];
			squire[i].addEventListener("click",function(){
			var clickedColor=this.style.background;
			if(clickedColor===colorSelect){
				result.textContent="correct!!!"
				colorChange(colorSelect);
				h1.style.background=colorSelect;
				resetButton.textContent="play again?"
				}else{
			    result.textContent="oppos try again";
			 	this.style.background="#232323";
			}
		});
	}
}
						
					

function colorChange(color){
	for(var i=0;i<squire.length;i++){
		squire[i].style.background=color;
	}
}

function randomPicker(){
 	var random=Math.floor(Math.random()*6);	
 	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomGenerator());
	}
	return arr;
}

function randomGenerator(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}

resetButton.addEventListener("click",function(){
		reset();
});

