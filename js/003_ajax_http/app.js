/**
 * AJAX i nowe podejście do wymiany danych z serwerem
 */

/**
 * fetch
 */

/**
 * pobranie listy użytkowników
 * 
 * 
 fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
 * 
 */

const przycisk = document.querySelector(`#fetchButton`);
// przycisk.remove();

przycisk.addEventListener(`click`, () =>{

  console.log(`Hello cash!`);
  fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((response) => {
    return response.json(); // jak JSON.parse()
  }).then( (date) => {
    console.log(date);
    const tbody = document.querySelector(`#todos`);

    // tworzenie elementów HTML w js za pomocą stringów
    const div = `<div>${123}`

    // <tr><td> ID <td> <td> tytle <td><tr>
    let trki = ``;
    date.forEach( (todo) => {
      trki = `<tr><td> ${todo.id} </td><td> ${todo.title} </td><tr>` + trki;

    })

    tbody.innerHTML = trki;

  });
});

// nie ma różnicy nawet jeżeli poprostu pisać click
/**
 * dodawanie nowego uzytkownika *
 */

document.querySelector("#createUserForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formProps),
  });
});
