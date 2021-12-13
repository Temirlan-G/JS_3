const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabsContent = document.querySelectorAll('.tabcontent')

function hideTabContent() {
    tabsContent.forEach(item => {
        item.style.display = 'none'
    })

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

function showTabContent(i) {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')

}


// modalTrigger.addEventListener('click', () => {
//     modal.classList.add('show')
//     modal.classList.remove('hide')
//     document.body.style.overflow = 'hidden'
// })
//
// closeModal.addEventListener('click', () => {
//     modal.classList.add('hide')
//     modal.classList.remove('show')
//     document.body.style.overflow = ''
// })
//
//
// modal.addEventListener('click', (e) => {
//     if(!e.target.classList.contains('modal__dialog')){
//         modal.classList.add('hide')
//         modal.classList.remove('show')
//         document.body.style.overflow = ''
//     }
// })
//
//
// document.body.addEventListener('keydown', (event) => {
//     if (event.code === 'Backspace') {
//         modal.classList.add('hide')
//         modal.classList.remove('show')
//         document.body.style.overflow = ''
//     }
// })

