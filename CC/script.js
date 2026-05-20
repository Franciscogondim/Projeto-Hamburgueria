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

const alertaComprarAgora = document.querySelectorAll('.comprarAgora');

// alerta para quando clicar em adicionar ao carrinho
alertaComprarAgora.forEach(button => {
    button.addEventListener('click', () => {
        window.alert('Seu pedido foi realizado! 😄🎉');
    });
});

// alerta para quando clicar em comprar agora
const alertaAddCarrinho = document.querySelectorAll('.addCarrinho');

alertaAddCarrinho.forEach(button => {
    button.addEventListener('click', () => {
        window.alert('Seu pedido foi adicionado ao carrinho! 😄🎉');
    });
});

