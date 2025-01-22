
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




/*formulario botão*/

function configurarFormulario(btnAgendarId, formId, btnFecharId) {
    const btnAgendar = document.getElementById(btnAgendarId);
    const form = document.getElementById(formId);
    const btnFechar = document.getElementById(btnFecharId);

    btnAgendar.addEventListener("click", () => {
        form.style.display = "block";
    });

    btnFechar.addEventListener("click", () => {
        form.style.display = "none";
    });
}

// Configurar os 5 serviços
configurarFormulario("btnAgendar1", "formularioAgendamento1", "btnFecharForm1");
configurarFormulario("btnAgendar2", "formularioAgendamento2", "btnFecharForm2");
configurarFormulario("btnAgendar3", "formularioAgendamento3", "btnFecharForm3");
configurarFormulario("btnAgendar4", "formularioAgendamento4", "btnFecharForm4");
configurarFormulario("btnAgendar5", "formularioAgendamento5", "btnFecharForm5");


