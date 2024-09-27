
let boxes=document.querySelectorAll(".box");
let reset_button=document.querySelector("#reset_button");
let new_game=document.querySelector("#new_game");
let msgcontainer=document.querySelector(".msgcontainer");
let para=document.querySelector("#msg");

let turn0=true;
let count=0;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame=()=>{
    turn0=true;
    count=0;
    enabledboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            box.style.color = "green"; // Set color to green
            turn0=false;
        }else{
            box.innerText="x";
            box.style.color = "purple"; // Set color to green
            turn0=true;
        }
        box.disabled=true;
        count++;

       let isWinner=checkwinner();
       if(count===9 && !isWinner){
        drawgame();
       }
    });
});

const drawgame=()=>{
    msg.innerText="It's Draw,Better luck next time.";
    msgcontainer.classList.remove("hide");
    disabledboxes();
};



  const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
  }
  const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
  }


 const showWinner=(winner)=>{
    msg.innerText=`Congratulations,your winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
 }; 
 
 const checkwinner=()=>{
        for(let pattern of winpatterns){
            let post1val=boxes[pattern[0]].innerText;
            let post2val=boxes[pattern[1]].innerText;
            let post3val=boxes[pattern[2]].innerText;

            if(post1val !=="" && post2val !=="" && post3val !==""){
             if( post1val==post2val && post2val==post3val){
            showWinner(post1val);
            return true;
             }   
            }
        }
    };
    

    

new_game.addEventListener("click",resetgame);
reset_button.addEventListener("click",resetgame);
