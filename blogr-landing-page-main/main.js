//add event listeners to dl items in dropdown ul
const dlElements = document.getElementsByTagName('dl')
for (let i = 0; i < dlElements.length; i++){
    dlElements[i].addEventListener('click', handleSectionClick)
}

function openHamburger() {
    const dropdown = document.getElementById('dropdown')
    dropdown.style.display = 'flex'
    //add cancel image
    const cancel = document.getElementById('cancel')
    cancel.style.display ='flex'
    //remove hamburger image
    const hamburger = document.getElementById("hamburger");
    hamburger.style.display = "none";
}

function closeHamburger() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = "none";
    //add back hamburger image
    const cancel = document.getElementById("cancel");
    cancel.style.display = "none";
    //remove cancel image
    const hamburger = document.getElementById("hamburger");
    hamburger.style.display = "flex";
    resetHamburger()
}

function handleSectionClick(e) {
    if (window.innerWidth > 1000) {
        resetHamburger()
    }
    // resetHamburger()
    const image = e.currentTarget.querySelector('img')
    // //rotate img in dl
    rotateImg(image)
    const parent = e.currentTarget.parentNode;
    toggleExpandedClass(parent)
}

function rotateImg(element) {
    element.classList.toggle('rotated')
}

function toggleExpandedClass(element) {
    const sectionList = element.querySelector('.list')
    sectionList.classList.toggle('expanded')
}

function resetHamburger() {
    //flip images back 
    const images = document
      .getElementById("dropdown")
        .getElementsByTagName("img");
    for (let i = 0; i < images.length; i++){
        images[i].classList.remove("rotated");
    }

    //and remove expanded class
    const lists = document.getElementById('dropdown').getElementsByClassName('list')
    for (let i = 0; i < lists.length; i++) {
      lists[i].classList.remove("expanded");
    }
}