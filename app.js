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


let dechet = [bouteille, canette, verre, papier, organique, journal, conserve, lait, aluminium, organique2]

let yellow = [bouteille, canette, lait];
let jaune = document.getElementById('jaune');


function poubelleJaune(){
    if (bouteille.style.border === 'none'){
        if (yellow.includes(bouteille)){
            bouteille.style.border = 'ridge 5px green';
        }
        if (!yellow.includes(bouteille)){
            bouteille.style.border = 'ridge 5px red';
        }
    }

    if (canette.style.border === 'none'){
        if (yellow.includes(canette)){
            canette.style.border = 'ridge 5px green';
        }
        if (!yellow.includes(canette)){
            canette.style.border = 'ridge 5px red';
        }
    }

    if (verre.style.border === 'none'){
        if (yellow.includes(verre)){
            verre.style.border = 'ridge 5px green';
        }
        if (!yellow.includes(verre)){
            verre.style.border = 'ridge 5px red';
        }
    }verre
}







bouteille.addEventListener("click", function (){
    this.style.border = 'none';
})

canette.addEventListener("click", function (){
    this.style.border = 'none';
})

verre.addEventListener("click", function (){
    this.style.border = 'none';
})

jaune.addEventListener("click", function (){
  poubelleJaune()
})