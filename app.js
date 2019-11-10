var order = [0, 1, 2, 3];
var questions = [
	"How surprised are you to encounter an actual bike with wheels?", 
	"How easily do you imagine an actual bike with wheels?", 
	"How good an example of a bike do you consider an actual bike with wheels?", 
	"How similar is an actual bike with wheels to an ideal bike?"];
var index = 0;

(function(){
 	// Your web app's Firebase configuration
  	var firebaseConfig = {
    		apiKey: "AIzaSyDuMfH66rv7R_A3JKhstTanRlOCFFRjXKE",
    		authDomain: "surveytest-ec05d.firebaseapp.com",
    		databaseURL: "https://surveytest-ec05d.firebaseio.com",
    		projectId: "surveytest-ec05d",
   		storageBucket: "surveytest-ec05d.appspot.com",
    		messagingSenderId: "842946839037",
    		appId: "1:842946839037:web:eddfc5fee601547a1f9994"
 	 };

	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	
	const preObject = document.getElementById('object');
	
	const dbRefObject = firebase.database().ref().child('object');

	dbRefObject.on('value', snap => console.log(snap.val()));

  	order = shuffle(order);
	updateQuestion();
}());

var key = firebase.database().ref().push().key;

function submit() {
  var age = $("#age").val();
  var gender = $("#gender").val();
  var ethnicity = $("#ethnicity").val();
  var nationality = $("#nationality").val();
  var education = $("#education").val();
  var occupation = $("#occupation").val();

  firebase.database().ref(key).push({
    "age": age,
    "gender": gender,
    "ethnicity": ethnicity,
    "nationality": nationality,
    "education": education,
    "occupation": occupation
  });
};

$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#demographics_form").submit(submit);

});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function updateQuestion(){
	document.getElementById("question").innerHTML = questions[order[index]];
}

function answer(score) {
	firebase.database().ref(key+"/questions").update({
	    [questions[order[index]]]: score
	});
	index++;
	if(index < questions.length) {
	   updateQuestion();
	} else {
	   window.location.href = 'end.html';
	}
}

function submit() {
  var age = $("#age").val();
  var gender = $('input[name=gender]:checked').val()
  var ethnicity = $("#ethnicity").val();
  var nationality = $("#nationality").val();
  var education = $("#education").val();
  var occupation = $("#occupation").val();

  firebase.database().ref(key).update({
    "age": age,
    "gender": gender,
    "ethnicity": ethnicity,
    "nationality": nationality,
    "education": education,
    "occupation": occupation
  });
};


$('#demographics_form').submit(function(e) {
    e.preventDefault();
    submit();
document.getElementById("demographics").style.display = "none";
document.getElementById("questions").style.display = "block";
});