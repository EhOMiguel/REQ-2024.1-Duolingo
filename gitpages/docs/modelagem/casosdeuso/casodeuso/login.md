# UC02: Login no Duolingo

**Descrição**: Este caso de uso detalha o processo de login no Duolingo.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário deve estar conectado a internet
- O usuário deve possuir um cadastro no aplicativo.
- O usuário não deve estar logado em uma conta. 

**Fluxo Principal:**

1. O usuário acessa o Duolingo.
2. O sistema exibe uma tela de boas-vindas com opções para começar agora e já possuo uma conta.
3. O usuário escolhe a opção "Já tenho uma conta".
4. O sistema exibe uma tela de login com campos para inserir o e-mail/usuário e a senha, esqueci a senha, login com Facebook e login com Google.

**Fluxos Alternativo 1:** Login com e-mail/usuário e senha

1. O usuário insere seu e-mail/usuário e senha nos campos apropriados.
2. O sistema verifica as credenciais fornecidas.
3. O sistema autentica o usuário e redireciona para a tela principal do Duolingo.

**Fluxos Alternativo 2:** Login com Facebook

1. O usuário seleciona a opção “Facebook". 
2. O sistema abre uma janela para importação dos dados.

**Fluxos Alternativo 3:** Login com Google

1. O usuário seleciona a opção “Google". 
2. O sistema abre uma janela para importação dos dados.

**Fluxos Alternativo 4:** Usuário esqueceu a senha

1. O usuário seleciona a opção “Esqueci a senha". 
2. O usuário insere o e-mail para a recuperação da senha.
3. O sistema envia um e-mail com instruções para redefinir a senha.
4. O usuário segue as instruções no e-mail para criar uma nova senha e, em seguida, faz login novamente.

**Fluxo de exceção:** 

1. O usuário acessa o Duolingo.
2. O sistema exibe uma tela de boas-vindas com opções para começar agora e já possuo uma conta.
3. O usuário escolhe a opção "Já tenho uma conta".
4. O sistema exibe uma tela de login com campos para inserir o e-mail/usuário e a senha, esqueci a senha, login com Facebook e login com Google.
5. O usuário forcene os dados para o login.
6. Dados fornecidos pelo usuário são inválidos.
7. O sistema retorna para a tela de login.

**Restrições:**

- Queda da internet.
- Usuário fecha a aplicação antes de terminar o login.

**Pós-condições:**

- O usuário fez login com sucesso e pode acessar suas lições e progressos.