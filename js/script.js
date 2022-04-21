/*
**Consegna**
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//-------------------------------------------------------

const field = document.querySelector('.field');
const userChoice = document.getElementById('choice').value;
init(field);
// initSec(field);
// initTerz(field);


if(userChoice === 'easy'){
  document.getElementById('play','easy').addEventListener('click', initTerz);
}else if (userChoice === 'medium'){
  document.getElementById('play','medium').addEventListener('click', initSec);
}else if(userChoice === 'hard'){
  document.getElementById('play','hard').addEventListener('click', init);
}



function init(){
   for(let i = 1; i <= 100 ; i++){
    const sq = createSquare(field, i)
    sq.addEventListener('click', function(){
      this.classList.add('clicked','even');
    })
  }
}


function initSec(){
  for(let i = 1; i <= 81 ; i++){
   const sq = createSquareSeconda(field, i)
   sq.addEventListener('click', function(){
     this.classList.add('clicked','even');
   })
 }
}


function initTerz(){
  for(let i = 1; i <= 49 ; i++){
   const sq = createSquareTerza(field, i)
   sq.addEventListener('click', function(){
     this.classList.add('clicked','even');
   })
 }
}


 function createSquare(cella, number){
    const sq = document.createElement('div');
    sq.className = 'square-100';
    sq.innerHTML = `<span>${number}</span>`
    cella.append(sq);
    return sq;
 }

 function createSquareSeconda(cella, number){
  const sq = document.createElement('div');
  sq.className = 'square-81';
  sq.innerHTML = `<span>${number}</span>`
  cella.append(sq);
  return sq;
}

function createSquareTerza(cella, number){
  const sq = document.createElement('div');
  sq.className = 'square-49';
  sq.innerHTML = `<span>${number}</span>`
  cella.append(sq);
  return sq;
}
