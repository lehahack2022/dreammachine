function stringToHash(string) {
    let hash = 0;
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}

function makeDream() {
    const dreamStage = document.getElementById("dream-stage");
    const dreamInput = document.getElementById("dream-input").value;
    const secretConcepts = document.getElementById("secret-concepts").innerHTML;
    const concepts = secretConcepts.split("|");
    concepts.forEach((concept, i) => {
        const conceptParts = concept.split(":");
        concepts[i] = {
            symbol: conceptParts[0],
            name: conceptParts[1],
            meaning: conceptParts[2]
        }
    })
    const firstSymbol = concepts[dreamInput.length % concepts.length];
    const secondSymbol = concepts[Math.abs(stringToHash(dreamInput)) % concepts.length];
    const thirdSymbol = concepts [Math.abs(stringToHash("" + stringToHash(dreamInput))) % concepts.length];
    console.log(firstSymbol); console.log(secondSymbol); console.log(thirdSymbol)
    dreamStage.innerHTML = firstSymbol.symbol + secondSymbol.symbol + thirdSymbol.symbol;
    document.getElementById("conceptualised-text").style.display = "inherit";
    document.getElementById("dream-meaning").style.display = "inherit";
    document.getElementById("created-dream").innerHTML = `${firstSymbol.name} ${secondSymbol.name} ${thirdSymbol.name} `
    document.getElementById("symbol-1").innerHTML = `${firstSymbol.symbol} <br> ${firstSymbol.meaning}`
    document.getElementById("symbol-2").innerHTML = `${secondSymbol.symbol} <br> ${secondSymbol.meaning}`
    document.getElementById("symbol-3").innerHTML = `${thirdSymbol.symbol} <br> ${thirdSymbol.meaning}`
}