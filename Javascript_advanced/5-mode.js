function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size
        document.body.style.fontWeight = weight
        document.body.style.textTransform = transform
        document.body.style.backgroundColor = background
        document.body.style.color = color
    }
};

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green")
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white")
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black")

    const p = document.createElement("p")
    p.innerHTML = "Welcome Holberton!"
    const spooky_btn = document.createElement("button")
    spooky_btn.innerHTML = "Spooky"
    spooky_btn.onclick = function () { spooky() }
    const dark_btn = document.createElement("button")
    dark_btn.innerHTML = "Dark mode"
    dark_btn.onclick = function () { darkMode() }
    const scream_btn = document.createElement("button")
    scream_btn.innerHTML = "Scream mode"
    scream_btn.onclick = function () { screamMode() }
    document.body.appendChild(p)
    document.body.appendChild(spooky_btn)
    document.body.appendChild(dark_btn)
    document.body.appendChild(scream_btn)

}

main()