---
title: createRef
translators: [이지수, 안예지]
---

<iframe 
  style={{aspectRatio: 1.7778, width: '100%'}} 
  src="https://www.youtube.com/embed/playlist?list=PLjQV3hketAJkh6BEl0n4PDS_2fBd0cS9v&index=72&start=1098"
  title="YouTube video player" 
  frameBorder="0" 
/>

<Pitfall>

`createRef` is mostly used for [class components.](/reference/react/Component) Function components typically rely on [`useRef`](/reference/react/useRef) instead.
<Trans>`createRef`는 주로 [클래스 컴포넌트](/reference/react/Component)에 사용합니다. 함수형 컴포넌트는 일반적으로 [`useRef`](/reference/react/useRef)에 의존합니다.</Trans>

</Pitfall>

<Intro>

`createRef` creates a [ref](/learn/referencing-values-with-refs) object which can contain arbitrary value.
<Trans>`createRef`는 일반적으로 임의의 값을 포함할 수 있는 [ref](/learn/referencing-values-with-refs) 객체를 만듭니다.</Trans>

```js
class MyInput extends Component {
  inputRef = createRef();
  // ...
}
```

</Intro>

<InlineToc />

---

## Reference<Trans>참조</Trans> {/*reference*/}

### `createRef()` {/*createref*/}

Call `createRef` to declare a [ref](/learn/referencing-values-with-refs) inside a [class component.](/reference/react/Component)
<Trans>[클래스 컴포넌트](/reference/react/Component)내에서 `createRef` 를 호출하면 [ref](/learn/referencing-values-with-refs)를 선언합니다.</Trans>

```js
import { createRef, Component } from 'react';

class MyComponent extends Component {
  intervalRef = createRef();
  inputRef = createRef();
  // ...
```

[See more examples below.](#usage)
<Trans>[아래에서 더 많은 예시를 확인하세요.](#usage)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*parameters*/}

`createRef` takes no parameters.
<Trans>createRef 는 매개변수를 받지 않습니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*returns*/}

`createRef` returns an object with a single property:
<Trans>`createRef`는 단일 속성을 가진 객체를 반환합니다:</Trans>

* `current`: Initially, it's set to the `null`. You can later set it to something else. If you pass the ref object to React as a `ref` attribute to a JSX node, React will set its `current` property.
<Trans outdent>`current`: 처음에는 `null`로 설정되어있습니다. 나중에 다른 것으로 설정할 수 있습니다. `ref`객체를 JSX노드의 속성으로 React에 전달하면 React가 해당 `current` 속성을 설정합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*caveats*/}

* `createRef` always returns a *different* object. It's equivalent to writing `{ current: null }` yourself.
<Trans>`createRef`는 항상 *다른* 객체를 반환합니다. `{ current: null }`이라고 직접 작성하는 것과 같습니다.</Trans>

* In a function component, you probably want [`useRef`](/reference/react/useRef) instead which always returns the same object.
<Trans>함수형 컴포넌트에서는 `createRef` 대신 항상 동일한 객체를 반환하는 [`useRef`](/reference/react/useRef)를 쓰세요.</Trans>

* `const ref = useRef()` is equivalent to `const [ref, _] = useState(() => createRef(null))`.
<Trans>`const ref = useRef()`는 `const [ref, _] = useState(() => createRef(null))`와 동등합니다.</Trans>

---

## Usage<Trans>사용법</Trans> {/*usage*/}

### Declaring a ref in a class component<Trans>클래스 컴포넌트에서 ref 선언하기</Trans> {/*declaring-a-ref-in-a-class-component*/}

To declare a ref inside a [class component,](/reference/react/Component) call `createRef` and assign its result to a class field:
<Trans>[클래스 컴포넌트](/reference/react/Component)내에서 ref를 선언하려면 `createRef`를 호출하고 해당 결과를 클래스 필드에 할당하세요:</Trans>

```js {4}
import { Component, createRef } from 'react';

class Form extends Component {
  inputRef = createRef();

  // ...
}
```

If you now pass `ref={this.inputRef}` to an `<input>` in your JSX, React will populate `this.inputRef.current` with the input DOM node. For example, here is how you make a button that focuses the input:
<Trans>이제 JSX에서 `ref={this.inputRef}`을 `<input>`에 전달하면 React가 `this.inputRef.current`를 입력 DOM 노드로 채웁니다. 예를 들어, 입력에 초점을 맞추는 버튼을 만드는 방법은 다음과 같습니다.</Trans>

<Sandpack>

```js
import { Component, createRef } from 'react';

export default class Form extends Component {
  inputRef = createRef();

  handleClick = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <>
        <input ref={this.inputRef} />
        <button onClick={this.handleClick}>
          Focus the input
        </button>
      </>
    );
  }
}
```

</Sandpack>

<Pitfall>

`createRef` is mostly used for [class components.](/reference/react/Component) Function components typically rely on [`useRef`](/reference/react/useRef) instead.
<Trans>`createRef`는 주로 [클래스 컴포넌트](/reference/react/Component)에 사용됩니다. 함수형 컴포넌트는 일반적으로 [`useRef`](/reference/react/useRef) 에 의존합니다.</Trans>

</Pitfall>

---

## Alternatives<Trans>대안</Trans> {/*alternatives*/}

### Migrating from a class with `createRef` to a function with `useRef`<Trans>useRef 가 있는 클래스에서 useRef가 있는 함수로 마이그레이션하기</Trans> {/*migrating-from-a-class-with-createref-to-a-function-with-useref*/}

We recommend using function components instead of [class components](/reference/react/Component) in new code. If you have some existing class components using `createRef`, here is how you can convert them. This is the original code:
<Trans>새 코드에서는 [클래스 컴포넌트](/reference/react/Component) 대신 함수형 컴포넌트를 사용하는 것이 좋습니다. `createRef`를 사용하는 기존 클래스 컴포넌트가 있는 경우 이를 변환할 수 있는 방법은 다음과 같습니다. 아래는 원본 코드입니다.</Trans>

<Sandpack>

```js
import { Component, createRef } from 'react';

export default class Form extends Component {
  inputRef = createRef();

  handleClick = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <>
        <input ref={this.inputRef} />
        <button onClick={this.handleClick}>
          Focus the input
        </button>
      </>
    );
  }
}
```

</Sandpack>

When you [convert this component from a class to a function,](/reference/react/Component#alternatives) replace calls to `createRef` with calls to [`useRef`:](/reference/react/useRef)
<Trans>[이 컴포넌트를 클래스에서 함수로 변환할 때](/reference/react/Component#alternatives), `createRef`에 대한 호출을 [`useRef`](/reference/react/useRef)에 대한 호출로 바꿉니다:</Trans>

<Sandpack>

```js
import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
```

</Sandpack>
