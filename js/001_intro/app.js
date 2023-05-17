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
// typeof [object] - daje typ na wyjściu

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

const user = {
  name: 'John',
  lastName: 'Doe',
  age: 22,
  sayHello: () => {
    console.log('Hello lambda Johna');
  }
}

const user1 = {
  name: 'Jane',
  lastName: 'Doe',
  age: 20,
  sayHello: () => {
    console.log('Hello lambda usera 1');
  }
};

user.sayHello();
console.log(user1.age);

class User {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  sayHello(stringIn) {
    console.log(`Hello I'm ${this.name} ${this.lastName} ${stringIn}`);
  }
}

const userByClass = new User("John", "Doe");
userByClass.sayHello("from class");

// Modyfikatory dostępu:
// default - Public
// # - Privat ( Nowość )

/**
 * Tablice
 */

// List<String> users = new ArrayList<>();

const listName = [63336, 2, 3, "strings", "John", true, false];
console.log(listName[0], listName[4]);

const listOjects = [{ name: "John" }, { name: "Jane" }];

const listFunctios = [() => { console.log(123) },
() => { console.log(321) }];
console.log("----------!!!----------");
console.log(listFunctios[0]);

console.log("-----------------------");
console.log(listFunctios[0]());

console.log("-----------------------");
console.log(listFunctios[0] + listFunctios[1]());

/**
 * Porównywanie obiektów za pomocą JSONa
 *
 * 1) serializacja obiektów do JSONa
 * 2) porównać te 2 JSONy
 */

// różnica między "" i '' i ``
const string1 = "test123 ${string2}";
const string2 = 'test123 ${string2}';
const string3 = `test123 
${string2}`; // ${} and with ENTER can be only when `` 
// Nowsza metoda + często używana



const newUser = {
  name: "John",
  email: "email@email.com",
  password: `test123`
}

const userInJsonFormat = JSON.stringify(newUser);
console.log(`==============JSON`);

console.log(newUser);
console.log(userInJsonFormat);
console.log(JSON.parse(userInJsonFormat));

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
console.log(`---------------Listy`);
const user4 = {
  name: `John`,
  lastName: `Rambo`,
  age: 80,
  todos: [`Hello`, ' conkatenacja']
}
console.log(user4);

const users1 = [{ user4 }, { user4 }, { user4 }]
console.log(users1);
console.table(users1);

const users = [new User('name1', `surname1`),
new User('name2', `surname2`),
new User('name3', `surname3`),
  user4];
console.table(users);

// To same 
const nazwaKlucza = `Hello`;
const object = {
  nazwaKlucza: nazwaKlucza
}
console.log(object);
// Krótsza wersja
const object1 = {
  nazwaKlucza
}
console.log(object1);

/**
 * pętle
 *
 * for, while, do while
 *
 * funkcje wyższego rzędu
 *
 * map, filter, forEach
 */

console.log(`----------------For-----------`);
for (let i = 0; i < users.length; i++) {
  console.log(users[i].age);
}

/**
 * Zadanie
 * Przeiteruj się przez tablicę userów
 * i sprawdż czy userzy są dorośli (age > 18) jeżeli tak ustaw nowo dodane pole isAdult na true
 * w przeciwnym wypadku ustaw je na false
 *
 */
console.log(`------------------tablica userów`);
// Dodawanie cluczej(pól) do zmiennych
const todo1 = {
  name: `coś tam`
}
console.log(todo1);
todo1.surname = `coś tam jeszcze`
console.log(todo1);

const user11 = {
  name: "Bill",
  lastName: "Cosby",
  age: 13,
};

const user22 = {
  name: "Bill",
  lastName: "Cosby",
  age: 23,
};

const user33 = {
  name: "John",
  lastName: "Rambo",
  age: 70,
};

const user44 = {
  name: "Janet",
  lastName: "Jackson",
  age: 15,
};

const users2 = [user11, user22, user33, user44];
// console.table(users2);
console.log(` `)
console.log(`-------------------For`)

for (let i = 0; i < users2.length; i++) {
  if (users2[i].age > 18) {
    users2[i].isAdultFor = true;
  } else {
    users2[i].isAdultFor = false;
  }
}
console.table(users2);

console.log(`-------------------For--Of`)
for (let i of users2) {
  if (i.age > 18) {
    i.isAdultForOf = true;
  } else {
    i.isAdultForOf = false;
  }
  console.log(`inside foreach<<<<<<<<<<<<`);
}
console.table(users2);


console.log(`------------forEach`)
users2.forEach(userJakiś => {
  // console.log(userJakiś);
});

users2.forEach((user) => {
  if (user.age >= 18) {
    user.isAdult = true;
  } else {
    user.isAdult = false;
  }
})
// console.table(users2);
// skrócone
users2.forEach((user) => {
  user.isNotAdult = user.age < 18;
})

let a = [{ num: 1 }, 2, 3];
for (let num of a) {
  num.num += 1;
}
console.log(a);


console.log(`-----------------------------------------`)
console.log(`-----------------------------------------`)

/**
 * funkcje
 *
 * function
 *
 * arrow functions ( In Java it is Lambda!!!)
 */

const sayHello = () => {
  console.log(`Hello world!`)
};
sayHello();


// Nowsza wersja funkcji
const addTwoNumbers = (number1, number2) => {
  return number1 + number2;
}
console.log(addTwoNumbers(50, 20));

const wynikDodawania = addTwoNumbers(10, 20);
console.log(wynikDodawania);

// Starsza wersia funkcji

function multipleTwoNumbers(number1, number2) {
  return number1 * number2;
}

/**
 * Zadanie:
 * stwórz funkcje isUserAdult zwracająca true lub false w zależności 
 * czy user przekazany w parametrze ma age>18
 *
 * ** obsłuż przypadek gdy do funkcji przekazane są nie poprawne dane
 *
 * Zadanie:
 * stwórz funkcje getAvarageAge która przyjmie tablicę użytkowników i 
 * zwróci średnią arytmetyczną wieku użytkówników
 *
 *
 * ** Zadanie
 * stwórz funckje getNumbersOfAdultsPerGender która przyjmie 
 * tablicę/listę użytkowników i zwróci obiekt
 * z dwoma kluczami numberOfAdultMales i numberOfAdultFemales
 *
 * {
 *    numberOfAdultMales: 25,
 *    numberOfAdultFemales: 12
 * }
 *
 *
 */

console.table(users2);

console.log('------------isUserAdult');

// const isUserAdult = (user) => {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// };
const isUserAdult = (user) => {

  if (typeof user === 'object' && typeof user.age === 'number') {
    
    return user.age > 18;
  }
};

users2.forEach((user) => {
  console.log(isUserAdult(user));
})

console.log('------------averageYear');

let averageYear = 0;
function getAverageAge(usersArr) {
  usersArr.forEach((user) => averageYear += user.age);
  averageYear /= usersArr.length;
}
getAverageAge(users2);
console.log(averageYear);


function getNumbersOfAdultsPerGender() {
  /**
   * Miejsce na Twój kod
   */
  return {
    numberOfAdultMales: undefined,
    numberOfAdultFemales: undefined,
  };
}
