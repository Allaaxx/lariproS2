onload = () => {
  document.body.classList.remove("container");
};
 // Função para redirecionar para outra página
 function redirecionarParaOutraPagina() {
  window.location.href = 'outra_pagina.html';
}

// Tempo em milissegundos (5 segundos no exemplo)
var tempoParaRedirecionamento = 5000;

// Função para atualizar o contador e redirecionar após o tempo especificado
function iniciarRedirecionamento() {
  var contadorElement = document.getElementById('contador');
  var segundosRestantes = parseInt(contadorElement.textContent);

  if (segundosRestantes === 0) {
      // Redirecionar quando o contador chegar a zero
      redirecionarParaOutraPagina();
  } else {
      // Atualizar o contador e agendar uma chamada recursiva após 1 segundo
      segundosRestantes--;
      contadorElement.textContent = segundosRestantes;
      setTimeout(iniciarRedirecionamento, 1000);
  }
}

// Iniciar o redirecionamento após um tempo especificado
setTimeout(iniciarRedirecionamento, tempoParaRedirecionamento);