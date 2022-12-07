const fs = require('fs');  // Ricordiamo che la libreria "fs" e' da importare per gestire file
const FILE = "./database.json";  // Abbiamo scelto di tenere il database in un json, nella stessa cartella in cui girano gli script

class DB {

    constructor() {  // Costruttore della classe
        this.db = JSON.parse(fs.readFileSync(FILE, "utf-8"));  // la variabile "db" tiene in memoria tutto il db per tutta la durata del programma. Viene letto da file nel costruttore e parsato (interpretato) come JSON
    }

    write() {
        fs.writeFile(FILE, JSON.stringify(this.db, null, 2), ()=>{});  // La funzione write scrive su file il contenuto della variabile "db" al momento della chiamata. Stiamo effettuando una write "asyncrona" (non e' writeFileSync), e quindi come ultimo parametro c'e' da specificare una "callback" che il programma esegue una volta che ha terminato di scrivere sul file. In questo caso, abbiamo lasciato la callback vuota (()=>{})
        // il db, inoltre, e' da rendere stringa prima di essere scritto su file, ho dei parametri facoltativi che mi permettono di renderlo leggibile e indentato bene. (null, 2)
    }

    read() {
        this.db = JSON.parse(fs.readFileSync(FILE, "utf-8"));  // La funzione read legge il file e lo parsa come JSON
    }

}

module.exports = DB;
