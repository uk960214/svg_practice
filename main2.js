const nextButtons = document.querySelectorAll('.next-button');
const prevButtons = document.querySelectorAll('.prev-button');



const loadNextPage = (e) => {
    let nextPage = e.path[0].parentNode.nextElementSibling;
    nextPage.classList.remove('hidden');
}

const loadPrevPage = (e) => {
    let currentPage = e.path[0].parentNode;
    currentPage.classList.add('hidden');
}

for (const button of nextButtons) {
    button.addEventListener('click', loadNextPage);
}

for (const button of prevButtons) {
    button.addEventListener('click', loadPrevPage);
}