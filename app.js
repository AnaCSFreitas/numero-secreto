let amigos = [];

function adicionarAmigo() {
  const nomeAmigo = document.getElementById('amigo').value;
  if (nomeAmigo.trim() === '') {
    alert('Por favor, insira um nome.');
    return;
  }
  amigos.push(nomeAmigo);
  document.getElementById('amigo').value = '';
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
  for (const amigo of amigos) {
    const elementoLista = document.createElement('li');
    elementoLista.textContent = amigo;
    listaAmigos.appendChild(elementoLista);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Não há amigos para sortear.');
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  const elementoResultado = document.createElement('li');
  elementoResultado.textContent = `O amigo secreto é: ${amigoSecreto}`;
  resultado.appendChild(elementoResultado);
}
