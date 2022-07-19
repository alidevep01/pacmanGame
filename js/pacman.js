const gameBoardDiv = document.querySelector(".gameBoard-div");

class PacmanGame {
  constructor(name) {
    this.name = name;
  }
  map = [
    //20 x 32 =
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  loadPacmanImages() {
    let pacmanImage1;
    pacmanImage1.backgroundImage = "url('./images/pac0.png')";

    let pacmanImage2;
    pacmanImage2.backgroundImage = "url('./images/pac1.png')";

    let pacmanImage3;
    pacmanImage3.backgroundImage = "url('./images/pac3.png')";

    let pacmanImages = [pacmanImage1, pacmanImage2, pacmanImage3, pacmanImage2];
    console.log(pacmanImages);
    // let index = 0;
    // const imgElement = document.getElementById("pacmanAnimation");
    // function change() {
    //   imgElement.src = pacmanImages[index];
    //   index > 1 ? (index = 0) : index++;
    //   window.onload = function () {
    //     setInterval(change, 1000 / 74);
    //   };
    // }
  }
  animation() {
    document.getElementById("pacmanAnimation").src;
  }
}

const pacmanGame = new PacmanGame();
console.log(pacmanGame.loadPacmanImages);

function wallMap() {
  for (let row = 0; row < pacmanGame.map.length; row++) {
    for (let column = 0; column < pacmanGame.map[row].length; column++) {
      let wall = pacmanGame.map[row][column];
      if (wall === 1) {
        const wallDiv = document.createElement("div");
        wallDiv.className = "wall";
        wallDiv.style.display = "inline-block";
        gameBoardDiv.appendChild(wallDiv);
        wallDiv.style.backgroundImage = "url('./images/wall.png')";
      } else if (wall === 0) {
        const pacDot = document.createElement("div");
        pacDot.className = "pacDot";
        pacDot.style.display = "inline-block";
        gameBoardDiv.appendChild(pacDot);
        pacDot.style.backgroundImage = "url('./images/pac-dot.png')";
      } else if (wall === 2) {
        const pacman = document.createElement("div");
        pacman.className = "pacman";
        pacman.style.display = "inline-block";
        gameBoardDiv.appendChild(pacman);
        setInterval(function () {
          pacman.style.backgroundImage = "url('./images/pac1.png')";
        }, 1000 / 75);
      } else if (wall === 3) {
        const powerPellet = document.createElement("div");
        powerPellet.className = "powerPellet";
        powerPellet.style.display = "inline-block";
        gameBoardDiv.appendChild(powerPellet);
        powerPellet.style.backgroundImage = "url('./images/power-pellet.png')";
      } else if (wall === 4) {
        const ghost = document.createElement("div");
        ghost.className = "ghost";
        ghost.style.display = "inline-block";
        gameBoardDiv.appendChild(ghost);
        ghost.style.backgroundImage = "url('./images/ghost.png')";
      } else {
        const noDiv = document.createElement("div");
        noDiv.className = "noDiv";
        noDiv.style.display = "inline-block";
        gameBoardDiv.appendChild(noDiv);
      }
    }
  }
}
wallMap();
// setInterval(wallMap(), 1000 / 75);
