# UC04 - Loja do Duolingo

**Descrição**: Este caso de uso descreve o processo completo de navegação e compra na loja do Duolingo.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário possui uma conta registrada no Duolingo.
- O usuário está logado em sua conta na aplicação.
- O usuário possui cristais ou dinheiro suficientes para realizar compras.

**Fluxo Principal:**

1. O usuário acessa o Duolingo.
2. O usuário clica nos cristais para acessar a loja.
3. O sistema exibe uma lista de itens disponíveis para compra na loja.

**Fluxo Alternativo 1:** Compra com cristais

1. O usuário seleciona o item ou funcionalidade que deseja comprar com cristais.
2. O sistema pergunta a quantidade de compra do item selecionado.
3. O usuário seleciona a quantidade desejada e clica em comprar item.
4. O sistema confirma a compra e informa o usuário sobre a aquisição bem-sucedida.

**Fluxo Alternativo 2:** Compra com dinheiro

1. O usuário seleciona o item ou funcionalidade que deseja comprar com dinheiro.
2. O sistema redireciona o usuário para a tela de pagamento.
3. O usuário insere suas informações de pagamento.
4. O usuário confirma a compra.
5. O sistema exibe uma mensagem de confirmação da compra.
6. O sistema ativa adiciona o item comprada na conta do usuário.

**Fluxo de Exceção 1:** Compra com cristais insulficiente

1. O usuário acessa o Duolingo.
2. O usuário clica nos cristais para acessar a loja.
3. O sistema exibe uma lista de itens disponíveis para compra na loja.
4. O usuário seleciona o item ou funcionalidade que deseja comprar com cristais.
5. O sistema pergunta a quantidade de compra do item selecionado.
6. O usuário seleciona a quantidade desejada e clica em comprar item.
7. O sistema verifica quantidade insulficiente de cristais.
8. O sistema da opções de compra de cristais com dinheiro ou voltar para a loja.

**Fluxo de Exceção 2:** Cartão Recusado

1. O usuário acessa o Duolingo.
2. O usuário clica nos cristais para acessar a loja.
3. O sistema exibe uma lista de itens disponíveis para compra na loja.
4. O usuário seleciona o item ou funcionalidade que deseja comprar com dinheiro.
5. O sistema redireciona o usuário para a tela de pagamento.
6. O usuário insere suas informações de pagamento.
7. O usuário confirma a compra.
8. O sistema exibe uma mensagem de erro na confirmação da compra.
9. O sistema retorna para a loja.

**Restrições:**

- O usuário deve ter acesso à internet.
- O usuário não tem um cartão válido.
- O usuário não possui cristais suficientes.

**Pós-condições:**

- O usuário adquiriu com sucesso itens ou funcionalidades na loja do Duolingo.