const html = String.raw;

class TicTacToeBoard extends HTMLElement {
  [x: string]: any;
  currentPlayer!: number;
  board!: number[][];
  turn!: number;


  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.initGame();
  }

  getTemplate() {
    return html`
      <style>
        #board {
          width: 540px;
          height: 540px;
          padding: 20px;
          background:deeppink;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
          justify-content: space-between;
          margin-top:5%;
          margin-left:35%;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
      </style>
      <div id="board"></div>
    `;
  }

  changePlayer() {
    if (this.currentPlayer == 1) {
      this.currentPlayer = 2
    } else {
      this.currentPlayer = 1;
    }
  }

  initGame() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
  
    this.turn = 1;
    this.currentPlayer = 1;
    this.plays = {1: 0, 2: 0};
    this.shadowRoot!.innerHTML = this.getTemplate();
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        const newBox = document.createElement('tic-tac-toe-box');
        newBox.addEventListener('click', () => {
         // alert(this.turn);
          if (this.turn % 2 === 1) {
            newBox.setAttribute('symbol', 'cross');
          } else {
            newBox.setAttribute('symbol', 'circle');
          }
          this.board[i][j] = this.currentPlayer;
          this.plays[this.currentPlayer]++;
          if (checkVictory(this.board, this.currentPlayer)) {
           console.log(checkVictory(this.board, this.currentPlayer));
            const winEvent = new CustomEvent('player-win', {
              detail: {
                player: this.currentPlayer
              }
            });
            this.dispatchEvent(winEvent);
            switch(this.currentPlayer) {
  case 1:
    alert('x won');
    this.initGame();
    
    
    break;
  case 2:
    // code block
    alert('y won');
    this.initGame();
    

    break;
  default:
    // code block
}

            // if(this.currentPlayer==1){
            //   alert('X won');
            
              
            // }
            // else if(this.currentPlayer==2){
            //   alert('O won');
            // }
           
           
          } else if (this.plays[1] + this.plays[2] === 9) {
            alert('x and y were equal');
            this.initGame();
            const tieEvent = new CustomEvent('tie');
            this.dispatchEvent(tieEvent);
          } else {
            this.turn++;
            this.changePlayer();
          }
        });
        this.shadowRoot!.getElementById('board')!.appendChild(newBox);
      }
    }
  }

  reset() {
    
  }
}

class TicTacToeBox extends HTMLElement {

  static get observedAttributes() {
    return ['symbol'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return html`
      <style>
        #box {
          width: 175px;
          height: 175px;
          background: rgb(254, 254, 240);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <div id="box"></div>
    `;
  }

  attributeChangedCallback(name: string, oldValue: null, newValue: any) {
    if (name === 'symbol' && oldValue === null) {
      const nameSymbol = newValue;
      const symbol = document.createElement(`${newValue}-symbol`);
      this.shadowRoot!.getElementById('box')!.appendChild(symbol);
    }
  }
}

class TicTacToeCross extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return html`
      <style>
        :host {
          background:  rgb(71, 69, 78);
          height: 100px;
          position: relative;
          width: 10px;
          transform: rotate(45deg);
          border-radius: 30px;
        }
        
        :host:after {
          background:  rgb(71, 69, 78);
          content: "";
          height: 10px;
          left: -45px;
          position: absolute;
          top: 45px;
          width: 100px;
          border-radius: 30px;
        }
      </style>
    `;
  }
}

class TicTacToeCircle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return html`
      <style>
        :host {
          background: transparent;
          border: 10px solid rgb(184, 64, 57);
          width: 75px;
          height: 70px;
          border-radius: 50%;
        }
      </style>
    `;
  }
}

window.customElements.define('tic-tac-toe-board', TicTacToeBoard);
window.customElements.define('tic-tac-toe-box', TicTacToeBox);
window.customElements.define('cross-symbol', TicTacToeCross);
window.customElements.define('circle-symbol', TicTacToeCircle);

function checkHorizontal(tablero: string | any[], jugador: any) {
  for (let row = 0; row < tablero.length; row++) {
    // buscamos en rows
   let cont = 0;
    for ( let col = 0; col < tablero.length; col++) {
      if (tablero[row][col] == jugador) {
        cont++;
      } else {
        break;
      }

      if (cont == tablero.length) {
        return true;
      }
    }
  }
  return false;
}

function checkVertical(tablero: string | any[], jugador: any) {
  for ( let col = 0; col < tablero.length; col++) {
    // buscamos en cols
  let  cont = 0;
    for ( let row = 0; row < tablero.length; row++) {
      if (tablero[row][col] == jugador) {
        cont ++;
      } else {
        break;
      }

      if (cont == tablero.length) {
        return true;
      }
    }
  }
  return false;
}

function checkDiagonal(tablero: string | any[], jugador: any) {
 let  cont = 0
  for (let row = 0, col = 0; row < tablero.length; row++, col++) {
    if (tablero[row][col] == jugador) {
      cont++;
    } else {
      break;
    }
    if (cont == tablero.length) {
      return true;
    }
  }
  cont = 0;
  for (let row = 0, col = tablero.length - 1; row < tablero.length; row++, col--) {
    if (tablero[row][col] == jugador) {
      cont++;
    } else {
      break;
    }
    if (cont == tablero.length) {
      return true;
    }
  }
  return false;
}

function checkVictory(tablero: string | any[], jugador: number) {
  return checkHorizontal(tablero, jugador)
      || checkVertical(tablero, jugador)
      || checkDiagonal(tablero, jugador);
}
