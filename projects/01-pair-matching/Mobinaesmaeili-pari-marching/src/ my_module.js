
const helloWebpack=()=> {

  document.body.innerHTML = ` <h3 style="text-align: center;font-family: sans-serif;" id="parag">pair matching</h3> <center>
        <table cellspacing='0'></table>
    </center>`;

var em = ["💐","🌹","🌻","🏵️","🌺","🌴","🌈","🍓","🍒","🍎","🍉","🍊","🥭","🍍","🍋","🍏","🍐","🥝","🍇","🥥","🍅","🌶️","🍄","🧅","🥦","🥑","🍔","🍕","🧁","🎂","🍬","🍩","🍫","🎈","😀","🤪","😋"," 👩🏼 "," 🦜","🦚","💻","☎️","❣️"];


//Shuffling above array
var tmp, c, p = em.length;
if(p) while(--p) {
   c = Math.floor(Math.random() * (p + 1));
   tmp = em[c];
   em[c] = em[p];
   em[p] = tmp;
}

 
//Variables
var pre="", pID,rem,moves, ppID=0, turn=0, t="transform", flip="rotateY(180deg)", flipBack="rotateY(0deg)", time, mode;

//Resizing Screen
window.onresize = init;
let init=()=> {
  
   //var W = innerWidth;
   var H = innerHeight;
   $('body').height(H+"px");
   $('#ol').height(H+"px");
}


//Showing instructions
window.onload = function() {
fetch("/api")
  .then(response => response.json())
  .then((data) => {
   
   var numberRow=data.dimension;
  
  //console.log(numberRow);

  start(numberRow,numberRow);
  }

  )
.catch(function() {
    start(4,4);
  });
}

//Starting the game
let  start=(r,l) =>{
    //Timer and moves
   var min=0;
   var sec=0;
    $("#time").html("Time: 00:00");
    $("#moves").html("Moves: 0");
    time = setInterval(function() {
      sec++;
      if(sec==60) {
          min++; sec=0;
      }
      if(sec<10) 
          $("#time").html("Time: 0"+min+":0"+sec);
      else 
        $("#time").html("Time: 0"+min+":"+sec);
    }, 1000);
     var rem=r*l/2, noItems=rem;
    mode = r+"x"+l;
    //Generating item array and shuffling it
    var items = [];
    for (var i=0;i<noItems;i++)
        items.push(em[i]);
        // eslint-disable-next-line 
    for (var i=0;i<noItems;i++)
        items.push(em[i]);
    var tmp, c, p = items.length;
    if(p) while(--p) {
        c = Math.floor(Math.random() * (p + 1));
        tmp = items[c];
        items[c] = items[p];
        items[p] = tmp;
    }
    
    //Creating table
    $("table").html("");
    var n=1;
    // eslint-disable-next-line 
    for (var i = 1;i<=r;i++) {
        $("table").append("<tr>");
        for (var j = 1;j<=l;j++) {
           $("table").append(`<td id='${n}'  onclick="change(${n})"><div class='inner'><div class='front'></div><div class='back'><p>${items[n-1]}</p></div></div></td>`);
         

           n++;


         }
         $("table").append("</tr>");
    }
    
    //Hiding instructions screen
    $("#ol").fadeOut(500);
}

//Function for flipping blocks
 window.change=(x)=> {

  //Variables
  let i = "#"+x+" .inner";
  let b = "#"+x+" .inner .back";
  
  //Dont flip for these conditions
  // eslint-disable-next-line 
  if (turn==2 || $(i).attr("flip")=="block" || ppID==x) {}
  
  //Flip
  else {
    $(i).css(t, flip);
    if (turn==1) {
      //This value will prevent spam clicking
      turn=2;
      
      //If both flipped blocks are not same
      if (pre!=$(b).text()) {
         setTimeout(function() {
            $(pID).css(t, flipBack);
            $(i).css(t, flipBack);
            ppID=0;
         },1000);
      }
      
      //If blocks flipped are same
      else {
          rem--;
          $(i).attr("flip", "block");
          $(pID).attr("flip", "block");
      }
      
      setTimeout(function() {
         turn=0;
         //Increase moves
         moves++;
         $("#moves").html("Moves: "+moves);
      },1150);
      
    }
    else {
      pre = $(b).text();
      ppID = x;
      pID = "#"+x+" .inner";
      turn=1;
    }
    
    //If all pairs are matched
    if (rem==0) {
          clearInterval(time);
          // eslint-disable-next-line 
          if (min==0) {
            // eslint-disable-next-line 
              time = `${sec} seconds`;
          }
          else {
            // eslint-disable-next-line 
              time = `${min} minute(s) and ${sec} second(s)`;
          }
          setTimeout(function() {
              $("#ol").html(`<center><div id="iol"><h2>Congrats!</h2><p style="font-size:23px;padding:10px;">You completed the ${mode} mode in ${moves} moves. It took you ${time}.</p><p style="font-size:18px">Comment Your Score!<br/>Play Again ?</p><button onclick="start(3, 4)">3 x 4</button> <button onclick="start(4, 4)" style="w">4 x 4</button><button onclick="start(4, 5)">4 x 5</button><button onclick="start(5, 6)">5 x 6</button><button onclick="start(6, 6)">6 x 6</button></div></center>`);
              $("#ol").fadeIn(750);
          }, 1500);
    }
  }



}

}
export default helloWebpack;