# UC07: Configuração do Duolingo

**Descrição**: Este caso de uso detalha o processo de configuração do Duolingo.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário deve estar conectado a internet.
- O usuário deve ter completado no mínimo o primeiro acesso.

**Fluxo Principal:**

1. O usuário acessa o Duolingo pelo navegador.
2. No menu incial o usuário clica no ícone "MAIS".
3. O sistema exibe uma caixa com as opções escolas, criar um perfil caso sem conta, configurações, ajuda, sair ou entrar caso esteja logado ou não.
4. O usuário escolhe a opção "CONFIGURAÇÕES".
5. O sistema exibe campos de Experiência e Visual.
6. O usuário pode ativar ou desativar os efeitos sonoros clicando na *checkbox*.
7. O usuário pode ativar ou desativar as mensagens motivacionais clicando na *checkbox*.
8. O usuário pode ativar ou desativar as exercícios de escuta clicando na *checkbox*.
9. O usuário pode habilitar, desabilitar ou deixar "PADRÃO DO SISTEMA" o modo escuro clicando no *drop-down*. 

**Fluxos Alternativo 1:** Configurações de privacidade

1. O usuário clica no botão "Configurações de privacidade".
2. O sistema exibe a tela de configurações de privacidade.
3. O usuário pode tornar seu perfil público ou privado clicando na *checkbox*.
4. O usuário pode mostrar anúncios personalizados ou não clicando na *checkbox*.
5. O usuário clica no botão "SALVAR ALTERAÇÕES".

**Fluxos Alternativo 2:** Configurações de perfil caso logado

1. O usuário clica no botão "Perfil".
2. O sistema exibe campos de avatar, nome, e-mail, senha atual e nova senha.
3. O usuário pode trocar o avatar clicando no ícone de lápis no avatar.
4. O usuário pode trocar o nome clicando no campo de "Nome".
5. O usuário pode trocar o nome de usuário clicando no campo de "Usuário".
6. O usuário pode trocar o e-mail clicando no campo de "E-mail".
6. O usuário pode inserir a senha atual no campo "Senha atual".
7. O usuário pode trocar a senha preenchendo o campo "Nova senha".
8. O usuário clica no botão "SALVAR ALTERAÇÕES".

**Fluxos Alternativo 3:** Configurações de notificações caso logado

1. O usuário clica no botão "Notificações".
2. O sistema exibe campos Geral e Lembretes diários.
3. O usuário pode ativar ou desativar as notificações de "Atualizações de produto e dicas de aprendizado" clicando na *checkbox*.
4. O usuário pode ativar ou desativar as notificações de "Novos seguidores" clicando na *checkbox*.
5. O usuário pode ativar ou desativar as notificações de "Atividade de amigos" clicando na *checkbox*.
6. O usuário pode ativar ou desativar as notificações de "Progresso semanal" clicando na *checkbox*.
7. O usuário pode ativar ou desativar as notificações de "Promoções especiais" clicando na *checkbox*.
8. O usuário pode ativar ou desativar as notificações de "Oportunidades de participação em pesquisas" clicando na *checkbox*.
9. O usuário pode ativar ou desativar as notificações de "Lembrete para praticar" clicando na *checkbox*.
10. O usuário pode definir o horário do lembrete clicando no campo do *drop-down* caso ele esteja ativo.

**Fluxos Alternativo 4:** Configurações de cursos caso logado

1. O usuário clica no botão "Cursos".
2. O sistema exibe os idiomas utilizados.
3. O usuário pode apagar seu progressso clicando no campo "APAGAR PROGRESSO" à direita do idioma, ou "REMOVER" caso tenha mais de um idioma.
4. O sistema exibe um campo com uma mensagem de confirmação.
5. O usuário pode clicar no botão "CANCELAR".
6. O usuário pode clicar no botão "REMOVER".
7. O sistema remove ou não o progresso do idioma selecionado.

**Fluxos Alternativo 5:** Configurações do Duolingo for Schools caso logado

1. O usuário clica no botão "Duolingo for Schools".
2. O sistema exibe o campo "Entre em uma turma" e um campo para digitar o código.
3. O usuário digita o código de 6 dígitos da turma.
4. O usuário clica no botão "ENVIAR".

**Fluxos Alternativo 6:** Configurações de contas de redes sociais caso logado

1. O usuário clica no botão "Contas em redes sociais".
2. O sistema exibe os campos de Facebook e Google.
3. O usuário pode conectar ou desconectar o Facebook clicando na *checkbox*.
4. O usuário pode conectar ou desconectar o Google clicando na *checkbox*.
5. O sistema exibe uma tela de oauth para conectar as contas.
6. O usuário preenche suas informações da outra conta.
7. O usuário permite o acesso do Duolingo à conta.

**Fluxo de exceção:** 

**Restrições:**

- Queda da internet.
- Usuário fecha a aplicação antes de configurar algo.

**Pós-condições:**

- O usuário configurou o Duolingo de acordo com suas preferências.