let gameSeq = [];
let userSeq = [];
let color = ["red", "yellow", "green", "purple"];
let h2 = document.querySelector('h2');
let started = false;
let level = 0;
let body = document.querySelector('body');

function gameStart(){
    if (started == false) {
        console.log("Start")
        started = true;
        levelup();
    }
}
document.addEventListener("keypress",gameStart);
document.addEventListener("dblclick",gameStart);

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function gameRest(){
    body.classList.add('end');
    setTimeout(function () {
        body.classList.remove("end");
    }, 250);
    h2.innerHTML = `Game Over Your Current Score is ${level} <br>Press Any Key to Start the Game`;
        started = false;
        level = 0;
        gameSeq = [];
        userSeq = [];
}

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(function(){
                levelup();
            },500);
        }
    }
    else{
        gameRest();
    }
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerHTML = `Level ${level}`;
    let ranIndex = Math.floor(Math.random() * 4);
    let ranColor = color[ranIndex];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(ranBtn);
}
let btns = document.querySelectorAll('#inbtn');

function btnPress(){
    userFlash(this);
    userSeq.push(this.classList[0]);
    checkAns(userSeq.length-1);
}
for(btn of btns){
    btn.addEventListener("click",btnPress)
}
