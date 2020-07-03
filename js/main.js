const burger = document.querySelector('.burger');
const nav = document.querySelector('nav')

function showMenu () {

}

burger.addEventListener("click", (e) => {
    console.log(e);
    console.log(nav.className);
    if (nav.className === '') {
        nav.className += 'responsive';
    } else {
        nav.className = ''
    }


})