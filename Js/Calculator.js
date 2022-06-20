const bar = document.querySelector('.bar');
const header = document.querySelector('header');
bar.onclick = () => {
    const menu = document.querySelector('nav');
    menu.classList.toggle('show');
}