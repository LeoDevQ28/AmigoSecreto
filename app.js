let amigos = [];

let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

alert("Bem-vindo ao jogo do Amigo Secreto!\nDigite nomes e depois sorteie o amigo secreto.");

function adicionarAmigo(){
// a) Ler o valor do input e remover espaços extras
let nome = inputAmigo.value.trim();
// b) Verificar se o nome está vazio
if (nome ===''){
    alert('Digite um nome válido!')
    return;// para a função se não digitou nada
}
  // c) Verificar se o nome já existe (ignorar maiúsculas/minúsculas)
let existe = amigos.some(a => a.toLowerCase() === nome.toLowerCase());
if (existe){
    alert('Esse nome já foi adicionado!');
    return;// para a função se nome repetido
}

  // d) Adicionar o nome no array amigos
amigos.push(nome);
 // e) Mostrar no console que nome foi adicionado (concatenação)
console.log('Nome adicionado:' + nome);
 // f) Limpar o campo input e colocar foco para digitar outro nome
inputAmigo.value = '';
inputAmigo.focus();
  // g) Atualizar a lista de nomes na tela
atualizarLista();
}

function atualizarLista(){
   // a) Limpar a lista atual
    listaAmigos.innerHTML = '';
     // b) Percorrer o array amigos e criar um <li> para cada nome
    amigos.forEach((nome, index)=>{
      let li = document.createElement('li');
      li.textContent = nome;
        // c) Criar botão remover ao lado do nome
      let btnRemover = document.createElement('button');
      btnRemover.textContent = 'Remover';
      // d) Evento para remover o nome quando clicar no botão
      btnRemover.addEventListener('click', () => {
        amigos.splice(index, 1); // remove do array
        atualizarLista();// atualiza a lista na tela
      });
       // e) Colocar o botão dentro do li e o li dentro da ul
      li.appendChild(btnRemover);
      listaAmigos.appendChild(li);
    });
}

function sortearAmigo(){
 // a) Verifica se tem nomes na lista
  if (amigos.length === 0){
    alert('Adicione pelo menos um amigo antes de sortear!');
    return;
  }
// b) Gera número aleatório entre 0 e tamanho do array - 1
  let indice = Math.floor(Math.random() * amigos.length);
   // c) Pega o nome sorteado
  let sorteado = amigos[indice];
  // d) Limpa a área do resultado e mostra o nome sorteado
  resultado.innerHTML = ''
  let li = document.createElement('li');
  li.textContent = 'O amigo secreto sorteado é: ' + sorteado;
  resultado.appendChild(li);
 // e) Também mostrar um alert com o resultado
  alert('O amigo secreto sorteado é: ' + sorteado);
}