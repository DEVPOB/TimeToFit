const bar = document.querySelector('.bar');
const header = document.querySelector('header');
bar.onclick = () => {
    const menu = document.querySelector('nav');
    menu.classList.toggle('show');
}
function NavbarChangePosition() {
    if(window.scrollY > 30){
        header.style.position = "fixed";
    }else{
        header.style.position = "relative";
    }
    
}
window.addEventListener('scroll', NavbarChangePosition)
