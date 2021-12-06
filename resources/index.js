const alpacaImages = document.querySelector('#main-image').children
const accessoriesList = document.querySelector('.accessories-buttons').children
const accessoriesMenu = document.querySelectorAll('.style-accessories')
const assets = "./sources/"

function btnFunction (target) {
  let toggleStatus = target.getAttribute('data-toggle')
  let dataName = target.getAttribute('data-name')
  let menuTarget = document.querySelector('#style-'+dataName)
  
  target.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(toggleStatus == "collapse") {
      if(document.getElementById(localStorage.getItem("currentButton"))) document.getElementById(localStorage.getItem("currentButton")).classList.remove("active")
      if(document.getElementById(localStorage.getItem("styleMenu"))) document.getElementById(localStorage.getItem("styleMenu")).classList.add("collapsed")
      
      target.classList.toggle("active")
      menuTarget.classList.toggle("collapsed")

      localStorage.setItem("styleMenu", menuTarget.id)
      localStorage.setItem("currentButton", target.id)

      return console.log(localStorage, "migration success!")
    }
  })
}

function btnImageFunction(button, parent) {
  let imageTarget = parent.getAttribute('data-menu')
  let imgTag = document.getElementById(`display-${imageTarget}`)
  let activatedButton = Array.from(parent.children)
  activatedButton.forEach(i => {
    if(i.classList == "active") return i;
    // console.log(i.classList)
  })

  button.addEventListener('click', e => {
    e.preventDefault()

    imgTag.setAttribute("src", `${assets}${imageTarget}/${button.getAttribute("data-name")}.png`)
    // button.classList.toggle("active")
    console.log(activatedButton)
  })
}


window.addEventListener('load', () => {
  let activeButton = document.getElementById(localStorage.getItem("currentButton"))
  let activeMenu = document.getElementById(localStorage.getItem("styleMenu"))

  if(activeButton) activeButton.classList.add("active")
  if(activeMenu) activeMenu.classList.remove("collapsed")

  Array.from(accessoriesList).forEach(i => {
    btnFunction(i);
  })

  
  accessoriesMenu.forEach((child, key) => {
    Array.from(child.children).forEach((index) => {
      btnImageFunction(index, accessoriesMenu[key])
    })
  })

})



// if(localStorage.getItem("styleMenu")) {
//   Array.from(activeMenu.children).forEach((index, key) => {
//     btnImageFunction(index, key)
//   })
// } 