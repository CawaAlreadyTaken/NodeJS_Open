// Questo e' un commento! Verra' ignorato in esecuzione

//Hello World! (output da console)
console.log("Hello world!");

//_______________________________________________________________
//Variabili e tipi
let roberto;   // Posso dichiarare una variabile senza inizializzarla
let altezza = 180;    // Variabile inizializzata con un valore di tipo Int
let nome = "Federico";   // Variabile inizializzata con un valore di tipo String
let variabile = String(3.14);   //  Variabile inizializzata con un valore di tipo String (parsing)
const prova = 15;   // Variabile costante, se nel futuro scrivo "prova = 3;" ricevo errore
var asd = 3;
{
    var ciao = "ciao";
}
console.log(prova);   // Stampa 15
console.log(ciao);   // la variabile "ciao" e' stata dichiarata dentro un blocco ma tramite "var", quindi viene riconosciuta
                     // Se invece l'avessi dichiarata con "let", qua darebbe errore (siamo fuori dal blocco);

//_______________________________________________________________
//Oggetti e dizionari
let persona1 = {
    nome: undefined,  // persona1 avra' l'attributo nome, ma sara' "vuoto" (undefined)
    eta: undefined,   // come sopra
}


let persona = {
    altezza: 182.31,
    "altezza": 180.81,
    nome: "Nicola",
    eta: 13,
};

/* Commento multilinea
console.log(persona.nome);
console.log(persona.altezza);
console.log(persona["altezza"]);
*/

//_______________________________________________________________
//If
let a = 3;
let b = 2;

if (a < b && nome === "Federico" || true) {     // Se a minore di b E nome e' uguale (triplo uguale, sia tipo che valore devono essere uguali) a Federico OPPURE true
    console.log(1);
} else if (a <= b) {                            // Altrimenti (se non quelli sopra), se a minore o uguale a b
    console.log(5);
} else {                                        // Altrimenti (se nessuno di quelli sopra)
    console.log(7);
}

//_______________________________________________________________
//Operazioni
let c = 3;
let d = 7;
console.log(c+d);
console.log(c-d);
console.log(c/d);
console.log(c*d);
console.log(c**d);                // c^d
console.log(Math.sqrt(d));        // sqrt(d), Math e' "built-in" del linguaggio Javascript, come "String" etc..


/*
variabile++;
variabile = variabile + 1;
*/

//_______________________________________________________________
//Cicli
for (let i = 3; i < 10; i++) {   // for ( <inizializzazione variabili> ; <condizione proseguimento ciclo> ; <da eseguire alla fine di ogni ciclo> )
    console.log("ciao");         // tra parentesi graffe, il corpo del ciclo
}

let j = 5;
while (j < 10) {                 // finche' la condizione e' verificata, prosegue nel ciclo
    console.log(j);
    j = j+2;                     // Attenzione! Se non incrementiamo la variabile, il ciclo prosegue all'infinito
}


let ciaoo = "123" + 13;          // Usare il "+" tra una stringa e qualsiasi altra cosa, trasforma tutto in stringhe e concatena tutto, nell'ordine
console.log(ciaoo);              // Stampa "12313" (senza virgolette)

//_______________________________________________________________
//Funzioni
function somma(a, b, c, e=10, f = 15) {     // Funzione che prende da 3 a 5 parametri, se non mettiamo gli ultimi due, assumono i valori di default
    let d = 2;


    return a + b + c + d + e + f;           // La funzione "ritorna" la somma dei 5 parametri con anche d
}

let risultato = somma(13, 2, 15, 7);
console.log(risultato);                     // 54

console.log(somma(1, 2, 3, 4, 5));          // 17

console.log(somma("123", 3, 4, 5, 6));      // 12334256

//_______________________________________________________________
//Esempi di codice. Senza implementarlo, cosa stampano? (Grazie Ronchetti)

//Esempio1
let esempio1 = {
    asd: "3",
    ciao: "4",
    "asd": 2,
}

console.log(esempio1.asd + esempio1["ciao"]);


//Esempio2
var ciccio = 2;
let ris = 9;
if (3**2 === ris) {
    console.log(1);
} else {
    console.log(2);
}

//Esempio3
let ciaone = 3;
let ciaonee = "3";
if (ciaone == ciaone) {
    console.log("A martedi' prossimo :D");
}

//_______________________________________________________________
//Moduli (Nella prossima lezione)
