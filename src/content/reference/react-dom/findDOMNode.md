---
title: findDOMNode
translators: [김슬기, 고석영]
---

<Deprecated>

This API will be removed in a future major version of React. [See the alternatives.](#alternatives)
<Trans>이 API는 향후 React의 주요 버전에서 제거될 예정입니다. [대안을 확인하세요.](#alternatives)</Trans>

</Deprecated>

<Intro>

`findDOMNode` finds the browser DOM node for a React [class component](/reference/react/Component) instance.
<Trans>`findDOMNode`는 React [클래스 컴포넌트](/reference/react/Component) 인스턴스에 대한 브라우저 DOM 노드를 찾습니다.</Trans>

```js
const domNode = findDOMNode(componentInstance)
```

</Intro>

<InlineToc />

---

## Reference<Trans>참조</Trans> {/*reference*/}

### `findDOMNode(componentInstance)` {/*finddomnode*/}

Call `findDOMNode` to find the browser DOM node for a given React [class component](/reference/react/Component) instance.
<Trans>`findDOMNode`를 호출하여 주어진 React [클래스 컴포넌트](/reference/react/Component) 인스턴스에 대한 브라우저 DOM 노드를 찾습니다.</Trans>

```js
import { findDOMNode } from 'react-dom';

const domNode = findDOMNode(componentInstance);
```

[See more examples below.](#usage)
<Trans>[아래에서 더 많은 예시를 확인하세요.](#usage)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*parameters*/}

* `componentInstance`: An instance of the [`Component`](/reference/react/Component) subclass. For example, `this` inside a class component.
<Trans outdent>`componentInstance`: [`Component`](/reference/react/Component) 서브 클래스의 인스턴스. 예를 들어, 컴포넌트 클래스 내부의 `this`입니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*returns*/}

`findDOMNode` returns the first closest browser DOM node within the given `componentInstance`. When a component renders to `null`, or renders `false`, `findDOMNode` returns `null`. When a component renders to a string, `findDOMNode` returns a text DOM node containing that value.
<Trans>`findDOMNode`는 주어진 `componentInstance` 내에서 가장 가까운 첫 번째 브라우저 DOM 노드를 반환합니다. 컴포넌트가 `null`로 렌더링되거나 `false`로 렌더링되면 `findDOMNode`는 `null`을 반환합니다. 컴포넌트가 문자열로 렌더링되면 `findDOMNode`는 해당 값을 포함하는 텍스트 DOM 노드를 반환합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*caveats*/}

* A component may return an array or a [Fragment](/reference/react/Fragment) with multiple children. In that case `findDOMNode`, will return the DOM node corresponding to the first non-empty child.
<Trans>컴포넌트는 여러 자식이 있는 배열 또는 [Fragment](/reference/react/Fragment)를 반환할 수 있습니다. 이 경우 `findDOMNode`는 비어 있지 않은 첫 번째 자식에 해당하는 DOM 노드를 반환합니다.</Trans>

* `findDOMNode` only works on mounted components (that is, components that have been placed in the DOM). If you try to call this on a component that has not been mounted yet (like calling `findDOMNode()` in `render()` on a component that has yet to be created), an exception will be thrown.
<Trans>`findDOMNode`는 마운트 된 컴포넌트(즉, DOM에 배치된 컴포넌트)에 대해서만 작동합니다. 아직 마운트 되지 않은 컴포넌트에서 이 함수를 호출하려고 하면(예: 아직 생성되지 않은 컴포넌트에서 `render()`에서 `findDOMNode()`를 호출하는 경우) 예외가 발생합니다.</Trans>

* `findDOMNode` only returns the result at the time of your call. If a child component renders a different node later, there is no way for you to be notified of this change.
<Trans>`findDOMNode`는 호출 시점의 결과만 반환합니다. 자식 컴포넌트가 나중에 다른 노드를 렌더링하는 경우, 이 변경 사항을 알 수 있는 방법이 없습니다.</Trans>

* `findDOMNode` accepts a class component instance, so it can't be used with function components.
<Trans>`findDOMNode`는 클래스 컴포넌트 인스턴스를 받으므로 함수 컴포넌트와 함께 사용할 수 없습니다.</Trans>

---

## Usage<Trans>사용법</Trans> {/*usage*/}

### Finding the root DOM node of a class component<Trans>클래스 컴포넌트의 루트 DOM 노드 찾기</Trans> {/*finding-the-root-dom-node-of-a-class-component*/}

Call `findDOMNode` with a [class component](/reference/react/Component) instance (usually, `this`) to find the DOM node it has rendered.
<Trans>[클래스 컴포넌트](/reference/react/Component) 인스턴스(보통 `this`)로 `findDOMNode`를 호출하여 렌더링한 DOM 노드를 찾습니다.</Trans>

```js {3}
class AutoselectingInput extends Component {
  componentDidMount() {
    const input = findDOMNode(this);
    input.select()
  }

  render() {
    return <input defaultValue="Hello" />
  }
}
```

Here, the `input` variable will be set to the `<input>` DOM element. This lets you do something with it. For example, when clicking "Show example" below mounts the input, [`input.select()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select) selects all text in the input:
<Trans>여기서 `input` 변수는 `<input>` DOM 요소로 설정됩니다. 이를 통해 무언가를 할 수 있습니다. 예를 들어, 아래의 "예제 표시"를 클릭하면 입력이 마운트되고, [`input.select()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)는 입력의 모든 텍스트를 선택합니다:</Trans>

<Sandpack>

```js App.js
import { useState } from 'react';
import AutoselectingInput from './AutoselectingInput.js';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        Show example
      </button>
      <hr />
      {show && <AutoselectingInput />}
    </>
  );
}
```

```js AutoselectingInput.js active
import { Component } from 'react';
import { findDOMNode } from 'react-dom';

class AutoselectingInput extends Component {
  componentDidMount() {
    const input = findDOMNode(this);
    input.select()
  }

  render() {
    return <input defaultValue="Hello" />
  }
}

export default AutoselectingInput;
```

</Sandpack>

---

## Alternatives {/*alternatives*/}

### Reading component's own DOM node from a ref<Trans>ref에서 컴포넌트의 자체 DOM 노드 읽기</Trans> {/*reading-components-own-dom-node-from-a-ref*/}

Code using `findDOMNode` is fragile because the connection between the JSX node and the code manipulating the corresponding DOM node is not explicit. For example, try wrapping this `<input />` into a `<div>`:
<Trans>`findDOMNode`를 사용하는 코드는 JSX 노드와 해당 DOM 노드를 조작하는 코드 사이의 연결이 명시적이지 않기 때문에 취약합니다. 예를 들어, 이 예제의 `<input />`을 `<div>`로 감싸세요:</Trans>

<Sandpack>

```js App.js
import { useState } from 'react';
import AutoselectingInput from './AutoselectingInput.js';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        Show example
      </button>
      <hr />
      {show && <AutoselectingInput />}
    </>
  );
}
```

```js AutoselectingInput.js active
import { Component } from 'react';
import { findDOMNode } from 'react-dom';

class AutoselectingInput extends Component {
  componentDidMount() {
    const input = findDOMNode(this);
    input.select()
  }
  render() {
    return <input defaultValue="Hello" />
  }
}

export default AutoselectingInput;
```

</Sandpack>

This will break the code because now, `findDOMNode(this)` finds the `<div>` DOM node, but the code expects an `<input>` DOM node. To avoid these kinds of problems, use [`createRef`](/reference/react/createRef) to manage a specific DOM node.
<Trans>이제 `findDOMNode(this)`는 `<div>` DOM 노드를 찾지만 코드에서는 `<input>` DOM 노드를 기대하기 때문에 코드가 손상됩니다. 이러한 종류의 문제를 방지하려면 [`createRef`](/reference/react/createRef)를 사용하여 특정 DOM 노드를 관리하세요.</Trans>

In this example, `findDOMNode` is no longer used. Instead, `inputRef = createRef(null)` is defined as an instance field on the class. To read the DOM node from it, you can use `this.inputRef.current`. To attach it to the JSX, you render `<input ref={this.inputRef} />`. This connects the code using the DOM node to its JSX:
<Trans>이 예제에서는 `findDOMNode`가 더 이상 사용되지 않습니다. 대신 `inputRef = createRef(null)`가 클래스의 인스턴스 필드로 정의됩니다. 이 필드에서 DOM 노드를 읽으려면 `this.inputRef.current`를 사용할 수 있습니다. 이를 JSX에 첨부하려면 `<input ref={this.inputRef} />`. DOM 노드를 사용하여 코드를 JSX에 연결했습니다:</Trans>

<Sandpack>

```js App.js
import { useState } from 'react';
import AutoselectingInput from './AutoselectingInput.js';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        Show example
      </button>
      <hr />
      {show && <AutoselectingInput />}
    </>
  );
}
```

```js AutoselectingInput.js active
import { createRef, Component } from 'react';

class AutoselectingInput extends Component {
  inputRef = createRef(null);

  componentDidMount() {
    const input = this.inputRef.current;
    input.select()
  }

  render() {
    return (
      <input ref={this.inputRef} defaultValue="Hello" />
    );
  }
}

export default AutoselectingInput;
```

</Sandpack>

In modern React without class components, the equivalent code would call [`useRef`](/reference/react/useRef) instead:
<Trans>클래스 컴포넌트가 없는 최신 React에서는 동등한 코드가 대신 [`useRef`](/reference/react/useRef)를 호출합니다:</Trans>

<Sandpack>

```js App.js
import { useState } from 'react';
import AutoselectingInput from './AutoselectingInput.js';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        Show example
      </button>
      <hr />
      {show && <AutoselectingInput />}
    </>
  );
}
```

```js AutoselectingInput.js active
import { useRef, useEffect } from 'react';

export default function AutoselectingInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    input.select();
  }, []);

  return <input ref={inputRef} defaultValue="Hello" />
}
```

</Sandpack>

[Read more about manipulating the DOM with Refs.](/learn/manipulating-the-dom-with-refs)
<Trans>[ref로 DOM을 조작하기에서 자세히 알아보세요.](/learn/manipulating-the-dom-with-refs)</Trans>

---

### Reading a child component's DOM node from a forwarded ref<Trans>전달된 ref에서 자식 컴포넌트의 DOM 노드 읽기</Trans> {/*reading-a-child-components-dom-node-from-a-forwarded-ref*/}

In this example, `findDOMNode(this)` finds a DOM node that belongs to another component. The `AutoselectingInput` renders `MyInput`, which is your own component that renders a browser `<input>`.
<Trans>이 예제에서 `findDOMNode(this)`는 다른 컴포넌트에 속하는 DOM 노드를 찾습니다. `AutoselectingInput`은 브라우저 `<input>`을 렌더링하는 자체 컴포넌트인 `MyInput`을 렌더링합니다.</Trans>

<Sandpack>

```js App.js
import { useState } from 'react';
import AutoselectingInput from './AutoselectingInput.js';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        Show example
      </button>
      <hr />
      {show && <AutoselectingInput />}
    </>
  );
}
```

```js AutoselectingInput.js active
import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import MyInput from './MyInput.js';

class AutoselectingInput extends Component {
  componentDidMount() {
    const input = findDOMNode(this);
    input.select()
  }
  render() {
    return <MyInput />;
  }
}

export default AutoselectingInput;
```

```js MyInput.js
export default function MyInput() {
  return <input defaultValue="Hello" />;
}
```

</Sandpack>

Notice that calling `findDOMNode(this)` inside `AutoselectingInput` still gives you the DOM `<input>`--even though the JSX for this `<input>` is hidden inside the `MyInput` component. This seems convenient for the above example, but it leads to fragile code. Imagine that you wanted to edit `MyInput` later and add a wrapper `<div>` around it. This would break the code of `AutoselectingInput` (which expects to find an `<input>`).
<Trans>이 `<input>`에 대한 JSX가 `MyInput` 컴포넌트 안에 숨겨져 있더라도 `AutoselectingInput` 내부에서 `findDOMNode(this)`를 호출하면 여전히 DOM `<input>`이 반환된다는 점에 유의하세요. 이것은 위의 예에서는 편리해 보이지만 취약한 코드로 이어집니다. 나중에 `MyInput`을 편집한 뒤 감싸는 `<div>`를 추가하고 싶다고 상상해 보십시오. 이렇게 하면 `AutoselectingInput`(`<input>` DOM 노드를 찾을 것으로 예상됨)의 코드가 중단됩니다.</Trans>

To replace `findDOMNode` in this example, the two components need to coordinate:
<Trans>이 예제에서 `findDOMNode`를 대체하려면 두 컴포넌트를 조정해야 합니다:</Trans>

1. `AutoSelectingInput` should declare a ref, like [in the earlier example](#reading-components-own-dom-node-from-a-ref), and pass it to `<MyInput>`.
<Trans outdent>앞의 예제에서와 같이 `AutoSelectingInput`은 ref를 선언하고 이를 `<MyInput>`에 전달해야 합니다.</Trans>
2. `MyInput` should be declared with [`forwardRef`](/reference/react/forwardRef) to take that ref and forward it down to the `<input>` node.
<Trans outdent>`MyInput`은 전달받은 ref를 읽어 `<input>`노드로 전달하기 위해 `forwarRef`와 함께 선언해야 합니다.</Trans>

This version does that, so it no longer needs `findDOMNode`:
<Trans>이 버전은 이를 수행하므로 더 이상 `findDOMNode`가 필요하지 않습니다:</Trans>

<Sandpack>

```js App.js
import { useState } from 'react';
import AutoselectingInput from './AutoselectingInput.js';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        Show example
      </button>
      <hr />
      {show && <AutoselectingInput />}
    </>
  );
}
```

```js AutoselectingInput.js active
import { createRef, Component } from 'react';
import MyInput from './MyInput.js';

class AutoselectingInput extends Component {
  inputRef = createRef(null);

  componentDidMount() {
    const input = this.inputRef.current;
    input.select()
  }

  render() {
    return (
      <MyInput ref={this.inputRef} />
    );
  }
}

export default AutoselectingInput;
```

```js MyInput.js
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  return <input ref={ref} defaultValue="Hello" />;
});

export default MyInput;
```

</Sandpack>

Here is how this code would look like with function components instead of classes:
<Trans>클래스가 아닌 함수 컴포넌트를 사용하면 이 코드가 어떻게 보일까요?</Trans>

<Sandpack>

```js App.js
import { useState } from 'react';
import AutoselectingInput from './AutoselectingInput.js';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        Show example
      </button>
      <hr />
      {show && <AutoselectingInput />}
    </>
  );
}
```

```js AutoselectingInput.js active
import { useRef, useEffect } from 'react';
import MyInput from './MyInput.js';

export default function AutoselectingInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    input.select();
  }, []);

  return <MyInput ref={inputRef} defaultValue="Hello" />
}
```

```js MyInput.js
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  return <input ref={ref} defaultValue="Hello" />;
});

export default MyInput;
```

</Sandpack>

---

### Adding a wrapper `<div>` element<Trans>감싸는 `<div>` 추가하기</Trans> {/*adding-a-wrapper-div-element*/}

Sometimes a component needs to know the position and size of its children. This makes it tempting to find the children with `findDOMNode(this)`, and then use DOM methods like [`getBoundingClientRect`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) for measurements.<Trans>컴포넌트는 자식의 위치와 크기를 알아야 하는 경우가 있습니다. 이 때문에 `findDOMNode(this)`로 자식을 찾은 다음 `getBoundingClientRect`와 같은 DOM 메서드를 사용해 측정하고 싶은 유혹을 느끼게 됩니다.</Trans>

There is currently no direct equivalent for this use case, which is why `findDOMNode` is deprecated but is not yet removed completely from React. In the meantime, you can try rendering a wrapper `<div>` node around the content as a workaround, and getting a ref to that node. However, extra wrappers can break styling.
<Trans>현재 이 사용 사례에 직접적으로 상응하는 것이 없기 때문에 `findDOMNode`는 더 이상 사용되지 않아도 아직 React에서 완전히 제거되지는 않았습니다. 그동안 해결 방법으로 콘텐츠 주위에 감싸는 노드인 `<div>`를 렌더링하고 해당 노드에 대한 ref를 가져올 수 있습니다. 그러나 감싸는 노드를 추가하는 경우 때때로 스타일을 손상시킬 수 있습니다.</Trans>

```js
<div ref={someRef}>
  {children}
</div>
```

This also applies to focusing and scrolling to arbitrary children.
<Trans>이는 임의의 자식 요소에 포커스를 하거나 스크롤을 하는 경우에도 적용됩니다.</Trans>