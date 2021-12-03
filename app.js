let bouteille = document.getElementById('bouteille');
let canette = document.getElementById('canette');
let verre = document.getElementById('verre');
let papier = document.getElementById('papier');
let organique = document.getElementById('organique');
let journal = document.getElementById('journal');
let conserve = document.getElementById('conserve');
let lait = document.getElementById('lait');
let aluminium = document.getElementById('aluminium');
let organique2 = document.getElementById('organique2');


let yellow = [bouteille, canette, conserve, lait, aluminium];
let green = [verre];
let blue = [papier, journal];
let maroon = [organique, organique2];
let jaune = document.getElementById('jaune');
let vert = document.getElementById('vert');
let bleu = document.getElementById('bleu');
let marron = document.getElementById('marron');

let score = document.getElementById('score');
let points = 1;
let gagner = document.getElementById('gagner');

//ajout des points
function ajoutPoints() {
    for(let i = 0 ; i <1 ; i++) {
        score.innerHTML = 'Score : ' + points++;
    }
    if (score.innerHTML === 'Score : 10'){
        gagner.innerHTML = 'Vous avez gagné';
        gagner.style.color = 'green';
    }
}

//function des poubelles
function poubelleJaune(){

    if (bouteille.style.border === 'none'){
        if (yellow.includes(bouteille)){
            bouteille.style.border = 'ridge 7px green';
            yellow.splice(0, 1);
            ajoutPoints()
        }
        else {
            bouteille.style.border = 'ridge 5px red';
        }
    }

    if (canette.style.border === 'none'){
        if (yellow.includes(canette)){
            yellow.splice(0, 1);
            canette.style.border = 'ridge 7px green';
            ajoutPoints()
        }
        else {
            canette.style.border = 'ridge 5px red';
        }
    }

    if (conserve.style.border === 'none'){
        if (yellow.includes(conserve)){
            conserve.style.border = 'ridge 7px green';
            yellow.splice(0, 1);
            ajoutPoints()
        }
        else {
            conserve.style.border = 'ridge 5px red';
        }
    }

    if (lait.style.border === 'none'){
        if (yellow.includes(lait)){
            lait.style.border = 'ridge 7px green';
            yellow.splice(0, 1);
            ajoutPoints()
        }
        else {
            lait.style.border = 'ridge 5px red';
        }
    }

    if (aluminium.style.border === 'none'){
        if (yellow.includes(aluminium)){
            aluminium.style.border = 'ridge 7px green';
            yellow.splice(0, 1);
            ajoutPoints()
        }
        else {
            aluminium.style.border = 'ridge 5px red';
        }
    }
}

function poubelleVerte(){
    if (verre.style.border === 'none'){
        if (green.includes(verre)){
            verre.style.border = 'ridge 7px green';
            green.splice(0, 1);
            ajoutPoints()
        }
        else {
            verre.style.border = 'ridge 5px red';
        }
    }

}

function poubelleBleu(){
    if (papier.style.border === 'none'){
        if (blue.includes(papier)){
            papier.style.border = 'ridge 7px green';
            blue.splice(0, 1);
            ajoutPoints()
        }
        else {
            papier.style.border = 'ridge 5px red';
        }
    }

    if (journal.style.border === 'none'){
        if (blue.includes(journal)){
            journal.style.border = 'ridge 7px green';
            blue.splice(0, 1);
            ajoutPoints()
        }
        else {
            journal.style.border = 'ridge 5px red';
        }
    }

}

function poubelleMarron(){
    if (organique.style.border === 'none'){
        if (maroon.includes(organique)){
            organique.style.border = 'ridge 7px green';
            maroon.splice(0, 1);
            ajoutPoints()
        }
        else {
            organique.style.border = 'ridge 5px red';
        }
    }

    if (organique2.style.border === 'none'){
        if (maroon.includes(organique2)){
            organique2.style.border = 'ridge 7px green';
            maroon.splice(0, 1);
            ajoutPoints()
        }
        else {
            organique2.style.border = 'ridge 5px red';
        }
    }

}


//click des déchets
bouteille.addEventListener("click", function (){
        this.style.border = 'none';

})

canette.addEventListener("click", function (){
    this.style.border = 'none';
})

verre.addEventListener("click", function (){
    this.style.border = 'none';
})

papier.addEventListener("click", function (){
    this.style.border = 'none';
})

organique.addEventListener("click", function (){
    this.style.border = 'none';
})

journal.addEventListener("click", function (){
    this.style.border = 'none';
})

conserve.addEventListener("click", function (){
    this.style.border = 'none';
})

lait.addEventListener("click", function (){
    this.style.border = 'none';
})

aluminium.addEventListener("click", function (){
    this.style.border = 'none';
})

organique2.addEventListener("click", function (){
    this.style.border = 'none';
})

//click des poubelles
jaune.addEventListener("click", function (){
        poubelleJaune()
})
vert.addEventListener("click", function (){
    poubelleVerte()
})
bleu.addEventListener("click", function (){
    poubelleBleu()
})
marron.addEventListener("click", function (){
    poubelleMarron()
})