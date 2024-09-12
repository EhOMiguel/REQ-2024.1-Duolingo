# Verificação dos Casos de Uso

---

## Contexto

- **Descrição da Verificação:** Este documento visa inspecionar os casos de uso desenvolvidos
- **Técnica utilizada:** Inspeção
- **Documento inspecionado:** Casos de Uso
- **Autores do documento:** Bruno Ricardo
- **Inspetor:** Miguel Moreira

---

## Critérios do Checklist

1. **Descrição:** A descrição do caso de uso é clara e explica de forma objetiva o propósito e o contexto?
2. **Ator Principal:** O ator principal está identificado corretamente e é o responsável pelas interações descritas no caso de uso?
3. **Pré-condições:** As pré-condições são realistas e bem definidas? Elas garantem que o cenário descrito no caso de uso pode ocorrer?
4. **Fluxo Principal:** O fluxo principal está descrito de maneira clara e segue uma sequência lógica de passos que o usuário deve realizar?
5. **Fluxo Alternativo:** Os caminhos alternativos ao fluxo principal foram bem descritos e cobrem uma quantidade considerável de possíveis variações?
6. **Fluxo de Exceção:** Os erros e problemas que podem ocorrer durante os fluxos foram descritos?
7. **Restrições:** As restrições são realistas para o funcionamento do sistema?
8. **Pós-condições:** As pós-condições indicam corretamente o resultado esperado após a execução do caso de uso?

<br />

## Modelo de Verificação

### UCXX - [Título do Caso de Uso]

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim/Não          | [Comentário opcional sobre a descrição]               |
| 2                     | Sim/Não          | [Comentário opcional sobre o ator principal]          |
| 3                     | Sim/Não          | [Comentário opcional sobre as pré-condições]          |
| 4                     | Sim/Não          | [Comentário opcional sobre o fluxo principal]         |
| 5                     | Sim/Não          | [Comentário opcional sobre os fluxos alternativos]    |
| 6                     | Sim/Não          | [Comentário opcional sobre os fluxos de exceção]      |
| 7                     | Sim/Não          | [Comentário opcional sobre as restrições]             |
| 8                     | Sim/Não          | [Comentário opcional sobre as pós-condições]          |

### Verificação

### UC01 - Primeiro Acesso ao Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              | O fluxo poderia incluir mais detalhes sobre como o sistema lida com o cancelamento do processo durante o primeiro acesso. |
| 6                     | Sim              |                                                       |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC02 - Login no Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              |                                                       |
| 6                     | Sim              | O tratamento de erro para credenciais incorretas poderia incluir mais detalhes sobre mensagens exibidas ao usuário e se há bloqueio após várias tentativas incorretas. |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC03 - Aquisição do Super Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              | O fluxo poderia descrever o que acontece se o pagamento for bem-sucedido, mas o serviço não for ativado imediatamente. |
| 6                     | Sim              |                                                       |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC04 - Loja do Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              |                                                       |
| 6                     | Sim              | Poderia ser mais detalhado como o sistema lida com a tentativa de compra sem cristais suficientes e como o usuário é guiado a comprar mais. |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC05 - Realização de Exercício no Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              |                                                       |
| 6                     | Sim              | Poderia detalhar o tipo de feedback fornecido ao usuário após o exercício, como relatórios de desempenho ou áreas de melhoria. |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC06 - Troca de Idioma do Curso

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              |                                                       |
| 6                     | Sim              |                                                       |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC07 - Configuração do Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              |                                                       |
| 6                     | Sim              |                                                       |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC08 - Gerenciamento de Perfil no Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              | O fluxo poderia descrever melhor como o sistema lida com erros ao tentar salvar alterações no perfil, como falhas de conexão. |
| 6                     | Sim              |                                                       |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC09 - Compartilhar Ofensiva no Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              |                                                       |
| 6                     | Sim              |                                                       |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC10 - Desconectar Conta no Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              |                                                       |
| 6                     | Sim              |                                                       |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC11 - Cadastrar Usuário no Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              |                                                       |
| 6                     | Sim              | Poderia ser útil detalhar como o sistema lida com usuários que não recebem o e-mail de confirmação ou fornecem dados incorretos durante o cadastro. |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC12 - Modificar Avatar no Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              | Poderia descrever melhor como o sistema lida com falhas de conexão ou problemas durante a personalização do avatar. |
| 6                     | Sim              |                                                       |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC13 - Adicionar Amigos no Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              |                                                       |
| 6                     | Sim              | Seria interessante descrever como o sistema lida com tentativas repetidas de seguir o mesmo usuário ou se o usuário já segue a pessoa. |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC14 - Compartilhar Conquista no Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              |                                                       |
| 6                     | Sim              |                                                       |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC15 - Reportar Problema no Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              | Poderia descrever melhor como o usuário recebe um retorno após o envio do problema e se ele pode acompanhar o status. |
| 6                     | Sim              |                                                       |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

---

### UC16 - Uso do Menu de Revisão no Duolingo

| Critérios             | Atende           | Observação                                            |
|:---------------------:|:----------------:|:-----------------------------------------------------:|
| 1                     | Sim              |                                                       |
| 2                     | Sim              |                                                       |
| 3                     | Sim              |                                                       |
| 4                     | Sim              |                                                       |
| 5                     | Sim              |                                                       |
| 6                     | Sim              | Poderia incluir mais detalhes sobre o tipo de feedback oferecido ao usuário após a revisão. |
| 7                     | Sim              |                                                       |
| 8                     | Sim              |                                                       |

