const googleSearchBtn = document.getElementById("src-btn")

const inputEl = document.getElementById("input-el")

googleSearchBtn.addEventListener("click", function() {
    window.open(`https://www.google.com/search?q=${inputEl.value}`, "_self")
})

