# UC0X - Cadastrar Usuário no Duolingo

**Descrição:** Este caso de uso descreve o processo pelo qual um novo usuário pode se cadastrar no Duolingo para começar a utilizar a plataforma.

**Ator Principal:** Novo Usuário

**Pré-condições:**

- O usuário tem acesso à internet.
- O usuário tem o aplicativo Duolingo instalado.

**Fluxo Principal:**

1. O novo usuário acessa o Duolingo pela primeira vez.
2. O sistema exibe uma tela de boas-vindas com as opções "Começar agora" e "Já tenho uma conta".
3. O usuário seleciona a opção "Começar agora".
4. O usuário passa por uma pesquisa de campo inicial.
5. O usuário passa por um teste de nivelamento inicial do idioma selecionado e permite ou não a permissão de captura de microfone.
6. O aplicativo exibe uma tela com as opções:
    - Criar perfil.
    - Depois.
7. O usuário seleciona a opção "Criar perfil".
8. O aplicativo exibe uma tela com as opções:
    - Quantos anos você tem?
    - Facebook
    - Google
9. O aplicativo exibe as seguintes perguntas em sequência:
    - Qual o seu nome?
    - Qual o seu e-mail?
    - Digita sua senha:
10. O usuário clica em "Criar perfil".

**Fluxo Alternativo 1: Cadastro com Conta Google**

1. No passo 8 do fluxo principal, o usuário seleciona a opção "Conectar com Google".
2. O sistema redireciona o usuário para a tela de login do Google.
3. O usuário faz login com sua conta Google.
4. O sistema solicita permissão para acessar as informações da conta Google do usuário.
5. O usuário concede permissão.
6. O sistema captura as informações necessárias e cria a conta automaticamente.

**Fluxo Alternativo 2: Cadastro com Conta Facebook**

1. No passo 5 do fluxo principal, o usuário seleciona a opção "Conectar com Facebook".
2. O sistema redireciona o usuário para a tela de login do Facebook.
3. O usuário faz login com sua conta do Facebook.
4. O sistema solicita permissão para acessar as informações da conta do Facebook do usuário.
5. O usuário concede permissão.
6. O sistema captura as informações necessárias (nome, e-mail) e cria a conta automaticamente.

**Fluxo de Exceção:**

- O e-mail fornecido já está associado a uma conta existente.
- O aplicativo apresenta erro ao tentar enviar e-mail de confirmação.
- O usuário decide cancelar o cadastro antes de concluir.
- O aplicativo apresenta um erro ao tentar se conectar com Google ou Facebook.

**Restrições:**

- O usuário precisa estar conectado à internet para realizar o cadastro.

**Pós-condições:**

- O usuário tem uma nova conta criada e ativada no Duolingo.
- O usuário pode começar a utilizar o Duolingo e iniciar as lições de idioma.
