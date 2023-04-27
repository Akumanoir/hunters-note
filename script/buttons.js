let loadMoreBnt = document.querySelector('#load-more')
let currentItem = 9;

loadMoreBnt.onclick = () => {
    let boxes = [...document.querySelectorAll('button.card-monster')]
    for (var i = currentItem; i < currentItem + 9; i++) {
        boxes[i].style.display = 'inline-block'
    }
    currentItem += 9;

    //fazer funcionar
    if(currentItem >= boxes.length) {
        loadMoreBnt.style.display = 'none';
    }
}
/*
function all() {
    alert('teste')
}

function fangedWyvern() {
    document.querySelector('body').classList.add('showfanged')  
    
}

function fangedBeast() {
    alert('teste')
}

function birdWyvern() {
    alert('teste')
}

function bruteWyvern() {
    alert('teste')
}

function flyingWyvern() {
    alert('teste')
}

function piscineWyvern() {
    alert('teste')
}

function elderDragon() {
    alert('teste')
}

function relicts() {
    alert('teste')
}

function smallMonster() {
    alert('teste')
}
*/
