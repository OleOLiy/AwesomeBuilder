const planItem = document.querySelectorAll('.item-path')
const cellAdress = document.querySelector('#adress')
const cellFloors = document.querySelector('#floors')
const cellFreeFlats = document.querySelector('#freeFlats')
const cellSoldFlats = document.querySelector('#soldFlats')


//planItem.forEach(path =>{
//    path.addEventListener('mouseover', (dataAttr) =>{
//       const thisAdress = path.getAttribute('data-adress')
//       const thisFloors = path.getAttribute('data-floors')
//       const thisFreeFlats = path.getAttribute('data-free-flats')
//       const thisSoldFlats = path.getAttribute('data-sold-flats')
//      
//
//         cellAdress.innerText = thisAdress
//         cellFloors.innerText = thisFloors
//         cellFreeFlats.innerText = thisFreeFlats
//         cellSoldFlats.innerText = thisSoldFlats
//     
//} )
//
//const buildFreeFlats = path.getAttribute('data-free-flats')
//
//buildFreeFlats === "0" ? path.classList.add('sold') :null
//
//
//if (path.classList.contains('sold')) {
//   const buildLink = path.closest('.item-link')
//
//   buildLink.addEventListener('click', (event) =>{
//    event.preventDefault()
//
//   })
//}
//})


const showInformation = (cell, dataAttr ) => planItem.forEach(path =>{
    path.addEventListener('mouseover', () =>{
        cell.innerText = path.getAttribute(dataAttr)
} )

const buildFreeFlats = path.getAttribute('data-free-flats')

buildFreeFlats === "0" ? path.classList.add('sold') :null


if (path.classList.contains('sold')) {
   const buildLink = path.closest('.item-link')

   buildLink.addEventListener('click', (event) =>{
    event.preventDefault()

   })
}
})


showInformation(cellAdress, 'data-adress')
showInformation(cellFloors, 'data-floors')
showInformation(cellFreeFlats, 'data-free-flats')

if(document.querySelector('.build-item-page')) {
    showInformation(cellSoldFlats, 'data-sold-flats');
}
