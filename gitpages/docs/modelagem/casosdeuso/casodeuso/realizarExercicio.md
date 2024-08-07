# UC05 - Realização de Exercício no Duolingo

**Descrição**: Este caso de uso detalha o processo de realização de exercícios no Duolingo, desde a seleção da lição até a conclusão e feedback.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário possui uma conta registrada no Duolingo.
- O usuário está logado em sua conta na aplicação.

**Fluxo Principal:**

- O usuário acessa o Duolingo.
- O usuário seleciona a lição que deseja completar.
- O sistema carrega a lição selecionada e apresenta ao usuário.
- O usuário responde ao exercício.
- O sistema verifica a resposta do usuário.
- O sistema fornece um feedback do exercício respondido e exibe o próximo.
- Após completar todos os exercícios, o sistema exibe um resumo do desempenho do usuário, incluindo acertos, erros e pontuação.

**Fluxo alternativo:** Usuário sai do exercício

- O usuário acessa o Duolingo.
- O usuário seleciona a lição que deseja completar.
- O sistema carrega a lição selecionada e apresenta ao usuário.
- O usuário responde ao exercício.
- O sistema verifica a resposta do usuário.
- O sistema fornece um feedback do exercício respondido e exibe o próximo.
- O usuário sai da lição que está em andamento.
- O sistema salva o progresso da lição.
- Usuário retorna para terminar a lição.
- Após completar todos os exercícios, o sistema exibe um resumo do desempenho do usuário, incluindo acertos, erros e pontuação.

**Fluxo de exceção:** ---

**Restrição:**

- Aplicação apresenta instabilidades.

**Pós-condições:**

- O usuário completou o exercício.