const close = document.getElementById('close')
let open = document.getElementById('open')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
    // console.log('>>');
    container.classList.add('show-nav')
})
close.addEventListener('click', () => {
    // console.log('>>');
    container.classList.remove('show-nav')
})