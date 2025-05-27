console.log('Campo Minato')

const numeri = []
const numeroColonne = [10, 9, 7];
const numeroRighe = [10, 9, 7];
const difficoltà = ['Easy', 'Hard', 'Crazy'];
const celleTotali = numeroRighe * numeroColonne;


for (let i = 0; i < numeri.length; i++) {
  const numero = numeri[i];
  const element = document.createElement('div');
  element.classList.add('square');
  element.style.width = `calc( 100% / ${numeroColonne})`
  element.append(numero);

  gridElement.appendChild(element);
}