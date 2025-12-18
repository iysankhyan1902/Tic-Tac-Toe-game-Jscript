let boxes=document.querySelectorAll('.box');
let resetButton=document.querySelector('#reset-button');
let newGameButton=document.querySelector('#new-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');


let turnO= true;//player X,player O
let count=0;

const winPatterns=[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
];

const disableBoxes=()=>{
     for(let box of boxes)
     {
          box.disabled=true;
     }
}
const enableBoxes=()=>{
     for(let box of boxes)
     {
          box.disabled=false;
          box.innerText="";
     }
}


const resetGame=()=>{
     turnO=true;
     enableBoxes();
     msgContainer.classList.add("hide");
}


const showWinner=(winner)=>{
     msg.innerText=`Congratulations,winner is ${winner}`;
     msgContainer.classList.remove("hide");
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
          console.log("Winner:", pos1Val);
          disableBoxes();
          showWinner(pos1Val);
        }
    }
};

const drawGame=()=>{
     msg.innerText=`It's a Draw!`;
     msgContainer.classList.remove("hide");
};

boxes.forEach((box)=>{
     box.addEventListener("click",()=>{console.log("box was clicked");
     if(turnO){
          box.innerText="O";
          turnO=false;
     }else{
          box.innerText="X";
          turnO=true;
     }
     box.disabled=true
     count++;

     let isWinner=checkWinner();

     if(count===9 && !isWinner){
          drawGame();
     }
})});

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);


