# UC15 - Reportar Problema no Duolingo

**Descrição:** Este caso de uso descreve o processo pelo qual o usuário pode reportar um problema encontrado durante o uso do Duolingo, como erros em exercícios, problemas técnicos ou conteúdo inadequado.

**Ator Principal:** Usuário

## Pré-condições:

- O usuário está logado no Duolingo.
- O usuário está utilizando uma funcionalidade ou realizando uma lição onde o problema foi encontrado.

## Fluxo Principal:

1. O usuário encontra um problema em uma pergunta durante a realização de uma lição.
2. O usuário seleciona a opção "Reportar um problema", disponível na tela onde o problema foi identificado.
3. O sistema exibe um formulário para que o usuário descreva o problema.
4. O usuário seleciona a categoria do problema (ex.: O áudio não soa correto, falta o áudio no exercício, uma imagem não parece estar certa).
5. O sistema exibe um campo para que o usuário insira uma descrição detalhada do problema.
6. O usuário confirma o envio do relatório de problema.
7. O aplicativo envia o relatório de problema para a equipe de suporte do Duolingo.

## Fluxo de Exceção:

1. O aplicativo apresenta um erro ao tentar enviar o relatório de problema.
2. O usuário decide cancelar o envio do relatório de problema antes de confirmar.

## Restrições:

- O usuário precisa estar conectado à internet para enviar o relatório de problema.
- Algumas categorias de problemas podem requerer informações específicas que o usuário deve fornecer.

## Pós-condições:

- O problema reportado é enviado à equipe de suporte do Duolingo para análise.
- O usuário pode continuar usando o aplicativo normalmente após o envio do relatório.