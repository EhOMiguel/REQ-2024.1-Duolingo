# UC07: Configuração do Duolingo

**Descrição**: Este caso de uso detalha o processo de configuração do Duolingo.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário deve estar conectado a internet.
- O usuário deve ter completado no mínimo o primeiro acesso.

**Fluxo Principal:**

- O usuário acessa o Duolingo pelo navegador.
- No menu incial o usuário clica no ícone "MAIS".
- O sistema exibe uma caixa com as opções escolas, criar um perfil caso sem conta, configurações, ajuda, sair ou entrar caso esteja logado ou não.
- O usuário escolhe a opção "CONFIGURAÇÕES".
- O sistema exibe campos de Experiência e Visual.
- O usuário pode ativar ou desativar os efeitos sonoros clicando na *checkbox*.
- O usuário pode ativar ou desativar as mensagens motivacionais clicando na *checkbox*.
- O usuário pode ativar ou desativar as exercícios de escuta clicando na *checkbox*.
- O usuário pode habilitar, desabilitar ou deixar "PADRÃO DO SISTEMA" o modo escuro clicando no *drop-down*. 

**Fluxos Alternativo 1:** Configurações de privacidade

- O usuário clica no botão "Configurações de privacidade".
- O sistema exibe a tela de configurações de privacidade.
- O usuário pode tornar seu perfil público ou privado clicando na *checkbox*.
- O usuário pode mostrar anúncios personalizados ou não clicando na *checkbox*.
- O usuário clica no botão "SALVAR ALTERAÇÕES".

**Fluxos Alternativo 2:** Configurações de perfil caso logado

- O usuário clica no botão "Perfil".
- O sistema exibe campos de avatar, nome, e-mail, senha atual e nova senha.
- O usuário pode trocar o avatar clicando no ícone de lápis no avatar.
- O usuário pode trocar o nome clicando no campo de "Nome".
- O usuário pode trocar o nome de usuário clicando no campo de "Usuário".
- O usuário pode trocar o e-mail clicando no campo de "E-mail".
- O usuário **pode** inserir a senha atual no campo "Senha atual".
- O usuário pode trocar a senha preenchendo o campo "Nova senha".
- O usuário clica no botão "SALVAR ALTERAÇÕES".

**Fluxos Alternativo 3:** Configurações de notificações caso logado

- O usuário clica no botão "Notificações".
- O sistema exibe campos Geral e Lembretes diários.
- O usuário pode ativar ou desativar as notificações de "Atualizações de produto e dicas de aprendizado" clicando na *checkbox*.
- O usuário pode ativar ou desativar as notificações de "Novos seguidores" clicando na *checkbox*.
- O usuário pode ativar ou desativar as notificações de "Atividade de amigos" clicando na *checkbox*.
- O usuário pode ativar ou desativar as notificações de "Progresso semanal" clicando na *checkbox*.
- O usuário pode ativar ou desativar as notificações de "Promoções especiais" clicando na *checkbox*.
- O usuário pode ativar ou desativar as notificações de "Oportunidades de participação em pesquisas" clicando na *checkbox*.
- O usuário pode ativar ou desativar as notificações de "Lembrete para praticar" clicando na *checkbox*.
- O usuário pode definir o horário do lembrete clicando no campo do *drop-down* caso ele esteja ativo.

**Fluxos Alternativo 4:** Configurações de cursos caso logado

- O usuário clica no botão "Cursos".
- O sistema exibe os idiomas utilizados.
- O usuário pode apagar seu progressso clicando no campo "APAGAR PROGRESSO" à direita do idioma, ou "REMOVER" caso tenha mais de um idioma.
- O sistema exibe um campo com uma mensagem de confirmação.
- O usuário pode clicar no botão "CANCELAR".
- O usuário pode clicar no botão "REMOVER".
- O sistema remove ou não o progresso do idioma selecionado.

**Fluxos Alternativo 5:** Configurações do Duolingo for Schools caso logado

- O usuário clica no botão "Duolingo for Schools".
- O sistema exibe o campo "Entre em uma turma" e um campo para digitar o código.
- O usuário digita o código de 6 dígitos da turma.
- O usuário clica no botão "ENVIAR".

**Fluxos Alternativo 6:** Configurações de contas de redes sociais caso logado

- O usuário clica no botão "Contas em redes sociais".
- O sistema exibe os campos de Facebook e Google.
- O usuário pode conectar ou desconectar o Facebook clicando na *checkbox*.
- O usuário pode conectar ou desconectar o Google clicando na *checkbox*.
- O sistema exibe uma tela de oauth para conectar as contas.
- O usuário preenche suas informações da outra conta.
- O usuário permite o acesso do Duolingo à conta.

**Fluxo de exceção:** 

**Restrições:**

- Queda da internet.
- Usuário fecha a aplicação antes de configurar algo.

**Pós-condições:**

- O usuário configurou o Duolingo de acordo com suas preferências.