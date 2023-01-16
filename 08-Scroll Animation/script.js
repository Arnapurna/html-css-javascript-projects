const boxs = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
checkBoxes();
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    // console.log(triggerBottom)

    boxs.forEach(box => {

        // The Element.getBoundingClientRect() method returns a DOMRect object providing information 
        // about the size of an element and its position relative to the viewport.
        const boxTop = box.getBoundingClientRect().top;
        // console.log(boxTop);

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    })
}
