

function secretRandomNo() {
    var x = document.getElementById("questionForKids")
    x.innerHTML ="Which is image number"+"&nbsp;"+ Math.floor((Math.random() * 5) + 1)+"?";
}

function randomImages(){
var animals = ["dog", "birdi", "butterfly", "butterfly1", "eagle", "flower", "rose", "bird"];
// create random image number 
     function getRandomInt(min, max) {

         //  return Math.floor(Math.random() * (max - min + 1)) + min;  

         imn = Math.floor(Math.random() * (max - min + 1)) + min;
         return animals[imn];

     }
     var r = getRandomInt(0, animals.length - 1);
    for (var i = 0; i < r; i++) {
        document.getElementById("animalImgs").innerHTML += "<img src='image/ '" + animals[ r] + "'.jpg/>'";

    }
}
