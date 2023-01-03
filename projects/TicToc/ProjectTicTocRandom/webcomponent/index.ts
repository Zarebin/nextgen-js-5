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

#scoreboard {
  
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

class EmployeeCard extends HTMLElement{
	public attachShadow: any;
	public shadowRoot: any;
	public h3: any;
	public getAttribute: any;

 constructor(){
     super();
     this.attachShadow({ mode: 'open'});
      this.initial();
   
    //  this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    //  this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');   
    
     
 } 
   initial() :void  {
   this.shadowRoot.appendChild(template.content.cloneNode(true));
  for (var i = 0, len = document.getElementsByClassName("grid").length; i < len; i++) {
    document.getElementsByClassName("grid")[i].innerHTML = '';
  }
  let x_part =document.getElementById("x-part") as HTMLDivElement;
  
   x_part.onclick = function() {
    playerMark = 'X';
    comMark = 'O';
    display("log", "It's your turn");
    comPhase();
  };
  let o_part =document.getElementById("o-part") as HTMLDivElement;
  o_part.onclick = function() {
    playerMark = 'O';
    comMark = 'X';
    display("log", "It's your turn");
    comPhase();
  };
 let reset_button =  document.getElementById("reset-btn") as HTMLButtonElement
 reset_button.onclick = function()  {
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
  
 connectedCallback(){
   this.h3 = this.getAttribute("name")
   this.render();
 }

 render(){
   this.h3;
 }
}
 
window.customElements.define('employee-card', EmployeeCard);




var tttArr = [null, null, null, null, null, null, null, null, null],
    playerMark :any,
    comMark:any,
    playerScore = 0,
    comScore = 0,
    playerChoice,
    winner:any,
    test;

function display(id :any, val:any) {
  let idd =document.getElementById(id) as HTMLElement;
  idd.innerHTML = val;
}
function displayttt() {
  for (var i = 0, len = tttArr.length; i < len; i++) {
    if (tttArr[i] == null) {
      document.getElementsByClassName("grid")[i].innerHTML = '';
    } else {
      let grid  :any=  document.getElementsByClassName("grid")[i] as HTMLTableElement;
       grid.innerHTML  = tttArr[i];
    }
  }
}
function isOver() {
  if (tttArr[0] == playerMark && tttArr[1] == playerMark && tttArr[2] == playerMark) {
    winner = "player";
    return true;
  } else if (tttArr[3] == playerMark && tttArr[4] == playerMark && tttArr[5] == playerMark) {
    winner = "player";
    return true;
  } else if (tttArr[6] == playerMark && tttArr[7] == playerMark && tttArr[8] == playerMark) {
    winner = "player";
    return true;
  } else if (tttArr[0] == playerMark && tttArr[3] == playerMark && tttArr[6] == playerMark) {
    winner = "player";
    return true;
  } else if (tttArr[1] == playerMark && tttArr[4] == playerMark && tttArr[7] == playerMark) {
    winner = "player";
    return true;
  } else if (tttArr[2] == playerMark && tttArr[5] == playerMark && tttArr[8] == playerMark) {
    winner = "player";
    return true;
  } else if (tttArr[0] == playerMark && tttArr[4] == playerMark && tttArr[8] == playerMark) {
    winner = "player";
    return true;
  } else if (tttArr[2] == playerMark && tttArr[4] == playerMark && tttArr[6] == playerMark) {
    winner = "player";
    return true;
  } else if (tttArr[0] == comMark && tttArr[1] == comMark && tttArr[2] == comMark) {
    winner = "com";
    return true;
  } else if (tttArr[3] == comMark && tttArr[4] == comMark && tttArr[5] == comMark) {
    winner = "com";
    return true;
  } else if (tttArr[6] == comMark && tttArr[7] == comMark && tttArr[8] == comMark) {
    winner = "com";
    return true;
  } else if (tttArr[0] == comMark && tttArr[3] == comMark && tttArr[6] == comMark) {
    winner = "com";
    return true;
  } else if (tttArr[1] == comMark && tttArr[4] == comMark && tttArr[7] == comMark) {
    winner = "com";
    return true;
  } else if (tttArr[2] == comMark && tttArr[5] == comMark && tttArr[8] == comMark) {
    winner = "com";
    return true;
  } else if (tttArr[0] == comMark && tttArr[4] == comMark && tttArr[8] == comMark) {
    winner = "com";
    return true;
  } else if (tttArr[2] == comMark && tttArr[4] == comMark && tttArr[6] == comMark) {
    winner = "com";
    return true;
  } else if (tttArr[0] !== null && tttArr[1] !== null && tttArr[2] !== null && tttArr[3] !== null && tttArr[4] !== null && tttArr[5] !== null && tttArr[6] !== null && tttArr[7] !== null && tttArr[8] !== null) {
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
  for (var i = 0, len = tttArr.length; i < len; i++) {
    let grid  = document.getElementsByClassName("grid")[i] as HTMLTableElement;
    grid.onclick = function() {};
  }
}
function click(index :any) {
  if (tttArr[index] == null) {
    let grid = document.getElementsByClassName("grid")[index] as HTMLTableElement;
    grid.onclick = function() {
      tttArr[index] = playerMark;
      displayttt();
      if (isOver()) {
        result();
      } else {
        comPhase();
      }
    };
  } else {
    let grid =  document.getElementsByClassName("grid")[index] as HTMLTableElement;
   grid.onclick = function() {};
  }
}
function playerPhase() {
  
  
  for (var i = 0, len = tttArr.length; i < len; i++) {
    click(i);
  }
}
function comPhase() {
  function isMatchpoint(type : number) : false |0 |1|2|3|4|5|6|7|8|9{
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
    return false;
  }
  function isWining(type :any) {
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
      tttArr[isMatchpoint(comMark)] = comMark;
  } else if (typeof isMatchpoint(playerMark) === "number") {
    tttArr[isMatchpoint(playerMark)] = comMark;
  } else if (typeof isWining(comMark) === "number") {
    tttArr[isMatchpoint(comMark)] = comMark;
  } else {
    if (Math.random() > 0.5 && tttArr[4] === null) {
      tttArr[4] = comMark;
    } else if (tttArr[0] == null || tttArr[2] == null || tttArr[6] == null || tttArr[8] == null) {
      if (tttArr[0] == null) {
        tttArr[0] = comMark;
      } else if (tttArr[2] == null) {
        tttArr[2] = comMark;
      } else if (tttArr[6] == null) {
        tttArr[6] = comMark;
      } else if (tttArr[8] == null) {
        tttArr[8] = comMark;
      }
    } else {
      if (tttArr[1] == null) {
        tttArr[1] = comMark;
      } else if (tttArr[3] == null) {
        tttArr[3] = comMark;
      } else if (tttArr[5] == null) {
        tttArr[5] = comMark;
      } else if (tttArr[7] == null) {
        tttArr[7] = comMark;
      }
    }
  }
  displayttt();
  if (isOver()) {
    result();
  } else {
    playerPhase();
  }
}

/***Main***/