let gameseq = [];
let userseq =[];

let btns = ["red" , "purple" , "green" , "yellow"];

let started = false;
let level =0 ;



document.addEventListener("keypress" , function(){           //to start the game
    if(started == false){
        console.log("game started");
        started = true;

        levelup();
    }
})

function gameflash(btn){                   //flash color  by the gamepress
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },500);
}
function userflash(btn){                        //which flash color chnge by the user press
    btn.classList.add("userbtnflash");
    setTimeout(function(){
        btn.classList.remove("userbtnflash")
    },200);
}

let h3 = document.querySelector("h3");
let h2= document.querySelector("h2");

function levelup(){             //to level up when user press the right btns
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randomno = Math.floor(Math.random() *3);
    let rancolor = btns[randomno];
    let ranBtn = document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log(gameseq);
    gameflash(ranBtn);
}

function checkans(idx){                            //to check that the seq of use and seq of game is must be same or game over
    if(gameseq[idx] === userseq[idx]){
        if(gameseq.length == userseq.length){
            setTimeout(levelup(), 8000);
        }
    }else{
        h3.innerHTML = `game over! press any key to restart <br> </br>highest score ${level}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "rgb(218, 207, 207)"
        },200);
        reset();
    }
}

function btnpress(){    //what happen when use click the btn
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");    //uhen user prees the button
for(btn of allbtn){
    btn.addEventListener("click" , btnpress);
}

function reset(){            //to reset the game
    started = false;
    gameseq =[];
    userseq = [];
    level = 0;
}