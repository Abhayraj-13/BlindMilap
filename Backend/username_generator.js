const adjectives = [
    "Cheerful", "Dizzy", "Bubbly", "Wacky", "Jolly", "Grumpy",
    "Sneaky", "Brave", "Curious", "Nerdy", "Giggly", "Sassy",
    "Clever", "Daring", "Happy", "Sleepy", "Zany", "Whimsical",
    "Playful", "Energetic", "Goofy", "Funky", "Lively", "Mischievous",
    "Quirky", "Witty", "Bright", "Charming", "Silly", "Spunky",
    "Eager", "Feisty", "Jovial", "Radiant", "Spritely", "Vivacious",
    "Zippy", "Blissful", "Ecstatic", "Excited", "Joyful", "Merry","Dazzling",
    "Peppy", "Perky", "Vibrant", "Zestful", "Animated", "Breezy", "Mistified", "Crazy", "Crafty"
];

const nouns = [
    "Banana", "Ninja", "Unicorn", "Pirate", "Dragon", "Panda",
    "Penguin", "Robot", "Wizard", "Zombie", "Monkey", "Elephant",
    "Giraffe", "Koala", "Tiger", "Lion", "Bear", "Eagle",
    "Fox", "Hedgehog", "Otter", "Owl", "Raccoon", "Sloth",
    "Squirrel", "Turtle", "Whale", "Wolf", "Yak", "Zebra",
    "Kangaroo", "Lemur", "Chinchilla", "Dolphin", "Frog", "Goose",
    "Iguana", "Jellyfish", "Lobster", "Meerkat",
    "Narwhal", "Octopus", "Platypus", "Quokka", "Raven","Horse", "Shark",
    "Toucan", "Urchin", "Vulture", "Walrus", "Xerus", "Yak", "Squirrel", "Feathers", "Unicorn"
];

const generateUsername = (existingUsernames) => {
    while (true) {
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
            const number = Math.floor(Math.random() * 100);
        const username = `${adjective}${noun}${number.toString().padStart(2, '0')}`;
            
        if (!existingUsernames.has(username)) {
            return username;
        }
    }
};

const generateUniqueUsername = () => {
    const existingUsernames = new Set();  
    const newUsername = generateUsername(existingUsernames);
    return newUsername;
};

module.exports = { generateUniqueUsername };
