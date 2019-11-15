var order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
var questions = [
    "How surprised are you to encounter an actual bike with wheels?",
    "How easily can you imagine an actual bike with wheels?",
    "How good an example of a bike do you consider an actual bike with wheels?",
    "How similar is an actual bike with wheels to an ideal bike?",
    "How surprised are you to encounter an actual bike of the brand TREK?",
    "How easily can you imagine an actual bike of the brand TREK?",
    "How good an example of a bike do you consider an actual bike of the brand TREK?",
    "How similar is an actual bike of the brand TREK to an ideal bike?",
    "How surprised are you to encounter an actual bike on a street?",
    "How easily can you imagine an actual bike on a street?",
    "How good an example of a bike do you consider an actual bike on a street?",
    "How similar is an actual bike on a street to an ideal bike?",
    "How surprised are you to encounter an actual bike with blades?",
    "How easily can you imagine an actual bike with blades?",
    "How good an example of a bike do you consider an actual bike with blades?",
    "How similar is an actual bike with blades to an ideal bike?",
    "How surprised are you to encounter an actual bike of the brand Disney?",
    "How easily can you imagine an actual bike of the brand Disney?",
    "How good an example of a bike do you consider an actual bike of the brand Disney?",
    "How similar is an actual bike of the brand Disney to an ideal bike?",
    "How surprised are you to encounter an actual bike on a bed?",
    "How easily can you imagine an actual bike on a bed?",
    "How good an example of a bike do you consider an actual bike on a bed?",
    "How similar is an actual bike on a bed to an ideal bike?",
    "How surprised are you to encounter an actual chair with a seat?",
    "How easily can you imagine an actual chair with a seat?",
    "How good an example of a chair do you consider an actual chair with a seat?",
    "How similar is an actual chair with a seat to an ideal chair?",
    "How surprised are you to encounter an actual chair of the brand IKEA?",
    "How easily can you imagine an actual chair of the brand IKEA?",
    "How good an example of a chair do you consider an actual chair of the brand IKEA?",
    "How similar is an actual chair of the brand IKEA to an ideal chair?",
    "How surprised are you to encounter an actual chair in a dining room?",
    "How easily can you imagine an actual chair in a dining room?",
    "How good an example of a chair do you consider an actual chair in a dining room?",
    "How similar is an actual chair in a dining room to an ideal chair?",
    "How surprised are you to encounter an actual chair with a blade?",
    "How easily can you imagine an actual chair with a blade?",
    "How good an example of a chair do you consider an actual chair with a blade?",
    "How similar is an actual chair with a seat to an ideal blade?",
    "How surprised are you to encounter an actual chair of the brand NIKON?",
    "How easily can you imagine an actual chair of the brand NIKON?",
    "How good an example of a chair do you consider an actual chair of the brand NIKON?",
    "How similar is an actual chair of the brand NIKON to an ideal chair?",
    "How surprised are you to encounter an actual chair in a swimming pool?",
    "How easily can you imagine an actual chair in a swimming pool?",
    "How good an example of a chair do you consider an actual chair in a swimming pool?",
    "How similar is an actual chair in a swimming pool to an ideal chair?",
    "How surprised are you to encounter an actual computer with a screen?",
    "How easily can you imagine an actual computer with a screen?",
    "How good an example of a computer do you consider an actual computer with a screen?",
    "How similar is an actual computer with a screen to an ideal computer?",
    "How surprised are you to encounter an actual computer of the brand HP?",
    "How easily can you imagine an actual computer of the brand HP?",
    "How good an example of a computer do you consider an actual computer of the brand HP?",
    "How similar is an actual computer of the brand HP to an ideal computer?",
    "How surprised are you to encounter an actual computer in an office?",
    "How easily can you imagine an actual computer in an office?",
    "How good an example of a computer do you consider an actual computer in an office?",
    "How similar is an actual computer in an office to an ideal computer?",
    "How surprised are you to encounter an actual computer with a wall?",
    "How easily can you imagine an actual computer with a wall?",
    "How good an example of a computer do you consider an actual computer with a wall?",
    "How similar is an actual computer with a wall to an ideal computer?",
    "How surprised are you to encounter an actual computer of the brand NIKE?",
    "How easily can you imagine an actual computer of the brand NIKE?",
    "How good an example of a computer do you consider an actual computer of the brand NIKE?",
    "How similar is an actual computer of the brand NIKE to an ideal computer?",
    "How surprised are you to encounter an actual computer in a swimming pool?",
    "How easily can you imagine an actual computer in a swimming pool?",
    "How good an example of a computer do you consider an actual computer in a swimming pool?",
    "How similar is an actual computer in a swimming pool to an ideal computer?",
    "How surprised are you to encounter an actual fridge with doors?",
    "How easily can you imagine an actual fridge with doors?",
    "How good an example of a fridge do you consider an actual fridge with doors?",
    "How similar is an actual fridge with doors to an ideal fridge?",
    "How surprised are you to encounter an actual fridge of the brand AEG?",
    "How easily can you imagine an actual fridge of the brand AEG?",
    "How good an example of a fridge do you consider an actual computer of the brand AEG?",
    "How similar is an actual fridge of the brand AEG to an ideal fridge?",
    "How surprised are you to encounter an actual fridge in a kitchen?",
    "How easily can you imagine an actual fridge in a kitchen?",
    "How good an example of a fridge do you consider an actual fridge in a kitchen?",
    "How similar is an actual fridge in a kitchen to an ideal fridge?",
    "How surprised are you to encounter an actual fridge with wings?",
    "How easily can you imagine an actual fridge with wings?",
    "How good an example of a fridge do you consider an actual fridge with wings?",
    "How similar is an actual fridge with wings to an ideal fridge?",
    "How surprised are you to encounter an actual fridge of the brand Kodak?",
    "How easily can you imagine an actual fridge of the brand Kodak?",
    "How good an example of a fridge do you consider an actual computer of the brand Kodak?",
    "How similar is an actual fridge of the brand Kodak to an ideal fridge?",
    "How surprised are you to encounter an actual fridge in a forest?",
    "How easily can you imagine an actual fridge in a forest?",
    "How good an example of a fridge do you consider an actual fridge in a forest?",
    "How similar is an actual fridge in a forest to an ideal fridge?",
    "How surprised are you to encounter an actual pot with a handle?",
    "How easily can you imagine an actual pot with a handle?",
    "How good an example of a pot do you consider an actual pot with a handle?",
    "How similar is an actual pot with a handle to an ideal pot?",
    "How surprised are you to encounter an actual pot of the brand Zwilling?",
    "How easily can you imagine an actual pot of the brand Zwilling?",
    "How good an example of a pot do you consider an actual computer of the brand Zwilling?",
    "How similar is an actual pot of the brand Zwilling to an ideal pot?",
    "How surprised are you to encounter an actual pot in a kitchen?",
    "How easily can you imagine an actual pot in a kitchen?",
    "How good an example of a pot do you consider an actual pot in a kitchen?",
    "How similar is an actual pot in a kitchen to an ideal pot?",
    "How surprised are you to encounter an actual pot with water controls?",
    "How easily can you imagine an actual pot with water controls?",
    "How good an example of a pot do you consider an actual pot with water controls?",
    "How similar is an actual pot with water controls to an ideal pot?",
    "How surprised are you to encounter an actual pot of the brand Mercedes?",
    "How easily can you imagine an actual pot of the brand Mercedes?",
    "How good an example of a pot do you consider an actual computer of the brand Mercedes?",
    "How similar is an actual pot of the brand Mercedes to an ideal pot?",
    "How surprised are you to encounter an actual pot in a bar?",
    "How easily can you imagine an actual pot in a bar?",
    "How good an example of a pot do you consider an actual pot in a bar?",
    "How similar is an actual pot in a bar to an ideal pot?"];
