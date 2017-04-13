var score;
var lives;
var word;
var hidden;
var words =["pneumonoultramicroscopicsilicavolcaniconiosis", "antidisestablishmentarianism", "supercalifragilisticexpialidocious","homeomorphism", "sesquiquinquitone", "unununium", "ununoctium"];
var guessedLetters = "";

var button = document.getElementById("start");
var display = document.getElementById("display");
button.onclick = function(){
	button.style.visibility = "hidden";
	maxIndex = 0;
	clear();
	onGameCreate();
	display.textContent = hidden;
}
var guessesDisplay = document.getElementById("guesses");
var livesDisplay = document.getElementById("lives");
var scoreDisplay = document.getElementById("score");


document.onkeyup = function(event){
	key = event.key;
	var success = charInString(key, word);
	var duplicate = charInString(key, guessedLetters);
	console.log(key);
	if(success && key.length === 1){
		if(!duplicate){
			guessedLetters += key;
			var newHidden ="";
			for(var i = 0; i<word.length; i++){
				if(word[i]===key){
					newHidden += word[i];
					score++;
				}else if(hidden[i] != "#"){
					newHidden += word[i];
				}else{
					newHidden += "#";
				}
			}
			hidden = newHidden;
		}else{
			alert("Please enter a NEW valid letter");
		}
	}else{
		if(!duplicate && key.length ===1 ){
			guessedLetters += key;
			lives--;
			maxIndex++;
		}else{
			alert("Please enter a NEW valid letter");
		}
	}
	update();
}

function charInString(char, string){
	var contained = false;
	string += "";
	for(var i = 0; i<string.length; i++){
		if(string.toLowerCase().charAt(i) == char.toLowerCase()){
			contained = true;
		}
	}

	return contained;
}

function randItem(array){
	var size = array.length;
	var randIndex = Math.floor(Math.random()*size);
	return array[randIndex];
}

function onGameCreate(){
	score = 0;
	maxIndex = 0;//number of hangman parts drawn in processing
	guessedLetters = "";
	word = randItem(words);
	hidden = "";
	lives = 6;
	word +=""
	for(var i = 0; i<word.length; i++){
		hidden += "#";
	}
	guessedLetters="";
	word+="";
	console.log(word);
	update();
}

function onGameWin(){
	button.style.visibility = "visible";
	setTimeout(function(){ alert("You win! You still have " + lives + " live(s) left!"); }, 200);
}

function onGameLose(){
	button.style.visibility = "visible";
	setTimeout(function(){ alert("You lose! You only scored " + score + " point(s)!"); }, 200);
}

function update(){
	display.textContent = hidden;

	scoreDisplay.textContent = "Score: " + score; + " points.";
	livesDisplay.textContent = "Lives: " + lives;
	guessesDisplay.textContent = guessedLetters.split("").sort().join(", ");
	word +="";

	if(lives<= 0){
		onGameLose();
	}else if(word === hidden){
		onGameWin();
	}
}

