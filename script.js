document.querySelector('.view-button').addEventListener("click", function() {
    document.querySelector('.modal-window').classList.add('open');
})

document.querySelector('.close-button').addEventListener("click", function() {
    document.querySelector('.modal-window').classList.remove('open');
})

