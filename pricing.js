const ball = document.querySelector('.ball')
const container = document.querySelector('.midDiv')
const firstPrice = document.querySelector('.firstPrice')
const secondPrice = document.querySelector('.secondPrice')
const thirdPrice = document.querySelector('.thirdPrice')

ball.addEventListener('click', function () {
    activeState();
    
    if (ball.classList.toggle('ball-toggle')) {
        firstDiv();
    }
});

let firstDiv = () => {
    firstPrice.textContent = `$199.99`;
    secondPrice.textContent = `$249.99`;
    thirdPrice.textContent = `$399.99`
}


let activeState = () => {
    firstPrice.textContent = `$19.99`;
    secondPrice.textContent = `$24.99`;
    thirdPrice.textContent = `$39.99`;
}


