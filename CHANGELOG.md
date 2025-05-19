# CHANGELOG

## 📦 Entrega 03 — Refatoração com Clean Code

Este changelog documenta as principais mudanças realizadas no projeto, com base na identificação e correção de code smells conforme os princípios de Clean Code.

---

### ✅ 1. Tipagem Fraca

- Substituição de `any` por tipos explícitos em componentes como `FormikInput`, `FormikSelect`, `ReactAsyncSelect`, `Table`, `TableContent`, etc.
- Criação de interfaces específicas para props com validação de tipo forte no TypeScript.

---

### ✅ 2. Reorganização de Pastas

- Reestruturação do projeto para separar responsabilidades:
  - `src/hooks/` → lógica reutilizável (ex: `useDashboard`, `useWallet`, `useModalStock`, `useMask`)
  - `src/services/` → abstrações de API (`api.ts`, `brApi.ts`, `logger.ts`)
  - `src/components/ui/` → componentes genéricos reutilizáveis (`Button`, `Modal`, `FormikInput`, etc.)
  - `src/screens/` → componentes de página como `Dashboard`, `Wallet`, `Authentication`
  - `src/utils/` → funções puras (`applyMask`, `unMask`, etc.)
  - `src/styles/` → tema e estilos globais
- Atualização do `tsconfig.json` para uso de aliases:
  - `@hooks`, `@services`, `@ui`, `@screens`, `@styles`, `@utils`
- Refatoração de todos os imports para usar aliases.

---

### ✅ 3. Configuração de Linter e Formatter

- Adição de ESLint com extensão para React e TypeScript.
- Inclusão do Prettier para formatação automática de código.
- Criação de scripts no `package.json`:
  - `npm run lint`
  - `npm run lint:fix`
- Integração com CI (GitHub Actions) para validar o código em cada push/pull request.

---

### ✅ 4. Componentes Monolíticos e Longos

- Refatoração completa dos componentes `Dashboard.tsx`, `Wallet.tsx` e `ModalAddNewStock.tsx`:
  - Extração da lógica para hooks dedicados: `useDashboard`, `useWallet`, `useModalStock`
  - Separação da UI em sub-componentes coesos e reaproveitáveis.
  - Redução de complexidade por função/módulo.

---

### ✅ 5. Código Duplicado

- Criação do hook `useMask` para centralizar toda a lógica de formatação (`BRL`, `NUM`, `unmask`).
- Substituição de chamadas repetidas de `applyMask(...)` e `unMask(...)` por `useMask().formatBRL()` etc.
- Criação de serviço `logger.ts` para capturar logs de forma segura:
  - Suprime logs de debug em produção.
  - Permite `logger.debug()`, `logger.error()` com fallback para `console`.

---

### ✅ 6. Testes Insuficientes

- Implementação de testes unitários com Jest e React Testing Library.
- Cobertura mínima de 50% nos módulos críticos (`Dashboard`, `Wallet`, `ModalAddNewStock`, `hooks`, `utils`).
- Configuração de relatório de cobertura com `--coverage` e integração com CI.
- Escrita de testes para fluxos principais: login, upload, adição de ativo, atualização de carteira.

---

### 📌 Observações

- Todas as refatorações respeitam os princípios de código limpo: legibilidade, modularidade, isolamento e previsibilidade.
- Branch `original` preserva o código legado como referência.
- Branch `main` contém a versão refatorada final para entrega.

---
