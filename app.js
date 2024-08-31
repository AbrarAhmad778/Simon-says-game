let userSeq = [];
let gameSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let body = document.querySelector("body");
let color = ["red","green","yellow","blue"];

let allBtn = document.querySelectorAll(".block");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});


function btnFlash(btn){
    if(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
}

function userFlash(btn){
    if(btn){
    btn.classList.add("goblin");
    setTimeout(function(){
        btn.classList.remove("goblin");
    },300);
}
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randClr = Math.floor(Math.random()*4);
    let randBtn = color[randClr];
    gameSeq.push(randBtn);
    console.log(gameSeq);
    
    let randbox = document.querySelector(`.${randBtn}`);
    btnFlash(randbox);

}


function checkAns(idx){
   
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);

        }


    }
    else{
        h2.innerHTML=`Game over!Your score was <b>${level}</b><br> Refresh the page to start`;
        
    reset();
    }
}

function btnPress(){
    let btn = this;
    console.log("Button was pressed");
   let color = btn.getAttribute("id");
   userSeq.push(color);
    console.log(btn);
    userFlash(btn);
    checkAns(userSeq.length-1);
}

for( let btn of allBtn){
    btn.addEventListener("click",btnPress);    
}


function reset(){
    level=0;
    gameSeq = [];
    userSeq = [];
    started=false;
   

}


