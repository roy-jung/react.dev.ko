---
title: renderToNodeStream
translators: [송한종, 이승효]
---

<Deprecated>

This API will be removed in a future major version of React. Use [`renderToPipeableStream`](/reference/react-dom/server/renderToPipeableStream) instead.
<Trans>이 API는 향후 React의 주요 버전에서 제거될 예정입니다. 대신 [`renderToPipeableStream`](/reference/react-dom/server/renderToPipeableStream) 을 사용하세요.</Trans>

</Deprecated>

<Intro>

`renderToNodeStream` renders a React tree to a [Node.js Readable Stream.](https://nodejs.org/api/stream.html#readable-streams)
<Trans>`renderToNodeStream`은 React 트리를 [읽기 가능한 Node.js 스트림](https://nodejs.org/api/stream.html#readable-streams)으로 렌더링합니다.</Trans>

```js
const stream = renderToNodeStream(reactNode)
```

</Intro>

<InlineToc />

---

## Reference<Trans>참조</Trans> {/*reference*/}

### `renderToNodeStream(reactNode)` {/*rendertonodestream*/}

On the server, call `renderToNodeStream` to get a [Node.js Readable Stream](https://nodejs.org/api/stream.html#readable-streams) which you can pipe into the response.
<Trans>서버에서 `renderToNodeStream`을 호출하면 응답에 연결할 수 있는 [읽기 가능한 Node.js 스트림](https://nodejs.org/api/stream.html#readable-streams)을 가져옵니다.</Trans>

```js
import { renderToNodeStream } from 'react-dom/server';

const stream = renderToNodeStream(<App />);
stream.pipe(response);
```

On the client, call [`hydrateRoot`](/reference/react-dom/client/hydrateRoot) to make the server-generated HTML interactive.
<Trans>클라이언트에서 [`hydrateRoot`](/reference/react-dom/client/hydrateRoot)를 호출하여 서버에서 생성된 HTML을 상호작용 가능하도록 만드세요.</Trans>

[See more examples below.](#usage)
<Trans>[아래에서 더 많은 예시를 확인하세요.](#usage)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*parameters*/}

* `reactNode`: A React node you want to render to HTML. For example, a JSX element like `<App />`.
<Trans outdent>`reactNode`: HTML로 렌더링하려는 React 노드. 예를 들어, `<App />`과 같은 JSX 엘리먼트입니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*returns*/}

A [Node.js Readable Stream](https://nodejs.org/api/stream.html#readable-streams) that outputs an HTML string.
<Trans>HTML 문자열을 출력하는 [읽기 가능한 Node.js 스트림](https://nodejs.org/api/stream.html#readable-streams).</Trans>

#### Caveats<Trans>주의사항</Trans> {/*caveats*/}

* This method will wait for all [Suspense boundaries](/reference/react/Suspense) to complete before returning any output.
<Trans>이 메서드는 출력물을 반환하기 전에 모든 [Suspense 경계](/reference/react/Suspense)가 완료될 때까지 기다립니다.</Trans>

* As of React 18, this method buffers all of its output, so it doesn't actually provide any streaming benefits. This is why it's recommended that you migrate to [`renderToPipeableStream`](/reference/react-dom/server/renderToPipeableStream) instead.
<Trans>React 18부터 이 메서드는 모든 출력을 버퍼링하므로, 실제로 스트리밍의 이점을 누릴 수 없습니다. 따라서 [`renderToPipeableStream`](/reference/react-dom/server/renderToPipeableStream)으로 마이그레이션하는 것을 권장합니다.</Trans>

* The returned stream is a byte stream encoded in utf-8. If you need a stream in another encoding, take a look at a project like [iconv-lite](https://www.npmjs.com/package/iconv-lite), which provides transform streams for transcoding text.
<Trans>반환된 스트림은 utf-8로 인코딩된 바이트 스트림입니다. 다른 인코딩 스트림이 필요한 경우, 텍스트 변환을 위한 변환 스트림을 제공하는 [iconv-lite](https://www.npmjs.com/package/iconv-lite)와 같은 프로젝트를 살펴보세요.</Trans>

---

## Usage<Trans>사용법</Trans> {/*usage*/}

### Rendering a React tree as HTML to a Node.js Readable Stream<Trans>React 트리를 HTML로 읽기 가능한 Node.js 스트림에 렌더링하기 </Trans> {/*rendering-a-react-tree-as-html-to-a-nodejs-readable-stream*/}

Call `renderToNodeStream` to get a [Node.js Readable Stream](https://nodejs.org/api/stream.html#readable-streams) which you can pipe to your server response:
<Trans>`renderToNodeStream`을 호출하면 서버 응답으로 연결할 수 있는 [읽기 가능한 Node.js 스트림](https://nodejs.org/api/stream.html#readable-streams)을 가져옵니다:</Trans>

```js {5-6}
import { renderToNodeStream } from 'react-dom/server';

// The route handler syntax depends on your backend framework
app.use('/', (request, response) => {
  const stream = renderToNodeStream(<App />);
  stream.pipe(response);
});
```

The stream will produce the initial non-interactive HTML output of your React components. On the client, you will need to call [`hydrateRoot`](/reference/react-dom/client/hydrateRoot) to *hydrate* that server-generated HTML and make it interactive.
<Trans>스트림은 React 컴포넌트의 초기 비대화형 HTML 출력을 생성합니다. 클라이언트에서 서버에서 생성된 HTML을 *hydrate* 하고 상호작용 가능하도록 하려면 [`hydrateRoot`](/reference/react-dom/client/hydrateRoot)를 호출해야 합니다.</Trans>
