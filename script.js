const BLUE_COLOR = '#2980B9';
const BLUE_IMAGE = 'img/pepsi001.png';
const RED_COLOR = '#ff0000';
const RED_IMAGE = 'img/pepsi002.png';
const BLACK_COLOR = '#111111';
const WHITE_COLOR = '#ffffff'
const BLACK_IMAGE = 'img/pepsi003.png';
let clickedIndex = 0;

document.querySelectorAll('.buttons_product').forEach((element, indexOfElement) => {
    element.addEventListener('click', function () {
        clickedIndex = indexOfElement;
        const body = document.querySelector('body');
        const image = document.getElementById('page_img');
        const button = document.querySelector('.content_info_button');
        const navigationLinks = document.querySelectorAll('.nav_menu_link');

        // verificam indexul elementului
        if (indexOfElement === 0) {
            body.style.backgroundColor = BLUE_COLOR;
            image.src = BLUE_IMAGE;
            button.style.backgroundColor = RED_COLOR;
            navigationLinks.forEach(link => {
                link.style.color = WHITE_COLOR;
            })
        } else if (indexOfElement === 1) {
            body.style.backgroundColor = RED_COLOR;
            image.src = RED_IMAGE;
            button.style.backgroundColor = BLACK_COLOR;
            navigationLinks.forEach(link => {
                link.style.color = BLACK_COLOR;
            })
        } else {
            body.style.backgroundColor = BLACK_COLOR;
            image.src = BLACK_IMAGE;
            button.style.backgroundColor = BLUE_COLOR;
            navigationLinks.forEach(link => {
                link.style.color = BLUE_COLOR;
            })
        }
    });
});

const button = document.querySelector('.content_info_button');
button.addEventListener('mouseover', function () {
    if (clickedIndex === 0) {
        button.style.backgroundColor = BLACK_COLOR;
    } else if (clickedIndex === 1) {
        button.style.backgroundColor = BLUE_COLOR;
    } else {
        button.style.backgroundColor = RED_COLOR;
    }
});
button.addEventListener('mouseout', function () {
    if (clickedIndex === 0) {
        button.style.backgroundColor = RED_COLOR;
    } else if (clickedIndex === 1) {
        button.style.backgroundColor = BLACK_COLOR;
    } else {
        button.style.backgroundColor = BLUE_COLOR;
    }
})


const navigationLinks = document.querySelectorAll('.nav_menu_link')
navigationLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        if (clickedIndex === 0) {
            link.style.color = BLACK_COLOR;
        } else if (clickedIndex === 1) {
            link.style.color = BLUE_COLOR;
        } else {
            link.style.color = RED_COLOR;
        }
    });
    link.addEventListener('mouseout', function () {
        if (clickedIndex === 0) {
            link.style.color = WHITE_COLOR;
        } else if (clickedIndex === 1) {
            link.style.color = BLACK_COLOR;
        } else {
            link.style.color = BLUE_COLOR;
        }
    })
})