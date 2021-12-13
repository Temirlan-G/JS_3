const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('[data-modal]')
const closeModal = document.querySelector('.modal__close')

class modalShowHide {
    Show() {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    }

    Hide() {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    EventToShow() {
        modalTrigger.addEventListener('click', () => {
            this.Show()
        })
    }

    EventToHide() {
        closeModal.addEventListener('click', () => {
            this.Hide()
        })

        modal.addEventListener('click', (e) => {
            if (!e.target.classList.contains('modal__dialog')) {
                this.Hide()
            }
        })

        document.body.addEventListener('keydown', (event) => {
            if (event.code === 'Backspace') {
                this.Hide()
            }
        })
        window.addEventListener('scroll', (e) => {
            // console.log(window.pageYOffset)
            if (window.pageYOffset === 3335){
                this.Show()
            }
        })

    }
}

const show = new modalShowHide().EventToShow()
const hide = new modalShowHide().EventToHide()
