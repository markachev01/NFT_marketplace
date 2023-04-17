import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

export default swiper