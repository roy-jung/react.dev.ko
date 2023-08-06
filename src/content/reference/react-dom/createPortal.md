---
title: createPortal
translators: [최다인, 고석영]
---

<iframe 
  style={{aspectRatio: 1.7778, width: '100%'}} 
  src="https://www.youtube.com/embed/playlist?list=PLjQV3hketAJkh6BEl0n4PDS_2fBd0cS9v&index=67"
  title="YouTube video player" 
  frameBorder="0" 
/>

<Intro>

`createPortal` lets you render some children into a different part of the DOM.
<Trans>`createPortal`을 사용하면 일부 자식을 DOM의 다른 부분으로 렌더링할 수 있습니다.</Trans>


```js
<div>
  <SomeComponent />
  {createPortal(children, domNode, key?)}
</div>
```

</Intro>

<InlineToc />

---

## Reference<Trans>참조</Trans> {/*reference*/}

### `createPortal(children, domNode, key?)` {/*createportal*/}

To create a portal, call `createPortal`, passing some JSX, and the DOM node where it should be rendered:
<Trans>포털을 생성하려면 `createPortal`을 호출하여 몇 가지 JSX와 렌더링할 DOM 노드를 전달하세요:</Trans>

```js
import { createPortal } from 'react-dom';

// ...

<div>
  <p>This child is placed in the parent div.</p>
  {createPortal(
    <p>This child is placed in the document body.</p>,
    document.body
  )}
</div>
```

