---
title: Rules of React
translatedTitle: React의 규칙
translators: [정재남]
---

<Intro>
Just as different programming languages have their own ways of expressing concepts, React has its own idioms — or rules — for how to express patterns in a way that is easy to understand and yields high-quality applications.
<Trans>프로그래밍 언어마다 개념을 표현하는 고유한 방식이 있는 것처럼, React에는 이해하기 쉬우면서 고품질의 애플리케이션을 생성하기 위한, 패턴을 표현하는 방법에 대한 고유한 관용구(또는 규칙)이 있습니다.</Trans>
</Intro>

<InlineToc />

---

<Note>
To learn more about expressing UIs with React, we recommend reading [Thinking in React](/learn/thinking-in-react).
<Trans>React로 UI를 표현하는 방법에 대해 자세히 알아보려면 [Thinking in React](/learn/thinking-in-react)를 읽어보시기 바랍니다.</Trans>
</Note>

This section describes the rules you need to follow to write idiomatic React code. Writing idiomatic React code can help you write well organized, safe, and composable applications. These properties make your app more resilient to changes and makes it easier to work with other developers, libraries, and tools.
<Trans>이 섹션에서는 관용적인 React 코드를 작성하기 위해 따라야 하는 규칙에 대해 설명합니다. 관용적인 React 코드를 작성하면 체계적이고 안전하며 구성이 용이한 애플리케이션을 작성하는 데 도움이 될 수 있습니다. 이러한 속성은 앱이 변경에 더 탄력적으로 대응하고 다른 개발자, 라이브러리 및 도구와 더 쉽게 작업할 수 있게 해줍니다.</Trans>

These rules are known as the **Rules of React**. They are rules – and not just guidelines – in the sense that if they are broken, your app likely has bugs. Your code also becomes unidiomatic and harder to understand and reason about.
<Trans>이러한 규칙을 **React의 규칙**이라고 합니다. 이 규칙을 어기면 앱에 버그가 있을 가능성이 높다는 점에서, 또한 코드가 단조로워지며, 이해 및 추론이 더욱 어려워진다는 점에서, *단순한 지침이 아닌* 규칙입니다. </Trans>

