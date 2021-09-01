window.addEventListener('keydown', (e) => {
  if (!e.metaKey) {
    e.preventDefault()
  }

  document.getElementById('key').innerHTML = e.keyCode == 32 ? 'Space' : e.key;
  document.getElementById('code').innerHTML = e.code;
  document.getElementById('keyCode').innerHTML = e.keyCode;
  document.getElementById('keyCodeCard').innerHTML = e.keyCode;
  document.getElementById('location').innerHTML = e.location;

  document.querySelector('.cards').classList.add('active');
  document.querySelector('.info').classList.remove('active');
});

const buttonTheme = document.getElementById('theme');

buttonTheme.addEventListener('click', () => {
  const body = document.querySelector('body')
  if (buttonTheme.innerText == "Dark theme") {
    buttonTheme.innerText = 'Light theme'
    body.classList.remove('light-theme')
    body.classList.add('dark-theme')
  } else {
    buttonTheme.innerText = 'Dark theme'
    body.classList.remove('dark-theme')
    body.classList.add('light-theme')
  }
})
