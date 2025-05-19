# Code Smells Identificados

1. **Tipagem Fraca**

   - **Onde:** `FormikInput`, `FormikSelect` (uso de `any`).
   - **Problema:** Falta de tipos específicos compromete segurança em tempo de compilação.
   - **Ação:** Substituir `any` por tipos precisos, definindo interfaces/aliases adequados.

2. **Reorganização de Pastas**

   - **Onde:** Estrutura atual misturada de componentes, hooks e serviços.
   - **Problema:** Dificulta localização de arquivos e escalabilidade.
   - **Ação:** Criar diretórios dedicados (`hooks/`, `services/`, `components/ui/`) e usar aliases (`@/...`).

3. **Configuração de Linter e Formatter**

   - **Onde:** Falta de scripts e integração com CI.
   - **Problema:** Inconsistência de estilo e falta de validação automática.
   - **Ação:** Adicionar scripts `lint`, `lint:fix` no `package.json` e configurar GitHub Actions.

4. **Componentes Monolíticos e Longos**

   - **Onde:** `Dashboard.tsx`, `Wallet.tsx`, `ModalAddNewStock.tsx`.
   - **Problema:** HTML, lógica de estado e chamadas de API misturadas num único arquivo.
   - **Ação:** Extrair hooks para lógica de dados (e.g. `useDashboard`, `useWallet`, `useModalStock`) e sub-componentes de apresentação.

5. **Código Duplicado**

   - **Onde:**
     - Chamadas `applyMask({ mask: 'BRL', … })` espalhadas por Wallet e ModalAddNewStock
     - `console.log` em produção (Login e Wallet)
   - **Problema:** Duplicação de lógica e artefatos de debug poluem o código.
   - **Ação:** Centralizar máscara em hook (`useMask`) e remover/substituir `console.log` por `logger` configurável.

6. **Testes Insuficientes**
   - **Onde:** Falta de suíte de testes unitários ou cobertura abaixo de 50% em componentes e hooks principais.
   - **Problema:** Risco de regressões não detectadas e baixa confiança ao refatorar.
   - **Ação:** Implementar testes unitários para hooks e componentes críticos, focando em alcançar ao menos 50% de cobertura; configurar relatórios de cobertura no CI.
