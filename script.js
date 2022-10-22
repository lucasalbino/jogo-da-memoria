const FRONT = "card_front"
const BACK = "card_back"

let techs = [
    'bootstrap',
    'electron',
    'firebase',
    'html',
    'css',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
]

let cards = null
startGame()

function startGame() {
    cards = createCardsFromTechs(techs);
    shuffleCards(cards);
    console.log(cards)
}

function shuffleCards(cards) {

    let currentIntex = cards.length;
    let randomIndex = 0;

    while (currentIntex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIntex)
        currentIntex--;

        [cards[randomIndex], cards[currentIntex]] = [cards[currentIntex], cards[randomIndex]]
    }







}

createCardsFromTechs(techs)

function createCardsFromTechs(techs) {
    let cards = []
    for (let tech of techs) {
        cards.push(createPairFromTech(tech))
    }
    return cards.flatMap(pair => pair)
}

function createPairFromTech(tech) {
    return [
        {
            id: createIdWithTech(tech),
            icon: tech,
            flipped: false
        }, {
            id: createIdWithTech(tech),
            icon: tech,
            flipped: false
        }
    ]
}

function createIdWithTech(tech) {
    return tech + parseInt(Math.random() * 1000)
}