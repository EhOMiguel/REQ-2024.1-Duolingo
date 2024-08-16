# UC03 - Aquisição do Super Duolingo

**Descrição**: Este caso de uso detalha o processo de aquisição da assinatura do Super Duolingo.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário possui uma conta registrada no Duolingo.
- O usuário deve ter cartão de crédito ou créditos na Play Store ou App Store.

**Fluxo Principal:**

1. O usuário acessa o Duolingo.
2. O usuário navega até a loja da aplicação ou até a aba de revisão de hoje.
3. O usuário clica no banner do super duolingo.
4. O sistema exibe os benefícios da assinatura.
5. O sistema avisa que mandará um lembrete 2 dias antes da assinatura acabar.
6. O sistema exibe as opções de assinatura.
7. O usuário seleciona a opção de assinatura desejada.
8. O sistema redireciona o usuário para a tela de pagamento.
9. O usuário insere suas informações de pagamento.
10. O usuário confirma a compra.
11. O sistema exibe uma mensagem de confirmação da assinatura.
12. O sistema ativa imediatamente os recursos premium do Super Duolingo na conta do usuário.

**Fluxo de exceção:** Cartão Recusado

1. O usuário acessa o Duolingo.
2. O usuário navega até a loja da aplicação ou até a aba de revisão de hoje.
3. O usuário clica no banner do super duolingo.
4. O sistema exibe os benefícios da assinatura.
5. O sistema avisa que mandará um lembrete 2 dias antes da assinatura acabar.
6. O sistema exibe as opções de assinatura.
7. O usuário seleciona a opção de assinatura desejada.
8. O sistema redireciona o usuário para a tela de pagamento.
9. O usuário insere suas informações de pagamento.
10. O usuário confirma a compra.
11. O sistema exibe uma mensagem de erro na confirmação da assinatura.
12. O sistema retorna para as opções de assinatura.

**Restrições:**

- O usuário deve ter acesso à internet para realizar a aquisição.
- O usuário não possuir o dinheiro para a assinatura.

**Pós-condições:**

- O usuário adquiriu com sucesso a assinatura do Super Duolingo.