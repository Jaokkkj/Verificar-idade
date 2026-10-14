function verificarIdade() {
  // 1. Captura o valor digitado no campo de input
  const elementoInput = document.getElementById("campoIdade");
  const idadeDigitada = parseInt(elementoInput.value);

  const nome =document.getElementById("camponome").value;
  
  const idadeResultante= 18 - idadeDigitada;

  // 2. Localiza o elemento onde o texto de resultado será exibido
  const elementoResultado = document.getElementById("mensagemResultado");

  // 3. Validação preventiva: impede processamento se o campo estiver em branco
  if (isNaN(idadeDigitada)) {
    elementoResultado.innerText = "Por favor, digite uma idade numérica válida.";
    elementoResultado.style.color = "#dc2626";
    return;
  }

  // 4. Tomada de decisão: bifurcação do fluxo entre maior e menor de idade
 
  
 if (idadeDigitada <= 18){
    elementoResultado.innerText = `Acesso negado para ${nome}: você tem ${idadeDigitada} anos e ainda não possui a idade mínima permitida. Faltam ${idadeResultante} para atingir a maior idade`;
    elementoResultado.style.color = "#d97706";
    console.log(`Verificação informativa: ${idadeDigitada} anos (Menor de idade)`);
    return;
  }
  else if(idadeDigitada < 12){
    elementoResultado.innerText = `${nome} voce é uma criança.`;
    elementoResultado.style.color= "#dc2626";
    return;
  }
else if(idadeDigitada >= 12 && idadeDigitada <= 17){
  elementoResultado.innerText = `${nome} voce é um adolescente `;
  elementoResultado.style.color= "#d97706";
return;
}
else if(idadeDigitada >= 18 && idadeDigitada <= 59){
  elementoResultado.innerText = `${nome} voce ja é um adulto`;
  elementoResultado.style.color= "#dc2026";
  return;
}
else {
  elementoResultado.innerText = `${nome} voce pertence a terceira idade, atendimento preferencial`;
  elementoResultado.style.color= "#16a34a";
  return;
}
}