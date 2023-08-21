/* Yazi silinib yazilmasi  */

const changingText = document.getElementById('changingText');
const texts = ['Ali Baghirov', 'Web-Developer', 'Web-Designer'];
let textIndex = 0;
let letterIndex = 0;

function animateText() {
    if (letterIndex < texts[textIndex].length) {
        changingText.textContent += texts[textIndex][letterIndex];
        letterIndex++;
        setTimeout(animateText, 100); 
    } else {
        setTimeout(() => {
            changingText.textContent = ''; 
            textIndex = (textIndex + 1) % texts.length; 
            letterIndex = 0; 
            setTimeout(animateText, 100); 
        }, 1000);
    }
}

animateText();

/* Navbar Acilib Baglanmasi */

let barKlik = document.querySelector(".bar");
let headeRight1 = document.querySelector('.right1')
var klikbarVisb = false;

barKlik.onclick = () => {
    if (!klikbarVisb) {
        headeRight1.style.display = 'block';
        klikbarVisb = true;
        barKlik.style.border = '1px solid white',
            barKlik.style.padding = '10px',
            barKlik.style.borderRadius = '8px',
            barKlik.style.boxShadow = '1px 1px 4px white';
    } else {
        headeRight1.style.display = 'none';
        klikbarVisb = false;
        barKlik.style.border = 'none',
        barKlik.style.boxShadow = 'none'
    }

};

