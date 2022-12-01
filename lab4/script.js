const cooking = document.getElementById('cooking');
const films = document.querySelectorAll('.films');
const add = document.getElementById('add');
const enlarge = document.getElementById('enlarge');
const lower = document.getElementById('lower');
const delete_ = document.getElementById('delete');
const image = document.getElementById('image');
const imaging = document.getElementById('imaging');

cooking.addEventListener('click', () => {
    cooking.classList.toggle('change1');
})

films[0].addEventListener('click', () => {
    films[0].classList.toggle('change2');
})

add.addEventListener('click',()=>{
    image.classList.add('visible');
})

delete_.addEventListener('click', ()=>{
    image.classList.remove('visible');
    imaging.classList.remove('big');
    imaging.classList.remove('small');
})

enlarge.addEventListener('click', ()=>{
    imaging.classList.add('big');
})

lower.addEventListener('click', ()=>{
    imaging.classList.add('small');
})
