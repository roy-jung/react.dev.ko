---
title: React Reference Overview
translators: [정재남]
---

<Intro>

This section provides detailed reference documentation for working with React. For an introduction to React, please visit the [Learn](/learn) section.
<Trans>이 섹션에서는 React 작업에 대한 자세한 참조 문서를 제공합니다. React에 대한 소개는 [Learn](/learn) 섹션을 참조하세요.</Trans>

</Intro>

The React reference documentation is broken down into functional subsections:
<Trans>React 참조 문서는 기능별 하위 섹션으로 세분화되어 있습니다:</Trans>

## React {/*react*/}

Programmatic React features:
<Trans>프로그램적 React 기능들:</Trans>

* [Hooks](/reference/react/hooks) - Use different React features from your components.
<Trans>[Hooks](/reference/react/hooks) - 컴포넌트에서 다양한 React 기능을 사용합니다.</Trans>

* [Components](/reference/react/components) - Documents built-in components that you can use in your JSX.
<Trans>[Components](/reference/react/components) - JSX에서 사용할 수 있는 빌트인 컴포넌트를 문서화합니다.</Trans>

* [APIs](/reference/react/apis) - APIs that are useful for defining components.
<Trans>[APIs](/reference/react/apis) - 컴포넌트를 정의하는 데 유용한 API.</Trans>

* [Directives](/reference/react/directives) - Provide instructions to bundlers compatible with React Server Components.
<Trans>[Directives](/reference/react/directives) - React 서버 컴포넌트와 호환되는 번들러에 지시사항을 제공합니다.</Trans>

## React DOM {/*react-dom*/}

React-dom contains features that are only supported for web applications (which run in the browser DOM environment). This section is broken into the following:
<Trans>React-dom에는 웹 애플리케이션(브라우저 DOM 환경에서 실행되는)에만 지원되는 기능이 포함되어 있습니다. 이 섹션은 다음과 같이 나뉩니다:</Trans>

* [Hooks](/reference/react-dom/hooks) - Hooks for web applications which run in the browser DOM environment.
<Trans>[Hooks](/reference/react-dom/hooks) - 브라우저 DOM 환경에서 실행되는 웹 애플리케이션용 후크.</Trans>

* [Components](/reference/react-dom/components) - React supports all of the browser built-in HTML and SVG components.
<Trans>[Components](/reference/react-dom/components) - React는 브라우저에 내장된 모든 HTML 및 SVG 컴포넌트를 지원합니다.</Trans>

* [APIs](/reference/react-dom) - The `react-dom` package contains methods supported only in web applications.
<Trans>[APIs](/reference/react-dom) - `react-dom` 패키지에는 웹 애플리케이션에서만 지원되는 메소드가 포함되어 있습니다.</Trans>

* [Client APIs](/reference/react-dom/client) - The `react-dom/client` APIs let you render React components on the client (in the browser).
<Trans>[클라이언트 APIs](/reference/react-dom/client) - `react-dom/client` API를 사용하면 클라이언트(브라우저에서)에서 React 컴포넌트를 렌더링할 수 있습니다.</Trans>

* [Server APIs](/reference/react-dom/server) - The `react-dom/server` APIs let you render React components to HTML on the server.
<Trans>[서버 APIs](/reference/react-dom/server) - `react-dom/server` API를 사용하면 서버에서 React 컴포넌트를 HTML로 렌더링할 수 있습니다.</Trans>

## Rules of React<Trans>React의 규칙</Trans> {/*rules-of-react*/}

React has idioms — or rules — for how to express patterns in a way that is easy to understand and yields high-quality applications:
<Trans>React에는 이해하기 쉽고 고품질의 애플리케이션을 생성하는 방식으로 패턴을 표현하는 방법에 대한 관용구 또는 규칙이 있습니다:</Trans>

* [Components and Hooks must be pure](/reference/rules/components-and-hooks-must-be-pure) – Purity makes your code easier to understand, debug, and allows React to automatically optimize your components and hooks correctly.
<Trans>[컴포넌트와 Hook은 순수해야 합니다](/reference/rules/components-and-hooks-must-be-pure) - 순수하면 코드를 이해하고 디버그하기 쉬우며 React가 컴포넌트와 훅을 자동으로 올바르게 최적화할 수 있습니다.</Trans>

* [React calls Components and Hooks](/reference/rules/react-calls-components-and-hooks) – React is responsible for rendering components and hooks when necessary to optimize the user experience.
<Trans>[React는 컴포넌트와 Hook을 호출합니다](/reference/rules/react-calls-components-and-hooks) - React는 사용자 경험을 최적화하기 위해 필요할 때 컴포넌트와 Hook을 렌더링할 책임이 있습니다.</Trans>

* [Rules of Hooks](/reference/rules/rules-of-hooks) – Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic with restrictions on where they can be called.
<Trans>[Hook의 규칙](/reference/rules/rules-of-hooks) - Hook은 JavaScript 함수를 사용하여 정의되지만, 호출할 수 있는 위치에 제한이 있는 특별한 유형의 재사용 가능한 UI 로직을 의미합니다.</Trans>

## Legacy APIs {/*legacy-apis*/}

* [Legacy APIs](/reference/react/legacy) - Exported from the `react` package, but not recommended for use in newly written code.
<Trans outdent>[레거시 APIs](/reference/react/legacy) - `react` 패키지에서 내보냈지만 새로 작성한 코드에서 사용하는 것은 권장하지 않습니다.</Trans>
