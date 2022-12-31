var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var template = document.createElement('template');
template.innerHTML = "\n\n <style>\n      h2{\n        color: purple;\n      }\n      @import url(https://fonts.googleapis.com/css?family=Pacifico|Open+Sans:300);\n\n* {\n  padding: 0;\n  border: 0;\n  margin: 0;\n  vertical-align: middle;\n  box-sizing: border-box;\n  font-family: Open Sans, Arial;\n}\n\nbody {\n  height: 100%;\n  color: #f7f7f7;\n  background-color: #333;\n}\n\nheader {\n  padding: 32px 0;\n  color: #f7f7f7;\n  font-family: 'Pacifico';\n  font-size: 48px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.center {\n  margin: 0 auto;\n}\n\n#scoreboard {\n  \n}\n\n.scorebox {\n  display: inline-block;\n  position: relative;\n  width: 100px;\n  border: 2px solid #f7f7f7;\n  border-radius: 8px;\n  margin: 0 16px;\n  font-size: 24px;\n  text-align: right;\n}\n#x-part:before, #o-part:before {\n  position: absolute;\n  top: 4px;\n  left: 8px;\n}\n#x-part:before {\n  content: 'X';\n}\n#o-part:before {\n  content: 'O';\n}\n\n.score {\n  padding: 4px;\n}\n\n#log {\n  padding: 16px 0;\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 0 auto;\n}\ntd {\n  border: 2px solid #f7f7f7;\n  border-collapse: collapse;\n  width: 96px;\n  height: 96px;\n  text-align: center;\n  font-size: 48px;\n}\n\n\n#ctrl {\n  padding: 16px 0;\n}\n\n#reset-btn {\n  color: #f7f7f7;\n  font-size: 24px;\n  background-color: inherit;\n  padding: 4px 16px;\n  border: 2px solid #f7f7f7;;\n  border-radius: 8px;\n  outline: none;\n  cursor: pointer;\n}\n#reset-btn:active {\n  opacity: 0.5;\n}\n\nfooter {\n  color: #fff;\n  text-align: center;\n  padding-top: 16px;\n}\nfooter > a {\n  color: #2abced;\n  text-decoration: none;\n}\n    </style>\n\n    <header class=\"text-center\">Tic-Toc-Toe</header>\n    \n\n\n    ";
var EmployeeCard = /** @class */ (function (_super) {
    __extends(EmployeeCard, _super);
    function EmployeeCard() {
        var _this = _super.call(this) || this;
        _this.attachShadow({ mode: 'open' });
        _this.initial();
        return _this;
        //  this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        //  this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');   
    }
    EmployeeCard.prototype.initial = function () {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        for (var i = 0, len = document.getElementsByClassName("grid").length; i < len; i++) {
            document.getElementsByClassName("grid")[i].innerHTML = '';
        }
        document.getElementById("x-part").onclick = function () {
            playerMark = 'X';
            comMark = 'O';
            display("log", "It's your turn");
            comPhase();
        };
        document.getElementById("o-part").onclick = function () {
            playerMark = 'O';
            comMark = 'X';
            display("log", "It's your turn");
            comPhase();
        };
        document.getElementById("reset-btn").onclick = function () {
            alert('reset ');
            //this.initial();
            var tttArr = [null, null, null, null, null, null, null, null, null];
            for (var i = 0, len = tttArr.length; i < len; i++) {
                click(i);
            }
            display("log", "New round");
            // initial();
        };
    };
    EmployeeCard.prototype.connectedCallback = function () {
        this.h3 = this.getAttribute("name");
        this.render();
    };
    EmployeeCard.prototype.render = function () {
        this.h3;
    };
    return EmployeeCard;
}(HTMLElement));
window.customElements.define('employee-card', EmployeeCard);
var tttArr = [null, null, null, null, null, null, null, null, null], playerMark, comMark, playerScore = 0, comScore = 0, playerChoice, winner, comMark, test;
function display(id, val) {
    document.getElementById(id).innerHTML = val;
}
function displayttt() {
    for (var i = 0, len = tttArr.length; i < len; i++) {
        if (tttArr[i] == null) {
            document.getElementsByClassName("grid")[i].innerHTML = '';
        }
        else {
            document.getElementsByClassName("grid")[i].innerHTML = tttArr[i];
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
    for (var i = 0, len = tttArr.length; i < len; i++) {
        document.getElementsByClassName("grid")[i].onclick = function () { };
    }
}
function click(index) {
    if (tttArr[index] == null) {
        document.getElementsByClassName("grid")[index].onclick = function () {
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
    else {
        document.getElementsByClassName("grid")[index].onclick = function () { };
    }
}
function playerPhase() {
    for (var i = 0, len = tttArr.length; i < len; i++) {
        click(i);
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
        return false;
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
        tttArr[isMatchpoint(comMark) ? 1 : 0] = comMark;
    }
    else if (typeof isMatchpoint(playerMark) === "number") {
        tttArr[isMatchpoint(playerMark) ? 1 : 0] = comMark;
    }
    else if (typeof isWining(comMark) === "number") {
        tttArr[isMatchpoint(comMark) ? 1 : 0] = comMark;
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
        playerPhase();
    }
}
/***Main***/ 
