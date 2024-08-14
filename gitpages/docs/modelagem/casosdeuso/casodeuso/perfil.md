# UC0X - Gerenciamento de Perfil no Duolingo

**Descrição:** Este caso de uso descreve o processo de visualização, edição e atualização do perfil de usuário no Duolingo.

**Ator Principal:** Usuário

## Pré-condições:

- O usuário está logado no Duolingo.
- O usuário possui uma conta ativa no Duolingo.

## Fluxo Principal:

1. O usuário acessa o Duolingo.
2. O aplicativo exibe a tela inicial com as opções principais.
3. O usuário seleciona a opção "Perfil" no menu.
4. O aplicativo exibe a página de perfil do usuário, mostrando informações como nome de usuário, foto de perfil, idiomas aprendidos, nível de cada idioma, conquistas e seguidores.
5. O usuário clica na opção da engrenagem.
6. O aplicativo permite ao usuário editar informações como foto de perfil, nome, usuário, e-mail, senha e diversas configurações do aplicativo.
7. O usuário realiza as alterações desejadas.
8. O usuário revisa as alterações e clica em "Salvar" para realizar as mudanças.
9. O aplicativo salva as alterações feitas pelo usuário.

## Fluxo Alternativo 1: Cancelar Edição de Perfil

1. Durante o passo 7 do fluxo principal, o usuário decide não salvar as alterações feitas no perfil.
2. O usuário seleciona a opção "Cancelar".
3. O aplicativo pergunta ao usuário se deseja realmente cancelar as alterações.
4. O usuário confirma a ação para cancelar.
5. O aplicativo descarta as mudanças e redireciona o usuário de volta à página de perfil sem fazer alterações.

## Fluxo de Exceção:

- A conexão à internet é perdida durante a atualização do perfil.
- O aplicativo apresenta um erro ao tentar salvar as alterações.
- O nome de usuário escolhido já está em uso por outra conta.

## Restrições:

- Algumas informações de perfil, como o nome de usuário, podem estar sujeitas a regras específicas (ex.: número máximo de caracteres, uso de caracteres especiais).
- O usuário precisa estar conectado à internet para salvar as alterações no perfil.

## Pós-condições:

- O perfil do usuário é atualizado com as informações fornecidas.
- As configurações de privacidade são ajustadas conforme as preferências do usuário.
- O usuário pode visualizar as mudanças em seu perfil e continuar usando o aplicativo normalmente.
