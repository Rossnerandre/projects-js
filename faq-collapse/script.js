const btnToggle = document.querySelectorAll('.btn-toggle');
btnToggle.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('active')
    // console.log(btn.parentElement)
  })
})
