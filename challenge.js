var score ,roundscore , activeplayer , gameplay;

init();
//document.querySelector('#current-' + activeplayer).textContent = dice ;

//event listener
document.querySelector('.btn-roll').addEventListener('click',function(){
   if (gameplay){
    //1. generate random number 
     var dice = Math.floor(Math.random() * 6) + 1 ; 
    //2. represent in the dice
    var  diceDom = document.querySelector('.dice') ;
     diceDom.style.display = 'block';
     diceDom.src = 'dice-' + dice +'.png';

     //3. add the roundscore untill 1 comes
     if ( dice !== 1){
     roundscore += dice;
     document.querySelector('#current-' + activeplayer).textContent = roundscore
     }
     else if ( dice == 1){
        nextplayer();
     }
     
   } 

})

document.querySelector('.btn-hold').addEventListener('click',function(){

    if (gameplay) {
    //1. add roundscore to score array 
      score[activeplayer] += roundscore;
    //2. update in the UI
      document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];
    //3.check if the person won 
      if (score[activeplayer] >= 20){
          document.querySelector('#name-' + activeplayer).textContent = 'WINNER!';
          document.querySelector('.dice').style.display = 'none';
          document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
          document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
          gameplay = false;
      }
      else{
         nextplayer(); 
        }
    }
      
})

function nextplayer(){

    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0 ;
     roundscore = 0;
     document.querySelector('#current-0').textContent = '0';
     document.querySelector('#current-1').textContent = '0';
     
     if (activeplayer == 0){
        document.querySelector('.player-0-panel').classList.add('active');
     document.querySelector('.player-1-panel').classList.remove('active');
     }
     else if ( activeplayer == 1) {
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');

     }
     
     document.querySelector('.dice').style.display= 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);



function init(){
    //set the start values to zero 
    score=[0,0];
    roundscore=0;
    activeplayer=0;
    gameplay= true;
    
    document.getElementById('score-0').textContent ='0';
    document.getElementById('score-1').textContent ='0';
    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';
    // dont displat dice at start
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent ='PLAYER 1';
    document.getElementById('name-1').textContent ='PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}