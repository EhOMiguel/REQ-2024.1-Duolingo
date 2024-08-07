# UC03 - Aquisição do Super Duolingo

**Descrição**: Este caso de uso detalha o processo de aquisição da assinatura do Super Duolingo.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário possui uma conta registrada no Duolingo.
- O usuário deve ter cartão de crédito ou créditos na Play Store ou App Store.

**Fluxo Principal:**

- O usuário acessa o Duolingo.
- O usuário navega até a loja da aplicação ou até a aba de revisão de hoje.
- O usuário clica no banner do super duolingo.
- O sistema exibe os benefícios da assinatura.
- O sistema avisa que mandará um lembrete 2 dias antes da assinatura acabar.
- O sistema exibe as opções de assinatura.
- O usuário seleciona a opção de assinatura desejada.
- O sistema redireciona o usuário para a tela de pagamento.
- O usuário insere suas informações de pagamento.
- O usuário confirma a compra.
- O sistema exibe uma mensagem de confirmação da assinatura.
- O sistema ativa imediatamente os recursos premium do Super Duolingo na conta do usuário.

**Fluxo de exceção:** Cartão Recusado

- O usuário acessa o Duolingo.
- O usuário navega até a loja da aplicação ou até a aba de revisão de hoje.
- O usuário clica no banner do super duolingo.
- O sistema exibe os benefícios da assinatura.
- O sistema avisa que mandará um lembrete 2 dias antes da assinatura acabar.
- O sistema exibe as opções de assinatura.
- O usuário seleciona a opção de assinatura desejada.
- O sistema redireciona o usuário para a tela de pagamento.
- O usuário insere suas informações de pagamento.
- O usuário confirma a compra.
- O sistema exibe uma mensagem de erro na confirmação da assinatura.
- O sistema retorna para as opções de assinatura.

**Restrições:**

- O usuário deve ter acesso à internet para realizar a aquisição.
- O usuário não possuir o dinheiro para a assinatura.

**Pós-condições:**

- O usuário adquiriu com sucesso a assinatura do Super Duolingo.