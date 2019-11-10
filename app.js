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
}());