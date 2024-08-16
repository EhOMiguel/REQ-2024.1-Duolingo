# UC06 - Troca de Idioma do Curso

**Descrição**: Este caso de uso detalha o processo de troca de idioma do curso no Duolingo.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário possui uma conta registrada no Duolingo.
- O usuário está logado em sua conta no aplicativo Duolingo ou no site Duolingo.

**Fluxo Principal:**

1. O usuário acessa o Duolingo.
2. O usuário clica no ícone de bandeira.
3. O sistema carrega e exibe os cursos em andamento do usuário.
4. O usuário seleciona o idioma do curso.
5. O sistema redireciona o usuário para a árvore de lições do novo idioma selecionado.

**Fluxo Alternativo:** Trocar idioma do curso ainda não iniciado

1. O usuário acessa o Duolingo.
2. O usuário clica no ícone de bandeira.
3. O sistema carrega e exibe os cursos em andamento do usuário.
4. O usuário seleciona o ícone '+'(mais).
5. O sistema pergunta o idioma que o usuário deseja aprender.
6. O usuário seleciona o idioma.
7. O sistema pergunta ao usuário o quanto ele entende do idioma selecionado com 5 opções de escolha.
8. O usuário seleciona o quanto ele entende do idioma selecionado.
9. O sistema disponibiliza duas maneiras de iniciar o curso uma começando do zero e outra realizando um teste de nivelamento.
10. O usuário escolhe uma das opções.
11. O sistema inicia uma atividade.
12. O usuário finaliza a atividade.
13. O sistema redireciona o usuário para a árvore de lições do novo idioma selecionado.

**Fluxo de exceção:** ---

**Restrição:**

- Aplicação apresenta instabilidades.

**Pós-condições:**

- O usuário trocou o idioma do curso.