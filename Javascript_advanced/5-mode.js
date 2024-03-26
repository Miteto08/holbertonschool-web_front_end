function changeMode(size, weight, transform, background, color) {
    document.documentElement.style['font-size'] = size
    document.documentElement.style['font-weight'] = weight
    document.documentElement.style['text-transform'] = transform
    document.documentElement.style['background-color'] = background
    document.documentElement.style['color'] = color
}

function main() {
    var spooky = changeMode(9, bold, uppercase, pink, green)
    var darkMode = changeMode(12, bold, capitalize, black, white)
    var screamMode = changeMode(12, normal, lowercase, white, black)
    document.querySelector("body").innerHTML = `
    <p>Welcome Holberton!</p>
    <button id= >Spooky</button>
    `
    
}