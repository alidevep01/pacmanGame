const gameBoardDiv = document.querySelector(".gameBoard-div");

//pacdot = 0
// wall = 1
//pacman = 2
//power-pellet = 3
//ghost = 4
const board = [
  //20 x 32 =
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0,
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
  0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,
  0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0,
  1, 0, 1, 0, 1, 0, 1, 4, 4, 4, 4, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0,
  1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 3, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const loadPacmanImages = () => {
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
};
const animation = () => {
  document.getElementById("pacmanAnimation").src;
};

//find index of pacman = 28
// for (let i = 0; i < pacmanGame.board.length; i++) {
//   if (pacmanGame.board[i] === 2) {
//     let index = pacmanGame.board.findIndex((pacman = (e) => e == 2));
//     console.log(pacmanGame.board[i] + index);
//   }
//   // console.log(pacmanGame.board[i][j] + " " + pacmanGame.board[i][j].length);
// }

function wallboard() {
  for (let row = 0; row < board.length; row++) {
    let wall = board[row];
    if (wall === 1) {
      let wallDiv = document.createElement("div");
      wallDiv.className = "wall";
      wallDiv.style.display = "inline-block";
      gameBoardDiv.appendChild(wallDiv);
      wallDiv.style.backgroundImage = "url('./images/wall.png')";
    } else if (wall === 0) {
      let pacDot = document.createElement("div");
      pacDot.className = "pacDot";
      pacDot.style.display = "inline-block";
      gameBoardDiv.appendChild(pacDot);
      pacDot.style.backgroundImage = "url('./images/pac-dot.png')";
    } else if (wall === 2) {
      let pacman = document.createElement("div");
      pacman.className = "pacman";
      pacman.style.display = "inline-block";
      gameBoardDiv.appendChild(pacman);
      setInterval(function () {
        pacman.style.backgroundImage = "url('./images/pac1.png')";
      }, 1000 / 75);
    } else if (wall === 3) {
      let powerPellet = document.createElement("div");
      powerPellet.className = "powerPellet";
      powerPellet.style.display = "inline-block";
      gameBoardDiv.appendChild(powerPellet);
      powerPellet.style.backgroundImage = "url('./images/power-pellet.png')";
    } else if (wall === 4) {
      let ghost = document.createElement("div");
      ghost.className = "ghost";
      ghost.style.display = "inline-block";
      gameBoardDiv.appendChild(ghost);
      ghost.style.backgroundImage = "url('./images/ghost.png')";
    } else {
      let noDiv = document.createElement("div");
      noDiv.className = "noDiv";
      noDiv.style.display = "inline-block";
      gameBoardDiv.appendChild(noDiv);
    }
  }
}
wallboard();
// setInterval(wallboard(), 1000 / 75);

// move pacman
// left = 37
// up = 38
// right = 39
// down = 40
let pacmanIndex = 26;
let grid = 20;

// function movePacman(e) {
//   //   pacman.classList.remove("pacman");
//   if (e.key === "37") {
//     console.log(e);
//     console.log(e.key);
//     return pacmanIndex - 1;
//   }
//   //   pacman.classList.add("pacman");
// }
let index;
board.forEach((element, index) => {
  if (element === 2) {
    console.log(element + " " + index);
    return index;
  }
});
console.log(index);
console.log(board[26]);

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      console.log("Left key is pressed.");
      //decrement pacmanIndex by 1(to index 25)
      //switch element on index 25 and 26
      let pacmanCurrentPosition = board[pacmanIndex]; //26(pacman)
      let newPosition = board[pacmanIndex - 1]; //25(pacdot)
      newPosition = pacmanCurrentPosition;
      //currentposition = board[pacmanIndex]
      //board[pacmanIndex--]
      console.log(pacmanCurrentPosition);
      console.log(newPosition);

      index--;

      break;
    case "ArrowUp":
      console.log("Up key is pressed.");
      break;
    case "ArrowRight":
      console.log("Right key is pressed.");
      break;
    case "ArrowDown":
      console.log("Down key is pressed.");
      break;
  }

  //   console.log(event);
  //   console.log(event.key);
});

// document.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "ArrowLeft":
//       console.log("Left key is pressed.");
//       if (brickMap[packMan.Y][packMan.X - 1] !== 1) {
//         if (brickMap[packMan.Y][packMan.X - 1] === dot) {
//           //increment score or what ever
//         }
//         brickMap[PackMan.Y][packMan.X] = //what ever is an empty black square
//           packMan.X--;
//         brickMan[packMan.Y][packMan.X] = 2; //packman
//       }
//   }
// });
