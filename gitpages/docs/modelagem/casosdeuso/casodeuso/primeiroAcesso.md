# UC01 - Primeiro Acesso ao Duolingo

**Descrição**: Este caso de uso descreve o processo completo desde o primeiro acesso ao Duolingo.

**Ator Principal**: Usuário

**Pré-condições**:

- O usuário possui acesso à internet.
- O usuário instalou o aplicativo Duolingo ou acessou o site Duolingo pela primeira vez.

**Fluxo Principal**:

- O usuário acessa o Duolingo.
- O sistema exibe uma tela de boas-vindas com opções para começar agora e já possuo uma conta.
- O usuário escolhe a opção "Começar agora".
- O sistema faz uma pequena apresentação.
- O sistema apresenta uma lista de idiomas disponíveis para aprendizado.
- O usuário seleciona o idioma que deseja aprender.
- O sistema pergunta como o usuário conheceu o Duolingo e disponibiliza 9 opções de resposta.
- O usuário seleciona como conheceu o Duolingo.
- O sistema pergunta ao usuário o quanto ele entende do idioma selecionado com 5 opções de escolha.
- O usuário seleciona o quanto ele entende do idioma selecionado.
- O sistema pergunta qual o objetivo do usuário querer aprender o idioma com 7 opções de escolha.
- O usuário seleciona qual o objetivo de estar aprendendo o idioma.
- O sistema pergunta ao usuário qual vai ser a meta diária de eprendizado do usuário com 4 opções de escolha.
- O usuário seleciona uma meta diária.
- O sistema informa o que ele irá aprender na semana e em 3 meses.
- O sistema disponibiliza duas maneiras de iniciar o curso uma começando do zero e outra realizando um teste de nivelamento.

**Fluxos Alternativo 1**: Começar do zero

- O usuário seleciona a opção "É a primeira vez que você aprende inglês?"
- O sistema inicia a primeira lição interativa.
- O usuário completa a lição inicial.
- O sistema fornece feedback sobre o desempenho do usuário na lição.
- O sistema salva o progresso do usuário e sugere continuar com a próxima lição ou explorar outras funcionalidades da aplicação.

**Fluxos Alternativo 2**: Começar com teste de nivelamento

- O usuário seleciona a opção "Já sabe um pouco do idioma selecionado?"
- O sistema inicia um teste de nivelamento.
- O usuário completa o teste.
- O sistema fornece feedback sobre o desempenho do usuário na lição.
- O sistema salva o progresso do usuário e sugere continuar com a próxima lição ou explorar outras funcionalidades da aplicação.

**Fluxo de Exceção:** ---

**Restrições**:

- O aplicativo apresenta mal funcionamento.
- A internet está instável e não permite o primeiro acesso.
- O usuário sai da aplicação.

**Pós-condições**:

- O usuário tem o seu primeiro acesso concluído.
- O usuário selecionou o idioma que deseja aprender.
- O usuário finalizou sua primeira lição.
- O usuário possui acesso a outras funcionalidades da aplicação.