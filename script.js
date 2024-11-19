
document.getElementById("fetch-results").addEventListener("click", () => {
    fetchResults();
});

function fetchResults() {
    // Simula uma requisição a uma API (substitua pela API real, se houver)
    const simulatedResults = "vermelho,preto,vermelho,branco,preto,vermelho,preto";

    // Exibe os resultados
    document.getElementById("results").innerText = simulatedResults;

    // Calcula e exibe as probabilidades
    const probabilities = calculateProbabilities(simulatedResults);
    document.getElementById("probabilities").innerText = `
        Vermelho: ${probabilities.vermelho}%,
        Preto: ${probabilities.preto}%,
        Branco: ${probabilities.branco}%`;
}

function calculateProbabilities(results) {
    const colors = results.split(",");
    let vermelho = 0, preto = 0, branco = 0;

    colors.forEach(color => {
        if (color === "vermelho") vermelho++;
        else if (color === "preto") preto++;
        else if (color === "branco") branco++;
    });

    const total = colors.length;
    return {
        vermelho: ((vermelho / total) * 100).toFixed(2),
        preto: ((preto / total) * 100).toFixed(2),
        branco: ((branco / total) * 100).toFixed(2),
    };
}
