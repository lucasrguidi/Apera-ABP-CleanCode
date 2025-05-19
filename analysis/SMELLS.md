> Documento de análise preliminar dos principais “code smells” identificados no branch `original`
> Roteiro de refatoração será baseado nesses pontos.

---

## 1. Tipagem Fraca (`any`)

- **Arquivos**:
  - `src/components/Form/FormikInput/types.d.ts` (linha 7):
    ```ts
    error?: string | null | any;
    ```
  - `src/components/Form/FormikSelect/types.d.ts` (linha 5):
    ```ts
    error?: string | null | any;
    ```
  - `src/components/Table/styles.tsx` (linhas 37–53):
    ```ts
    styled.th<{ $cssProps: any; $cssOnMedia: any }>;
    ```
  - `src/components/Table/types.d.ts` (linha 15):
    ```ts
    cell: any;
    ```
  - `src/components/Modal/index.tsx` (linha 15):
    ```tsx
    onMouseDown={(evt: any) => { … }}
    ```
  - `src/screens/Wallet/index.tsx` (linha 65):
    ```ts
    res.data.filter((element: any) => …)
    ```
- **Problema**: uso generalizado de `any` reduz a segurança de tipo do TypeScript e dificulta refatorações futuras.
- **Ação**: substituir `any` por tipos/interfaces específicas; ativar `strict` no `tsconfig.json`.

---

## 2. Componentes Monolíticos e Longos

- **Arquivos >200 linhas**:
  - `src/screens/Dashboard/index.tsx` (212 linhas)
  - `src/screens/Wallet/index.tsx` (210 linhas)
  - `src/screens/Wallet/utils/ModalAddNewStock/index.tsx` (287 linhas)
- **Problema**: esses componentes misturam:
  - Lógica de estado e side-effects (API, context)
  - Cálculos de máscara e formatação
  - Renderização de UI complexa
- **Ação**:
  - Extrair hooks custom (ex.: `useWalletData`, `useModalStock`)
  - Criar sub-components para tabela, formulários, loading e modais

---

## 3. Código Duplicado

- **Máscaras e formatação**:
  - Chamadas repetidas de `applyMask({ mask: 'BRL', … })` em Wallet e ModalAddNewStock (> 10 ocorrências)
- **Console logs** em produção:
  - `console.log(data);` em `src/screens/Authentication/Login`
  - `console.log(...)` em `src/screens/Wallet/index.tsx`
- **Problema**: duplicação de lógica e artefatos de debug poluem o código.
- **Ação**:
  - Centralizar máscara em hook (`useMask`)
  - Remover `console.log` ou trocar por logger configurável

---

## 4. Styled-Components com Props Genéricos

- **Exemplos**:
  - `TableColHeader = styled.th<{ $cssProps: any; $cssOnMedia: any }>`
  - Uso de props `$css*` sem contrato claro
- **Problema**: dificulta manutenção e entendimento dos estilos dinâmicos.
- **Ação**:
  - Definir interfaces de props específicas
  - Evitar nomes genéricos; usar variantes explícitas ou classes utilitárias

---

## 5. Falta de Testes

- **Status**: não há suíte de testes (Jest, RTL).
- **Impacto**: sem cobertura, mudanças podem quebrar sem aviso.
- **Ação**:
  - Configurar Jest + React Testing Library
  - Criar testes para:
    - Renderização de `<AppRoutes />`, `<Login />`, `<Wallet />`
    - Lógica de hooks/utils (`applyMask`, `Api`)
  - Meta: ≈50% de cobertura

---

## 6. Ausência de Interfaces Fluentes

- **Contexto**: `Api` e `BrApi` usados via chamadas diretas
- **Oportunidade**: aplicar builder pattern (e.g. `Api.builder().withToken().get('/path')`)
- **Ação**: projetar fluent interfaces para cadeias de chamadas mais legíveis

---

## 7. Organização de Pastas e Dependências

- **Pontos**:
  - `src/utils/functions.ts` concentra máscaras, datas e _unmask_.
  - Falta distinção clara entre _services_, _hooks_ e _components_.
- **Ação**:
  - Criar diretórios: `hooks/`, `services/`, `components/ui/`
  - Usar aliases (`@/utils/functions`)

---

## 8. Configuração de Linter e Formatting

- Há `.eslintrc.json` e `.prettierrc`, mas:
  - Falta script `lint` no `package.json`
  - CI não configurado
- **Ação**:
  - Adicionar scripts `lint` e `lint:fix`
  - (Futuro) integrar em GitHub Actions
