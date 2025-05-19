# CHANGELOG

## 📦 Entrega 03 — Refatoração com Clean Code e Testes

Este changelog documenta as principais mudanças realizadas no projeto, alinhadas aos princípios de Clean Code e à implementação de testes automatizados.

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
  - Separação da UI em subcomponentes coesos e reaproveitáveis.
  - Redução de complexidade por função/módulo.

---

### ✅ 5. Código Duplicado

- Criação do hook `useMask` para centralizar toda a lógica de formatação (`BRL`, `NUM`, `unmask`).
- Substituição de chamadas repetidas de `applyMask(...)` e `unMask(...)` por `useMask().formatBRL()` etc.
- Remoção de `console.log` descenessários:

---

### ✅ 6. Testes Automatizados

- Escrita de testes unitários com Jest e React Testing Library para componentes UI:

  - `NotFound`, `Sidebar`, `Slider`, `StockCard`, `Table` e outros subcomponentes.

- Uso de `MemoryRouter` nos testes que utilizam hooks de navegação (`useNavigate`).
- Todos os testes passando (13 casos de teste) e suite rodada com sucesso.
- Configuração de relatório de cobertura via `npm run test -- --coverage` para monitorar evolução.

---

### 📌 Observações

- Todas as refatorações respeitam os princípios de Clean Code: legibilidade, modularidade, isolamento e previsibilidade.
- Mais de 30% de cobertura dos testes.
- Branch `original` preserva o código legado como referência.
- Branch `main` contém a versão refatorada final para entrega.
