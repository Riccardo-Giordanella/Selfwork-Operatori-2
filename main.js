// Variabili contenenti anno di nascita + anno corrente
let nascita = 1997;
let corrente = 2024;
// Costante del cap degli anni
const maxage = 100;
// variabile che ottiene l'età della persona
let eta = corrente - nascita;
// Variabile che ottiene l'anno di raggiungimento dei 100 anni
let vecchiaia = maxage - eta;

// Stampa in console
console.log(`Hai`, eta, `anni e ti mancano`, vecchiaia, `anni per compierne`, maxage);

// Fine esercizio (La frase finale poteva essere con il 100 all'interno della stringa come dice l'esercizio ma ho utilizzato l'invocazine della constante per allenamento, in fin dei conti il risultato visivo che si ottiene è uguale tranne che adesso 100 è un number e non string)