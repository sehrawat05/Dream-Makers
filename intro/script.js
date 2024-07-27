let text = [
    "TRACK YOUR CYCLE WITH PRECISION",
    "JOIN A SUPPORTIVE COMMUNITY",
    
];
let index = 0;

function change() {
    index = (index + 1) % text.length;
    document.getElementById("click").innerHTML = text[index];
}
const texts=[
    'An adorable Delhi-based front end designer, Preeti not only brings creativity but also enhances user experiences, contributing significantly to the frontend design of our projects.',
    'I specialize in front-end development, ensuring our project boasts intuitive interfaces and engaging user experiences. My expertise extends to back-end tasks, aligning functionality with aesthetic appeal for a seamless user journey.',
    'Khushi Sehrawat, actively involved in frontend development for our current website project, brings a keen eye for design and a passion for user experience, ensuring our site is visually appealing and seamlessly functional.',
    'Rohit Kumar, a passionate gym enthusiast and meticulous backend designer, brings robust framework expertise to our project. His dedication ensures flawless functionality, complementing our design with seamless performance for an exceptional user experience.'
];

const images=[
    'url("preeti.jpg")',
    'url("krish1.png")',
    'url("khushi.jpg")',
    'url("rohit.jpg")'
];

let currentIndex=0;
const rotatingContent=document.querySelector('.rotating-content');
const textOverlay=document.querySelector('.text-overlay');

const changeContent=()=>{
    currentIndex=(currentIndex+1)% texts.length;

    textOverlay.textContent=texts[currentIndex];
    rotatingContent.style.backgroundImage=images[currentIndex];
};
setInterval(changeContent,8000);
window.onload=changeContent;