console.log("hola")

const changeTitle = function (){
    let title = document.querySelector('div h1')
    console.log(title)
    title.innerText = 'change the title'
}
changeTitle()