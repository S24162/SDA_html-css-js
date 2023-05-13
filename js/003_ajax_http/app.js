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
