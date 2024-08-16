# Introdução

A especificação suplementar visa listar os requisitos não funcionais do sistema, complementando outras técnicas de modelagem e elicitação. No caso do Duolingo, essa abordagem foi essencial para identificar e especificar requisitos não funcionais relacionados a desempenho, usabilidade, segurança, confiabilidade, portabilidade e eficiência energética.

### 1. **Desempenho**
   - **Tempo de Resposta**: O tempo de carregamento de qualquer tela ou funcionalidade deve ser inferior a 2 segundos para 95% das interações.
   - **Capacidade de Conexão**: O sistema deve ser capaz de suportar até múltiplos usuários simultâneos sem degradação perceptível no desempenho.
   - **Escalabilidade**: A arquitetura do Duolingo deve ser escalável para suportar aumentos repentinos no número de usuários.
   - **Disponibilidade:** O serviço deve estar disponível 99,9% do tempo.
   - **Capacidade:** A aplicação deve funcionar sem problemas em dispositivos com Android 10 ou superior ou iOS 15 ou superior.

### 2. **Usabilidade**
   - **Interface do Usuário**: A interface da aplicação deve ser clara, consistente e fácil de navegar.
   - **Acessibilidade**: O aplicativo deve estar em conformidade com as diretrizes WCAG 2.1, garantindo acessibilidade para usuários com deficiências visuais, auditivas ou motoras.
   - **Localização**: A aplicação deve estar disponível em vários idiomas e deve se adaptar à cultura e linguagem local.
   - **Facilidade de utilização:** A aplicação deve ser fácil de usar e intuitiva para usuários de todos os níveis de experiência.
   - **Responsividade:** A aplicação deve se adaptar a diferentes tamanhos de tela e dispositivos.

### 3. **Segurança**
   - **Proteção de Dados**: Os dados dos usuários devem ser criptografados em repouso e em trânsito usando padrões de criptografia modernos.
   - **Autenticação**: Deve haver suporte para autenticação multifatorial para proteger as contas dos usuários.
   - **Conformidade**: O Duolingo deve estar em conformidade com as leis e regulamentos de proteção de dados aplicáveis, como o GDPR na Europa e a LGPD no Brasil.

### 4. **Confiabilidade**
   - **Disponibilidade**: O sistema deve ter uma disponibilidade mínima de 99,9% ao longo de um ano, garantindo que o serviço esteja disponível 24/7 para os usuários.
   - **Recuperação de Desastres**: Deve haver um plano robusto de recuperação de desastres, com backup regular dos dados e capacidade de recuperação completa.

### 5. **Portabilidade**
   - **Compatibilidade entre Plataformas**: O Duolingo deve ser compatível com os principais sistemas operacionais móveis (iOS e Android) e navegadores de desktop (Chrome, Firefox, Safari, etc).
   - **Requisitos de Hardware**: O aplicativo deve ser executável em dispositivos com especificações mínimas, como 2 GB de RAM e processador dual-core.

### 6. **Eficiência Energética**
   - **Consumo de Bateria**: O aplicativo deve ser otimizado para minimizar o consumo de bateria em dispositivos móveis, especialmente durante atividades de longo prazo, como aulas e práticas.
   - **Uso de Rede**: O tráfego de rede deve ser minimizado, especialmente para usuários em redes móveis, com uso eficiente de cache e compressão de dados.

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) |
| ---- | ------ | --------- | --------- |
| 16/08/2024 | 1.0 | Criação da especificação suplementar | Vinícius de Oliveira |
| 16/08/2024 | 1.1 | Preenchimento da especificação suplementar | Vinícius de Oliveira |
