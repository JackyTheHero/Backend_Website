console.log("Frontend geladen");

var adresse = "http://ai-info.informatik.hs-fulda.de:443/htdocs/start.html";
var CHANGE = "1";

var myWindow = window.open(adresse, "fenster"); //"_self", dann öffnet es sich im selben Tab
const Http = new XMLHttpRequest();
const HttpChanged = new XMLHttpRequest();

//alle 3 sek: diesen request abfragen
setInterval(load, 3000);

function load() {
	check(); 
    console.log(CHANGE);
	if(CHANGE) {
        console.log("users/adresse wird aufgerufen");
		const url = 'http://ai-info.informatik.hs-fulda.de:443/users/adresse';
		Http.open("GET", url);
		Http.send();
	}
}

Http.onreadystatechange = (e) => {
    console.log("Http.onreadystatechange wurde aufgerufen");
	if (Http.readyState === XMLHttpRequest.DONE && Http.status === 200) {
		console.log(Http.responseText + "This is a test");
		adresse = Http.responseText;
        //hier wird website mit parametern von datenbank als url festgelegt
        window.open(adresse, "fenster");
	}

}


function check() {
    console.log("users/change wird aufgerufen");
	const url = 'http://ai-info.informatik.hs-fulda.de:443/users/change';
	HttpChanged.open("GET", url);
	HttpChanged.send();
}

HttpChanged.onreadystatechange = (f) =>{
    console.log("HttpChanged.onreadystatechange wurde aufgerufen");
	if (HttpChanged.readyState === XMLHttpRequest.DONE && HttpChanged.status === 200) {

		CHANGE = ("1" == HttpChanged.responseText);
	}
	
}

//Idee:
//var adresse = RESTT CAL => localhost:3000/users/adresse
//myWindow.open(adresse);