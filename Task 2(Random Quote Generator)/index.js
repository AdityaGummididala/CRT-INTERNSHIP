const quotes = [{
    quote: `“Either you die a hero or live long enough to see yourself become a villain.”`,
    character: `– Harvey Dent`
}, {
    quote: `“Why do we Fall?
    So we can learn to pick ourselves back up.”`,
    character: `– Alfred`
}, {
    quote: `"One man's probability of death...is another man's possibility for a life."`,
    character: `– Andrei Sator`
}, {
    quote: `"What's happened, happened, it's an expression of faith in the mechanics of the world, it's not an excuse for doing nothing."`,
    character: `– Neil`
}, {
    quote: `“They won’t fear it until they understand it. And they won’t understand it until they’ve used it.”`,
    character: `– Oppenheimer`
}, ]


let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".Quote");

let character = document.querySelector(".character");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    character.innerHTML = quotes[random].character;
})
