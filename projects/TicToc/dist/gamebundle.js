/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const template = document.createElement('template');
template.innerHTML = `
 <style>
      h2{
        color: purple;
      }
      @import url(https://fonts.googleapis.com/css?family=Pacifico|Open+Sans:300);
* {
  padding: 0;
  border: 0;
  margin: 0;
  vertical-align: middle;
  box-sizing: border-box;
  font-family: Open Sans, Arial;
}
body {
  height: 100%;
  color: #f7f7f7;
  background-color: #333;
}
header {
  padding: 32px 0;
  color: #f7f7f7;
  font-family: 'Pacifico';
  font-size: 48px;
}
.text-center {
  text-align: center;
}
.center {
  margin: 0 auto;
}

.scorebox {
  display: inline-block;
  position: relative;
  width: 100px;
  border: 2px solid #f7f7f7;
  border-radius: 8px;
  margin: 0 16px;
  font-size: 24px;
  text-align: right;
  cursor:pointer;
}
#x-part:before, #o-part:before {
  position: absolute;
  top: 4px;
  left: 8px;
}
#x-part:before {
  content: 'X';
}
#o-part:before {
  content: 'O';
}
.score {
  padding: 4px;
}
#log {
  padding: 16px 0;
}
table {
  border-collapse: collapse;
  margin: 0 auto;
}
td {
  border: 2px solid #f7f7f7;
  border-collapse: collapse;
  width: 96px;
  height: 96px;
  text-align: center;
  font-size: 48px;
}
#ctrl {
  padding: 16px 0;
}
#reset-btn {
  color: #f7f7f7;
  font-size: 24px;
  background-color: inherit;
  padding: 4px 16px;
  border: 2px solid #f7f7f7;;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
}
#reset-btn:active {
  opacity: 0.5;
}
footer {
  color: #fff;
  text-align: center;
  padding-top: 16px;
}
footer > a {
  color: #2abced;
  text-decoration: none;
}
    </style>
    <header class="text-center">Tic-Toc-Toe</header>
    
    `;
