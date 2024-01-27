
function submitclick(){
    const submit = document.querySelector(".submit")
    const card2 = document.querySelector(".card_2")
    const card = document.querySelector(".card")
    submit.addEventListener("click", () => {
        submit.style.backgroundColor = '#FFF'
        submit.style.color = '#FC7614'
        card2.style.display = 'block'
        card.style.display = 'none'
    })
}

submitclick()

function test() {
    const buttons = document.querySelectorAll(".buttons")
  buttons.forEach((button) => {
    button.addEventListener("focusin", () => {
      button.style.backgroundColor = "#FC7614"
      button.style.color = '#FFF'
    })
    button.addEventListener("focusout", () => {
      button.style.backgroundColor = "#262E38"
    })
  })

}
test()

function spanss() {
  const spann = document.querySelector(".span")
  const buttons = document.querySelectorAll(".buttons")
  buttons.forEach((buttons) => {
      buttons.addEventListener("click", () => {
          spann.textContent = buttons.textContent
      })
  })
}

spanss()