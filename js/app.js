console.log('Campo Minato')

// Soluzione mia (parziale)

// function generaElencoNumeri(start, end) {
//   const elenco = [];
//   for (let i = start; i <= end; i++) {
//     elenco.push(i);
//     // console.log(elenco)
//   }
//   return elenco;
// }
// const numeri = []
// const numeroColonne = 10
// const numeroRighe = 10
// const difficoltà = ['Easy', 'Hard', 'Crazy'];
// const celleTotali = numeroRighe * numeroColonne;


// const n = generaElencoNumeri(1, celleTotali);

// // numeri.push(n);
// console.log(n);
// const gridElement = document.querySelector('.grid');

// for (let i = 0; i < n.length; i++) {
//   const numero = n[i];
//   const element = document.createElement('div');
//   element.classList.add('square');
//   element.style.width = 'calc(100% / 10)'
//   element.append(numero);

//   gridElement.appendChild(element);
// }



// Soluzione corso

// Utente seleziona la modalità dalla select

// Utente clicca sul pulsante play e parte il gioco
const selectElement = document.getElementById('mode');
const playButton = document.getElementById('play');
const gridElement = document.querySelector('.grid');

// playButton.addEventListener('click', () => {
//   //logica di gioco
//   console.log('Inizia il gioco')
// })

const startGame = () => {
  //logica di gioco
  console.log('Inizia il gioco')

  // Impostare la modalità di gioco

  // Leggere value della select con la modalità selezionata dall'utente
  const mode = parseInt(selectElement.value)
  // let rows;
  // let columns;
  // let cellSize;
  let rows, columns, cellSize; //-> come sopra
  console.log(mode)
  // Determinare il numero di righe e di colonne
  switch (mode) {
    case 1:
      // righe e colonne = 10
      // rows = 10
      // columns = 10
      rows = columns = 10; //-> come sopra
      break;
    case 2:
      // righe e colonne = 9
      rows = columns = 9;
      break;
    case 3:
      // righe e colonne = 7
      rows = columns = 7;
      break;

    default:
      rows = columns = 10;
  }
  // Determinare il numero totale di celle da generare
  const cellNumber = rows * columns;
  cellSize = `calc( 100% / ${columns})`
  console.log(rows, columns, cellNumber);
  // Cancellare contenuto della griglia precedentemente inserita
  gridElement.innerHTML = '';

  // Funzione event listener della cella
  // const cellCallback = function () {
  //   console.log('Hai cliccato', this);
  //   // al click, aggiungere la classe selected
  //   this.classList.add('selected')

  //   this.removeEventListener('click', cellCallback)
  // }

  function gridCallback(event) {
    console.log(event.target)
    const element = event.target
    element.classList.add('selected')
  }
  gridElement.addEventListener('click', gridCallback)


  // Generare la griglia

  // Fare ciclo da 1 a totale di celle = righe * colonne
  for (let i = 0; i < cellNumber; i++) {
    // Generare una cella
    const cell = document.createElement('div');
    // Impostare la larghezza della cella
    cell.style.width = cellSize
    // Aggiungere il contenuto (numero progressivo da 1 a numero di celle)
    cell.append(i + 1);
    // Aggiungere classe .cell
    cell.classList.add('cell');
    // Appendere la cella dentro alla griglia
    gridElement.appendChild(cell);

    // Aggiungere event listener alla cella
    // cell.addEventListener('click', cellCallback)
  }




}
playButton.addEventListener('click', startGame);