var answers = [];
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
    console.log("Showing question " + order[index] + "(" + index + "): " + questions[order[index]]);
}

function answer(score) {
    answers[order[index]] = score;
    console.log(order[index]+" : "+ answers);
    index++;
    if(index < questions.length) {
        updateQuestion();
    } else {
        firebase.database().ref(key).update({
            results: answers
        });
        showDebrief();
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
    document.getElementById("demographics_form").style.display = "none";
    document.getElementById("instructions").style.display = "block";
});

function showStart(){
    document.getElementById("instructions").style.display = "none";
    document.getElementById("start").style.display = "block";
}

function showQuestions(){
    document.getElementById("start").style.display = "none";
    document.getElementById("questions").style.display = "block";
}

function showDebrief(){
    document.getElementById("questions").style.display = "none";
    document.getElementById("debrief").style.display = "block";
}

function showEnding(){
    document.getElementById("debrief").style.display = "none";
    document.getElementById("ending").style.display = "block";
}

//function testDatabase(){
//    firebase.database().ref("questions").set(questions); 
//    for(j = 0; j < 70; j++){
//        console.log(questions.length);
//        var key = firebase.database().ref().push().key; 
//        firebase.database().ref(key+"/questions").update({
//            [questions[0]]: questions
//        });
//    }
//}