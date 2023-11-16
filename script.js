const quotes = [
    {
        saying: "When Sir Isaac Newton discovered the universal law of gravitation he did not say, ‘I have discovered a mechanism that accounts for planetary motion, therefore there is no agent God who designed it.’ Quite the opposite: precisely because he understood how it worked, he was moved to increased admiration for the God who had designed it that way."
    },
    {
        saying: "Men became scientific because they expected law in nature and they expected law in nature because they believed in a lawgiver!"
    },
    {
        saying: "God loves an enquiring mind, a fact that has been a great encouragement to me in my study of mathematics and the history and philosophy of science."
    },
    {
        saying: "Great minds discuss ideas; average minds discuss events; small minds discuss people."
    },
    {
        saying: "If you want to live a happy life, tie it to a goal, not to people or things."
    },
    {
        saying: "Life is like riding a bicycle. To keep your balance, you must keep moving."
    },
    {
        saying: "I believe the more I study science, the more I believe in God."
    },
    {
        saying: "Plato is my friend, Aristotle is my friend, but my greatest friend is truth."
    },
    {
        saying: "To rejoice in temporal comforts is dangerous, to rejoice in self is foolish, to rejoice in sin is fatal, but to rejoice in God is heavenly."
    },
     {
        saying: "Whenever God means to make a man great, he always breaks him in pieces first."
    },

];

const quoteContainer = document.getElementById('quote-container');
const quoteImg = document.getElementById('quote-img');
const quoteText = document.getElementById('quote');

function generateRandomQuote() {
     // Generate a random index to select a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    // Get the randomly selected quote
    const randomQuote = quotes[quoteIndex];

    
     // Display the quote with double quotes in the text content
    quoteText.textContent = `"${randomQuote.saying}"`;
    // Set the image source based on the quote index
    quoteImg.src = `images/image${quoteIndex +1}.png`;
    
}

// Get the button element
const newQuoteBtn = document.getElementById('new-quote-btn');
// Add a click event listener to the button to generate a new quote
newQuoteBtn.addEventListener('click', generateRandomQuote);

// Generate a random quote when the page loads
generateRandomQuote();
