let monsterButtons = [...document.querySelectorAll("[data-action]")]
const loadMore = document.querySelector("p#load-more")
const monsterFilter = [...document.querySelectorAll("li.category-buttons")]
const filterBlock = document.querySelector("div.select")
const showFilter = document.querySelector("[data-select]")
let currentItem = 9

window.onload = function () {
  for (var i = 0; i < 9; i++) {
    monsterButtons[i].style.display = "flex"
  }
}

// Ativa as opções de filtrar por categoria celular

document.body.onresize = function () {
  if (window.innerWidth >= 835) {
    filterBlock.style.display = "block"
  } else {
    filterBlock.style.display = "none"
  }
}

showFilter.addEventListener("click", () => {
  if (filterBlock.style.display == "none") {
    filterBlock.style.display = "block"
  } else {
    filterBlock.style.display = "none"
  }
})

// Ativa a função de carregar mais botões na página -----------------------
loadMore.addEventListener("click", reload)
function reload() {
  for (var i = currentItem; i < currentItem + 9; i++) {
    if (monsterButtons[i] == undefined) {
      continue
    }
    monsterButtons[i].style.display = "flex"
  }
  currentItem += 9

  if (currentItem >= monsterButtons.length) {
    loadMore.style.display = "none"
  }
}
// Ativa o modal ---------------------------------------------------------
for (let i = 0; i < monsterButtons.length; i++) {
  monsterButtons[i].addEventListener("click", () => {
    let modal = [...document.querySelectorAll("[data-modal]")]
    let monsterName = [...document.querySelectorAll("h3")]
    let value = monsterName[i].innerHTML
    // window.alert(`Informações de ${value} não disponível ${i}`)
    if (modal[i] == undefined) {
      window.alert(`Informações de ${value} não disponível. posição: ${i}`)
    } else {
      modal[i].style.display = "block"
      console.log("funfa")
    }
  })
}

// Filtro de categoria ----------------------------------------------------

for (let i = 0; i < monsterFilter.length; i++) {
  monsterFilter[i].addEventListener("click", () => {
    switch (monsterFilter[i]) {
      case monsterFilter[0]:
        loadMore.style.display = "inline-block"
        for (var y = 0; y < monsterButtons.length; y++) {
          monsterButtons[y].style.display = "none"
        }
        currentItem = 0
        reload()
        break
      case monsterFilter[1]:
        for (var y = 0; y < monsterButtons.length; y++) {
          if (monsterButtons[y].className.includes("fanged-wyverns")) {
            monsterButtons[y].style.display = "flex"
          } else {
            monsterButtons[y].style.display = "none"
          }
        }
        loadMore.style.display = "none"
        break
      case monsterFilter[2]:
        for (var y = 0; y < monsterButtons.length; y++) {
          if (monsterButtons[y].className.includes("fanged-beasts")) {
            monsterButtons[y].style.display = "flex"
          } else {
            monsterButtons[y].style.display = "none"
          }
        }
        loadMore.style.display = "none"
        break
      case monsterFilter[3]:
        for (var y = 0; y < monsterButtons.length; y++) {
          if (monsterButtons[y].className.includes("bird-wyverns")) {
            monsterButtons[y].style.display = "flex"
          } else {
            monsterButtons[y].style.display = "none"
          }
        }
        loadMore.style.display = "none"
        break
      case monsterFilter[4]:
        for (var y = 0; y < monsterButtons.length; y++) {
          if (monsterButtons[y].className.includes("brute-wyverns")) {
            monsterButtons[y].style.display = "flex"
          } else {
            monsterButtons[y].style.display = "none"
          }
        }
        loadMore.style.display = "none"
        break
      case monsterFilter[5]:
        for (var y = 0; y < monsterButtons.length; y++) {
          if (monsterButtons[y].className.includes("flying-wyverns")) {
            monsterButtons[y].style.display = "flex"
          } else {
            monsterButtons[y].style.display = "none"
          }
        }
        loadMore.style.display = "none"
        break
      case monsterFilter[6]:
        for (var y = 0; y < monsterButtons.length; y++) {
          if (monsterButtons[y].className.includes("piscine-wyverns")) {
            monsterButtons[y].style.display = "flex"
          } else {
            monsterButtons[y].style.display = "none"
          }
        }
        loadMore.style.display = "none"
        break
      case monsterFilter[7]:
        for (var y = 0; y < monsterButtons.length; y++) {
          if (monsterButtons[y].className.includes("elder-dragons")) {
            monsterButtons[y].style.display = "flex"
          } else {
            monsterButtons[y].style.display = "none"
          }
        }
        loadMore.style.display = "none"
        break
      case monsterFilter[8]:
        for (var y = 0; y < monsterButtons.length; y++) {
          if (monsterButtons[y].className.includes("relicts")) {
            monsterButtons[y].style.display = "flex"
          } else {
            monsterButtons[y].style.display = "none"
          }
        }
        loadMore.style.display = "none"
        break
      case monsterFilter[9]:
        for (var y = 0; y < monsterButtons.length; y++) {
          if (monsterButtons[y].className.includes("small-monsters")) {
            monsterButtons[y].style.display = "flex"
          } else {
            monsterButtons[y].style.display = "none"
          }
        }
        loadMore.style.display = "none"
        break
      default:
        return
    }
  })
}
