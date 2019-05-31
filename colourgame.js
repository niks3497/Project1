var numofsquare=6;
var colors=generateRandomColor(numofsquare);

var squares=document.querySelectorAll(".square");
var pickcolor=picktheColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");


easybtn.addEventListener("click",function(){
        hardbtn.classList.remove("selected");
        easybtn.classList.add("selected");
        numofsquare=3;
        colors=generateRandomColor(numofsquare);
        pickcolor=picktheColor();
        colorDisplay.textContent=pickcolor;
        for(var i=0;i<squares.length;i++){
            if(colors[i]){
                squares[i].style.backgroundColor=colors[i];
            }else{
                squares[i].style.display="none";
            }
        }
 });

 hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numofsquare=6;
    colors=generateRandomColor(numofsquare);
    pickcolor=picktheColor();
    colorDisplay.textContent=pickcolor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
     }
});



resetButton.addEventListener("click",function(){
     colors=generateRandomColor(numofsquare);
     pickcolor=picktheColor();
     colorDisplay.textContent=pickcolor;
     this.textContent="New Colors";
     messageDisplay.textContent="";
     for(var i=0;i<squares.length;i++){
         squares[i].style.backgroundColor=colors[i];
     }
     h1.style.backgroundColor="steelblue";
});

colorDisplay.textContent=pickcolor;

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];


    squares[i].addEventListener("click",function(){
       var clickecolour=this.style.backgroundColor;

       if(clickecolour===pickcolor){
           messageDisplay.textContent="Correct!";
           resetButton.textContent="Play Again?";
           changeColor(clickecolour);
           h1.style.backgroundColor=pickcolor;
       }else{
           this.style.backgroundColor="#232323";
           messageDisplay.textContent="Try Again !"
        //    alert("wrong ");
       }
    });

}

function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function picktheColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
    var arr=[];
     
    for(var i=0;i<num;i++){
       arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}