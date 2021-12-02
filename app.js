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

let yellow = [bouteille, canette, conserve, lait];
let green = [verre]
let jaune = document.getElementById('jaune');
let vert = document.getElementById('vert');
let bleu = document.getElementById('bleu');
let marron = document.getElementById('marron');



function poubelleJaune(){
    if (bouteille.style.border === 'none'){
        if (yellow.includes(bouteille)){
            bouteille.style.border = 'ridge 7px green';
            yellow.shift()
        }
        else {
            bouteille.style.border = 'ridge 5px red';
        }
    }

    if (canette.style.border === 'none'){
        if (yellow.includes(canette)){
            yellow.shift()
            canette.style.border = 'ridge 7px green';
            console.log(yellow);
        }
        else {
            canette.style.border = 'ridge 5px red';
        }
    }

    if (conserve.style.border === 'none'){
        if (yellow.includes(conserve)){
            conserve.style.border = 'ridge 7px green';
            yellow.shift()
            console.log(yellow);
        }
        else {
            conserve.style.border = 'ridge 5px red';
        }
    }

    if (lait.style.border === 'none'){
        if (yellow.includes(lait)){
            lait.style.border = 'ridge 7px green';
            yellow.shift()
            console.log(yellow);
        }
        else {
            lait.style.border = 'ridge 5px red';
        }
    }



}

function poubelleVerte(){
    if (verre.style.border === 'none'){
        if (green.includes(verre)){
            verre.style.border = 'ridge 7px green';
            green.shift()
        }
        else {
            verre.style.border = 'ridge 5px red';
        }
    }

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




jaune.addEventListener("click", function (){
  poubelleJaune()
})
vert.addEventListener("click", function (){
    poubelleVerte()
})