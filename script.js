const quotes = [
    "“Agar tumhe jeevan mein kabhi haar milti hai, to use apna antim nahi, ek naya aarambh samajhna.” – Harivansh Rai Bachchan",
    "“Safar khoobsurat hai manzil se bhi.” – Javed Akhtar",
    "“Zindagi ka asli sukh samarpan mein hai.” – Munshi Premchand"
];
let quoteIndex = 0;

// Auto Quotes
function changeQuote() {
    document.getElementById("quote-box").innerText = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}
setInterval(changeQuote, 4000); // har 4 second baad quote change hoga

// Book Modal
function showBook(title, desc) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;
    document.getElementById("bookModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("bookModal").style.display = "none";
}

// Search Functionality
function searchBooks() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("book-card");
    for (let card of cards) {
        let title = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = title.includes(input) ? "block" : "none";
    }
}

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

