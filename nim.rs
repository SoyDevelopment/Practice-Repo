struct Deck {
    stack: Vec<i8>
}

impl Deck {
    fn new() -> Deck {
        let mut cards = Vec::new();
        for _x in 1..10 { 
            for i in 0..3{
                cards.push(i)
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
