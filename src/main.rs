use rand::seq::SliceRandom;

#[derive(Debug)]
struct Card {
    value: i8,
}

impl Card {
    fn new(num: i8) -> Card {
        Card { value: num }
    }
}

#[derive(Debug)]
struct Deck {
    stack: Vec<Card>,
}

impl Deck {
    fn new() -> Deck {
        let mut cards = Vec::new();
        for suit in 0..4 {
            for _value in 0..10 {
                let new_card = Card::new(suit);
                cards.push(new_card);
            }
        }
        Deck { stack: cards }
    }

    fn shuffle(&mut self) {
        self.stack.shuffle(&mut rand::thread_rng());
    }

    fn draw(&mut self) -> Option<Card> {
        self.stack.pop()
    }
}

fn main() {
    let mut deck = Deck::new();
    deck.shuffle();

    while let Some(card) = deck.draw() {
        println!("Card: {:?}", card);
    }

    println!("Deck is empty!");
}
