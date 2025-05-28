console.log('Campo Minato')

function generaElencoNumeri(start, end) {
  const elenco = [];
  for (let i = start; i <= end; i++) {
    elenco.push(i);
    // console.log(elenco)
  }
  return elenco;
}
const numeri = []
const numeroColonne = 10
const numeroRighe = 10
const difficoltà = ['Easy', 'Hard', 'Crazy'];
const celleTotali = numeroRighe * numeroColonne;


const n = generaElencoNumeri(1, celleTotali);

// numeri.push(n);
console.log(n);
const gridElement = document.querySelector('.grid');

for (let i = 0; i < n.length; i++) {
  const numero = n[i];
  const element = document.createElement('div');
  element.classList.add('square');
  element.style.width = 'calc(100% / 10)'
  element.append(numero);

  gridElement.appendChild(element);
}