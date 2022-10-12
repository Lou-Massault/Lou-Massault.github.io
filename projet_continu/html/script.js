function calculIMC_metrique(poids_kg, taille_m) {
    let IMC = poids_kg / taille_m**2;
    return IMC
}

function calculIMC_imperial(poids_livres, taille_pieds, taille_pouces) {
    let IMC = (poids_livres / 2.20) / ((taille_pieds*0,3048 + taille_pouces*0,0254)**2)
    return IMC
}
function getValue() {
    let poids_kg = document.querySelector('#poids_kg').value;
    let taille_m = document.querySelector('#taille_m').value;
    let poids_livres = document.querySelector('#poids_livres').value;
    let taille_pieds = document.querySelector('#taille_pieds').value;
    let taille_pouces = document.querySelector('#taille_pouces').value;
    if (poids_kg === '', taille_m === '') {
        IMC = calculIMC_imperial(poids_livres, taille_pieds, taille_pouces);
    }
    else {
        IMC = calculIMC_metrique(poids_kg, taille_m);
    }
    document.querySelector('#myIMC').value = IMC;
}

function remplissageAuto() {
    let poids_kg = document.querySelector('#poids_kg');
    let taille_m = document.querySelector('#taille_m');
    let poids_livres = document.querySelector('#poids_livres');
    let taille_pieds = document.querySelector('#taille_pieds');
    let taille_pouces = document.querySelector('#taille_pouces');
    if (poids_kg.value) {
        poids_livres.value = Math.round((poids_kg.value * 2.2));
    }
    else if (poids_livres.value) {
        poids_kg.value = Math.round(poids_livres.value / 2.2)
    }
    if (taille_m.value) { 
        nb_pouces = (taille_m.value * 39.37) 
        taille_pieds.value = Math.floor(nb_pouces/12) 
        taille_pouces.value = Math.ceil(nb_pouces - (12*taille_pieds.value))
    }
    else if (taille_pieds.value, taille_pouces.value) {
        taille_m.value = (Number(taille_pieds.value*0.3048)+ Number(taille_pouces.value*0.0254)).toFixed(2)
    }
    
 }

let poids_kg = document.querySelector('#poids_kg');
let taille_m = document.querySelector('#taille_m');
let poids_livres = document.querySelector('#poids_livres');
let taille_pieds = document.querySelector('#taille_pieds');
let taille_pouces = document.querySelector('#taille_pouces');
poids_kg.addEventListener('change', remplissageAuto)
taille_m.addEventListener('change', remplissageAuto)
poids_livres.addEventListener('change', remplissageAuto)
taille_pieds.addEventListener('change', remplissageAuto)
taille_pouces.addEventListener('change', remplissageAuto)

let btn = document.querySelector('#btn')
btn.addEventListener('click', getValue)

let btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', function(e) {
    e = document.querySelector("form").reset();
})

