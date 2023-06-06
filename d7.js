console.log("hola")
//alert('Ciao')

/*1*/
// ESERCIZIO (1)
const changeTitle = function (){
    let title = document.querySelector('div h1')
    console.log(title)
    title.innerText = 'change the title'
}
changeTitle()


/*2*/
//ESERCIZIO (2)
const addClassToTitle = function (){
    let newclass = document.querySelector('div h1')
    newclass.setAttribute('class', 'myHeading')
}
addClassToTitle()


/*3*/
//ESERCIZIO (3)
const changePcontent = function (){
    let p = document.querySelectorAll('div p')
    p.innerText = "text ramdom 123456789"
    console.log(p)
}
changePcontent()


/*4*/
//ESERCIZIO (4)
const changeUrls = function (){
    let changelink = document.querySelectorAll('div a')
    console.log(changelink)
    changelink.innerText = 'https://www.google.com'
}
changeUrls()


/*5*/
const addToTheSecond = function (){
    let secondlist2 = document.querySelector("secondList") 
    let newsecondlist2 = document.createElement('li')
    newsecondlist2.textContent = 'new element'
   //secondlist2.appendChild(newsecondlist2)
    console.log(newsecondlist2)
} 
addToTheSecond()

/*6*/
const addParagraph = function (){
    let secondParagraph = document.querySelector('div p')[1]
    let addp = document.createElement('p')
    addp.textContent = 'new paragraph'
   //secondParagraph.appendChild(addp)
    console.log(addp)
}
addParagraph()


/*7*/

const hideFirstUl = function () {
    let hidelist = document.getElementById("firstList li")
    //hidelist = array.from(hidelist)
//    hidelist.forEach((li) => {
//        li.classlist.toggle('removed')
//    }) 
//    return hidelist
}
//hideFirstUl()


/*8*/

const paintItGreen = function () {
    let paintList = document.querySelectorAll('div ul')
 //   paintList.style.backgroundcolor = 'green'
  //  console,log(paintList)
}
paintItGreen()

/*9*/
const makeItClickable = function (){
    let title1 = document.querySelector('h1')
//    title1.forEach((el) => [
//        el.
//    ])
}

/*10*/
const revealFooterLink = function () {
    
}
