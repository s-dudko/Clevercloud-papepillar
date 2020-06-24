'use strict';

// Work with burger menu
let burgerMenu = document.querySelector('.js-header-row-burger-img');
let burgerList = document.querySelector('.js-header-row__nav');

burgerMenu.addEventListener('click', () => {
    if (burgerList.style.display === "" || burgerList.style.display === "none")
        burgerList.style.display = "flex";
    else
        burgerList.style.display = "none";
});

// -------------------------------------------------------------------------------------------------------

// Work with testimal block
// Array for testimal block - may be loaded from DB
let testimalArray = [
    {
        title: 'We have happy customers',
        text: 'On Clever Cloud everything can be automated via the API. We have increased our productivity, and have greatly improved the developer experience.',
        author: 'Francois Desmier',
        job: 'Developer at MaifX',
        imgUrl: '../img/testimal/testimonial.png'
    },
    {
        title: 'We are the best team',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aut commodi magni numquam pariatur qui sed veniam. Et, perspiciatis.',
        author: 'Mark Ivanov',
        job: 'Project Manager',
        imgUrl: '../img/testimal/testimonial_2.jpg'
    },
    {
        title: 'We work hard',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aut commodi magni numquam pariatur qui sed veniam. Et, perspiciatis.',
        author: 'Julia Petrova',
        job: 'Designer',
        imgUrl: '../img/testimal/testimonial_3.jpg'
    }
];

let testimonialArrowNext = document.querySelector('.js-testimonial-arrows-next img');
let testimonialArrowPrev = document.querySelector('.js-testimonial-arrows-back img');

let testimalCounter = 0;
let testimonialContainer = document.querySelector('.testimonial-container');
let testimalTitle = testimonialContainer.querySelector('.h2-title');
let testimalText = testimonialContainer.querySelector('.testimonial__text-item p');
let testimalAuthor = testimonialContainer.querySelector('.testimonial__text-item .testimonial__text-item-author');
let testimalJob = testimonialContainer.querySelector('.testimonial__text-item .testimonial__text-item-job');
let testimalImg = document.querySelector('.testimonial .testimonial__img img');

testimonialArrowNext.addEventListener('click', () => {
    if (testimalCounter < testimalArray.length - 1) testimalCounter++;
    else testimalCounter = 0;

    testimalRender(testimalCounter);
});

testimonialArrowPrev.addEventListener('click', () => {
    if (testimalCounter > 0) testimalCounter--;
    else testimalCounter = testimalArray.length - 1;

    testimalRender(testimalCounter);
});

let testimalRender = (index) =>{
    testimalTitle.innerText = testimalArray[index].title;
    testimalText.innerText = testimalArray[index].text;
    testimalAuthor.innerText = testimalArray[index].author;
    testimalJob.innerText = testimalArray[index].job;
    testimalImg.src = testimalArray[index].imgUrl;
};

// -------------------------------------------------------------------------------------------------------
// Work with footer
let footerNavList = document.querySelector('.js-footer-nav');

for (let i = 0; i < footerNavList.children.length; i++){

    footerNavList.children[i].addEventListener('click', () => {
        let footerItem = footerNavList.children[i].querySelector('.js-footer-nav__item-list');

        if (footerItem.style.display === "" || footerItem.style.display === "none")
            footerItem.style.display = "block";
        else
            footerItem.style.display = "none";
    })
}