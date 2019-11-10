var question = 1;
var order = [1, 2, 3, 4];
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
	document.getElementById("question").innerHTML = questions[index];
}

function answer(score) {
	firebase.database().ref(key).update({
	    [order[index]]: score
	});
	index++;
	if(index < questions.length) {
	   updateQuestion();
	} else {
	   window.location.href = 'end.html';
	}
}

