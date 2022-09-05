const   body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        modeToggle = document.querySelector(".dark-light"),
        searchToggle = document.querySelector(".searchToggle"),
        sidebarOpen = document.querySelector(".sidebarOpen"),
        sidebarClose = document.querySelector(".sidebarClose");

        let getMode = localStorage.getItem("mode");
            if(getMode && getMode === "dark-mode")
                body.classList.add("dark");
        

// Js code to toggle dark and light mode
        modeToggle.addEventListener("click" , () => {
            modeToggle.classList.toggle("active");
            body.classList.toggle("dark");


//Js code to keep user selected mode even page refresh or file reopen
            if(!body.classList.contains("dark")){
                localStorage.setItem("mode" , "light-mode");
            }else{
                localStorage.setItem("mode" , "dark-mode");
            }
        });

// Js code to toggle search box
        searchToggle.addEventListener("click" , () => {
            searchToggle.classList.toggle("active");
        });


// Js code to toggle sidebar
        sidebarOpen.addEventListener("click" , () =>{
                nav.classList.add("active");
        });

        body.addEventListener("click" , e =>{
            let clickedElm = e.target;
            
            if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu"))
                nav.classList.remove("active"); 
        });

<<<<<<< HEAD
var memory_array = ['Salsa Crispy Chicken','Salsa Crispy Chicken','Double Whopper','Double Whopper','Bacon King Jr','Bacon King Jr','Chili Cheeseburger','Chili Cheeseburger','Chimichurri Chicken Royale','Chimichurri Chicken Royale','Chicken Nuggets','Chicken Nuggets','Fish King','Fish King','Creamy Oreo Shake','Creamy Oreo Shake','Sundae Jordbær','Sundae Jordbær','Onion Rings','Onion Rings','Chili Cheese','Chili Cheese','Twister Fries','Twister Fries'];
=======

var memory_array = ['crispychickensalsa1.png','crispychickensalsa1.png','doublewhopper.png','doublewhopper.png','baconkingjr.png','baconkingjr.png','chilicheeseburger.png','chilicheeseburger.png','chimichurrichicken.png','chimichurrichicken.png','nuggets.png','nuggets.png','fishking.png','fishking.png','oreoshake.png','oreoshake.png','sundae1.png','sundae1.png','onionrings.png','onionrings.png','chilicheese.png','chilicheese.png','twister.png','twister.png'];
>>>>>>> 5c1944c3eaa768f13faf5c5dd27474f3a526769a
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url("header-logo.svg") no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url("header-logo.svg") no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}


		
newBoard();

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "Hvilken kød har Whopper?", "Kylling", "Oksekød", "Svinekød", "B" ],
	[ "Hvor mange milkshakes kan man få?", "3", "4", "5", "C" ],
	[ "Hvilken burger koster 29kr?", "Fish King", "Big King jr", "Bacon King", "A" ],
	[ "Hvor mange dips kan man få?", "8", "10", "12", "C" ]
];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>DU FIK "+correct+" AF "+questions.length+" RIGTIGT WHOOOOOOHOOOOOOOO!!!!!!! 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔</h2>";
		_("test_status").innerHTML = "RESULTAT:";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Spørgsmål "+(pos+1)+" ud af "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);


// ---------------------------------------------------------------------------------------------------------------------------------------- Mette




// ---------------------------------------------------------------------------------------------------------------------------------------- Abasin








// ---------------------------------------------------------------------------------------------------------------------------------------- Abasin









// ---------------------------------------------------------------------------------------------------------------------------------------- Keanu


"use strict";

// function that creates dummy data for demonstration
function createDummyData() {
  var date = new Date();
  var data = {};

  for (var i = 0; i < 10; i++) {
    data[date.getFullYear() + i] = {};

    for (var j = 0; j < 12; j++) {
      data[date.getFullYear() + i][j + 1] = {};

      for (var k = 0; k < Math.ceil(Math.random() * 10); k++) {
        var l = Math.ceil(Math.random() * 28);

        try {
          data[date.getFullYear() + i][j + 1][l].push({
            startTime: "10:00",
            endTime: "12:00",
            text: "Some Event Here"
          });
        } catch (e) {
          data[date.getFullYear() + i][j + 1][l] = [];
          data[date.getFullYear() + i][j + 1][l].push({
            startTime: "10:00",
            endTime: "12:00",
            text: "Vi elsker javscript huyrra"
          });
        }
      }
    }
  }

  return data;
}

// creating the dummy static data
var data = createDummyData();

// initializing a new calendar object, that will use an html container to create itself
var calendar = new Calendar(
  "calendarContainer", // id of html container for calendar
  "small", // size of calendar, can be small | medium | large
  [
    "Wednesday", // left most day of calendar labels
    3 // maximum length of the calendar labels
  ],
  [
    "#E91E63", // primary color
    "#C2185B", // primary dark color
    "#FFFFFF", // text color
    "#F8BBD0" // text dark color
  ]
);

// initializing a new organizer object, that will use an html container to create itself
var organizer = new Organizer(
  "organizerContainer", // id of html container for calendar
  calendar, // defining the calendar that the organizer is related to
  data // giving the organizer the static data that should be displayed
);





// ---------------------------------------------------------------------------------------------------------------------------------------- Keanu




