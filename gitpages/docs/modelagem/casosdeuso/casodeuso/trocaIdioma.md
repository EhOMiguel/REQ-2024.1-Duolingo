# UC06 - Troca de Idioma do Curso

**Descrição**: Este caso de uso detalha o processo de troca de idioma do curso no Duolingo.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário possui uma conta registrada no Duolingo.
- O usuário está logado em sua conta no aplicativo Duolingo ou no site Duolingo.

**Fluxo Principal:**

- O usuário acessa o Duolingo.
- O usuário clica no ícone de bandeira.
- O sistema carrega e exibe os cursos em andamento do usuário.
- O usuário seleciona o idioma do curso.
- O sistema redireciona o usuário para a árvore de lições do novo idioma selecionado.

**Fluxo Alternativo:** Trocar idioma do curso ainda não iniciado

- O usuário acessa o Duolingo.
- O usuário clica no ícone de bandeira.
- O sistema carrega e exibe os cursos em andamento do usuário.
- O usuário seleciona o ícone '+'(mais).
- O sistema pergunta o idioma que o usuário deseja aprender.
- O usuário seleciona o idioma.
- O sistema pergunta ao usuário o quanto ele entende do idioma selecionado com 5 opções de escolha.
- O usuário seleciona o quanto ele entende do idioma selecionado.
- O sistema disponibiliza duas maneiras de iniciar o curso uma começando do zero e outra realizando um teste de nivelamento.
- O usuário escolhe uma das opções.
- O sistema inicia uma atividade.
- O usuário finaliza a atividade.
- O sistema redireciona o usuário para a árvore de lições do novo idioma selecionado.

**Fluxo de exceção:** ---

**Restrição:**

- Aplicação apresenta instabilidades.

**Pós-condições:**

- O usuário trocou o idioma do curso.