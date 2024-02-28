const buyEl = document.getElementById('buy-btn');
const errorEl = document.getElementById('error-p');


buyEl.addEventListener('click', errorText);
function errorText() {
   // console.log('run');
   errorEl.classList.remove('error-p');
   errorEl.innerHTML = "Something went wrong Try later";
    
}