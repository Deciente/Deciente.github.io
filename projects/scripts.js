var images_scheme = ["schemess/ss1.png", "schemess/ss2.png", "schemess/ss3.png", "schemess/ss4.png", "schemess/ss5.png"];
var counter_scheme = 0;

var images_quiz = ["quizss/qss1.png", "quizss/qss2.png", "quizss/qss3.png"];
var counter_quiz = 0;

var images_database = ["databasess/dss1.png", "databasess/dss2.png", "databasess/dss3.png"];
var counter_database = 0;

var images_map = ["mapss/mss1.png", "mapss/mss2.png", "mapss/mss3.png"];
var counter_map = 0;



function nextImageQuiz() {
	if (counter_quiz < images_quiz.length - 1 && counter_quiz >= 0) {
		counter_quiz += 1;
		document.getElementById("quizslide").setAttribute("src", images_quiz[counter_quiz]);
	}
	;
}

function prevImageQuiz() {
	if (counter_quiz < images_quiz.length && counter_quiz > 0) {
		counter_quiz -= 1;
		document.getElementById("quizslide").setAttribute("src", images_quiz[counter_quiz]);
	}
}

function nextImageMap() {
	if (counter_map < images_map.length - 1 && counter_map >= 0) {
		counter_map += 1;
		document.getElementById("mapslide").setAttribute("src", images_map[counter_quiz]);
	}
	;
}

function prevImageQuiz() {
	if (counter_map < images_map.length && counter_map > 0) {
		counter_map -= 1;
		document.getElementById("mapslide").setAttribute("src", images_map[counter_quiz]);
	}
}

function nextImageScheme() {
	if (counter_scheme < images_scheme.length - 1 && counter_scheme >= 0) {
		counter_scheme += 1;
		document.getElementById("schemeslide").setAttribute("src", images_scheme[counter_scheme]);
	}
}

function prevImageScheme() {
	if (counter_scheme < images_scheme.length && counter_scheme > 0) {
		counter_scheme -= 1;
		document.getElementById("schemeslide").setAttribute("src", images_scheme[counter_scheme]);
	}
}

function nextImageDatabase() {
	if (counter_database < images_database.length - 1 && counter_database >= 0) {
		counter_database += 1;
		document.getElementById("databaseslide").setAttribute("src", images_database[counter_database]);
	}
}

function prevImageDatabase() {
	if (counter_database < images_database.length && counter_database > 0) {
		counter_database -= 1;
		document.getElementById("databaseslide").setAttribute("src", images_database[counter_database]);
	}
}

document.getElementById("next_button_quiz").onclick = function() {nextImageQuiz()};
document.getElementById("prev_button_quiz").onclick = function() {prevImageQuiz()};

document.getElementById("next_button_map").onclick = function() {nextImageMap()};
document.getElementById("prev_button_map").onclick = function() {prevImageMap()};

document.getElementById("next_button_scheme").onclick = function() {nextImageScheme()};
document.getElementById("prev_button_scheme").onclick = function() {prevImageScheme()};

document.getElementById("next_button_database").onclick = function() {nextImageDatabase()};
document.getElementById("prev_button_database").onclick = function() {prevImageDatabase()};





