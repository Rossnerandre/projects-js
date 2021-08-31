const joke = document.getElementById('joke');
const btn = document.querySelector('.btn');
let loading = false;

btn.addEventListener('click', getMessage)

getMessage();

async function getMessage() {
  load();
  const res = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: "application/json" } })
  const data = await res.json();
  joke.innerHTML = data.joke
  load();
}

function load() {
  loading = !loading;
  if (loading == true) {
    const div = document.createElement('div');
    document.querySelector('body').appendChild(div)
    console.log(loading);
    div.classList.add('loading')
  } else if (loading == false) {
    const div = document.querySelector('.loading');
    div.classList.remove('loading');
  }
}
