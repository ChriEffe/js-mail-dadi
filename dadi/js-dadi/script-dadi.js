/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// Lancio utente
input.addEventListener('click', function () {
    let numUser = Math.floor(Math.random() * 6) + 1;

    // Lancio computer
    let numComputer = Math.floor(Math.random() * 6) + 1;

    // Condizioni
    if (numUser > numComputer) {
        document.writeln('Vincitore Utente con ' + numUser + ' a ' + numComputer);
    } else if (numUser < numComputer) {
        document.writeln('Vincitore Computer con ' + numComputer + ' a ' + numUser);
    } else {
        document.writeln('Pareggio');
    }
})