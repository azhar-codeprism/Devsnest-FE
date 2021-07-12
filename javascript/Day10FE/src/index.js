let tiles = document.querySelectorAll(".tile")
let isLocked = false
let isFlipped = false;
let prevCard, curCard;
let onFlip = function() {
  if (isLocked) return;
  if (this === prevCard) return;
  this.classList.add("flipped")
  if( !isFlipped ){
    isFlipped = true;
    prevCard = this;
    return;
  }
  isFlipped = false;
  curCard = this;
  check();
  }

function check(){
  let isMatch = prevCard.dataset.name === curCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}
function reset(){
  [isFlipped, isLocked] = [false, false]
  [prevCard, curCard] = [null, null]
}
function disableCards(){
  prevCard.removeEventListener("click", onFlip);
  curCard.removeEventListener("click", onFlip);
  reset();
}
function unflipCards(){
  isLocked = true;
  setTimeout(()=>{
    prevCard.classList.remove("flipped");
    curCard.classList.remove("flipped");
    reset();
  },800);
}
(function randomize(){
  tiles.forEach(tile => {
    let rndm = Math.floor(Math.random() * 12);
    tile.style.order = rndm;
  });
})();


tiles.forEach(tile => tile.addEventListener("click", onFlip));