[See more examples below.](#usage)
<Trans>[아래에서 더 많은 예시를 확인하세요.](#usage)</Trans>

A portal only changes the physical placement of the DOM node. In every other way, the JSX you render into a portal acts as a child node of the React component that renders it. For example, the child can access the context provided by the parent tree, and events bubble up from children to parents according to the React tree.
<Trans>포털은 DOM 노드의 물리적 배치만 변경합니다. 다른 모든 면에서 포털에 렌더링하는 JSX는 이를 렌더링하는 React 컴포넌트의 자식 노드 역할을 합니다. 예를 들어, 자식은 부모 트리가 제공하는 컨텍스트에 접근할 수 있으며, 이벤트는 React 트리에 따라 자식에서 부모로 버블링 됩니다.</Trans>

#### Parameters<Trans>매개변수</Trans> {/*parameters*/}

* `children`: Anything that can be rendered with React, such as a piece of JSX (e.g. `<div />` or `<SomeComponent />`), a [Fragment](/reference/react/Fragment) (`<>...</>`), a string or a number, or an array of these.
<Trans>`children`: JSX 조각 (예: `<div />` 나 `<SomeComponent />`), [Fragment](/reference/react/Fragment) (`<>...</>`), 문자열이나 숫자, 또는 이들의 배열과 같이 React로 렌더링할 수 있는 모든 것.</Trans>

* `domNode`: Some DOM node, such as those returned by `document.getElementById()`. The node must already exist. Passing a different DOM node during an update will cause the portal content to be recreated.
<Trans>`domNode`: `document.getElementById()`가 반환하는 것과 같은 일부 DOM 노드. 노드는 이미 존재하고 있어야 합니다. 업데이트 중에 다른 DOM 노드를 전달하면 포털 콘텐츠가 다시 생성됩니다.</Trans>

* **optional** `key`: A unique string or number to be used as the portal's [key.](/learn/rendering-lists/#keeping-list-items-in-order-with-key)
<Trans>**선택적** `key`: 포털의 [키](/learn/rendering-lists/#keeping-list-items-in-order-with-key)로 사용할 고유 문자열 또는 숫자</Trans>

#### Returns<Trans>반환값</Trans> {/*returns*/}

`createPortal` returns a React node that can be included into JSX or returned from a React component. If React encounters it in the render output, it will place the provided `children` inside the provided `domNode`.
<Trans>`createPortal`은 JSX에 포함되거나 React 컴포넌트에서 반환될 수 있는 React 노드를 반환합니다. React가 렌더링 출력물에서 이를 발견하면, 제공된 `children`을 제공된 `domNode` 안에 배치합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*caveats*/}

* Events from portals propagate according to the React tree rather than the DOM tree. For example, if you click inside a portal, and the portal is wrapped in `<div onClick>`, that `onClick` handler will fire. If this causes issues, either stop the event propagation from inside the portal, or move the portal itself up in the React tree.
<Trans outdent>포털의 이벤트는 DOM 트리가 아닌 React 트리에 따라 전파됩니다. 예를 들어, 포털 내부를 클릭했을 때 포털이 `<div onClick>`으로 감싸져 있으면 해당 `onClick` 핸들러 이벤트가 실행됩니다. 이로 인해 문제가 발생한다면, 포털 내부에서 이벤트 전파를 중지하거나 포털 자체를 React 트리에서 위로 옮기세요.</Trans>

---

## Usage<Trans>사용법</Trans> {/*usage*/}

### Rendering to a different part of the DOM<Trans>DOM의 다른 부분으로 렌더링하기</Trans> {/*rendering-to-a-different-part-of-the-dom*/}

*Portals* let your components render some of their children into a different place in the DOM. This lets a part of your component "escape" from whatever containers it may be in. For example, a component can display a modal dialog or a tooltip that appears above and outside of the rest of the page.
<Trans>*포털*을 사용하면 컴포넌트가 일부 자식을 DOM의 다른 위치로 렌더링할 수 있습니다. 이를 통해 컴포넌트의 일부가 어떤 컨테이너에 있든 그 컨테이너에서 "탈출"할 수 있습니다. 예를 들어, 컴포넌트는 모달이나 툴팁을 페이지의 나머지 부분 위에, 외부에 표시할 수 있습니다.</Trans>

To create a portal, render the result of `createPortal` with <CodeStep step={1}>some JSX</CodeStep> and the <CodeStep step={2}>DOM node where it should go</CodeStep>:
<Trans>포털을 생성하려면 `createPortal`의 결과를 <CodeStep step={1}>일부 JSX</CodeStep>와 함께 렌더링하고 포털이 있어야 할 <CodeStep step={2}>DOM 노드</CodeStep>를 지정합니다:</Trans>

```js [[1, 8, "<p>This child is placed in the document body.</p>"], [2, 9, "document.body"]]
import { createPortal } from 'react-dom';

function MyComponent() {
  return (
    <div style={{ border: '2px solid black' }}>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
    </div>
  );
}
```

React will put the DOM nodes for <CodeStep step={1}>the JSX you passed</CodeStep> inside of the <CodeStep step={2}>DOM node you provided</CodeStep>.
<Trans>React는 사용자가 전달한 JSX에 대한 DOM 노드를 사용자가 제공한 DOM 노드 안에 배치합니다.</Trans>

Without a portal, the second `<p>` would be placed inside the parent `<div>`, but the portal "teleported" it into the [`document.body`:](https://developer.mozilla.org/en-US/docs/Web/API/Document/body)
<Trans>포털이 없다면 두 번째 `<p>`는 부모 `<div>` 안에 배치되겠지만, 포털은 이를 [`document.body`](https://developer.mozilla.org/en-US/docs/Web/API/Document/body)로 "텔레포트" 시킵니다:</Trans>

<Sandpack>

```js
import { createPortal } from 'react-dom';

export default function MyComponent() {
  return (
    <div style={{ border: '2px solid black' }}>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
    </div>
  );
}
```

</Sandpack>

Notice how the second paragraph visually appears outside the parent `<div>` with the border. If you inspect the DOM structure with developer tools, you'll see that the second `<p>` got placed directly into the `<body>`:
<Trans>두 번째 단락이 시각적으로 테두리가 있는 부모 `<div>` 외부에 어떻게 나타나는지 주목하세요. 개발자 도구로 DOM 구조를 검사하면 두 번째 `<p>`가 `<body>`에 바로 배치된 것을 확인할 수 있습니다:</Trans>

```html {4-6,9}
<body>
  <div id="root">
    ...
      <div style="border: 2px solid black">
        <p>This child is placed inside the parent div.</p>
      </div>
    ...
  </div>
  <p>This child is placed in the document body.</p>
</body>
```

A portal only changes the physical placement of the DOM node. In every other way, the JSX you render into a portal acts as a child node of the React component that renders it. For example, the child can access the context provided by the parent tree, and events still bubble up from children to parents according to the React tree.
<Trans>포털은 DOM 노드의 물리적 배치만 변경합니다. 다른 모든 면에서 포털에 렌더링하는 JSX는 이를 렌더링하는 React 컴포넌트의 자식 노드 역할을 합니다. 예를 들어, 자식은 부모 트리가 제공하는 컨텍스트에 접근할 수 있으며 이벤트는 여전히 React 트리에 따라 자식에서 부모로 버블링 됩니다.</Trans>

---

### Rendering a modal dialog with a portal<Trans>포털로 모달 렌더링하기</Trans> {/*rendering-a-modal-dialog-with-a-portal*/}

You can use a portal to create a modal dialog that floats above the rest of the page, even if the component that summons the dialog is inside a container with `overflow: hidden` or other styles that interfere with the dialog.
<Trans>모달을 불러오는 컴포넌트가 `overflow: hidden` 또는 모달을 방해하는 다른 스타일이 있는 컨테이너 안에 있더라도, 포털을 사용하여 나머지 페이지 위에 떠 있는 모달을 만들 수 있습니다.</Trans>

In this example, the two containers have styles that disrupt the modal dialog, but the one rendered into a portal is unaffected because, in the DOM, the modal is not contained within the parent JSX elements.
<Trans>이 예제에서는 두 컨테이너에 모달을 방해하는 스타일이 있지만, 포털에 렌더링된 모달은 DOM에서 부모 JSX 요소에 포함되지 않기 때문에 영향을 받지 않습니다.</Trans>

<Sandpack>

```js App.js active
import NoPortalExample from './NoPortalExample';
import PortalExample from './PortalExample';

export default function App() {
  return (
    <>
      <div className="clipping-container">
        <NoPortalExample  />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </>
  );
}
```

```js NoPortalExample.js
import { useState } from 'react';
import ModalContent from './ModalContent.js';

export default function NoPortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal without a portal
      </button>
      {showModal && (
        <ModalContent onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
```

```js PortalExample.js active
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.js';

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}
```

```js ModalContent.js
export default function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
```


```css styles.css
.clipping-container {
  position: relative;
  border: 1px solid #aaa;
  margin-bottom: 12px;
  padding: 12px;
  width: 250px;
  height: 80px;
  overflow: hidden;
}

.modal {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;
  position:  absolute;
  width: 250px;
  top: 70px;
  left: calc(50% - 125px);
  bottom: 70px;
}
```

</Sandpack>

<Pitfall>

It's important to make sure that your app is accessible when using portals. For instance, you may need to manage keyboard focus so that the user can move the focus in and out of the portal in a natural way.
<Trans>포털을 사용할 때 앱에 접근할 수 있는지를 확인하는 것이 중요합니다. 예를 들어, 사용자가 포털 안팎으로 자연스럽게 초점을 이동할 수 있도록 키보드 포커스를 관리해야 할 수 있습니다.</Trans>

Follow the [WAI-ARIA Modal Authoring Practices](https://www.w3.org/WAI/ARIA/apg/#dialog_modal) when creating modals. If you use a community package, ensure that it is accessible and follows these guidelines.
<Trans>모달을 만들 때는 [WAI-ARIA 모달 제작 사례](https://www.w3.org/WAI/ARIA/apg/#dialog_modal)를 따르세요. 커뮤니티 패키지를 사용하는 경우 해당 패키지가 접근 가능한지, 가이드라인을 따르고 있는지 확인하세요.</Trans>

</Pitfall>

---

### Rendering React components into non-React server markup<Trans>React 컴포넌트를 비 React 서버 마크업으로 렌더링하기</Trans> {/*rendering-react-components-into-non-react-server-markup*/}

Portals can be useful if your React root is only part of a static or server-rendered page that isn't built with React. For example, if your page is built with a server framework like Rails, you can create areas of interactivity within static areas such as sidebars. Compared with having [multiple separate React roots,](/reference/react-dom/client/createRoot#rendering-a-page-partially-built-with-react) portals let you treat the app as a single React tree with shared state even though its parts render to different parts of the DOM.
<Trans>포털은 React 루트가 React로 빌드되지 않은 정적 페이지 또는 서버 렌더링 페이지의 일부일 때 유용할 수 있습니다. 예를 들어, 페이지가 Rails와 같은 서버 프레임워크로 빌드된 경우, 사이드바와 같은 정적 영역 내에 상호작용 가능한 영역을 만들 수 있습니다. [여러 개의 개별 React 루트](/reference/react-dom/client/createRoot#rendering-a-page-partially-built-with-react)를 사용하는 것과 비교하여, 포털을 사용하면 앱의 일부가 DOM의 다른 부분에 렌더링되더라도 앱을 공유 state를 가진 단일 React 트리로 처리할 수 있습니다.</Trans>

<Sandpack>

```html index.html
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <h1>Welcome to my hybrid app</h1>
    <div class="parent">
      <div class="sidebar">
        This is server non-React markup
        <div id="sidebar-content"></div>
      </div>
      <div id="root"></div>
    </div>
  </body>
</html>
```

```js index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

```js App.js active
import { createPortal } from 'react-dom';

const sidebarContentEl = document.getElementById('sidebar-content');

export default function App() {
  return (
    <>
      <MainContent />
      {createPortal(
        <SidebarContent />,
        sidebarContentEl
      )}
    </>
  );
}

function MainContent() {
  return <p>This part is rendered by React</p>;
}

function SidebarContent() {
  return <p>This part is also rendered by React!</p>;
}
```

```css
.parent {
  display: flex;
  flex-direction: row;
}

#root {
  margin-top: 12px;
}

.sidebar {
  padding:  12px;
  background-color: #eee;
  width: 200px;
  height: 200px;
  margin-right: 12px;
}

#sidebar-content {
  margin-top: 18px;
  display: block;
  background-color: white;
}

p {
  margin: 0;
}
```

</Sandpack>

---

### Rendering React components into non-React DOM nodes<Trans>React 컴포넌트를 비 React DOM 노드로 렌더링하기</Trans> {/*rendering-react-components-into-non-react-dom-nodes*/}

You can also use a portal to manage the content of a DOM node that's managed outside of React. For example, suppose you're integrating with a non-React map widget and you want to render React content inside a popup. To do this, declare a `popupContainer` state variable to store the DOM node you're going to render into:
<Trans>포털을 사용해 React 외부에서 관리되는 DOM 노드의 콘텐츠를 관리할 수도 있습니다. 예를 들어, React가 아닌 맵 위젯과 통합하고 팝업 안에 React 콘텐츠를 렌더링하고 싶다고 가정해 봅시다. 이렇게 하려면 렌더링할 DOM 노드를 저장할 `popupContainer` state 변수를 선언하세요:</Trans>

```js
const [popupContainer, setPopupContainer] = useState(null);
```

When you create the third-party widget, store the DOM node returned by the widget so you can render into it:
<Trans>서드파티 위젯을 만들 때 위젯이 반환하는 DOM 노드를 저장하여 렌더링할 수 있도록 합니다:</Trans>

```js {5-6}
useEffect(() => {
  if (mapRef.current === null) {
    const map = createMapWidget(containerRef.current);
    mapRef.current = map;
    const popupDiv = addPopupToMapWidget(map);
    setPopupContainer(popupDiv);
  }
}, []);
```

This lets you use `createPortal` to render React content into `popupContainer` once it becomes available:
<Trans>이렇게 하면 `createPortal`을 사용하여 React 콘텐츠가 사용 가능해지면 `popupContainer`로 렌더링할 수 있습니다:</Trans>

```js {3-6}
return (
  <div style={{ width: 250, height: 250 }} ref={containerRef}>
    {popupContainer !== null && createPortal(
      <p>Hello from React!</p>,
      popupContainer
    )}
  </div>
);
```

Here is a complete example you can play with:
<Trans>다음은 실행할 수 있는 완성된 예제입니다:</Trans>

<Sandpack>

```json package.json hidden
{
  "dependencies": {
    "leaflet": "1.9.1",
    "react": "latest",
    "react-dom": "latest",
    "react-scripts": "latest",
    "remarkable": "2.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

```js App.js
import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createMapWidget, addPopupToMapWidget } from './map-widget.js';

export default function Map() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const [popupContainer, setPopupContainer] = useState(null);

  useEffect(() => {
    if (mapRef.current === null) {
      const map = createMapWidget(containerRef.current);
      mapRef.current = map;
      const popupDiv = addPopupToMapWidget(map);
      setPopupContainer(popupDiv);
    }
  }, []);

  return (
    <div style={{ width: 250, height: 250 }} ref={containerRef}>
      {popupContainer !== null && createPortal(
        <p>Hello from React!</p>,
        popupContainer
      )}
    </div>
  );
}
```

```js map-widget.js
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

export function createMapWidget(containerDomNode) {
  const map = L.map(containerDomNode);
  map.setView([0, 0], 0);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);
  return map;
}

export function addPopupToMapWidget(map) {
  const popupDiv = document.createElement('div');
  L.popup()
    .setLatLng([0, 0])
    .setContent(popupDiv)
    .openOn(map);
  return popupDiv;
}
```

```css
button { margin: 5px; }
```

</Sandpack>
