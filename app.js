const p1={
    display : document.querySelector("#player-1"),
    button :document.querySelector('.btn-p1')
}
const p2={
    display : document.querySelector("#player-2"),
    button :document.querySelector('.btn-p2')
}


const reset=document.querySelector(".reset");
const winScore=document.querySelector("#winScore");

let win=parseInt(document.querySelector("#winScore").value);

function updateScore(player, opponent){
    player.display.textContent=parseInt(player.display.textContent)+1;
    if(parseInt(player.display.textContent)===win)
        {
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            disableBtns();
        }
        
}

p1.button.addEventListener('click',()=>{
    updateScore(p1,p2);
});

p2.button.addEventListener('click',()=>{
    updateScore(p2,p1);
});

reset.addEventListener('click',reseting);

winScore.addEventListener('change',()=>{
    win=parseInt(document.querySelector("#winScore").value);
    reseting();
})

function reseting(){
    for(p of [p1,p2])
    {
        p.display.textContent='0';
        p.button.disabled=false;
        p.display.classList.remove('has-text-success','has-text-danger');
    }
}

function disableBtns(){
    p1.button.disabled=true;
    p2.button.disabled=true;
};