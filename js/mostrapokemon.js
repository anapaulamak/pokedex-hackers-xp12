function mostraPokemon(url) {
  //TO-DO:
  //  1. FAZER CONSUMO DA URL RECEBIDA COMO PARAMETRO
  const xhr = new XMLHttpRequest(); 
  xhr.open('GET', url, true);
  xhr.send();

  //  2. TRATAR DADOS RECEBIDOS PELA URL
  xhr.onload = function(e){
  const pokemon = JSON.parse(xhr.response); 
 //parse - tornar legível para conseguir ler - o inverso é stringfy

  //  3. CHAMAR FUNÇÃO POPULA MODAL PARA ELA ADICIONAR OS COMPONENTES HTML NO MODAL
  populaModal(pokemon);

  //  4. ABRIR MODAL (.modal) COM JAVASCRIPT
  //     (http://getbootstrap.com/docs/4.0/components/modal/#via-javascript)
  $('.modal').modal({show: true});

 }
}

// Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id
function populaModal(pokemon) {
  //TO-DO:
  //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL SEGUINDO O PADRÃO DO BOOTSTRAP
  //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
  const modal = document.querySelector('.modal');
  while (modal.firstChild){
    modal.removeChild(modal.firstChild);

  //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
  //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO


  }
  //Cria a faixa toda
  const dialog = document.createElement('div');
  dialog.classList.add('modal-dialog');

  //cria a caixa que vai mostrar o conteúdo
  const content = document.createElement('div');
  content.classList.add('modal-content');
  
  //cria o a div de título
  const header = document.createElement('div');
  header.classList.add('modal-header');
  content.appendChild(header);
  
  //o texto do título
  const title = document.createElement('h5');
  title.classList.add('modal-title');
  title.innerText = `${pokemon.name.toUpperCase()} - #${pokemon.id}`;
  header.appendChild(title);

  //cria div de body
  const body = document.createElement('div');
  body.classList.add('modal-body');
  content.appendChild(body);

  //Class row do grid
  const row = document.createElement('div');
  row.classList.add('row');

  //Faz as colunas do grid
  const colImg = document.createElement('div');
  colImg.classList.add('col-4', 'text-center');
  colImg.style.alignSelf = 'center';

  const colContent = document.createElement('div');
  colContent.classList.add('col-8');

  //Coloca o nome. Usa o colContent para indicar em que div vai
  const pokeName = document.createElement('h1');
  pokeName.innerText = pokemon.name;
  colContent.appendChild(pokeName);

  //coloca a imagem. Usa o colImg para indicar em que div vai
  const pokeImg = document.createElement('img');
  pokeImg.src = pokemon.sprites.front_default;
  pokeImg.classList.add('img-fluid');
  colImg.appendChild(pokeImg);

  //lista com as coisas do pokemon
  const pokeTypesList = document.createElement('ul');
  pokemon.types.map(type => {
    const pokeType = document.createElement('li');
    pokeType.innerText = type.type.name;
    pokeTypesList.appendChild(pokeType);
  });
  colContent.appendChild(pokeTypesList);

  //Coloca o item height
  const pokeHeight = document.createElement('p');
  pokeHeight.innerText = pokemon.height;
  pokeHeight.style.marginBottom = '5px';
  
  // Coloca o Bold no pokeHeight
  const heightTitle = document.createElement('strong');
  heightTitle.innerText = 'Altura: ';
  pokeHeight.prepend(heightTitle);
  colContent.appendChild(pokeHeight);

  // Coloca weight
  const pokeWeight = document.createElement('p');
  pokeWeight.innerText = pokemon.weight;
  pokeWeight.style.marginBottom = '5px';
  
  //title no weight
  const weightTitle = document.createElement('strong');
  weightTitle.innerText = 'Peso: ';
  pokeWeight.prepend(weightTitle);
  colContent.appendChild(pokeWeight);

  //id
  const pokeId = document.createElement('p');
  pokeId.innerText = pokemon.id;
  pokeId.style.marginBottom = '5px';
  
  //title id
  const idTitle = document.createElement('strong');
  idTitle.innerText = 'ID: ';
  pokeId.prepend(idTitle);
  colContent.appendChild(pokeId);

  //CRIAR UM BOTÃO NO FOOTER
  const footer = document.createElement('div');
  footer.classList.add('modal-footer');
  content.appendChild(footer);

  const footerBtn = document.createElement('button');
  footerBtn.innerText = 'Favoritar';
  footer.appendChild(footerBtn); 


  //indica onde vai cada coisa
  footer.appendChild(footerBtn);
  content.appendChild(footer);
  row.appendChild(colImg);
  row.appendChild(colContent);
  body.appendChild(row);
  dialog.appendChild(content);
  modal.appendChild(dialog);
}