//creazione dell'array
var surnameList = ["Pino", "Siffredi", "Albertini", "Zazza", "Cristiano"];
console.log(surnameList);

//acquisizione cognome utente
var surnameUser = prompt("Inserire il proprio cognome");
console.log(surnameUser);

//inserimento del cognome dell'utente nell'array
surnameList.push(surnameUser);
console.log(surnameList);

//ordinamento alfabetico dell'array
surnameList.sort();
console.log(surnameList);

i = 0;
while (i < surnameList.length){
  if(surnameList[i] == surnameUser){
    console.log("Il tuo cognome, dopo l'ordinamento, è in posizione " + i);
  }
  i++;
}