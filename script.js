var timer=60;

var hit;
var score=0;


function bubble(){
    var clutter ="";
    

    for(var i=1;i<=78;i++){
        clutter +=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector("#pbtm").innerHTML= clutter;
}
// console.log(clutter);



function runTimer(){
   var timeInt= setInterval(function(){
        if(timer>0){

            timer--;
            
            document.querySelector("#time").textContent=timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML=`<h1 id="final">Your Score is :${score} </h1>
            
            <button id="retry">Play Again</buton>`;
            document.querySelector("#retry").addEventListener('click', function () {
                timer = 60;
                score = 0;
                document.querySelector("#score").textContent = score;
                bubble();
                runTimer();
            });
            
            
            
            

        }
    },1000);

}

function getNewHit(){
    hit=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hit;
    // setInterval(function(){

    // },2000);

}
function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum=Number(dets.target.textContent);
    // console.log(clickedNum)
    if(clickedNum===hit){
   
        increaseScore();
        bubble();
        getNewHit();
    }
});

// increaseScore();
bubble();
getNewHit();
runTimer();

