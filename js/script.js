const container = document.querySelector('.container');

// Creating grid with player input
function gridMapping(squareGrid) {
  for (let i = 0; i < squareGrid; i++) {
    let div = document.createElement('div');
    div.className = 'element';
    div.style.width = `${640 / Math.sqrt(squareGrid)}px`;
    div.style.height = `${640 / Math.sqrt(squareGrid)}px`;
    container.appendChild(div);
  }
  
  const pixels = document.querySelectorAll('.element');
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = 'navy';
    })
  })
};

// Player input
const choose = document.querySelector('#choose');
choose.addEventListener('click', function() {
  let size = prompt('Pick a size.');
  let squareGrid = Number(size) ** 2;
  console.log(squareGrid);
  gridMapping(squareGrid);
});

// Resetting the grid
const reset = document.querySelector('.reset');
reset.addEventListener('click', function() {
  const pixels = document.querySelectorAll('.element');
  const divs = document.querySelectorAll('div');
  pixels.forEach(pixel => {
    pixel.style.backgroundColor = '#fff';
  })
})

// Resetting the game
const resetGame = document.querySelector('#reset-game');
resetGame.addEventListener('click', function() {
  
  const divs = document.querySelectorAll('.container div');
  console.log(divs);
  divs.forEach(div => {
    div.style.display = 'none';
  })
})

