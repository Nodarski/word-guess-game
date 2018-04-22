//Word bank
function init(){

    words0=['art','car','bus','earth','camera','phone','sun','light','number',];
 
 
    df=document.forms[0];
    df.reset();
 
 df[1].onclick=function() {
 
    rnd0=Math.floor(Math.random()*words0.length);
 
 
    df[0].value=words0[rnd0];
 
   }
  }
    window.addEventListener?
    window.addEventListener('load',init,false):
    window.attachEvent('onload',init);
//select random word
 
//spell out the word

//guess a letter

//check if letter is in the word

//if correct reveal the letter in the word
//else minus one try and add the letter to the wrong box

//when game is over
    //if win play good song
    //if lose go to youtube, rickroll, new tab
    //restart the game




