const quotes = [
    {
        quote: "1quote blah blah blah~",
        author: "author blash"
    },
    {
        quote: "2quote blah blah blah~",
        author: "author blash"
    },
    {
        quote: "3quote blah blah blah~",
        author: "author blash"
    },
    {
        quote: "4quote blah blah blah~",
        author: "author blash"
    },
    {
        quote: "5quote blah blah blah~",
        author: "author blash"
    },
    {
        quote: "6quote blah blah blah~",
        author: "author blash"
    }
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;