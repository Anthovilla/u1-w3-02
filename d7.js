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
    //h1.classList.add('myHeading') ....hai più controllo, lui si occupa di aggiungere gli spazi, classe
}
addClassToTitle()


/*3*/
//ESERCIZIO (3)
const changePcontent = function (){
    let p1 = document.querySelectorAll('div p') //array di elementi
     // se deve fare un ciclo 
     p1.forEach((p) => {
        p.innerText = 'whatsup'
     })
}
changePcontent()


/*4*/
//ESERCIZIO (4)
const changeUrls = function (){
    let changelink = document.getElementsByTagName('a')[0]//Prendo tutti i tag di 'a', poi scelgo qualle voglio []
    console.log(changelink)
    changelink.setAttribute('href', 'https://www.google.com')
    //Imposta il valore di un attributo sull'elemento specificato.
    // Se l'attributo esiste già, il valore viene aggiornato; in caso contrario, viene aggiunto 
    //un nuovo attributo con il nome e il valore specificati.
}
changeUrls()


/*5*/
const addToTheSecond = function (){
    let secondlist2 = document.getElementById("secondList")//vado a cercare il 'id 'creato'
    let newsecondlist2 = document.createElement('li')//creo il nuovo elemento ''l1 , p ....
    newsecondlist2.innerText = 'new element'
    secondlist2.appendChild(newsecondlist2)//lo collego alla list
    console.log(newsecondlist2)
} 
addToTheSecond()

/*6*/
const addParagraph = function (){
    let secondParagraph = document.querySelector('body div div')//trovare il punto dove voglio arrivare 
    let addp = document.createElement('p')//creo il nuovo 'p
    addp.innerText = 'new paragraph'
    secondParagraph.appendChild(addp)
    console.log(addp)
}
addParagraph()


/*7*/

const hideFirstUl = function () {
    let hidelist = document.getElementById("firstList")
    //hidelist.style.display = 'none' // faccio scomparire ma rimane ancora li 
    hidelist.remove()// lo rimuovo completamente
}
hideFirstUl()


/*8*/

const paintItGreen = function () {
    let paintList = document.querySelectorAll('ul')// questo è un array ... -x- non si puo fare style -x-
     paintList.forEach((ul) => {
        ul.style.backgroundColor = 'green'
     })
}
paintItGreen()

/*9*/
const makeItClickable = function (){
    let title1 = document.querySelector('h1')
    let currentTextValue = title1.innerText // è il valore di h1
    //accorcio il titolo di un carattere
    currentTextValue = currentTextValue.slice(0, currentTextValue.length -1) //curren....hace su trabajo para darselo a tittle
    //metto questo titolo accorciato come nuovo valore di innerText
    title1.innerText = currentTextValue
}
let title1 = document.querySelector('h1')
title1.onclick = makeItClickable // senza () perchè non vogliamo già eseguirla!


/*10*/
const revealFooterLink = function () {
    let anchor = document.getElementsByTagName('a')[1]
    let hrefVal = anchor.getAttribute('href') //ci permette di spicificare il nome di un attributo, ci torna il valore 
    alert(hrefVal)// mostrare l'alert al interno della variabile
}
//trovare un riferimento al footer
let footer = document.querySelector('footer')
//collegare la funzione al suo click 
footer.onclick = revealFooterLink // collego tuuta funzione 


/*11*/
const generateTable = function () {
    let tableArea = document.getElementById('tableArea')
    //innerhtml scrivo direttamente al html
    tableArea.innerHTML = `
    <table>
      <tr>
         <th>immagine</th>
         <th>nome prodotto</th>
         <th>quantità</th>
         <th>prezzo</th>
      </tr>
      <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
      </tr>
      <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
  </tr>
  <tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>4</td>
</tr>
<tr>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
</tr>
    </table>
    `
}
generateTable()

