---
title: Server React DOM APIs
translators: [이나령]
---

<Intro>

The `react-dom/server` APIs let you render React components to HTML on the server. These APIs are only used on the server at the top level of your app to generate the initial HTML. A [framework](/learn/start-a-new-react-project#production-grade-react-frameworks) may call them for you. Most of your components don't need to import or use them.
<Trans>`react-dom/server` API를 사용하면 서버에서 React 컴포넌트를 HTML로 렌더링할 수 있습니다. 이러한 API는 앱의 최상위 레벨에 있는 서버에서만 초기 HTML을 생성하는 데 사용됩니다. [프레임워크](/learn/start-a-new-react-project#production-grade-react-frameworks)가 대신 호출할 수도 있습니다. 대부분의 컴포넌트는 이를 가져오거나 사용할 필요가 없습니다.</Trans>

</Intro>

---

## Server APIs for Node.js Streams<Trans>Node.js 스트림용 서버 API</Trans>{/*server-apis-for-nodejs-streams*/}

These methods are only available in the environments with [Node.js Streams:](https://nodejs.org/api/stream.html)
<Trans>이러한 메서드는 [Node.js 스트림](https://nodejs.org/api/stream.html)이 있는 환경에서만 사용할 수 있습니다:</Trans>

* [`renderToPipeableStream`](/reference/react-dom/server/renderToPipeableStream) renders a React tree to a pipeable [Node.js Stream.](https://nodejs.org/api/stream.html)
<Trans>[`renderToPipeableStream`](/reference/react-dom/server/renderToPipeableStream)은 리액트 트리를 파이프 가능한 [Node.js Stream](https://nodejs.org/api/stream.html)으로 렌더링합니다.</Trans>
* [`renderToStaticNodeStream`](/reference/react-dom/server/renderToStaticNodeStream) renders a non-interactive React tree to a [Node.js Readable Stream.](https://nodejs.org/api/stream.html#readable-streams)
<Trans>[`renderToStaticNodeStream`](/reference/react-dom/server/renderToStaticNodeStream)은 인터렉티브하지 않은 리액트 트리를 [Node.js를 읽을 수 있는 스트림](https://nodejs.org/api/stream.html#readable-streams)으로 렌더링합니다.</Trans>

---

## Server APIs for Web Streams<Trans>웹 스트림용 서버 API</Trans>{/*server-apis-for-web-streams*/}

These methods are only available in the environments with [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API), which includes browsers, Deno, and some modern edge runtimes:
<Trans>이러한 방법은 브라우저, Deno 및 일부 최신 엣지 런타임을 포함하는 [웹 스트림](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)이 있는 환경에서만 사용할 수 있습니다:</Trans>

* [`renderToReadableStream`](/reference/react-dom/server/renderToReadableStream) renders a React tree to a [Readable Web Stream.](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
<Trans>[`renderToReadableStream`](/reference/react-dom/server/renderToReadableStream)은 리액트 트리를 [읽기 가능한 웹 스트림](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)으로 렌더링합니다.</Trans>

---

## Server APIs for non-streaming environments<Trans>비스트리밍 환경용 서버 API</Trans> {/*server-apis-for-non-streaming-environments*/}

These methods can be used in the environments that don't support streams:
<Trans>이러한 메서드는 스트림을 지원하지 않는 환경에서 사용할 수 있습니다:</Trans>

* [`renderToString`](/reference/react-dom/server/renderToString) renders a React tree to a string.
<Trans>[`renderToString`](/reference/react-dom/server/renderToString)은 리액트 트리를 문자열로 렌더링합니다.</Trans>
* [`renderToStaticMarkup`](/reference/react-dom/server/renderToStaticMarkup) renders a non-interactive React tree to a string.
<Trans>[`renderToStaticMarkup`](/reference/react-dom/server/renderToStaticMarkup)은 인터렉티브하지 않은 리액트 트리를 문자열로 렌더링합니다.</Trans>

They have limited functionality compared to the streaming APIs.
<Trans>스트리밍 API에 비해 기능이 제한적입니다.</Trans>

---

## Deprecated server APIs<Trans>더 이상 사용되지 않는 서버 API</Trans> {/*deprecated-server-apis*/}

<Deprecated>

These APIs will be removed in a future major version of React.
<Trans>이러한 API는 향후 React의 메인 버전에서 삭제될 예정입니다.</Trans>

</Deprecated>

* [`renderToNodeStream`](/reference/react-dom/server/renderToNodeStream) renders a React tree to a [Node.js Readable stream.](https://nodejs.org/api/stream.html#readable-streams) (Deprecated.)
<Trans>[`renderToNodeStream`](/reference/react-dom/server/renderToNodeStream)은 리액트 트리를 [Node.js를 읽을 수 있는 스트림](https://nodejs.org/api/stream.html#readable-streams)으로 렌더링합니다. (더 이상 사용되지 않습니다.) </Trans>
