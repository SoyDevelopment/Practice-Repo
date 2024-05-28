#[derive(Debug)]
struct Card {
    value: i8
}

impl Card {
    fn new(num: i8) -> Card {
        Card{value: num}
    }
}

#[derive(Debug)]
struct Deck {
    stack: Vec<Card>
}

impl Deck {
    fn new() -> Deck {
        let mut cards = Vec::new();
        for x in 0..4 { 
            for _i in 0..10{
                let new_card = Card::new(x);
                cards.push(new_card);
            }
        }
        Deck { stack: cards }
    }
}

fn main() {
    let deck: Deck = Deck::new();
    for x in deck.stack.iter() {
        println!("Card: {:?}", x);
    }
}
