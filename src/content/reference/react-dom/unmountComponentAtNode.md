---
title: unmountComponentAtNode
translators: [유은미, 이승효]
---

<Deprecated>

This API will be removed in a future major version of React.
<Trans>이 API는 향후 React의 주요 버전에서 제거 될 예정입니다.</Trans>

In React 18, `unmountComponentAtNode` was replaced by [`root.unmount()`](/reference/react-dom/client/createRoot#root-unmount).
<Trans>React 18에서 `unmountComponentAtNode`는 [`root.unmount()`](/reference/react-dom/client/createRoot#root-unmount)로 대체되었습니다.</Trans>

</Deprecated>

<Intro>

`unmountComponentAtNode` removes a mounted React component from the DOM.
<Trans>`unmountComponentAtNode`는 마운트된 React 컴포넌트를 DOM에서 제거합니다.</Trans>

```js
unmountComponentAtNode(domNode)
```

</Intro>

<InlineToc />

---

## Reference<Trans>참조</Trans> {/*reference*/}

### `unmountComponentAtNode(domNode)` {/*unmountcomponentatnode*/}

Call `unmountComponentAtNode` to remove a mounted React component from the DOM and clean up its event handlers and state.
<Trans>마운트된 React 컴포넌트를 DOM에서 제거하고 해당 이벤트 핸들러와 상태를 정리하려면 `unmountComponentAtNode`를 호출하세요.</Trans>

```js
import { unmountComponentAtNode } from 'react-dom';

const domNode = document.getElementById('root');
render(<App />, domNode);

unmountComponentAtNode(domNode);
```

[See more examples below.](#usage)
<Trans>[아래에서 더 많은 예시를 확인하세요.](#usage)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*parameters*/}

* `domNode`: A [DOM element.](https://developer.mozilla.org/en-US/docs/Web/API/Element) React will remove a mounted React component from this element.
<Trans>
* `domNode`: [DOM 엘리먼트](https://developer.mozilla.org/ko/docs/Web/API/Element). React는 이 엘리먼트에서 마운트된 React 컴포넌트를 제거합니다.
</Trans>

#### Returns<Trans>반환값</Trans> {/*returns*/}

`unmountComponentAtNode` returns `true` if a component was unmounted and `false` otherwise.
<Trans>`unmountComponentAtNode` 는 컴포넌트가 마운트 해제된 경우 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.</Trans>

---

## Usage<Trans>사용법</Trans> {/*usage*/}

Call `unmountComponentAtNode` to remove a <CodeStep step={1}>mounted React component</CodeStep> from a <CodeStep step={2}>browser DOM node</CodeStep> and clean up its event handlers and state.
<Trans>`unmountComponentAtNode`를 호출하여 <CodeStep step={2}>브라우저 DOM 노드</CodeStep>에서 <CodeStep step={1}>마운트된 React 컴포넌트</CodeStep>를 제거하고 해당 이벤트 핸들러와 상태를 정리합니다.</Trans>

```js [[1, 5, "<App />"], [2, 5, "rootNode"], [2, 8, "rootNode"]]
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App.js';

const rootNode = document.getElementById('root');
render(<App />, rootNode);

// ...
unmountComponentAtNode(rootNode);
```


### Removing a React app from a DOM element<Trans>DOM 엘리먼트에서 React 앱 제거하기</Trans> {/*removing-a-react-app-from-a-dom-element*/}

Occasionally, you may want to "sprinkle" React on an existing page, or a page that is not fully written in React. In those cases, you may need to "stop" the React app, by removing all of the UI, state, and listeners from the DOM node it was rendered to.
<Trans>때때로 기존 페이지나 React로 완전히 작성되지 않은 페이지에 React를 "뿌려주고" 싶을 때가 있습니다. 이러한 경우 렌더링된 DOM 노드에서 UI, state, 리스너를 모두 제거하여 React 앱을 "중지"해야 할 수 있습니다.</Trans>

In this example, clicking "Render React App" will render a React app. Click "Unmount React App" to destroy it:
<Trans>이 예시에서는 "Render React App"을 클릭하면 React 앱이 렌더링됩니다. "Unmount React App"을 클릭하여 앱을 삭제합니다:</Trans>

<Sandpack>

```html index.html
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <button id='render'>Render React App</button>
    <button id='unmount'>Unmount React App</button>
    <!-- This is the React App node -->
    <div id='root'></div>
  </body>
</html>
```

```js index.js active
import './styles.css';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App.js';

const domNode = document.getElementById('root');

document.getElementById('render').addEventListener('click', () => {
  render(<App />, domNode);
});

document.getElementById('unmount').addEventListener('click', () => {
  unmountComponentAtNode(domNode);
});
```

```js App.js
export default function App() {
  return <h1>Hello, world!</h1>;
}
```

</Sandpack>
