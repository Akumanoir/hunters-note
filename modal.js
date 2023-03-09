const open_modal = document.getElementById('01');
const modal_container = document.getElementById('modal_container_01')  
const close = document.getElementById('close');

open_modal.addEventListener('click', () => {
    modal_container.classList.add('show')
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
})