function showEmoji() {
    fetch(`https://api.github.com/emojis`).then(res => res.json()).then(json => {
        resultado = [];
        let array = Object.entries(json);
        array.forEach(element => {
            if (element[0].includes("y")) {
                resultado.push(element)
            }
        })
    return resultado;
    });
}
showEmoji()
// Al final he conseguido un array con solo los emojis que contienen una "y" en el nombre y su correspondiente imagen, pero no me ha dado tiempo a 
// probar a imprimirlos en el docuemto, por lo que intentaria hacer otro foreach incluyendo esto

// let imagen = document.createElement("img");
// imagen.setAttribute("src", array[1]);
// document.body.appendChild(imagen)