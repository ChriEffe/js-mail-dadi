/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// Lista email
const listEmail = ['aldo@gmail.com', 'giovanni@gmail.com', 'giacomo@gmail.com'];
console.log(listEmail);

// Richiesta email
const insertEmail = prompt('Inserisci il tuo indirizzo email');
console.log('Indirizzo email: ' + insertEmail);

// Dichiaro variabile false
let find = false;

// Se email combacia con lista è true
for (let i = 0; i < listEmail.length; i++) {
    const element = listEmail[i];
    if (insertEmail.toLowerCase() == element.toLowerCase()) {
        find = true;
    }  
}

console.log(find);

// Stampa esito su foglio
if (find == true) {
    document.writeln('Sei nella lista');
    console.log('Sei nella lista');
} else {
    document.writeln('Non sei nella lista');
    console.log('Non sei nella lista');
}