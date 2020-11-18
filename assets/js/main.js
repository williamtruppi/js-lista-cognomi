//creazione dell'array con output su html
var surnameList = [
  "Pino", 
  "Siffredi", 
  "Albertini", 
  "Zazza", 
  "Cristiano"
];
console.log(surnameList);
var outputArray = document.getElementById("first_array");
outputArray.innerHTML = "Array appena generato ---> " + surnameList;

//acquisizione cognome utente
var surnameUser = prompt("Inserire il proprio cognome");
var newSurname = surnameUser.charAt(0).toUpperCase() + surnameUser.slice(1);
console.log(newSurname);

//inserimento del cognome dell'utente nell'array
surnameList.push(newSurname);
console.log(surnameList);
var outputArray = document.getElementById("before_sort");
outputArray.innerHTML = "Array NON ordinato con cognome utente  ---> " + surnameList;

//ordinamento alfabetico dell'array
surnameList.sort();
console.log(surnameList);
var outputArray = document.getElementById("after_sort");
outputArray.innerHTML = "Array ORDINATO con cognome utente  ---> " + surnameList;


var messageIndexComparison = document.getElementById("comparison_index");

//comparazione dell'index e successiva stampa
i = 0;
while (i < surnameList.length){
  if(surnameList[i] == newSurname){
    console.log("Il tuo cognome, dopo l'ordinamento, è in posizione " + i+1);
    messageIndexComparison.innerHTML = " PRIMA SOLUZIONE CON CONFRONTO DELL'INDEX --- Il tuo cognome, dopo l'ordinamento, è in posizione " + (i+1);
  }
  i++;
}

//utlizzo metodo indexof
var messageIndexOf = document.getElementById("indexof_method");
messageIndexOf.innerHTML = "SECONDA SOLUZIONE CON METODO INDEXOF --- Il tuo cognome, dopo l'ordinamento, è in posizione " + (surnameList.indexOf(newSurname)+1);