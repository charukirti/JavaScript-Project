// Getting all the elements

const quoteElement = document.querySelector('.quote-text');
const authorElement = document.querySelector('.quote-author');

const getQuoteBtn = document.getElementById('generate');
const shareQuoteBtn = document.getElementById('share');


// function to generate quote
async function generateQuote() {


    try {

        const res = await fetch('https://dummyjson.com/quotes');

        if (!res.ok) {
            throw new Error(`Network response was not ok: ${res.status}`);
        }

        const data = await res.json()
        console.log(data)

        /* destructuring data */
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        const { quote, author } = data.quotes[randomIndex];

        /* displaying quote and author */
        quoteElement.textContent = quote;
        authorElement.textContent = `- ${author}`;

    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}


// Function to tweet quote

function tweetQuote() {
    window.open(`https://twitter.com/intent/tweet?text=${quoteElement.textContent} -- ${authorElement.textContent}`)
}

getQuoteBtn.addEventListener('click', generateQuote)

shareQuoteBtn.addEventListener('click', tweetQuote)

generateQuote()