# UC09 - Compartilhar Ofensiva no Duolingo

**Descrição:** Este caso de uso descreve o processo pelo qual o usuário pode compartilhar sua sequência de dias ativos, conhecida como "ofensiva", nas redes sociais ou com amigos.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário está logado no Duolingo.
- O usuário possui uma sequência de dias ativos (ofensiva) que deseja compartilhar.
- O dispositivo do usuário possui aplicativos ou conexões para redes sociais configuradas.

**Fluxo Principal:**

1. O usuário acessa o Duolingo.
2. O sistema exibe a tela inicial, mostrando a sequência atual de dias ativos do usuário (ex.: "Você está em uma ofensiva de 30 dias!").
3. O usuário seleciona a opção "Compartilhar Ofensiva".
4. O sistema exibe uma tela de compartilhamento, oferecendo diferentes opções de redes sociais e métodos de compartilhamento (ex.: Facebook, Twitter, Instagram, WhatsApp, e-mail).
5. O usuário escolhe a rede social ou método de compartilhamento desejado.
6. O sistema gera automaticamente uma imagem ou texto com a informação da sequência de dias ativos do usuário, pronta para ser compartilhada.
7. O usuário revisa o conteúdo e confirma o compartilhamento.
8. O sistema abre o aplicativo correspondente (ex.: Facebook) ou o método escolhido (ex.: e-mail) com o conteúdo pré-carregado.
9. O usuário publica ou envia o conteúdo, completando o compartilhamento.

**Fluxo Alternativo 1: Edição do Conteúdo a ser Compartilhado**

1. Durante o passo 7 do fluxo principal, o usuário decide editar o conteúdo antes de compartilhar.
2. O usuário altera o texto ou escolhe uma imagem diferente fornecida pelo Duolingo.
3. O usuário confirma a edição e prossegue com o passo 8 do fluxo principal.

**Fluxo Alternativo 2: Cancelar Compartilhamento**

1. Durante o passo 7 do fluxo principal, o usuário decide não prosseguir com o compartilhamento.
2. O usuário seleciona a opção "Cancelar".
3. O sistema descarta o processo de compartilhamento.

**Fluxo de Exceção:**

- O aplicativo da rede social escolhida não está instalado no dispositivo do usuário.
- O compartilhamento falha devido a problemas de conexão à internet.
- O sistema apresenta um erro ao gerar o conteúdo para compartilhamento.

**Restrições:**

- O usuário precisa estar conectado à internet para compartilhar sua ofensiva.
- O sistema depende dos aplicativos de redes sociais instalados no dispositivo para completar o compartilhamento.

**Pós-condições:**

- O conteúdo da ofensiva é compartilhado na rede social ou método escolhido pelo usuário.
- O usuário retorna à tela inicial do Duolingo e pode continuar usando o aplicativo normalmente.
