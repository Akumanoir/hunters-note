let loadMoreBnt = document.querySelector('#load-more')
let currentItem = 0;
let boxes = [...document.querySelectorAll('button.card-monster')]

window.onload = function(){
    for (var i = 0; i < 9 ; i++) {
        boxes[i].style.display = 'inline-block'
    }
}

loadMoreBnt.onclick = () => {
    for (var i = currentItem; i < currentItem + 9 ; i++) {
        
        if(boxes[i] == undefined) {
            continue
        }
        boxes[i].style.display = 'inline-block'
    }
    currentItem += 9;

    if(currentItem >= boxes.length) {
        loadMoreBnt.style.display = 'none';   
    }
}

function tudo() {
    loadMoreBnt.style.display = 'block'
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.display = 'none'
    }
    currentItem = 0
    for (var i = 0; i < currentItem + 9 ; i++) {
        if(boxes[i] == undefined) {
            continue
        }
        boxes[i].style.display = 'inline-block'
    }
    currentItem += 9;

    if(currentItem >= boxes.length) {
        loadMoreBnt.style.display = 'none';   
    }
}

function fangedWyvern() {
    for (var i = 0; i < boxes.length ; i++) {
    
        if(boxes[i].className.includes('fanged-wyverns')) {
            boxes[i].style.display = 'inline-block'  
        } else {
            boxes[i].style.display = 'none'
        }
    }
    loadMoreBnt.style.display = 'none'
    
}

function fangedBeasts() {
    for (var i = 0; i < boxes.length ; i++) {
    
        if(boxes[i].className.includes('fanged-beasts')) {
            boxes[i].style.display = 'inline-block'  
        } else {
            boxes[i].style.display = 'none'
        }
    }
    loadMoreBnt.style.display = 'none'
}

function birdWyverns() {
    for (var i = 0; i < boxes.length ; i++) {
    
        if(boxes[i].className.includes('bird-wyverns')) {
            boxes[i].style.display = 'inline-block'  
        } else {
            boxes[i].style.display = 'none'
        }
    }
    loadMoreBnt.style.display = 'none'
}

function bruteWyverns() {
    for (var i = 0; i < boxes.length ; i++) {
    
        if(boxes[i].className.includes('brute-wyverns')) {
            boxes[i].style.display = 'inline-block'  
        } else {
            boxes[i].style.display = 'none'
        }
    }
    loadMoreBnt.style.display = 'none'
}

function flyingWyverns() {
    for (var i = 0; i < boxes.length ; i++) {
    
        if(boxes[i].className.includes('flying-wyverns')) {
            boxes[i].style.display = 'inline-block'  
        } else {
            boxes[i].style.display = 'none'
        }
    }
    loadMoreBnt.style.display = 'none'
}

function piscineWyverns() {
    for (var i = 0; i < boxes.length ; i++) {
    
        if(boxes[i].className.includes('piscine-wyverns')) {
            boxes[i].style.display = 'inline-block'  
        } else {
            boxes[i].style.display = 'none'
        }
    }
    loadMoreBnt.style.display = 'none'
}

function elderDragons() {
    for (var i = 0; i < boxes.length ; i++) {
    
        if(boxes[i].className.includes('elder-dragons')) {
            boxes[i].style.display = 'inline-block'  
        } else {
            boxes[i].style.display = 'none'
        }
    }
    loadMoreBnt.style.display = 'none'
}

function relicts() {
    for (var i = 0; i < boxes.length ; i++) {
    
        if(boxes[i].className.includes('relicts')) {
            boxes[i].style.display = 'inline-block'  
        } else {
            boxes[i].style.display = 'none'
        }
    }
    loadMoreBnt.style.display = 'none'
}

function smallMonsters() {
    for (var i = 0; i < boxes.length ; i++) {
    
        if(boxes[i].className.includes('small-monsters')) {
            boxes[i].style.display = 'inline-block'  
        } else {
            boxes[i].style.display = 'none'
        }
    }
    loadMoreBnt.style.display = 'none'
}

function changesize() {
    var left_container = document.getElementById('lefty')
    if (window.innerWidth >= 1335) {
        left_container.style.display = 'block'
    } else {
        left_container.style.display = 'none'
    }
}

function menu() {
    var left_container = document.getElementById('lefty')
    if (left_container.style.display == 'none') {
        left_container.style.display = 'block'
    } else {
        left_container.style.display = 'none'
    }
}

