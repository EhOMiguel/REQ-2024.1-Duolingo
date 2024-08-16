# UC05 - Realização de Exercício no Duolingo

**Descrição**: Este caso de uso detalha o processo de realização de exercícios no Duolingo, desde a seleção da lição até a conclusão e feedback.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário possui uma conta registrada no Duolingo.
- O usuário está logado em sua conta na aplicação.

**Fluxo Principal:**

1. O usuário acessa o Duolingo.
2. O usuário seleciona a lição que deseja completar.
3. O sistema carrega a lição selecionada e apresenta ao usuário.
4. O usuário responde ao exercício.
5. O sistema verifica a resposta do usuário.
6. O sistema fornece um feedback do exercício respondido e exibe o próximo.
7. Após completar todos os exercícios, o sistema exibe um resumo do desempenho do usuário, incluindo acertos, erros e pontuação.

**Fluxo alternativo:** Usuário sai do exercício

1. O usuário acessa o Duolingo.
2. O usuário seleciona a lição que deseja completar.
3. O sistema carrega a lição selecionada e apresenta ao usuário.
4. O usuário responde ao exercício.
5. O sistema verifica a resposta do usuário.
6. O sistema fornece um feedback do exercício respondido e exibe o próximo.
7. O usuário sai da lição que está em andamento.
8. O sistema salva o progresso da lição.
9. Usuário retorna para terminar a lição.
10. Após completar todos os exercícios, o sistema exibe um resumo do desempenho do usuário, incluindo acertos, erros e pontuação.

**Fluxo de exceção:** ---

**Restrição:**

- Aplicação apresenta instabilidades.

**Pós-condições:**

- O usuário completou o exercício.