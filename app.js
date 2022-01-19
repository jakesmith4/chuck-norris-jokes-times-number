import get from './getElement.js';

const btn = get('.get-jokes');
const jokes = get('.jokes');
const randomURL = 'http://api.icndb.com/jokes/random';

btn.addEventListener('click', (e) => {
  getJokes();
  e.preventDefault();
});

const getJokes = () => {
  const number = get('#number').value;

  const xhr = new XMLHttpRequest();
  console.log(get('#number').value);
  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const allJokes = response.value;
      console.log(allJokes);
      let output = '';
      if (response.type === 'success') {
        allJokes.forEach((joke) => {
          output += `<li>${joke.joke}</li>`;
        });
        jokes.innerHTML = output;
        console.log(jokes);
      } else {
        output += `<li>Something Went Wrong</li>`;
      }

      // const joke = response.value.joke;
      // jokes.textContent = joke;
    }
  };
  xhr.send();
};
