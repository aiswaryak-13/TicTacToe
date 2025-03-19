let buttons = document.querySelectorAll(".btn");
let resetButton = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let count = 0;


let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");



let turnO = true; //playerX-playerO




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


//fourth
const disableButtons=()=>{
  for(let button of buttons){
    button.disabled = true;
  }
}


//sixth
const enableButtons=()=>{
  for(let button of buttons){
    button.disabled = false;
    button.innerText="";
  }
}


//fifth
const resetGame=()=>{
  turnO = true;
  enableButtons();
  msgContainer.classList.add("hide");
};

//third
const showWinner =()=>{
  msg.innerHTML = `<p class="msg"> Congratulations, Winner is <span> ${winner} </span> </p>`;
  msgContainer.classList.remove("hide");
  disableButtons();
};



//second
const checkWinner=()=>{
  for(let pattern of winPatterns)
  {
    let pos1Val = buttons[pattern[0]].innerText;
    let pos2Val = buttons[pattern[1]].innerText;
    let pos3Val = buttons[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != "")
    {
      if(pos1Val === pos2Val && pos2Val === pos3Val)
      {
        winner=pos1Val;
        showWinner(winner);
      }
    }
  }
  if(count>=9)
    {
    msg.innerHTML = `<p class="msg">It's a Tie! Play Again.</p>`;
    msgContainer.classList.remove("hide");
    }
}

//first
buttons.forEach((button)=>{

  button.addEventListener("click",()=>{
    if(turnO)
    {
      button.innerText="O";
      button.style.color="black"
      turnO=false;
    }else
    {
      button.innerText="X";
      button.style.color="red"
      turnO=true;
    }
    button.disabled=true;

    checkWinner();
  })

});

newBtn.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);
