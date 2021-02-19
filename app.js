const square = document.querySelector('.square')
const btnColor = document.querySelector('.btn-color')
const inputWidth = document.querySelector('#width')
const inputHeight = document.querySelector('#height')

inputWidth.onkeyup = () => {
   const value = () => {
      let data = inputWidth.value
      return '' + data + 'px'
   }
   square.style.width = value()
}

inputHeight.onkeyup = () => {
   const value = () => {
      let data = inputHeight.value
      return '' + data + 'px'
   }
   square.style.height = value()
}

const color = () => {
   return 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')'
}

btnColor.addEventListener('click', () => {
   square.style.backgroundColor = color()
})


function randomNumber() {
   return Math.floor(Math.random() * 256)
}

