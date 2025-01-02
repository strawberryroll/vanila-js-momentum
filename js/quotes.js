const quotes = [
    {
        quote: "Nothing will bring you peace, you must bring yourself to it.",
        author: "Gant Laborde"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        author: "Dalai Lama"
    },
    {
        quote: "Life has no limitations, except the ones you make.",
        author: "Les Brown"
    },
    {
        quote: "It's time to start living the life you've only imagined.",
        author: "Unknown"
    },
    {
        quote: "Obstacles are those frightful things you see when you take your eyes off your goals.",
        author: "Henry Ford"
    },
    {
        quote: "Sitting quietly, doing nothing, Spring comes, and the grass grows by itself.",
        author: "Zenrin Kushû"
    },
    {
        quote: "There’s no such things as a small act of kindness. Every act creates a ripple with no logical end.",
        author: "Scott Adams"
    },
    {
        quote: "If you want to know your past look into your present conditions. If you want to know your future look into your present actions.",
        author: "Chinese proverb"
    },
    {
        quote: "Inaction breeds doubt and fear. Action breeds confidence and courage.",
        author: "Dale Carnegie"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;