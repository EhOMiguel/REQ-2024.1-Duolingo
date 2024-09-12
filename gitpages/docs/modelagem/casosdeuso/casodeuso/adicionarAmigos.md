# UC13 - Adicionar Amigos no Duolingo

**Descrição:** Este caso de uso descreve o processo pelo qual o usuário pode seguir amigos no Duolingo para compartilhar progresso, competir em placares e motivar o aprendizado de idiomas.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário está logado no Duolingo.
- O usuário conhece o nome de usuário ou tem acesso à conta de redes sociais de quem deseja seguir.

**Fluxo Principal:**

1. O usuário acessa o app Duolingo.
2. O app exibe a tela inicial com as opções principais.
3. O usuário clica na opção perfil.
4. O usuário clica na opção "Adicionar Amigos".
5. O app exibe uma tela com três opções para encontrar amigos:
    - Escolher dos contatos.
    - Busca por nome.
    - Compartilhar o seu perfil.
6. O usuário escolhe a opção "Busca por nome".
7. O usuário digita o nome de usuário da pessoa que deseja seguir.
8. O app exibe o perfil correspondente ao nome de usuário digitado.
9. O usuário seleciona o perfil e clica em "Seguir".

**Fluxo Alternativo 1: Escolher dos contatos**

1. No passo 5 do fluxo principal, o usuário seleciona "Escolher dos contatos".
2. O sistema solicita permissão para acessar os contatos do dispositivo.
3. O usuário concede permissão.
4. O app solicita ao usuário para digitar o número de telefone que o usuário possui para envio do SMS de confirmação.
5. O usuário tem a opção de enviar o SMS novamente caso não tenha recebido o código.
6. O usuário digita o código que recebeu e o app mostra a lista de contatos.
7. O aplicativo exibe uma lista de contatos que também utilizam o Duolingo.
8. O usuário clica em "Seguir" os contatos que deseja.

**Fluxo Alternativo 2: Conectar com Redes Sociais**

1. No passo 4 do fluxo principal, o usuário seleciona "Conectar com Redes Sociais".
2. O sistema solicita permissão para acessar a conta da rede social escolhida.
3. O usuário concede permissão.
4. O sistema exibe uma lista de amigos da rede social que também utilizam o Duolingo.
5. O usuário seleciona os amigos que deseja seguir.

**Fluxo Alternativo 3: Compartilhar QRCode**

1. No passo 4 do fluxo principal, o usuário seleciona "Compartilhar o seu perfil".
2. O aplicativo gera um QRCode.
3. O usuário que quer seguir aponta a câmera do celular para o QRCode disponível no outro celular.
4. O usuário clica em "Seguir".

**Fluxo Alternativo 4: Seguir um amigo de volta**

1. O usuário recebe uma notificação "(Nome do usuário) seguiu você!".
2. O clica na notificação.
3. O aplicativo redireciona para o perfil do usuário que seguiu.
4. O usuário clica em "Seguir".

**Fluxo de Exceção:**

- O nome de usuário digitado no passo 7 do fluxo principal não corresponde a nenhuma conta.
- O usuário cancela a sincronização de contatos ou a conexão com redes sociais.
- O sistema apresenta um erro ao tentar seguir.

**Restrições:**

- O usuário precisa estar conectado à internet para seguir os amigos.
- Algumas permissões do dispositivo ou da rede social podem ser necessárias para sincronizar contatos ou conectar contas.

**Pós-condições:**

- O usuário passa a seguir a pessoa escolhida.
- O novo amigo é adicionado à lista de seguidores do usuário, permitindo interação e competição no Duolingo.
