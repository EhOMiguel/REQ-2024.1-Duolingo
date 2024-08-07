# UC04 - Loja do Duolingo

**Descrição**: Este caso de uso descreve o processo completo de navegação e compra na loja do Duolingo.

**Ator Principal:** Usuário

**Pré-condições:**

- O usuário possui uma conta registrada no Duolingo.
- O usuário está logado em sua conta na aplicação.
- O usuário possui cristais ou dinheiro suficientes para realizar compras.

**Fluxo Principal:**

- O usuário acessa o Duolingo.
- O usuário clica nos cristais para acessar a loja.
- O sistema exibe uma lista de itens disponíveis para compra na loja.

**Fluxo Alternativo 1:** Compra com cristais

- O usuário seleciona o item ou funcionalidade que deseja comprar com cristais.
- O sistema pergunta a quantidade de compra do item selecionado.
- O usuário seleciona a quantidade desejada e clica em comprar item.
- O sistema confirma a compra e informa o usuário sobre a aquisição bem-sucedida.

**Fluxo Alternativo 2:** Compra com dinheiro

- O usuário seleciona o item ou funcionalidade que deseja comprar com dinheiro.
- O sistema redireciona o usuário para a tela de pagamento.
- O usuário insere suas informações de pagamento.
- O usuário confirma a compra.
- O sistema exibe uma mensagem de confirmação da compra.
- O sistema ativa adiciona o item comprada na conta do usuário.

**Fluxo de Exceção 1:** Compra com cristais insulficiente

- O usuário acessa o Duolingo.
- O usuário clica nos cristais para acessar a loja.
- O sistema exibe uma lista de itens disponíveis para compra na loja.
- O usuário seleciona o item ou funcionalidade que deseja comprar com cristais.
- O sistema pergunta a quantidade de compra do item selecionado.
- O usuário seleciona a quantidade desejada e clica em comprar item.
- O sistema verifica quantidade insulficiente de cristais.
- O sistema da opções de compra de cristais com dinheiro ou voltar para a loja.

**Fluxo de Exceção 2:** Cartão Recusado

- O usuário acessa o Duolingo.
- O usuário clica nos cristais para acessar a loja.
- O sistema exibe uma lista de itens disponíveis para compra na loja.
- O usuário seleciona o item ou funcionalidade que deseja comprar com dinheiro.
- O sistema redireciona o usuário para a tela de pagamento.
- O usuário insere suas informações de pagamento.
- O usuário confirma a compra.
- O sistema exibe uma mensagem de erro na confirmação da compra.
- O sistema retorna para a loja.

**Restrições:**

- O usuário deve ter acesso à internet.
- O usuário não tem um cartão válido.
- O usuário não possui cristais suficientes.

**Pós-condições:**

- O usuário adquiriu com sucesso itens ou funcionalidades na loja do Duolingo.