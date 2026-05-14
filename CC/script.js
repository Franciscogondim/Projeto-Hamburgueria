// para fazer o pop-up funcionar.
const abrirPopUp = document.querySelectorAll('.abrirPopUp')

abrirPopUp.forEach(button => {
    button.addEventListener('click', () => {
        const popUpId = button.getAttribute('data-popUp');
        const popUp = document.getElementById(popUpId)
       
        popUp.showModal();
    });
});

const botaoX = document.querySelectorAll('.botaoX');

botaoX.forEach(button => {
    button.addEventListener('click', () => {
        const popUpId = button.getAttribute('data-popUp');
        const popUp = document.getElementById(popUpId);
        
        popUp.close();
    });
});
