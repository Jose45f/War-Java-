class Playerhand{
    constructor(player, cards) { // went with player and cards as parameters, easy to name use  //
        this.player = player
        this.cards = cards
    }
    inputCard = () => {
        return this.cards.pop()    // could also simplify into one line but i want to get comfortable with the syntax.
    }
}

// have to 
class Card{
    constructor(name, value, suit){  //assign the name, value and suit parameters a value.
        this.name = name
        this.value = value 
        this.suit = suit

    }
    returnCard = (hand) => (
         console.log(`
         ${hand} drew; 
         ${this.name} 
         of ${this.suit}.
        ` ) 
    )
}

let createDeck = () => {
    let deck = []; // the array that will hold the deck i just created. 
    let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
    let faceAce = ['Ace', 'Queen', 'Jack', 'King']
    for (i = 0; i <= 3; i++){
        for (v = 2; v <= 14;v++){
            switch (v) {
                case 11: 
                    deck.push(new Card('Ace', 14, suits[i]));
                    break;
                case 12:
                    deck.push(new Card('Queen', 12, suits[i]));
                    break;
                case 13:
                    deck.push(new Card('Jack', 11, suits[i]));
                    break;
                case 14: 
                    deck.push(new Card('King', 13, suits[i]));
                    break;
                    default:
                        deck.push(new Card(v.toString(), v, suits[i]))
            }
        }
    }
    return deck;
}

let shuffleThe = (deck) => {
    let finShuffled = deck;
    for (i = 0; i < 4; i++){
        finShuffled = finShuffled.sort(() => Math.random() -.5) 
    }
    return finShuffled;
}
//main issue should be here 
const  autoFunction = () => {
    let finShuffled = shuffleThe(createDeck());
    let playerOne = 0;
    let playerTwo = 0;
    let hand1 = new Playerhand('Player One', finShuffled.slice(0, 26));
    let hand2 = new Playerhand('Player Two', finShuffled.slice(26));
    for (i = 0; i<=16; i++){
        let Player1Card = hand1.inputCard();
        let player2Card = hand2.inputCard();
        Player1Card.returnCard('Player One') //0
        player2Card.returnCard('Player Two') //1
        if(Player1Card.value > player2Card.value ){
            playerOne = playerOne + 1
            console.log ('Point to player one')
        }else if (Player1Card.value <player2Card.value) {
          playerTwo = playerTwo +1
        console.log('Point to player two')  
        }else {
            console.log('Tie, 0 points for both players')
          }
       }
       console.log (playerOne, playerTwo)
       if (playerOne > playerTwo) {
       console.log("Player one takes the win!")
       } else if (playerOne < playerTwo) {
        console.log ('Player two takes the win!')
      } else { 
        console.log(`Tie? No declared winner, but this
        calls for a treat.
        Both get a free cookie and a coffee!
        `)
    }
}

autoFunction();


// for find way to randomize cards. cards not being radamized and distrubuted. 