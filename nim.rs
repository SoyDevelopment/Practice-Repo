struct Deck {
    stack: Vec<i8>
}

impl Deck {
    fn new() -> Deck {
        let mut cards = Vec::new();
        for x in 0..4 { 
            for _i in 0..10{
                cards.push(x)
            }
        }
        Deck { stack: cards }
    }
}

fn main() {
    let deck: Deck = Deck::new();
    for x in deck.stack.iter() {
        println!("Card: {:?}", x)
    }
}
