# UC08: Desconectar conta do Duolingo

**Descrição**: Este caso de uso detalha o processo de desconectar a conta do Duolingo.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário deve estar conectado a internet
- O usuário deve estar logado no aplicativo.

**Fluxo Principal:**

- O usuário acessa o Duolingo.
- O usuário clica no ícone dos três pontos escrito "MAIS".
- O sistema exibe uma caixa com as opções escolas, configurações, ajuda, sair.
- O usuário clica na opção "SAIR".
- O sistema desconecta o usuário e exibe a tela inicial do Duolingo.

**Fluxos Alternativo 1:** Desconectar no aplicativo mobile

- O usuário acessa o Duolingo.
- O usuário clica no ícone do perfil.
- O sistema exibe a tela de perfil.
- O usuário clica no ícone da engrenagem das configurações.
- O sistema exibe as opções de configurações.
- O usuário clica na opção "SAIR".
- O sistema desconecta o usuário e exibe a tela de adicionar uma conta.

**Fluxo de exceção:** 

**Restrições:**

- Queda da internet.
- Usuário fecha a aplicação antes de desconectar.

**Pós-condições:**

- O usuário se desconectou com sucesso.