let liste_cartes = ["/labo2/images/1.png", "/labo2/images/2.png", "/labo2/images/3.png", "/labo2/images/4.png", "/labo2/images/5.png", "/labo2/images/6.png", "/labo2/images/7.png", "/labo2/images/8.png", "/labo2/images/9.png", "/labo2/images/10.png", "/labo2/images/11.png", "/labo2/images/12.png", "/labo2/images/13.png",
"/labo2/images/14.png", "/labo2/images/15.png", "/labo2/images/16.png", "/labo2/images/17.png", "/labo2/images/18.png", "/labo2/images/19.png", "/labo2/images/20.png", "/labo2/images/21.png", "/labo2/images/22.png", "/labo2/images/23.png", "/labo2/images/24.png", "/labo2/images/25.png", "/labo2/images/26.png",
"/labo2/images/27.png", "/labo2/images/28.png", "/labo2/images/29.png", "/labo2/images/30.png", "/labo2/images/31.png", "/labo2/images/32.png", "/labo2/images/33.png", "/labo2/images/34.png", "/labo2/images/35.png", "/labo2/images/36.png", "/labo2/images/37.png", "/labo2/images/38.png", "/labo2/images/39.png",
"/labo2/images/40.png", "/labo2/images/41.png", "/labo2/images/42.png", "/labo2/images/43.png", "/labo2/images/44.png", "/labo2/images/45.png", "/labo2/images/46.png", "/labo2/images/47.png", "/labo2/images/48.png", "/labo2/images/49.png", "/labo2/images/50.png", "/labo2/images/51.png", "/labo2/images/52.png"]
let len = liste_cartes.length

function affichageDeck() {
    for (let i=0; i<len; i++) {
        document.querySelector("#_"+(i+1)).src = liste_cartes[i]
    }
}

window.addEventListener('load', affichageDeck)

function brassage() {
    let len = liste_cartes.length
    let moitie = len/2
    let half_deck1 = liste_cartes.slice(0, moitie)
    let half_deck2 = liste_cartes.slice(moitie, len)
    let new_deck = []
    for (let i=0; i<moitie; i++) {
        new_deck.push(half_deck1[i])
        new_deck.push(half_deck2[i])
    }
    liste_cartes = new_deck
    for (let i=0; i<len; i++) {
        document.querySelector("#_"+(i+1)).src = liste_cartes[i]
    }

}


let btn = document.querySelector('#btn')
btn.addEventListener('click', brassage)
