/**
 * ZMIENNE, hoisting
 *
 * var
 *
 *
 * const
 * let
 *
 */

let userName = "John";
userName = "Jane";

/**
 * console.log
 *
 * narzędzia deweloperskie
 */

console.log(userName);
console.log("Fackts");
console.log(123);

/**
 * typy danych
 *
 * prymitywne:
 * string
 * number
 * boolean
 *
 * undefined
 * null
 *
 * typy referencyjne
 * obiekty
 * tablice
 * funkcje
 *
 */

let age; let year = null
console.log(age, year, "jakiś string od ręki")

let number = 23; // typ number
number = 23.333; // też number
const name = "John"; // typ string
let areYouStupid = true; // boolean

/**
 * funkcje warunkowe
 *
 *
 */

if (20 + 1 === 21 && number > 20 || !areYouStupid) {
  console.log("20 + 1 = " + 20 + 1 + " tzn. niepoprawnie")
  console.log(20 + 1 + " a tak poprawnie")
  console.log((!areYouStupid))
} else if (areYouStupid) {
  console.log((areYouStupid));
} else {
  console.log(" last ELSE ");
}

/**
 * Zadanie:
 * Napisz warunek który będzie sprawdzał
 * czy zmienna age jest większa niż 18 jeżeli tak wyświetl 
 * w konsoli informacje że user jest dorosły
 * w przeciwnym wypadku wyświetl wiadomosc odwrotną
 *
 */

if (age >= 18) {
  console.log("Użytkownik jest dorosły");
} else if (age < 18) {
  console.log("Użytkownik jest za młody");
} else {
  console.log(age + " Zmienna jest nie zdefiniowana");
}

/**
 * struktury danych
 * obiekty (słowniki) i tablice (listy)
 *
 * - tworzenie obiektów/tablic
 * - *tworzenie obiektów za pomocą klas
 * - odczytywanie pól/elementów z obiektów/tablic
 * - dodawanie nowych pól/elementów do obiektów/tablic
 */

/**
 * Porównywanie obiektów za pomocą JSONa
 *
 * 1) serializacja obiektów do JSONa
 * 2) porównać te 2 JSONy
 */

/**
 * Obiekty są porównywane za pomocą referencji nie jest porównywana struktura
 */

/**
 * Zdanie:
 * Utwórz obiekt (literał obiekt/słownik) user który będzie posiadał
 * następujące pola:
 *
 * name: string
 * lastName: string
 * age: number
 * todos: array of strings
 *
 *
 * Zadanie:
 * Utwórz listę/tablicę obiektów typu user niech lista będzie zawierała 3 elementy/obiekty
 *
 * rezultat możesz wykonsolować za pomocą console.table(users)
 */

/**
 * pętle
 *
 * for, while, do while
 *
 * funkcje wyższego rzędu
 *
 * map, filter, forEach
 */

/**
 * Zadanie
 * Przeiteruj się przez tablicę userów
 * i sprawdż czy userzy są dorośli (age > 18) jeżeli tak ustaw nowo dodane pole isAdult na true
 * w przeciwnym wypadku ustaw je na false
 *
 */

// const user1 = {
//   name: "Bill",
//   lastName: "Cosby",
//   age: 13,
// };

// const user2 = {
//   name: "Bill",
//   lastName: "Cosby",
//   age: 23,
// };

// const user3 = {
//   name: "John",
//   lastName: "Rambo",
//   age: 70,
// };

// const user4 = {
//   name: "Janet",
//   lastName: "Jackson",
//   age: 15,
// };

// const users = [user1, user2, user3, user4];

// console.table(users);

/**
 * funkcje
 *
 * function
 *
 * arrow functions
 */

/**
 * Zadanie:
 * stwórz funkcje isUserAdult zwracająca true lub false w zależności czy user przekazany w parametrze ma age>18
 *
 * ** obsłuż przypadek gdy do funkcji przekazane są nie poprawne dane
 *
 * Zadanie:
 * stwórz funkcje getAvarageAge która przyjmie tablicę użytkowników i zwróci średnią arytmetyczną wieku użytkówników
 *
 *
 * ** Zadanie
 * stwórz funckje getNumbersOfAdultsPerGender która przyjmie tablicę/listę użytkowników i zwróci obiekt
 * z dwoma kluczami numberOfAdultMales i numberOfAdultFemales
 *
 * {
 *    numberOfAdultMales: 25,
 *    numberOfAdultFemales: 12
 * }
 *
 *
 */

const isUserAdult = (user) => { };

function getNumbersOfAdultsPerGender() {
  /**
   * Miejsce na Twój kod
   */
  return {
    numberOfAdultMales: undefined,
    numberOfAdultFemales: undefined,
  };
}
