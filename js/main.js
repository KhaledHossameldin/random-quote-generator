var authorText = document.getElementById('author');
var quoteText = document.getElementById('quote');

var quotes = [
    {
        content: `"Be yourself; everyone else is already taken."`,
        author: `-- Oscar Wilde`
    },
    {
        content: `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
        author: `-- Marilyn Monroe`
    },
    {
        content: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
        author: `-- Albert Einstein`
    },
    {
        content: `"A room without books is like a body without a soul."`,
        author: `-- Marcus Tullius Cicero`
    },
    {
        content: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
        author: `-- Bernard M. Baruch`
    },
    {
        content: `"You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth."`,
        author: `-- William W. Purkey`
    },
    {
        content: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
        author: `-- Dr. Seuss`
    },
    {
        content: `"You only live once, but if you do it right, once is enough."`,
        author: `-- Mahatma Gandhi`
    },
    {
        content: `"In three words I can sum up everything I've learned about life: it goes on."`,
        author: `-- Robert Frost`
    },
    {
        content: `"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."`,
        author: `-- J.K. Rowling, Harry Potter and the Goblet of Fire`
    },
];

var oldIndex = -1;

function generateQuote() {
    do {
        var index = Math.floor(Math.random() * quotes.length);
    } while (oldIndex == index);
    quoteText.innerText = quotes[index].content;
    authorText.innerText = quotes[index].author;
    oldIndex = index;
}