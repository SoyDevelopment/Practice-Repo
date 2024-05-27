import random

class Card:
    def __init__(self, value: int) -> None:
        self.value = value
    

class Deck:
    def __init__(self, stack: list[Card]) -> None:
        self.stack = []

    def shuffle_deck (self) -> list[Card]:
        return random.shuffle(self.stack)
    
    def draw_top_card(self) -> list[Card]:
        drawn_card : Card = [self.stack[0]]
        del self.stack[0]
        return drawn_card
# Player Profile
class Player:
    def __init__(self, name: str) -> None:
        self.name = name
        self.hand : list[Card] = []
    
    def get_hand(self) -> list[int]:
        hand_values = []
        for card in self.hand:
            hand_values.append(card.value)
        return hand_values
    
    def add_to_hand(self, cards : list[Card]) -> None:
        self.hand = self.hand + cards
        
    def play_card (self, selection : int) -> Card:
        selected_card : Card = self.hand[selection]
        del self.hand[selection]
        return selected_card



def init_deck() -> Deck:
    output : Deck = Deck([])
    card_colors: list = ["Blue", "Red", "Green", "Yellow"]
    
    for color in range(len(card_colors)):
        for i in range(10):
            output.stack.append(Card(color))

    output.shuffle_deck()

    return output

class Game:
    def __init__(self, deck : Deck, players : list[Player]) -> None:
        self.deck = init_deck()
        self.players = players
        self.pot : int = 0

        for player in self.players:
            for i in range(4):
                self.player_draw_card(player)
    
    def refreshDeck(self) -> None:
        self.deck = init_deck()
    
    def player_draw_card(self, player : Player) -> None:
        player.add_to_hand(self.deck.draw_top_card())
    
    def add_to_pot (self, card : Card) -> None:
        self.pot += card.value

    def RUN_GAME(self) -> None:
        game_limit = 20
        while(self.pot < 10):
            loser : Player = self.players[0]
            game_limit -= 1
            for player in self.players:
                loser = player
                if(len(player.hand) == 0):
                    break
                print(f"Current Pot: {self.pot}")
                print(f"{player.name}\'s Hand: {player.get_hand()}")
                player_choice = input(f"{player.name}, type the number of the card you wish to play (1 - 4): ")
                self.add_to_pot(player.play_card(int(player_choice)-1))
                if (self.pot > 9 or game_limit == 0):
                    break
        print(f'Game Over! {loser.name} is the loser!')


Emerson = Player('Emerson')
Geo = Player('Geo')
Katy = Player('Katy')
Niko = Player('Niko')

loop = Game(init_deck(),[Emerson,Geo, Katy, Niko])

loop.RUN_GAME()

