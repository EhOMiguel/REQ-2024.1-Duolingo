document.addEventListener('DOMContentLoaded', function () {
    // Função para atualizar a logo com base no tema ativo
    function updateLogo() {
        const logo = document.querySelector('.md-logo img');
        const darkModeButton = document.querySelector('.md-header__button[title="Modo Escuro"]');
        
        // Verifica se o botão de modo escuro está visível ou oculto
        if (darkModeButton && darkModeButton.offsetParent !== null) {
            // Se o botão de modo escuro está visível, o tema claro está ativo
            logo.src = "../../assets/icons/logo_dark.svg";
        } else {
            // Se o botão de modo escuro está oculto, o tema escuro está ativo
            logo.src = "../../assets/icons/logo_light.svg";
        }
    }
    updateLogo();

    // Adicionar evento de clique ao botão de troca de tema
    const themeToggleButton = document.querySelector('.md-header__option');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            setTimeout(updateLogo, 1);
        });
    }
});
