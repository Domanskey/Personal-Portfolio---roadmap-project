const darkmode = document.querySelector('.theme-toggle');

darkmode.addEventListener('click', (e) => {
    document.body.classList.toggle('darkmode');
});