We strongly recommend using [Strict Mode](/reference/react/StrictMode) alongside React's [ESLint plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks) to help your codebase follow the Rules of React. By following the Rules of React, you'll be able to find and address these bugs and keep your application maintainable.
<Trans>코드베이스가 React의 규칙을 따르도록 돕기 위해 React의 [ESLint 플러그인](https://www.npmjs.com/package/eslint-plugin-react-hooks)과 함께 [Strict 모드](/reference/react/StrictMode)를 사용하는 것을 강력히 권장합니다. React의 규칙을 따르면 이러한 버그를 찾아서 해결하고 애플리케이션을 유지 관리할 수 있습니다.</Trans>

---

## Components and Hooks must be pure <Trans>컴포넌트와 Hook은 순수해야 합니다</Trans> {/*components-and-hooks-must-be-pure*/}

[Purity in Components and Hooks](/reference/rules/components-and-hooks-must-be-pure) is a key rule of React that makes your app predictable, easy to debug, and allows React to automatically optimize your code.
<Trans>[컴포넌트와 Hook의 순수성](/reference/rules/components-and-hook-must-be-pure)은 앱을 예측 가능하고 디버깅하기 쉬우며 React가 자동으로 코드를 최적화할 수 있도록 하는 React의 핵심 규칙입니다.</Trans>

* [Components must be idempotent](/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent) – React components are assumed to always return the same output with respect to their inputs – props, state, and context.
<Trans>[컴포넌트는 멱등적이어야 합니다](/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent) - React 컴포넌트는 입력과 관련하여 항상 동일한 출력(props, state, context)을 반환하는 것으로 가정합니다.</Trans>

* [Side effects must run outside of render](/reference/rules/components-and-hooks-must-be-pure#side-effects-must-run-outside-of-render) – Side effects should not run in render, as React can render components multiple times to create the best possible user experience.
<Trans>[사이드 이펙트는 렌더링 외부에서 실행되어야 함](/reference/rules/components-and-hooks-must-be-pure#side-effects-must-run-outside-of-render) - React는 최상의 사용자 경험을 만들기 위해 컴포넌트를 여러 번 렌더링할 수 있으므로, 렌더링에서 사이드 이펙트를 실행해서는 안 됩니다.</Trans>

* [Props and state are immutable](/reference/rules/components-and-hooks-must-be-pure#props-and-state-are-immutable) – A component’s props and state are immutable snapshots with respect to a single render. Never mutate them directly.
<Trans>[프로퍼티와 상태는 불변입니다](/reference/rules/components-and-hooks-must-be-pure#props-and-state-is-immutable) - 컴포넌트의 프로퍼티와 상태는 단일 렌더링에 대해 불변의 스냅샷입니다. 직접 변경하지 마세요.</Trans>

* [Return values and arguments to Hooks are immutable](/reference/rules/components-and-hooks-must-be-pure#return-values-and-arguments-to-hooks-are-immutable) – Once values are passed to a Hook, you should not modify them. Like props in JSX, values become immutable when passed to a Hook.
<Trans>[Hook에 대한 반환값과 인수는 불변입니다](/reference/rules/components-and-hooks-must-be-pure#return-values-and-arguments-to-hooks-are-immutable) - 값이 Hook에 전달되면 수정해서는 안 됩니다. JSX의 프로퍼티와 마찬가지로 값은 Hook에 전달되면 불변이 됩니다.</Trans>

* [Values are immutable after being passed to JSX](/reference/rules/components-and-hooks-must-be-pure#values-are-immutable-after-being-passed-to-jsx) – Don’t mutate values after they’ve been used in JSX. Move the mutation before the JSX is created.
<Trans>[값은 JSX로 전달된 후에는 불변입니다](/reference/rules/components-and-hooks-must-be-pure#values-are-immutable-after-being-passed-to-jsx) - JSX에서 사용된 후에는 값을 변경하지 마세요. 변경 코드를 JSX가 생성되기 전으로 이동하세요.</Trans>

---

## React calls Components and Hooks <Trans>React는 컴포넌트와 Hook을 호출합니다</Trans> {/*react-calls-components-and-hooks*/}

[React is responsible for rendering components and hooks when necessary to optimize the user experience.](/reference/rules/react-calls-components-and-hooks) It is declarative: you tell React what to render in your component’s logic, and React will figure out how best to display it to your user.
<Trans>[React는 사용자 경험을 최적화하기 위해 필요할 때 컴포넌트와 후크를 렌더링할 책임이 있습니다.](/reference/rules/react-calls-components-and-hooks) 이는 선언적입니다. 컴포넌트의 로직에서 무엇을 렌더링할지를 React에게 알려주면, React는 사용자에게 가장 잘 표시하는 방법을 알아서 찾아냅니다.</Trans>

* [Never call component functions directly](/reference/rules/react-calls-components-and-hooks#never-call-component-functions-directly) – Components should only be used in JSX. Don’t call them as regular functions.
<Trans>[컴포넌트 함수를 직접 호출하지 마세요](/reference/rules/react-calls-components-and-hooks#never-call-component-functions-directly) - 컴포넌트는 JSX에서만 사용해야 합니다. 일반 함수로 호출하지 마세요.</Trans>

* [Never pass around hooks as regular values](/reference/rules/react-calls-components-and-hooks#never-pass-around-hooks-as-regular-values) – Hooks should only be called inside of components. Never pass it around as a regular value.
<Trans>[Hook을 일반 값으로 전달하지 않기](/reference/rules/react-calls-components-and-hooks#never-pass-around-hooks-as-regular-values) - Hook은 컴포넌트 내부에서만 호출해야 합니다. 절대 일반 값으로 전달하지 마세요.</Trans>

---

## Rules of Hooks <Trans>Hook의 규칙</Trans> {/*rules-of-hooks*/}

Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic with restrictions on where they can be called. You need to follow the [Rules of Hooks](/reference/rules/rules-of-hooks) when using them.
<Trans>Hook은 자바스크립트 함수를 사용하여 정의되지만 호출할 수 있는 위치에 제한이 있는, 특별한 유형의 재사용 가능한 UI 로직을 나타냅니다. 훅을 사용할 때는 [Hook의 규칙](/reference/rules/rules-of-hooks)을 따라야 합니다.</Trans>

* [Only call Hooks at the top level](/reference/rules/rules-of-hooks#only-call-hooks-at-the-top-level) – Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns.
<Trans>[최상위 수준에서만 Hook을 호출하세요](/reference/rules/rules-of-hooks#only-call-hooks-at-the-top-level) - 루프, 조건 또는 중첩 함수 내부에서 Hook을 호출하지 마세요. 반드시 React 함수의 최상위 수준에서 early return 구문보다 먼저 Hook을 사용하세요.</Trans>

* [Only call Hooks from React functions](/reference/rules/rules-of-hooks#only-call-hooks-from-react-functions) – Don’t call Hooks from regular JavaScript functions.
<Trans>[React 함수에서만 Hook 호출하세요](/reference/rules/rules-of-hooks#only-call-hooks-from-react-functions) - 일반 JavaScript 함수에서 Hook을 호출하지 마세요.</Trans>
