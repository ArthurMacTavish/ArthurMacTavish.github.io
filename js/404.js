function GetQuote() {
    jQuery.get('/misc/quotes404.txt', function(data) {
        if (data.includes("\r\n")) {
            quotes = data.split("\r\n")
        } else if (data.includes("\r")) {
            quotes = data.split("\r")
        } else {
            quotes = data.split("\n")
        }
        
        // Removing Empty Values (Thanks Bard)
        quotes = quotes.filter((element) => element !== "")

        quote = quotes[Math.floor(Math.random() * quotes.length)]

        quote = quote.split(";")

        document.getElementById("quotesLink").innerHTML = quote[0]
        document.getElementById("quotesName").innerHTML = quote[1]
        
        if (quote[2] == "/") {
            document.getElementById("quotesLink").href = quote[2]
        } else {
            document.getElementById("quotesLink").href = quote[2]
            document.getElementById("quotesLink").target = "_blank" 
        }
    });
}

function unFadeText() {
    document.getElementById("quotesContent").style.opacity = "1"
    document.getElementById("quotesName").style.opacity = "1"
}

try {
    GetQuote();
    setTimeout(unFadeText, 1)
}
catch (err) {
    document.getElementById("quotesContent").innerHTML = "There's a bit of a problem with the \"Quoting System\", please try again later :)"
    document.getElementById("quotesName").innerHTML = "Arthur MacTavish"
    setTimeout(unFadeText, 1)
}