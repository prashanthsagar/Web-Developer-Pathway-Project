
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("trainerBio");
  expandImg.src = imgs.src;
  switch (imgs.alt) {
  case "Aoife":
	imgText.innerHTML = "Trainer: Aoife Walsh<br>Background: Former professional dancer<br>Class: Dance Fitness<br>Bio: Aoife Walsh brings her extensive background in professional dance to the fitness world. With years of experience in ballet and contemporary dance, Aoife's Dance Fitness class combines high-energy choreography with intense cardio exercises. Her passion for dance and fitness motivates her students to express themselves through movement while getting a full-body workout.";
    break;
  case "Geoff":
	imgText.innerHTML = document.getElementById("text-Geoff").innerHTML;
    break;
  case "Lucy":
	imgText.innerHTML = document.getElementById("text-Lucy").innerHTML;
    break;
  case "Clive":
	imgText.innerHTML = document.getElementById("text-Clive").innerHTML;
    break;  
  case "Valentina":
	imgText.innerHTML = document.getElementById("text-Valentina").innerHTML;
    break;
  case "Natalie":
	imgText.innerHTML = document.getElementById("text-Natalie").innerHTML;
    break;
  default:
    console.log("Invalid input id");
    break;
}
  expandImg.parentElement.style.display = "block";
}



function OpenNow(){
	let isToday = new Date();
	var currentDay = isToday.getDay();
	var currentTime = isToday.getHours() + ":" + isToday.getMinutes();
	var currentMonth = isToday.getMonth();
	console.log (currentMonth);
	var opennowtext = document.getElementById("isopennow");
	var start;
	var end;
	switch(currentDay){
		case 0:
			start = "08:00";
			end = "21:00";
			break;
		case 1:
			start = "06:00";
			end = "22:00";
			break;
		case 2:
			start = "06:00";
			end = "22:00";
			break;
		case 3:
			start = "06:00";
			end = "22:00";
			break;
		case 4:
			start = "06:00";
			end = "22:00";
			break;
		case 5:
			start = "06:00";
			end = "22:00";
			break;
		case 6:
			start = "08:00";
			end = "21:00";
			break;
		
	}
	
	if (currentTime >= start && currentTime <= end) {
			opennowtext.innerHTML = "The gym is open right now.";
	} else {
			opennowtext.innerHTML = "Sorry, the gym is closed right now.";
	}
	
	if (currentDay == 1){
			opennowtext.innerHTML = opennowtext.innerHTML + "<br>Please note our Bank Holiday opening times."
	}
	
	if (currentMonth == 11){
			opennowtext.innerHTML = opennowtext.innerHTML + "<br>Christmas opening times may vary. Closed Christmas Day and Stephens Day."
	}

}
