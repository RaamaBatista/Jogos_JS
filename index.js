const computer = document.getElementById('pc_resul')
const user = document.getElementById('user_resul')
const winner = document.getElementById('winner')
const sortear = document.getElementById('sortear')
sortear.addEventListener("click",sorteio)

function sorteio(){
   let rank_computer=0
   let rank_user=0

   user.innerHTML=''
   computer.innerHTML=''

   for(let i=0;i<3;i++){ 
    let drawn= Math.floor(Math.random()*5+1)
    let drawnUser= Math.floor(Math.random()*5+1)
   //  console.log(drawn)

    rank_computer+=drawn
    rank_user+=drawnUser


    computer.innerHTML+=`<img src="./assets/dice-${drawn}.png"/ >`
    user.innerHTML+=`<img src = "./assets/dice-${drawnUser}.png"/>`
   }
   winner.innerHTML= rank_computer>rank_user?"Computador Venceu!": "Jogador Venceu!"
   winner.innerHTML= rank_user>rank_computer?"Jogador Venceu!": "Computador Venceu!"
}