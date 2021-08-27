const quote = document.getElementById('fact');
const loading = document.querySelector('.loading');
const url = 'https://api.chucknorris.io/jokes/random';


const load = async () => {
  loading.style.display = 'flex'
  await fetch(url)
    .then(resp => resp.json())
    .then(data => quote.innerHTML = data.value);
  loading.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', load);

const fetchRandom = async () => {
  loading.style.display = 'flex'
  await fetch(url)
    .then(resp => resp.json())
    .then(data => quote.innerHTML = data.value);
  loading.style.display = 'none'
}
