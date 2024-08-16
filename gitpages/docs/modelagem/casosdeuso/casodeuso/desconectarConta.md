# UC08: Desconectar conta do Duolingo

**Descrição**: Este caso de uso detalha o processo de desconectar a conta do Duolingo.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário deve estar conectado a internet
- O usuário deve estar logado no aplicativo.

**Fluxo Principal:**

1. O usuário acessa o Duolingo.
2. O usuário clica no ícone dos três pontos escrito "MAIS".
3. O sistema exibe uma caixa com as opções escolas, configurações, ajuda, sair.
4. O usuário clica na opção "SAIR".
5. O sistema desconecta o usuário e exibe a tela inicial do Duolingo.

**Fluxos Alternativo 1:** Desconectar no aplicativo mobile

1. O usuário acessa o Duolingo.
2. O usuário clica no ícone do perfil.
3. O sistema exibe a tela de perfil.
4. O usuário clica no ícone da engrenagem das configurações.
5. O sistema exibe as opções de configurações.
6. O usuário clica na opção "SAIR".
7. O sistema desconecta o usuário e exibe a tela de adicionar uma conta.

**Fluxo de exceção:** 

**Restrições:**

- Queda da internet.
- Usuário fecha a aplicação antes de desconectar.

**Pós-condições:**

- O usuário se desconectou com sucesso.