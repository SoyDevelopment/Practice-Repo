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
            for _ in 0..10 {
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

#[derive(Debug)]
struct Player {
    name: String,
    hand: Vec<Card>,
}

impl Player {
    fn new(name: &str) -> Player {
        Player { name: name.to_string(), hand: Vec::new() }
    }

    fn draw_card(&mut self, deck: &mut Deck) {
        if let Some(card) = deck.draw() {
            self.hand.push(card);
        }
    }
}
fn main() {
    let mut deck = Deck::new();
    deck.shuffle();

    let mut players = vec![
        Player::new("Niko"),
        Player::new("Geo"),
        Player::new("Katy"),
        Player::new("Emerson"),
    ];

    for player in &mut players {
        for _ in 0..4 {
            player.draw_card(&mut deck);
        }
    }

    for player in &players {
        println!("{:?}'s hand: {:?}", player.name, player.hand);
    }
}