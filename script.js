async function atualizarDados() {
    try {
        const resposta = await fetch("http://SEU_IP/dados"); // coloque o IP do ESP32
        const dados = await resposta.json();

        document.getElementById("temp").innerText = dados.temperatura + " °C";
        document.getElementById("umid").innerText = dados.umidade + " %";
    } catch (e) {
        console.error("Erro ao buscar dados:", e);
    }
}

// Atualiza a cada 5 segundos
setInterval(atualizarDados, 5000);
atualizarDados();
