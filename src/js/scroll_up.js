const btnUp = {
    el: document.querySelector('.btns__up'),
    show() {
        // delete btns class
        this.el.classList.remove('btns__up_hide');
    },
    hide() {
        // add btns class
        this.el.classList.add('btns__up_hide');
    },
    addEventListener() {
        // scroll page
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 80
                ? this.show()
                : this.hide()
        })

        document.querySelector('.btns__up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}

btnUp.addEventListener();