let playerMark, comMark, playerScore = 0, comScore = 0, 
// playerChoice,
winner;
// test;
// --------- define functions here
let tttArr = [null, null, null, null, null, null, null, null, null];
function display(id, val) {
    const idd = document.getElementById(id);
    idd.innerHTML = val;
}
function displayttt() {
    for (let i = 0, len = tttArr.length; i < len; i++) {
        if (tttArr[i] == null) {
            document.getElementsByClassName("grid")[i].innerHTML = '';
        }
        else {
            const grid = document.getElementsByClassName("grid")[i];
            grid.innerHTML = tttArr[i];
        }
    }
}
function isOver() {
    if (tttArr[0] == playerMark && tttArr[1] == playerMark && tttArr[2] == playerMark) {
        winner = "player";
        return true;
    }
    else if (tttArr[3] == playerMark && tttArr[4] == playerMark && tttArr[5] == playerMark) {
        winner = "player";
        return true;
    }
    else if (tttArr[6] == playerMark && tttArr[7] == playerMark && tttArr[8] == playerMark) {
        winner = "player";
        return true;
    }
    else if (tttArr[0] == playerMark && tttArr[3] == playerMark && tttArr[6] == playerMark) {
        winner = "player";
        return true;
    }
    else if (tttArr[1] == playerMark && tttArr[4] == playerMark && tttArr[7] == playerMark) {
        winner = "player";
        return true;
    }
    else if (tttArr[2] == playerMark && tttArr[5] == playerMark && tttArr[8] == playerMark) {
        winner = "player";
        return true;
    }
    else if (tttArr[0] == playerMark && tttArr[4] == playerMark && tttArr[8] == playerMark) {
        winner = "player";
        return true;
    }
    else if (tttArr[2] == playerMark && tttArr[4] == playerMark && tttArr[6] == playerMark) {
        winner = "player";
        return true;
    }
    else if (tttArr[0] == comMark && tttArr[1] == comMark && tttArr[2] == comMark) {
        winner = "com";
        return true;
    }
    else if (tttArr[3] == comMark && tttArr[4] == comMark && tttArr[5] == comMark) {
        winner = "com";
        return true;
    }
    else if (tttArr[6] == comMark && tttArr[7] == comMark && tttArr[8] == comMark) {
        winner = "com";
        return true;
    }
    else if (tttArr[0] == comMark && tttArr[3] == comMark && tttArr[6] == comMark) {
        winner = "com";
        return true;
    }
    else if (tttArr[1] == comMark && tttArr[4] == comMark && tttArr[7] == comMark) {
        winner = "com";
        return true;
    }
    else if (tttArr[2] == comMark && tttArr[5] == comMark && tttArr[8] == comMark) {
        winner = "com";
        return true;
    }
    else if (tttArr[0] == comMark && tttArr[4] == comMark && tttArr[8] == comMark) {
        winner = "com";
        return true;
    }
    else if (tttArr[2] == comMark && tttArr[4] == comMark && tttArr[6] == comMark) {
        winner = "com";
        return true;
    }
    else if (tttArr[0] !== null && tttArr[1] !== null && tttArr[2] !== null && tttArr[3] !== null && tttArr[4] !== null && tttArr[5] !== null && tttArr[6] !== null && tttArr[7] !== null && tttArr[8] !== null) {
        winner = "draw";
        return true;
    }
    return false;
}
function result() {
    switch (winner) {
        case 'player':
            display("log", "Player Win");
            playerScore += 1;
            display(playerMark + "-score", playerScore);
            break;
        case 'com':
            display("log", "Com Win");
            comScore += 1;
            display(comMark + "-score", comScore);
            break;
        case 'draw':
            display("log", "Draw");
            break;
    }
    for (let i = 0, len = tttArr.length; i < len; i++) {
        const grid = document.getElementsByClassName("grid")[i];
        grid.onclick = function () {
            console.log('disalbed');
        };
    }
}
function comPhase() {
    function isMatchpoint(type) {
        if (tttArr[0] == null) {
            if (tttArr[1] == type && tttArr[2] == type) {
                return 0;
            }
            if (tttArr[3] == type && tttArr[6] == type) {
                return 0;
            }
            if (tttArr[4] == type && tttArr[8] == type) {
                return 0;
            }
        }
        if (tttArr[1] == null) {
            if (tttArr[0] == type && tttArr[2] == type) {
                return 1;
            }
            if (tttArr[4] == type && tttArr[7] == type) {
                return 1;
            }
        }
        if (tttArr[2] == null) {
            if (tttArr[0] == type && tttArr[1] == type) {
                return 2;
            }
            if (tttArr[5] == type && tttArr[8] == type) {
                return 2;
            }
            if (tttArr[4] == type && tttArr[6] == type) {
                return 2;
            }
        }
        if (tttArr[3] == null) {
            if (tttArr[0] == type && tttArr[6] == type) {
                return 3;
            }
            if (tttArr[4] == type && tttArr[5] == type) {
                return 3;
            }
        }
        if (tttArr[4] == null) {
            if (tttArr[1] == type && tttArr[7] == type) {
                return 4;
            }
            if (tttArr[3] == type && tttArr[5] == type) {
                return 4;
            }
            if (tttArr[0] == type && tttArr[8] == type) {
                return 4;
            }
            if (tttArr[2] == type && tttArr[6] == type) {
                return 4;
            }
        }
        if (tttArr[5] == null) {
            if (tttArr[2] == type && tttArr[8] == type) {
                return 5;
            }
            if (tttArr[3] == type && tttArr[4] == type) {
                return 5;
            }
        }
        if (tttArr[6] == null) {
            if (tttArr[0] == type && tttArr[3] == type) {
                return 6;
            }
            if (tttArr[7] == type && tttArr[8] == type) {
                return 6;
            }
            if (tttArr[2] == type && tttArr[4] == type) {
                return 6;
            }
        }
        if (tttArr[7] == null) {
            if (tttArr[1] == type && tttArr[4] == type) {
                return 7;
            }
            if (tttArr[6] == type && tttArr[8] == type) {
                return 7;
            }
        }
        if (tttArr[8] == null) {
            if (tttArr[2] == type && tttArr[5] == type) {
                return 8;
            }
            if (tttArr[6] == type && tttArr[7] == type) {
                return 8;
            }
            if (tttArr[0] == type && tttArr[4] == type) {
                return 8;
            }
        }
        return '0';
    }
    function isWining(type) {
        if (tttArr[0] == null) {
            if (tttArr[2] == type && tttArr[8] == type) {
                return 0;
            }
            if (tttArr[6] == type && tttArr[8] == type) {
                return 0;
            }
            if (tttArr[1] == type && tttArr[4] == type) {
                return 0;
            }
            if (tttArr[3] == type && tttArr[4] == type) {
                return 0;
            }
        }
        if (tttArr[2] == null) {
            if (tttArr[0] == type && tttArr[6] == type) {
                return 2;
            }
            if (tttArr[6] == type && tttArr[8] == type) {
                return 2;
            }
            if (tttArr[1] == type && tttArr[4] == type) {
                return 2;
            }
            if (tttArr[4] == type && tttArr[5] == type) {
                return 2;
            }
        }
        if (tttArr[6] == null) {
            if (tttArr[0] == type && tttArr[2] == type) {
                return 6;
            }
            if (tttArr[2] == type && tttArr[8] == type) {
                return 6;
            }
            if (tttArr[3] == type && tttArr[4] == type) {
                return 6;
            }
            if (tttArr[4] == type && tttArr[7] == type) {
                return 6;
            }
        }
        if (tttArr[8] == null) {
            if (tttArr[0] == type && tttArr[2] == type) {
                return 8;
            }
            if (tttArr[0] == type && tttArr[6] == type) {
                return 8;
            }
            if (tttArr[4] == type && tttArr[5] == type) {
                return 8;
            }
            if (tttArr[4] == type && tttArr[7] == type) {
                return 8;
            }
        }
    }
    if (typeof isMatchpoint(comMark) === "number") {
        //  console.log(isMatchpoint(comMark));
        // console.log( typeof isMatchpoint(comMark));
        tttArr[isMatchpoint(comMark)] = comMark;
    }
    else if (typeof isMatchpoint(playerMark) === "number") {
        tttArr[isMatchpoint(playerMark)] = comMark;
    }
    else if (typeof isWining(comMark) === "number") {
        tttArr[isMatchpoint(comMark)] = comMark;
    }
    else {
        if (Math.random() > 0.5 && tttArr[4] === null) {
            tttArr[4] = comMark;
        }
        else if (tttArr[0] == null || tttArr[2] == null || tttArr[6] == null || tttArr[8] == null) {
            if (tttArr[0] == null) {
                tttArr[0] = comMark;
            }
            else if (tttArr[2] == null) {
                tttArr[2] = comMark;
            }
            else if (tttArr[6] == null) {
                tttArr[6] = comMark;
            }
            else if (tttArr[8] == null) {
                tttArr[8] = comMark;
            }
        }
        else {
            if (tttArr[1] == null) {
                tttArr[1] = comMark;
            }
            else if (tttArr[3] == null) {
                tttArr[3] = comMark;
            }
            else if (tttArr[5] == null) {
                tttArr[5] = comMark;
            }
            else if (tttArr[7] == null) {
                tttArr[7] = comMark;
            }
        }
    }
    displayttt();
    if (isOver()) {
        result();
    }
    else {
        for (let i = 0, len = tttArr.length; i < len; i++) {
            if (tttArr[i] == null) {
                const grid = document.getElementsByClassName("grid")[i];
                grid.onclick = function () {
                    tttArr[i] = playerMark;
                    displayttt();
                    if (isOver()) {
                        result();
                    }
                    else {
                        comPhase();
                    }
                };
            }
        }
    }
}
function click(index) {
    if (tttArr[index] == null) {
        const grid = document.getElementsByClassName("grid")[index];
        grid.onclick = function () {
            tttArr[index] = playerMark;
            displayttt();
            if (isOver()) {
                result();
            }
            else {
                comPhase();
            }
        };
    }
    // else {
    //   const grid =  document.getElementsByClassName("grid")[index] as HTMLTableElement;
    //  grid.onclick = function() {};
    // }
}
class EmployeeCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.initial();
        //  this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        //  this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');   
    }
    initial() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        for (let i = 0, len = document.getElementsByClassName("grid").length; i < len; i++) {
            document.getElementsByClassName("grid")[i].innerHTML = '';
        }
        const xPart = document.getElementById("x-part");
        xPart.onclick = function () {
            playerMark = 'X';
            comMark = 'O';
            display("log", "It's your turn");
            comPhase();
        };
        const oPart = document.getElementById("o-part");
        oPart.onclick = function () {
            playerMark = 'O';
            comMark = 'X';
            display("log", "It's your turn");
            comPhase();
        };
        const resetButton = document.getElementById("reset-btn");
        resetButton.onclick = function () {
            //alert('reset game');
            location.reload();
            //this.initial();
            tttArr = [null, null, null, null, null, null, null, null, null];
            for (let i = 0, len = tttArr.length; i < len; i++) {
                click(i);
            }
            display("log", "New round");
            //this.initial();
        };
    }
    connectedCallback() {
        this.h3 = this.getAttribute("name");
        this.render();
    }
    render() {
        this.h3;
    }
}
window.customElements.define('employee-card', EmployeeCard);
// playerMark: any,
// comMark: any,
// playerScore = 0,
// comScore = 0,
// playerChoice,
// winner: any,
// test;
/***Main***/

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsU0FBUztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXR0ZWxhbmQubWlncmF0aW5ndG90eXBlc2NyaXB0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiA8c3R5bGU+XG4gICAgICBoMntcbiAgICAgICAgY29sb3I6IHB1cnBsZTtcbiAgICAgIH1cbiAgICAgIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QYWNpZmljb3xPcGVuK1NhbnM6MzAwKTtcbioge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgQXJpYWw7XG59XG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2Y3ZjdmNztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDMycHggMDtcbiAgY29sb3I6ICNmN2Y3Zjc7XG4gIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nO1xuICBmb250LXNpemU6IDQ4cHg7XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zY29yZWJveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmN2Y3Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGN1cnNvcjpwb2ludGVyO1xufVxuI3gtcGFydDpiZWZvcmUsICNvLXBhcnQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogOHB4O1xufVxuI3gtcGFydDpiZWZvcmUge1xuICBjb250ZW50OiAnWCc7XG59XG4jby1wYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdPJztcbn1cbi5zY29yZSB7XG4gIHBhZGRpbmc6IDRweDtcbn1cbiNsb2cge1xuICBwYWRkaW5nOiAxNnB4IDA7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxudGQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjdmN2Y3O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cbiNjdHJsIHtcbiAgcGFkZGluZzogMTZweCAwO1xufVxuI3Jlc2V0LWJ0biB7XG4gIGNvbG9yOiAjZjdmN2Y3O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjdmN2Y3OztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jcmVzZXQtYnRuOmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbmZvb3RlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuZm9vdGVyID4gYSB7XG4gIGNvbG9yOiAjMmFiY2VkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4gICAgPC9zdHlsZT5cbiAgICA8aGVhZGVyIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5UaWMtVG9jLVRvZTwvaGVhZGVyPlxuICAgIFxuICAgIGA7XG5sZXQgcGxheWVyTWFyaywgY29tTWFyaywgcGxheWVyU2NvcmUgPSAwLCBjb21TY29yZSA9IDAsIFxuLy8gcGxheWVyQ2hvaWNlLFxud2lubmVyO1xuLy8gdGVzdDtcbi8vIC0tLS0tLS0tLSBkZWZpbmUgZnVuY3Rpb25zIGhlcmVcbmxldCB0dHRBcnIgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG5mdW5jdGlvbiBkaXNwbGF5KGlkLCB2YWwpIHtcbiAgICBjb25zdCBpZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWRkLmlubmVySFRNTCA9IHZhbDtcbn1cbmZ1bmN0aW9uIGRpc3BsYXl0dHQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHR0dEFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodHR0QXJyW2ldID09IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJncmlkXCIpW2ldLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJncmlkXCIpW2ldO1xuICAgICAgICAgICAgZ3JpZC5pbm5lckhUTUwgPSB0dHRBcnJbaV07XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBpc092ZXIoKSB7XG4gICAgaWYgKHR0dEFyclswXSA9PSBwbGF5ZXJNYXJrICYmIHR0dEFyclsxXSA9PSBwbGF5ZXJNYXJrICYmIHR0dEFyclsyXSA9PSBwbGF5ZXJNYXJrKSB7XG4gICAgICAgIHdpbm5lciA9IFwicGxheWVyXCI7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0dHRBcnJbM10gPT0gcGxheWVyTWFyayAmJiB0dHRBcnJbNF0gPT0gcGxheWVyTWFyayAmJiB0dHRBcnJbNV0gPT0gcGxheWVyTWFyaykge1xuICAgICAgICB3aW5uZXIgPSBcInBsYXllclwiO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHR0QXJyWzZdID09IHBsYXllck1hcmsgJiYgdHR0QXJyWzddID09IHBsYXllck1hcmsgJiYgdHR0QXJyWzhdID09IHBsYXllck1hcmspIHtcbiAgICAgICAgd2lubmVyID0gXCJwbGF5ZXJcIjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR0dEFyclswXSA9PSBwbGF5ZXJNYXJrICYmIHR0dEFyclszXSA9PSBwbGF5ZXJNYXJrICYmIHR0dEFycls2XSA9PSBwbGF5ZXJNYXJrKSB7XG4gICAgICAgIHdpbm5lciA9IFwicGxheWVyXCI7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0dHRBcnJbMV0gPT0gcGxheWVyTWFyayAmJiB0dHRBcnJbNF0gPT0gcGxheWVyTWFyayAmJiB0dHRBcnJbN10gPT0gcGxheWVyTWFyaykge1xuICAgICAgICB3aW5uZXIgPSBcInBsYXllclwiO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHR0QXJyWzJdID09IHBsYXllck1hcmsgJiYgdHR0QXJyWzVdID09IHBsYXllck1hcmsgJiYgdHR0QXJyWzhdID09IHBsYXllck1hcmspIHtcbiAgICAgICAgd2lubmVyID0gXCJwbGF5ZXJcIjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR0dEFyclswXSA9PSBwbGF5ZXJNYXJrICYmIHR0dEFycls0XSA9PSBwbGF5ZXJNYXJrICYmIHR0dEFycls4XSA9PSBwbGF5ZXJNYXJrKSB7XG4gICAgICAgIHdpbm5lciA9IFwicGxheWVyXCI7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0dHRBcnJbMl0gPT0gcGxheWVyTWFyayAmJiB0dHRBcnJbNF0gPT0gcGxheWVyTWFyayAmJiB0dHRBcnJbNl0gPT0gcGxheWVyTWFyaykge1xuICAgICAgICB3aW5uZXIgPSBcInBsYXllclwiO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHR0QXJyWzBdID09IGNvbU1hcmsgJiYgdHR0QXJyWzFdID09IGNvbU1hcmsgJiYgdHR0QXJyWzJdID09IGNvbU1hcmspIHtcbiAgICAgICAgd2lubmVyID0gXCJjb21cIjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR0dEFyclszXSA9PSBjb21NYXJrICYmIHR0dEFycls0XSA9PSBjb21NYXJrICYmIHR0dEFycls1XSA9PSBjb21NYXJrKSB7XG4gICAgICAgIHdpbm5lciA9IFwiY29tXCI7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0dHRBcnJbNl0gPT0gY29tTWFyayAmJiB0dHRBcnJbN10gPT0gY29tTWFyayAmJiB0dHRBcnJbOF0gPT0gY29tTWFyaykge1xuICAgICAgICB3aW5uZXIgPSBcImNvbVwiO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHR0QXJyWzBdID09IGNvbU1hcmsgJiYgdHR0QXJyWzNdID09IGNvbU1hcmsgJiYgdHR0QXJyWzZdID09IGNvbU1hcmspIHtcbiAgICAgICAgd2lubmVyID0gXCJjb21cIjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR0dEFyclsxXSA9PSBjb21NYXJrICYmIHR0dEFycls0XSA9PSBjb21NYXJrICYmIHR0dEFycls3XSA9PSBjb21NYXJrKSB7XG4gICAgICAgIHdpbm5lciA9IFwiY29tXCI7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0dHRBcnJbMl0gPT0gY29tTWFyayAmJiB0dHRBcnJbNV0gPT0gY29tTWFyayAmJiB0dHRBcnJbOF0gPT0gY29tTWFyaykge1xuICAgICAgICB3aW5uZXIgPSBcImNvbVwiO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHR0QXJyWzBdID09IGNvbU1hcmsgJiYgdHR0QXJyWzRdID09IGNvbU1hcmsgJiYgdHR0QXJyWzhdID09IGNvbU1hcmspIHtcbiAgICAgICAgd2lubmVyID0gXCJjb21cIjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR0dEFyclsyXSA9PSBjb21NYXJrICYmIHR0dEFycls0XSA9PSBjb21NYXJrICYmIHR0dEFycls2XSA9PSBjb21NYXJrKSB7XG4gICAgICAgIHdpbm5lciA9IFwiY29tXCI7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0dHRBcnJbMF0gIT09IG51bGwgJiYgdHR0QXJyWzFdICE9PSBudWxsICYmIHR0dEFyclsyXSAhPT0gbnVsbCAmJiB0dHRBcnJbM10gIT09IG51bGwgJiYgdHR0QXJyWzRdICE9PSBudWxsICYmIHR0dEFycls1XSAhPT0gbnVsbCAmJiB0dHRBcnJbNl0gIT09IG51bGwgJiYgdHR0QXJyWzddICE9PSBudWxsICYmIHR0dEFycls4XSAhPT0gbnVsbCkge1xuICAgICAgICB3aW5uZXIgPSBcImRyYXdcIjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICBzd2l0Y2ggKHdpbm5lcikge1xuICAgICAgICBjYXNlICdwbGF5ZXInOlxuICAgICAgICAgICAgZGlzcGxheShcImxvZ1wiLCBcIlBsYXllciBXaW5cIik7XG4gICAgICAgICAgICBwbGF5ZXJTY29yZSArPSAxO1xuICAgICAgICAgICAgZGlzcGxheShwbGF5ZXJNYXJrICsgXCItc2NvcmVcIiwgcGxheWVyU2NvcmUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbSc6XG4gICAgICAgICAgICBkaXNwbGF5KFwibG9nXCIsIFwiQ29tIFdpblwiKTtcbiAgICAgICAgICAgIGNvbVNjb3JlICs9IDE7XG4gICAgICAgICAgICBkaXNwbGF5KGNvbU1hcmsgKyBcIi1zY29yZVwiLCBjb21TY29yZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZHJhdyc6XG4gICAgICAgICAgICBkaXNwbGF5KFwibG9nXCIsIFwiRHJhd1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdHR0QXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3JpZFwiKVtpXTtcbiAgICAgICAgZ3JpZC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rpc2FsYmVkJyk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY29tUGhhc2UoKSB7XG4gICAgZnVuY3Rpb24gaXNNYXRjaHBvaW50KHR5cGUpIHtcbiAgICAgICAgaWYgKHR0dEFyclswXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHR0QXJyWzFdID09IHR5cGUgJiYgdHR0QXJyWzJdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0dHRBcnJbM10gPT0gdHlwZSAmJiB0dHRBcnJbNl0gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR0dEFycls0XSA9PSB0eXBlICYmIHR0dEFycls4XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR0dEFyclsxXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHR0QXJyWzBdID09IHR5cGUgJiYgdHR0QXJyWzJdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0dHRBcnJbNF0gPT0gdHlwZSAmJiB0dHRBcnJbN10gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0dHRBcnJbMl0gPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR0dEFyclswXSA9PSB0eXBlICYmIHR0dEFyclsxXSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHR0QXJyWzVdID09IHR5cGUgJiYgdHR0QXJyWzhdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0dHRBcnJbNF0gPT0gdHlwZSAmJiB0dHRBcnJbNl0gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0dHRBcnJbM10gPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR0dEFyclswXSA9PSB0eXBlICYmIHR0dEFycls2XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHR0QXJyWzRdID09IHR5cGUgJiYgdHR0QXJyWzVdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHR0QXJyWzRdID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0dHRBcnJbMV0gPT0gdHlwZSAmJiB0dHRBcnJbN10gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR0dEFyclszXSA9PSB0eXBlICYmIHR0dEFycls1XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHR0QXJyWzBdID09IHR5cGUgJiYgdHR0QXJyWzhdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0dHRBcnJbMl0gPT0gdHlwZSAmJiB0dHRBcnJbNl0gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0dHRBcnJbNV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR0dEFyclsyXSA9PSB0eXBlICYmIHR0dEFycls4XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHR0QXJyWzNdID09IHR5cGUgJiYgdHR0QXJyWzRdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHR0QXJyWzZdID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0dHRBcnJbMF0gPT0gdHlwZSAmJiB0dHRBcnJbM10gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR0dEFycls3XSA9PSB0eXBlICYmIHR0dEFycls4XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHR0QXJyWzJdID09IHR5cGUgJiYgdHR0QXJyWzRdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHR0QXJyWzddID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0dHRBcnJbMV0gPT0gdHlwZSAmJiB0dHRBcnJbNF0gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR0dEFycls2XSA9PSB0eXBlICYmIHR0dEFycls4XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR0dEFycls4XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHR0QXJyWzJdID09IHR5cGUgJiYgdHR0QXJyWzVdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0dHRBcnJbNl0gPT0gdHlwZSAmJiB0dHRBcnJbN10gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR0dEFyclswXSA9PSB0eXBlICYmIHR0dEFycls0XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcwJztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNXaW5pbmcodHlwZSkge1xuICAgICAgICBpZiAodHR0QXJyWzBdID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0dHRBcnJbMl0gPT0gdHlwZSAmJiB0dHRBcnJbOF0gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR0dEFycls2XSA9PSB0eXBlICYmIHR0dEFycls4XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHR0QXJyWzFdID09IHR5cGUgJiYgdHR0QXJyWzRdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0dHRBcnJbM10gPT0gdHlwZSAmJiB0dHRBcnJbNF0gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0dHRBcnJbMl0gPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR0dEFyclswXSA9PSB0eXBlICYmIHR0dEFycls2XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHR0QXJyWzZdID09IHR5cGUgJiYgdHR0QXJyWzhdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0dHRBcnJbMV0gPT0gdHlwZSAmJiB0dHRBcnJbNF0gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR0dEFycls0XSA9PSB0eXBlICYmIHR0dEFycls1XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR0dEFycls2XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHR0QXJyWzBdID09IHR5cGUgJiYgdHR0QXJyWzJdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0dHRBcnJbMl0gPT0gdHlwZSAmJiB0dHRBcnJbOF0gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR0dEFyclszXSA9PSB0eXBlICYmIHR0dEFycls0XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHR0QXJyWzRdID09IHR5cGUgJiYgdHR0QXJyWzddID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHR0QXJyWzhdID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0dHRBcnJbMF0gPT0gdHlwZSAmJiB0dHRBcnJbMl0gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR0dEFyclswXSA9PSB0eXBlICYmIHR0dEFycls2XSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHR0QXJyWzRdID09IHR5cGUgJiYgdHR0QXJyWzVdID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0dHRBcnJbNF0gPT0gdHlwZSAmJiB0dHRBcnJbN10gPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaXNNYXRjaHBvaW50KGNvbU1hcmspID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhpc01hdGNocG9pbnQoY29tTWFyaykpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyggdHlwZW9mIGlzTWF0Y2hwb2ludChjb21NYXJrKSk7XG4gICAgICAgIHR0dEFycltpc01hdGNocG9pbnQoY29tTWFyayldID0gY29tTWFyaztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGlzTWF0Y2hwb2ludChwbGF5ZXJNYXJrKSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB0dHRBcnJbaXNNYXRjaHBvaW50KHBsYXllck1hcmspXSA9IGNvbU1hcms7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBpc1dpbmluZyhjb21NYXJrKSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB0dHRBcnJbaXNNYXRjaHBvaW50KGNvbU1hcmspXSA9IGNvbU1hcms7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSAmJiB0dHRBcnJbNF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHR0dEFycls0XSA9IGNvbU1hcms7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHR0QXJyWzBdID09IG51bGwgfHwgdHR0QXJyWzJdID09IG51bGwgfHwgdHR0QXJyWzZdID09IG51bGwgfHwgdHR0QXJyWzhdID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0dHRBcnJbMF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHR0dEFyclswXSA9IGNvbU1hcms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0dHRBcnJbMl0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHR0dEFyclsyXSA9IGNvbU1hcms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0dHRBcnJbNl0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHR0dEFycls2XSA9IGNvbU1hcms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0dHRBcnJbOF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHR0dEFycls4XSA9IGNvbU1hcms7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodHR0QXJyWzFdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0dHRBcnJbMV0gPSBjb21NYXJrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHR0QXJyWzNdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0dHRBcnJbM10gPSBjb21NYXJrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHR0QXJyWzVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0dHRBcnJbNV0gPSBjb21NYXJrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHR0QXJyWzddID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0dHRBcnJbN10gPSBjb21NYXJrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRpc3BsYXl0dHQoKTtcbiAgICBpZiAoaXNPdmVyKCkpIHtcbiAgICAgICAgcmVzdWx0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdHR0QXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHR0QXJyW2ldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdyaWRcIilbaV07XG4gICAgICAgICAgICAgICAgZ3JpZC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0dHRBcnJbaV0gPSBwbGF5ZXJNYXJrO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5dHR0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc092ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21QaGFzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNsaWNrKGluZGV4KSB7XG4gICAgaWYgKHR0dEFycltpbmRleF0gPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdyaWRcIilbaW5kZXhdO1xuICAgICAgICBncmlkLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0dHRBcnJbaW5kZXhdID0gcGxheWVyTWFyaztcbiAgICAgICAgICAgIGRpc3BsYXl0dHQoKTtcbiAgICAgICAgICAgIGlmIChpc092ZXIoKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tUGhhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICBjb25zdCBncmlkID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJncmlkXCIpW2luZGV4XSBhcyBIVE1MVGFibGVFbGVtZW50O1xuICAgIC8vICBncmlkLm9uY2xpY2sgPSBmdW5jdGlvbigpIHt9O1xuICAgIC8vIH1cbn1cbmNsYXNzIEVtcGxveWVlQ2FyZCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIHRoaXMuaW5pdGlhbCgpO1xuICAgICAgICAvLyAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2gzJykuaW5uZXJUZXh0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgLy8gIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXZhdGFyJyk7ICAgXG4gICAgfVxuICAgIGluaXRpYWwoKSB7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3JpZFwiKS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdyaWRcIilbaV0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeFBhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIngtcGFydFwiKTtcbiAgICAgICAgeFBhcnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBsYXllck1hcmsgPSAnWCc7XG4gICAgICAgICAgICBjb21NYXJrID0gJ08nO1xuICAgICAgICAgICAgZGlzcGxheShcImxvZ1wiLCBcIkl0J3MgeW91ciB0dXJuXCIpO1xuICAgICAgICAgICAgY29tUGhhc2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb1BhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm8tcGFydFwiKTtcbiAgICAgICAgb1BhcnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBsYXllck1hcmsgPSAnTyc7XG4gICAgICAgICAgICBjb21NYXJrID0gJ1gnO1xuICAgICAgICAgICAgZGlzcGxheShcImxvZ1wiLCBcIkl0J3MgeW91ciB0dXJuXCIpO1xuICAgICAgICAgICAgY29tUGhhc2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0LWJ0blwiKTtcbiAgICAgICAgcmVzZXRCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vYWxlcnQoJ3Jlc2V0IGdhbWUnKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgLy90aGlzLmluaXRpYWwoKTtcbiAgICAgICAgICAgIHR0dEFyciA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0dHRBcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjbGljayhpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXkoXCJsb2dcIiwgXCJOZXcgcm91bmRcIik7XG4gICAgICAgICAgICAvL3RoaXMuaW5pdGlhbCgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5oMyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmgzO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2VtcGxveWVlLWNhcmQnLCBFbXBsb3llZUNhcmQpO1xuLy8gcGxheWVyTWFyazogYW55LFxuLy8gY29tTWFyazogYW55LFxuLy8gcGxheWVyU2NvcmUgPSAwLFxuLy8gY29tU2NvcmUgPSAwLFxuLy8gcGxheWVyQ2hvaWNlLFxuLy8gd2lubmVyOiBhbnksXG4vLyB0ZXN0O1xuLyoqKk1haW4qKiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=