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

