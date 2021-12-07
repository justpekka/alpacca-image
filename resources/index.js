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

    if(document.getElementById(localStorage.getItem("currentButton"))) document.getElementById(localStorage.getItem("currentButton")).classList.remove("active")
    if(document.getElementById(localStorage.getItem("styleMenu"))) document.getElementById(localStorage.getItem("styleMenu")).classList.add("collapsed")
    
    target.classList.toggle("active")
    menuTarget.classList.toggle("collapsed")

    localStorage.setItem("currentButton", target.id)
    localStorage.setItem("styleMenu", menuTarget.id)

    return console.log(localStorage, "migration success!")
  })
}

function btnImageFunction(button, parent) {
  let imageTarget = parent.getAttribute('data-menu')
  let imgTag = document.getElementById(`display-${imageTarget}`)

  button.addEventListener('click', e => {
    e.preventDefault()

    let parent = button.parentElement
    let activatedButton = Array.from(parent.children)
    activatedButton.forEach((i, k) => {
      if(i.classList.value.includes("active")) {
        i.classList.toggle("active")
      }
    })

    imgTag.setAttribute("src", `${assets}${imageTarget}/${button.getAttribute("data-name")}.png`)
    imgTag.setAttribute("alt", `${button.getAttribute("data-name")}`)
    button.classList.toggle("active")
    console.log("Image changed.")
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

  let randomButton = document.getElementById('random-btn')
  randomButton.addEventListener('click', e => {
    e.preventDefault()

    // if(activeButton) {
    //   activeButton.classList.remove("active")
    //   localStorage.removeItem("currentButton")
    // }
    // if(activeMenu) {
    //   activeMenu.classList.add("collapsed")
    //   localStorage.removeItem("styleMenu")
    // }
        
    console.log("Randomizing image.")
    accessoriesMenu.forEach((child, key) => {
      let parent = accessoriesMenu[key]
      let childrens = child.children
      let randomButton = childrens[Math.floor(Math.random() * childrens.length)]

      let imageTarget = parent.getAttribute('data-menu')
      let imgTag = document.getElementById(`display-${imageTarget}`)
    
      Array.from(childrens).forEach((i, k) => {
        if(i.classList.value.includes("active")) {
          i.classList.toggle("active")
        }
      })

      imgTag.setAttribute("src", `${assets}${imageTarget}/${randomButton.getAttribute("data-name")}.png`)
      imgTag.setAttribute("alt", `${randomButton.getAttribute("data-name")}`)
      randomButton.classList.toggle("active")
    })

    console.log("Image randomized successfully.")
  })
  

  let downloadButton = document.getElementById('download-btn')
  downloadButton.addEventListener('click', e => {
    let canvas = document.getElementById("myCanvas")
    // let ctx = canvas.getContext("2d")
    let images = document.getElementById("main-image").children
    console.log(images)

    // imageObj1.src = "1.png"
    // imageObj1.onload = function() {
    //   ctx.drawImage(imageObj1, 0, 0, 328, 526);
    //   imageObj2.src = "2.png";
    //   imageObj2.onload = function() {
    //     ctx.drawImage(imageObj2, 15, 85, 300, 300);
    //     var img = canvas.toDataURL("image/png");
    //     document.write('<img src="' + img + '" width="328" height="526"/>');
    //   }
    // };
    
  })

}); //Window onload closed