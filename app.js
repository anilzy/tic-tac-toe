let btn=document.querySelectorAll(".btn");
let newBtn=document.querySelector(".new-btn");
let msg=document.querySelector(".msg");
let box=document.querySelector(".box");

let playerX=true;

let winnerPtn=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

btn.forEach((button)=>{
button.addEventListener("click",()=>{
    if(playerX){
        button.innerText="X";
        button.style.color="blue";
        playerX=false;
    }else{
          button.innerText="O";
           button.style.color="red";
          playerX=true;
    }
    
    button.disabled=true;
    checkWinner();
})

})

let stopGame=()=>{
    btn.forEach((button)=>{
button.disabled=true;
box.classList.add("hide");
    })
}

let checkWinner=()=>{

for(ptn of winnerPtn){

let val1=btn[ptn[0]].innerText;
let val2=btn[ptn[1]].innerText;
let val3=btn[ptn[2]].innerText;

if(val1!=="" && val2!=="" && val3!==""){
    if(val1==val2 && val1==val3){

   msg.innerText=`winner is ${val1}`
   stopGame();
 
    }
  
}
}
}

let newGame=()=>{
    btn.forEach((button)=>{
box.classList.remove("hide");
msg.innerText="";
button.disabled=false;
button.innerText="";
    })
}

newBtn.addEventListener("click",()=>{
    newGame();
})