import random
import os

# Expanded lists of adjectives and nouns
adjectives = [
    "Cheerful", "Dizzy", "Bubbly", "Wacky", "Jolly", "Grumpy",
    "Sneaky", "Brave", "Curious", "Nerdy", "Giggly", "Sassy",
    "Clever", "Daring", "Happy", "Sleepy", "Zany", "Whimsical",
    "Playful", "Energetic", "Goofy", "Funky", "Lively", "Mischievous",
    "Quirky", "Witty", "Bright", "Charming", "Silly", "Spunky",
    "Eager", "Feisty", "Jovial", "Radiant", "Spritely", "Vivacious",
    "Zippy", "Blissful", "Ecstatic", "Excited", "Joyful", "Merry",
    "Peppy", "Perky", "Vibrant", "Zestful", "Animated", "Breezy", "Mistified","Crazy","Crafty"
]

nouns = [
    "Banana", "Ninja", "Unicorn", "Pirate", "Dragon", "Panda",
    "Penguin", "Robot", "Wizard", "Zombie", "Monkey", "Elephant",
    "Giraffe", "Koala", "Tiger", "Lion", "Bear", "Eagle",
    "Fox", "Hedgehog", "Otter", "Owl", "Raccoon", "Sloth",
    "Squirrel", "Turtle", "Whale", "Wolf", "Yak", "Zebra",
    "Kangaroo", "Lemur", "Chinchilla", "Dolphin", "Frog", "Goose",
    "Iguana", "Jellyfish", "Koi", "Lobster", "Meerkat",
    "Narwhal", "Octopus", "Platypus", "Quokka", "Raven", "Shark",
    "Toucan", "Urchin", "Vulture", "Walrus", "Xerus", "Yak","Squirrel","Feathers","Unicorn",""
]

USERNAME_FILE = 'usernames.txt'

def load_existing_usernames(filename):
    if os.path.exists(filename):
        with open(filename, 'r') as file:
            return set(file.read().splitlines())
    return set()

def save_username(username, filename):
    with open(filename, 'a') as file:
        file.write(username + '\n')

def generate_username(existing_usernames):
    while True:
        adjective = random.choice(adjectives)
        noun = random.choice(nouns)
        number = random.randint(0, 9)  # Adds a random number between 00 and 09
        username = f"{adjective}{noun}{number:02}"  # Ensures two-digit number format
        if username not in existing_usernames:
            return username

if __name__ == "__main__":
    existing_usernames = load_existing_usernames(USERNAME_FILE)
    new_username = generate_username(existing_usernames)
    save_username(new_username, USERNAME_FILE)
    print(new_username)
