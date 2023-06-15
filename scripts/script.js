
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
