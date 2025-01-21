
// Seleciona os elementos do DOM
const menuToggle = document.getElementById('menu-toggle');
const menuHeader = document.getElementById('menu-header');
const menuLinks = document.querySelectorAll('#menu-header a');

// Alterna a exibição do menu ao clicar no botão hambúrguer
menuToggle.addEventListener('click', () => {
    menuHeader.classList.toggle('active');
});

// Fecha o menu e navega para a seção ao clicar em um item do menu
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuHeader.classList.remove('active'); // Remove a classe 'active' para esconder o menu
    });
});
