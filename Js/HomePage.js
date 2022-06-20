const bar = document.querySelector('.bar');
const header = document.querySelector('header');
bar.onclick = () => {
    const menu = document.querySelector('nav');
    menu.classList.toggle('show');
}
function AddNavBarbg() {
    if(window.scrollY > 100){
        header.classList.add('bg');
    }else{
        header.classList.remove('bg');
    }
    
}
window.addEventListener('scroll', AddNavBarbg)




let Random = document.getElementById('Random-Motivation');
const ArrayMotivation = ['" Nan "', '" ไม่ต้องเครียด ค่อยๆ เป็นค่อยๆ ไป เดี๋ยวมันก็สำเร็จ🙂 "',
    '" ไม่ต้องไปสนใจว่าจะลดไปได้สักกี่โล ขอแค่ทำมันให้ดีที่สุดก็พอ😁 "',
    '" อย่าให้คำดูถูกมาทำลายความตั้งใจของตัวเองซิ!🥲 "',
    '" สู้ๆ🔥 "'];
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

let value4 = generateRandomInteger(4);
Random.innerHTML = ArrayMotivation[value4];
