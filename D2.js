/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const num = 30;
const num2 = 27;
if (num > num2) {
  alert("30 è maggiore di 27");
} else if (num < num2) {
  alert(30 < 27);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const num3 = 4;
const num4 = 5;
if (num4 !== num3) {
  console.log("not equal");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
if (num4 % num3 === 0) {
  console.log("divisibile per 5");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const num5 = 0;
const num6 = 8;
if (num5 === 8 || num6 === 8 || num5 + num6 === 8) {
  console.log("true");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
const totalShoppingCart = {
  phone: 300,
  earphones: 10,
  cover: 5,
};
const shipping = 10;
if (totalShoppingCart.phone + totalShoppingCart.earphones + totalShoppingCart.cover > 50) {
  alert("hai diritto alla spedizione gratuita!");
} else {
  alert("il totale più la spedizione è ", totalShoppingCart.phone + totalShoppingCart.earphones + totalShoppingCart.cover + shipping);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
if ((totalShoppingCart.phone / 100 + totalShoppingCart.earphones / 100 + totalShoppingCart.cover / 100) * 20 > 50) {
  alert("hai diritto alla spedizione gratuita!");
} else {
  alert("il totale più la spedizione è ", phone + earphones + cover + shipping);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const am = 46;
const ironMan = 23;
const i = 132;
if (i > am && i > ironMan && am > ironMan) {
  console.log(i + " " + am + " " + ironMan);
} else if (am > i && am > ironMan && i > ironMan) {
  console.log(am + " " + i + " " + ironMan);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const whatIs = 15;
if (typeof whatIs === Number && typeof whatIs !== String && typeof whatIs !== Boolean) {
  console.log("è un numero");
} else {
  console.log("non è un numero");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const value = 13;
if (value % value !== 0) {
  console.log("dispari");
} else {
  console.log("pari");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10 && val >=5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
console.log(me);
me.city = "Toronto";

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const interi = [];
interi.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(interi);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
interi.splice(9, 1, 100);
console.log(interi);
