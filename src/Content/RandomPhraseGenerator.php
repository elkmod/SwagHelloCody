<?php declare(strict_types=1);

namespace SwagHelloCody\Content;

class RandomPhraseGenerator
{
    const PHRASES = [
        '👻 - Hello, I am localghost',
        'Did you try turning it off and on again?',
        'Clear the cache first',
        'Works on my machine 🤷🏻‍♀️',
        'What could possibly go wrong?',
        'Home is where the Wifi is',
        'There\'s no place like 127.0.0.1',
        'There are 10 different kinds of people. Those who understand binary and those who don\'t.',
        'A bugfix a day keeps the PM away',
        'What is a group of 8 Hobbits? A Hobbyte, stupid!',
        'Don\'t call it backend',
        'Reactivity is your friend, as long as it works.',
        'It worked yesterday',
        '"Mobile first, bro!" – Shakespeare',
        'Weeks of coding can save hours of planning.',
        'Everybody demands a dark theme, but nobody asks me about the dark room.',
        '"The only `intuitive` interface is the nipple. After that, it`s all learned." - Bruce Ediger',
        'Knock Knock. Race condition. Who\'s there?',
        'I\'ve got a really good UDP joke, but I don\'t know if you\'d get it',
        'To understand recursion you have to understand recursion first'
    ];

    function generatePhrase(): string
    {
        try {
            $randomIndex = random_int(0, count(self::PHRASES)-1);
        } catch (\Exception $e) {
            $randomIndex = 0;
        }

        return self::PHRASES[$randomIndex];
    }
}
