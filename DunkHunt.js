var titi = document.getElementById("titi");
var container = document.getElementById("container");
var scorejoueur = document.getElementById("scorejoueur");
var temps = document.getElementById("temps");
var scoretiti = document.getElementById("scoretiti");

var mouvement = 1000;
var score = 0;

function mouvtiti() {
    var Largeur = container.clientWidth - titi.clientWidth;
    var Longueur = container.clientHeight - titi.clientHeight;
    var Lar = Math.random() * Largeur;
    var Long = Math.random() * Longueur;

    titi.style.left=Lar + "px";
    titi.style.top=Long + "px";
}

var deplacement = setInterval(mouvtiti,mouvement);

titi.addEventListener("click", ()=>{
    score++; 
    scorejoueur.textContent= score;
    mouvtiti
})

var temps = 30;
setInterval(() =>{
    temps--;
    if(temps===0) {
        location.reload();
    }
    
},1000);

