


const myBtn = document.getElementById('myBtn');
const myImg = document.getElementById('myImg');


document.addEventListener('click', function () {
    if (myBtn.textContent === 'Hide') {
        myImg.style.visibility = 'hidden';
        myBtn.textContent = 'Show';
    } else {
        myImg.style.visibility = 'visible';
        myBtn.textContent = 'Hide';
    }
}); 