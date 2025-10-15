

let darkmode = localStorage.getItem('darkmode');
const themeToggle = document.querySelector('.theme-toggle');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'enabled');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'disabled');
}

if (darkmode === 'enabled') {
    enableDarkmode();
}

themeToggle.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'enabled' ? enableDarkmode() : disableDarkmode();
});