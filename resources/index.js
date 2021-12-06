const alpacaImages = document.querySelector('#main-image').children
const accessoriesList = document.querySelector('.accessories-buttons').children
const accessoriesMenu = document.querySelectorAll('.style-accessories')

function btnFunction (target) {
  let toggleStatus = target.getAttribute('data-toggle')
  let dataName = target.getAttribute('data-name')
  let menuTarget = document.querySelector('#style-'+dataName)
  
  target.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(toggleStatus == "collapse") {
      if(localStorage.getItem("styleMenu")) document.querySelector('#'+localStorage.getItem("styleMenu")).classList.add("collapsed")
      if(localStorage.getItem("currentButton")) document.querySelector('#'+localStorage.getItem("currentButton")).classList.remove("active")
      
      target.classList.toggle("active")
      menuTarget.classList.toggle("collapsed")

      localStorage.setItem("styleMenu", menuTarget.id)
      localStorage.setItem("currentButton", target.id)
    }
  })
}

function btnImageFunction(button) {
  button.addEventListener('click', e => {
    e.preventDefault()

    console.log(button)
  })
}


window.addEventListener('load', () => {
  if(localStorage.getItem("currentButton")) document.querySelector('#'+localStorage.getItem("currentButton")).classList.add("active")
  if(localStorage.getItem("styleMenu")) document.querySelector('#'+localStorage.getItem("styleMenu")).classList.remove("collapsed")

  Array.from(accessoriesList).forEach(i => {
    btnFunction(i);
  })

  if(localStorage.getItem("styleMenu")) {
    Array.from(document.querySelector('#'+localStorage.getItem("styleMenu"))).forEach((index, key) => {
      console.log(index)
    
      // Array.from(theParent).forEach((button) => {
      //   console.log(button)
      //   // btnImageFunction(button)
      // })
    })
  } 

})