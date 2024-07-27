const heading=[
    "About us",
    "Community",
    "Doctor",
    "Marketplace",
    "Tracking"
]
const texts = [
    "lorem ipsum njeriehtoiejwiofnrhnfqp9yrhchcuhiupncup    cirwirp huhtuhuh cp huuh v hr",
    "lorem ipsum njeriehtoiejwiofnrhnfqp9yrhchcuhiupncup    cirwirp huhtuhuh cp huuh v hr",
    "lorem ipsum njeriehtoiejwiofnrhnfqp9yrhchcuhiupncup    cirwirp huhtuhuh cp huuh v hr",
    "lorem ipsum njeriehtoiejwiofnrhnfqp9yrhchcuhiupncup    cirwirp huhtuhuh cp huuh v hr",
    "lorem ipsum njeriehtoiejwiofnrhnfqp9yrhchcuhiupncup    cirwirp huhtuhuh cp huuh v hr"
];

const images = [
    "url('aboutus.jpg')",
    "url('community.png')",
    "url('doctor.png')",
    "url('marketplace.png')",
    "url('tracker.png')"
];

let index = 0;

const container = document.getElementById('hoverContainer');
const headElement=document.getElementById('head');
const textElement = document.getElementById('text');

container.addEventListener('mouseover', () => {
    index = (index + 1) % texts.length;
    container.style.backgroundImage = images[index];
    headElement.textContent=heading[index];
    textElement.textContent = texts[index];
});
