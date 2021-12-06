const alpacaImages = document.querySelector('#main-image').children
const accessoriesList = document.querySelector('.accessories-buttons').children
const accessoriesStyle = document.querySelectorAll('.style-accessories')

window.addEventListener('load', () => {
  document.querySelector('#'+localStorage.getItem("styleMenu")).classList.remove("collapsed")
  document.querySelector('#'+localStorage.getItem("currentButton")).classList.add("active")
})

function btnFunction (target) {
  let toggleStatus = target.getAttribute('data-toggle')
  let dataName = target.getAttribute('data-name')
  let menuTarget = document.querySelector('#style-'+dataName)
  
  target.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(toggleStatus == "collapse") {
      document.querySelector('#'+localStorage.getItem("styleMenu")).classList.add("collapsed")
      document.querySelector('#'+localStorage.getItem("currentButton")).classList.remove("active")

      target.classList.toggle("active")
      menuTarget.classList.toggle("collapsed")

      localStorage.setItem("styleMenu", menuTarget.id)
      localStorage.setItem("currentButton", target.id)
    }
  })
}

Array.from(accessoriesList).forEach(i => {
  btnFunction(i);
})

// Array.from(accessoriesStyle).forEach(i => {
//   btnFunction(i);
// })
