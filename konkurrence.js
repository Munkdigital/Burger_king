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
		test.innerHTML = "<h2>DU FIK "+correct+" AF "+questions.length+" RIGTIGT WHOOOOOOOOOOOOOO!!!!!!! 🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔</h2>";
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








// ---------------------------------------------------------------------------------------------------------------------------------------- Keanu




