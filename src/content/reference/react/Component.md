---
title: Component
translators: [이지수, 안예지, 고석영]
---

<Pitfall>

We recommend defining components as functions instead of classes. [See how to migrate.](#alternatives)
<Trans>컴포넌트를 클래스 대신 함수로 정의하는 것이 좋습니다. [마이그레이션 방법을 확인하세요.](#alternatives)</Trans>

</Pitfall>

<Intro>

`Component` is the base class for the React components defined as [JavaScript classes.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) Class components are still supported by React, but we don't recommend using them in new code.
<Trans>`Component`는 [JavaScript classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)로 정의된 React 컴포넌트의 기본 클래스입니다. 클래스 컴포넌트는 여전히 React에서 지원되지만 새 코드에서는 사용하지 않는 것이 좋습니다.</Trans>

```js
class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

</Intro>

<InlineToc />

---

## Reference<Trans>참조</Trans> {/*reference*/}

### `Component` {/*component*/}

To define a React component as a class, extend the built-in `Component` class and define a [`render` method:](#render)
<Trans>React 컴포넌트를 클래스로 정의하려면 빌트인 `Component` 클래스를 확장하고 [`render` 메서드](#render)를 정의합니다.</Trans>

```js
import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

Only the `render` method is required, other methods are optional.
<Trans>해당 `render` 메서드만 필수이며, 그 외 방법들은 선택사항입니다.</Trans>

[See more examples below.](#usage)
<Trans>[아래에서 더 많은 예시를 확인하세요.](#usage)</Trans>

---

### `context` {/*context*/}

The [context](/learn/passing-data-deeply-with-context) of a class component is available as `this.context`. It is only available if you specify *which* context you want to receive using [`static contextType`](#static-contexttype) (modern) or [`static contextTypes`](#static-contexttypes) (deprecated).
<Trans>클래스 컴포넌트의 [컨텍스트](/learn/passing-data-deeply-with-context)는 `this.context` 로 사용가능합니다. [`static contextType`](#static-contexttype)(최신) 또는 [`static contextTypes`](#static-contexttypes)(지원 중단)을 사용하여 수신하려는 컨텍스트를 지정하는 경우에만 사용할 수 있습니다 . </Trans>

A class component can only read one context at a time.
<Trans>클래스 컴포넌트는 한 번에 하나의 컨텍스트만 읽을 수 있습니다.</Trans>

```js {2,5}
class Button extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {this.props.children}
      </button>
    );
  }
}

```

<Note>

Reading `this.context` in class components is equivalent to [`useContext`](/reference/react/useContext) in function components.
<Trans>클래스 컴포넌트에서 `this.context`를 읽는 것은 함수 컴포넌트에서 [`useContext`](/reference/react/useContext)를 읽는 것과 동일합니다.</Trans>

[See how to migrate.](#migrating-a-component-with-context-from-a-class-to-a-function)
<Trans>[마이그레이션 방법을 참조하십시오.](#migrating-a-component-with-context-from-a-class-to-a-function)</Trans>

</Note>

---

### `props` {/*props*/}

The props passed to a class component are available as `this.props`.
<Trans>클래스 컴포넌트에 전달된 props는 `this.props`로 사용합니다.</Trans>

```js {3}
class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

<Greeting name="Taylor" />
```

<Note>

Reading `this.props` in class components is equivalent to [declaring props](/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component) in function components.
<Trans>클래스 컴포넌트에서 `this.props`읽는 것은 함수형 컴포넌트에서 [props를 선언](/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component)하는 것과 같습니다.</Trans>

[See how to migrate.](#migrating-a-simple-component-from-a-class-to-a-function)
<Trans>[마이그레이션 방법을 참조하십시오.](#migrating-a-simple-component-from-a-class-to-a-function)</Trans>

</Note>

---

### `refs` {/*refs*/}

<Deprecated>

This API will be removed in a future major version of React. [Use `createRef` instead.](/reference/react/createRef)
<Trans>이 API는 향후 React의 주요 버전에서 제거될 예정입니다. [대신 `createRef`를 사용하세요.](/reference/react/createRef)</Trans>

</Deprecated>

Lets you access [legacy string refs](https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs) for this component.
<Trans>이 컴포넌트에 대한 [legacy 문자열 refs](https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs)에 접근할 수 있습니다.</Trans>

---

### `state` {/*state*/}

The state of a class component is available as `this.state`. The `state` field must be an object. Do not mutate the state directly. If you wish to change the state, call `setState` with the new state.
<Trans>클래스 컴포넌트의 state는 `this.state`로 사용할 수 있습니다. state 필드는 객체여야 합니다. `state`를 직접 변경하지 마세요. state를 변경하려면 새로 `setState`를 호출하세요.</Trans>

```js {2-4,7-9,18}
class Counter extends Component {
  state = {
    age: 42,
  };

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 1 
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleAgeChange}>
        Increment age
        </button>
        <p>You are {this.state.age}.</p>
      </>
    );
  }
}
```

<Note>

Defining `state` in class components is equivalent to calling [`useState`](/reference/react/useState) in function components.
<Trans>클래스 컴포넌트에서 `state`를 정의하는 것은 함수 컴포넌트에서 [`useState`](/reference/react/useState)를 호출하는 것과 동일합니다.</Trans>

[See how to migrate.](#migrating-a-component-with-state-from-a-class-to-a-function)
<Trans>[마이그레이션 방법을 참조하십시오.](#migrating-a-component-with-state-from-a-class-to-a-function)</Trans>


</Note>

---

### `constructor(props)` {/*constructor*/}

The [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) runs before your class component *mounts* (gets added to the screen). Typically, a constructor is only used for two purposes in React. It lets you declare state and [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) your class methods to the class instance:
<Trans>[생성자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/constructor)는 클래스 컴포넌트가 마운트되기 전에 실행됩니다(화면에 추가됩니다). 일반적으로 생성자는 React에서 두 가지 용도로만 사용됩니다. state를 선언하고 클래스 메서드를 클래스 인스턴스에 [바인딩](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_objects/Function/bind)할 수 있습니다.</Trans>

```js {2-6}
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // ...
  }
```

If you use modern JavaScript syntax, constructors are rarely needed. Instead, you can rewrite this code above using the [public class field syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) which is supported both by modern browsers and tools like [Babel:](https://babeljs.io/)
<Trans>최신 자바스크립트 구문을 사용하는 경우 생성자가 거의 필요하지 않습니다. 대신 최신 브라우저와 [Babel](https://babeljs.io/)과 같은 도구에서 모두 지원되는 [공용 클래스 필드 구문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Public_class_fields)을 사용하여 위의 코드를 다시 작성할 수 있습니다:</Trans>

```js {2,4}
class Counter extends Component {
  state = { counter: 0 };

  handleClick = () => {
    // ...
  }
```

A constructor should not contain any side effects or subscriptions.
<Trans>생성자에는 사이드 이펙트나 구독이 포함되어서는 안 됩니다.</Trans>

#### Parameters<Trans>매개변수</Trans> {/*constructor-parameters*/}

* `props`: The component's initial props.
<Trans>`props` : 컴포넌트의 초기 props입니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*constructor-returns*/}

`constructor` should not return anything.
<Trans>`생성자`는 아무 것도 반환하지 않아야 합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*constructor-caveats*/}

* Do not run any side effects or subscriptions in the constructor. Instead, use [`componentDidMount`](#componentdidmount) for that.
<Trans>생성자에서 사이드 이펙트나 구독을 실행하지 마세요. 대신 [`componentDidMount`](#componentdidmount) 를 사용하세요</Trans>

* Inside a constructor, you need to call `super(props)` before any other statement. If you don't do that, `this.props` will be `undefined` while the constructor runs, which can be confusing and cause bugs.
<Trans>생성자 내부에서는 다른 문보다 먼저 `super(props)`를 호출해야 합니다. 그렇게 하지 않으면 생성자가 실행되는 동안 `this.props`가 `undefined` 가 되어 혼란스럽게 하고 버그를 야기할 수 있습니다.</Trans>

* Constructor is the only place where you can assign [`this.state`](#state) directly. In all other methods, you need to use [`this.setState()`](#setstate) instead. Do not call `setState` in the constructor.
<Trans>[`this.state`](#state)를 직접 할당할 수 있는 곳은 생성자뿐입니다. 다른 모든 메서드에서는 [`this.setState()`](#setstate)를 대신 사용해야 합니다. 생성자 내부에서 `setState`를 호출하지 마세요.</Trans>

* When you use [server rendering,](/reference/react-dom/server) the constructor will run on the server too, followed by the [`render`](#render) method. However, lifecycle methods like `componentDidMount` or `componentWillUnmount` will not run on the server.
<Trans>[서버 렌더링](/reference/react-dom/server)을 사용하는 경우 생성자도 서버에서 실행되고 [`render`](#render) 메서드가 이어서 실행됩니다. 그러나 `componentDidMount` 또는 `componentWillUnmount` 와 같은 생명주기 메서드는 서버에서 실행되지 않습니다.</Trans>

* When [Strict Mode](/reference/react/StrictMode) is on, React will call `constructor` twice in development and then throw away one of the instances. This helps you notice the accidental side effects that need to be moved out of the `constructor`.
<Trans>[Strict Mode](/reference/react/StrictMode)가 켜져 있으면 React는 개발 과정에서 `생성자`를 두 번 호출한 다음 인스턴스 중 하나를 버립니다. 이렇게 하면 `생성자`에서 제거해야 하는 실수로 발생한 사이드 이펙트을 발견하는 데 도움이 됩니다.</Trans>

<Note>

There is no exact equivalent for `constructor` in function components. To declare state in a function component, call [`useState`.](/reference/react/useState) To avoid recalculating the initial state, [pass a function to `useState`.](/reference/react/useState#avoiding-recreating-the-initial-state)
<Trans>함수 컴포넌트에서 `생성자`와 정확히 일치하는 것은 없습니다. 함수 컴포넌트에서 state를 선언하려면 [`useState`.](/reference/react/useState)를 호출하세요. 초기 state를 다시 계산하지 않으려면 [함수를 `useState`에 전달](/reference/react/useState#avoiding-recreating-the-initial-state)하세요.</Trans>

</Note>

---

### `componentDidCatch(error, info)` {/*componentdidcatch*/}

If you define `componentDidCatch`, React will call it when some child component (including distant children) throws an error during rendering. This lets you log that error to an error reporting service in production.
<Trans>`componentDidCatch`를 정의하면 렌더링 도중 일부 자식 컴포넌트(멀리 떨어진 자식 포함)가 오류를 발생시킬 때 React가 이를 호출합니다. 이를 통해 상용 환경의 오류 보고 서비스에 해당 오류를 기록할 수 있습니다.</Trans>

Typically, it is used together with [`static getDerivedStateFromError`](#static-getderivedstatefromerror) which lets you update state in response to an error and display an error message to the user. A component with these methods is called an *error boundary.*
<Trans>일반적으로 이 메서드는 에러에 대한 응답으로 state를 업데이트하고 사용자에게 에러 메시지를 표시할 수 있는 [`static getDerivedStateFromError`](#static-getderivedstatefromerror)와 함께 사용됩니다. 이러한 메서드가 있는 컴포넌트를 *error boundary*라고 합니다.</Trans>

[See an example.](#catching-rendering-errors-with-an-error-boundary)
<Trans>[예시를 확인하세요.](#catching-rendering-errors-with-an-error-boundary)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*componentdidcatch-parameters*/}

* `error`: The error that was thrown. In practice, it will usually be an instance of [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) but this is not guaranteed because JavaScript allows to [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) any value, including strings or even `null`.
<Trans>`error`: 발생한 에러입니다. 실제로는 일반적으로 [`Error`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error)의 인스턴스가 되지만 자바스크립트에서는 문자열이나 `null`을 포함한 모든 값을 [`throw`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/throw) 할 수 있으므로, 보장되지는 않습니다.</Trans>

* `info`: An object containing additional information about the error. Its `componentStack` field contains a stack trace with the component that threw, as well as the names and source locations of all its parent components. In production, the component names will be minified. If you set up production error reporting, you can decode the component stack using sourcemaps the same way as you would do for regular JavaScript error stacks.
<Trans>`info`: 오류에 대한 추가 정보가 포함된 객체입니다. `componentStack` 필드에는 에러를 발생시킨 컴포넌트의 스택 추적과 모든 상위 컴포넌트의 이름 및 소스 위치가 포함됩니다. 상용 환경에서는 컴포넌트 이름이 최소화됩니다. 상용 환경 오류 보고를 설정한 경우 일반 JavaScript 오류 스택과 동일한 방식으로 소스 맵을 사용하여 컴포넌트 스택을 디코딩할 수 있습니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*componentdidcatch-returns*/}

`componentDidCatch` should not return anything.
<Trans>`componentDidCatch`는 아무것도 반환하지 않아야 합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*componentdidcatch-caveats*/}

* In the past, it was common to call `setState` inside `componentDidCatch` in order to update the UI and display the fallback error message. This is deprecated in favor of defining [`static getDerivedStateFromError`.](#static-getderivedstatefromerror)
<Trans>과거에는 UI를 업데이트하고 폴백 오류 메시지를 표시하기 위해 `componentDidCatch` 내부에서 `setState`를 호출하는 것이 일반적이었습니다. [`static getDerivedStateFromError`](#static-getderivedstatefromerror)를 정의하는 것을 권장하기에 이 방법은 지원 중단되었습니다.</Trans>

* Production and development builds of React slightly differ in the way `componentDidCatch` handles errors. In development, the errors will bubble up to `window`, which means that any `window.onerror` or `window.addEventListener('error', callback)` will intercept the errors that have been caught by `componentDidCatch`. In production, instead, the errors will not bubble up, which means any ancestor error handler will only receive errors not explicitly caught by `componentDidCatch`.
<Trans>React의 상용 환경과 개발 환경은 `componentDidCatch`가 에러를 처리하는 방식이 약간 다릅니다. 개발 환경에서는 에러가 `window`까지 버블링되므로, `window.onerror` 또는 `window.addEventListener('error', callback)`가 `componentDidCatch`가 포착한 에러를 가로채게 됩니다. 상용 환경에서는 대신 에러가 버블업되지 않으므로 모든 조상 에러 핸들러는 `componentDidCatch`가 명시적으로 포착하지 않은 에러만 수신합니다.</Trans>

<Note>

There is no direct equivalent for `componentDidCatch` in function components yet. If you'd like to avoid creating class components, write a single `ErrorBoundary` component like above and use it throughout your app. Alternatively, you can use the [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary) package which does that for you.
<Trans>함수 컴포넌트에는 아직 `componentDidCatch`에 대한 직접적인 대응이 없습니다. 클래스 컴포넌트를 만들지 않으려면 위와 같이 하나의 `ErrorBoundary` 컴포넌트를 작성하여 앱 전체에서 사용하세요. 또는 이 작업을 대신 해주는 [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary) 패키지를 사용할 수도 있습니다.</Trans>

</Note>

---

### `componentDidMount()` {/*componentdidmount*/}

If you define the `componentDidMount` method, React will call it when your component is added *(mounted)* to the screen. This is a common place to start data fetching, set up subscriptions, or manipulate the DOM nodes.
<Trans>`componentDidMount` 메서드를 정의하면 컴포넌트가 화면에 추가(마운트)될 때 React가 이를 호출합니다. 데이터 불러오기를 시작하거나 구독을 설정하거나 DOM 노드를 조작하는 일반적인 장소입니다.</Trans>

If you implement `componentDidMount`, you usually need to implement other lifecycle methods to avoid bugs. For example, if `componentDidMount` reads some state or props, you also have to implement [`componentDidUpdate`](#componentdidupdate) to handle their changes, and [`componentWillUnmount`](#componentwillunmount) to clean up whatever `componentDidMount` was doing.
<Trans>`componentDidMount`를 구현하는 경우 일반적으로 버그를 피하기 위해 다른 생명주기 메서드를 구현해야 합니다. 예를 들어, `componentDidMount`가 일부 state나 props를 읽는 경우, 해당 변경 사항을 처리하기 위해 [`componentDidUpdate`](#componentdidupdate)를 구현하고 `componentDidMount` 가 수행하던 작업을 클린업 하기 위해 [`componentWillUnmount`](#componentwillunmount)도 구현해야 합니다.</Trans>

```js {6-8}
class ChatRoom extends Component {
  state = {
    serverUrl: 'https://localhost:1234'
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  // ...
}
```

[See more examples.](#adding-lifecycle-methods-to-a-class-component)
<Trans>[더 많은 예시를 확인하세요.](#adding-lifecycle-methods-to-a-class-component)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*componentdidmount-parameters*/}

`componentDidMount` does not take any parameters.
<Trans>`componentDidMount`는 어떤 매개변수도 받지 않습니다.</Trans>
#### Returns<Trans>반환값</Trans> {/*componentdidmount-returns*/}

`componentDidMount` should not return anything.
<Trans>`componentDidMount`는 아무것도 반환하지 않아야 합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*componentdidmount-caveats*/}

- When [Strict Mode](/reference/react/StrictMode) is on, in development React will call `componentDidMount`, then immediately call [`componentWillUnmount`,](#componentwillunmount) and then call `componentDidMount` again. This helps you notice if you forgot to implement `componentWillUnmount` or if its logic doesn't fully "mirror" what `componentDidMount` does.
<Trans>[Strict Mode](/reference/react/StrictMode)가 켜져 있으면 React는 개발 환경에서 `componentDidMount`를 호출한 다음 즉시 [`componentWillUnmount`](#componentwillunmount)를 호출하고 `componentDidMount`를 다시 호출합니다. 이렇게 하면 `componentWillUnmount`를 구현하는 것을 잊어버렸거나 그 로직이 `componentDidMount`의 동작을 완전히 "미러링"하지 않는지 확인할 수 있습니다.</Trans>

- Although you may call [`setState`](#setstate) immediately in `componentDidMount`, it's best to avoid that when you can. It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the [`render`](#render) will be called twice in this case, the user won't see the intermediate state. Use this pattern with caution because it often causes performance issues. In most cases, you should be able to assign the initial state in the [`constructor`](#constructor) instead. It can, however, be necessary for cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position.
<Trans>`componentDidMount`에서 [`setState`](#setstate)를 즉시 호출할 수도 있지만 가능하면 피하는 것이 가장 좋습니다. 추가 렌더링이 trigger되지만 브라우저가 화면을 업데이트하기 전에 발생합니다. 이렇게 하면 이 경우 [`render`](#render)가 두 번 호출되더라도 사용자에게 중간 state가 표시되지 않습니다. 이 패턴은 종종 성능 문제를 일으키므로 주의해서 사용하세요. 대부분의 경우 [생성자](#constructor)에서 초기 state를 대신 할당할 수 있어야 합니다. 그러나 모달이나 툴팁과 같이 크기나 위치에 따라 달라지는 것을 렌더링하기 전에 DOM 노드를 측정해야 하는 경우에는 필요할 수 있습니다.</Trans>

<Note>

For many use cases, defining `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` together in class components is equivalent to calling [`useEffect`](/reference/react/useEffect) in function components. In the rare cases where it's important for the code to run before browser paint, [`useLayoutEffect`](/reference/react/useLayoutEffect) is a closer match.
<Trans>많은 사용 사례에서 컴포넌트 클래스 컴포넌트 내부에 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`를 함께 정의하는 것은 함수 컴포넌트에서 [`useEffect`](/reference/react/useEffect)를 호출하는 것과 동일합니다. 드물지만 브라우저 그리기 전에 코드를 실행하는 것이 중요한 경우에는 [`useLayoutEffect`](/reference/react/useLayoutEffect)가 더 적합합니다.</Trans>

[See how to migrate.](#migrating-a-component-with-lifecycle-methods-from-a-class-to-a-function)
<Trans>[마이그레이션 방법을 확인하세요.](#migrating-a-component-with-lifecycle-methods-from-a-class-to-a-function)</Trans>

</Note>

---

### `componentDidUpdate(prevProps, prevState, snapshot?)` {/*componentdidupdate*/}

If you define the `componentDidUpdate` method, React will call it immediately after your component has been re-rendered with updated props or state.  This method is not called for the initial render.
<Trans>`componentDidUpdate` 메서드를 정의하면 React는 컴포넌트가 업데이트된 props나 state로 다시 렌더링된 직후에 해당 메서드를 호출합니다.  이 메서드는 초기 렌더링에는 호출되지 않습니다.</Trans>

You can use it to manipulate the DOM after an update. This is also a common place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed). Typically, you'd use it together with [`componentDidMount`](#componentdidmount) and [`componentWillUnmount`:](#componentwillunmount)
<Trans>업데이트 후 DOM을 조작하는 데 사용할 수 있습니다. 또한 현재 props를 이전 props와 비교하는 네트워크 요청을 수행하는 일반적인 장소이기도 합니다(예: props가 변경되지 않은 경우 네트워크 요청이 필요하지 않을 수 있음). 일반적으로 [`componentDidMount`](#componentdidmount) 및 [`componentWillUnmount`:](#componentwillunmount)와 함께 사용합니다:</Trans>

```js {10-18}
class ChatRoom extends Component {
  state = {
    serverUrl: 'https://localhost:1234'
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  // ...
}
```

[See more examples.](#adding-lifecycle-methods-to-a-class-component)
<Trans>[더 많은 예시를 확인하세요.](#adding-lifecycle-methods-to-a-class-component)</Trans>


#### Parameters<Trans>매개변수</Trans> {/*componentdidupdate-parameters*/}

* `prevProps`: Props before the update. Compare `prevProps` to [`this.props`](#props) to determine what changed.
<Trans>`prevProps`: 업데이트 전 props. `prevProps`와 [`this.props`](#props)를 비교하여 변경된 내용을 확인합니다.</Trans>

* `prevState`: State before the update. Compare `prevState` to [`this.state`](#state) to determine what changed.
<Trans>`prevState`: 업데이트 전 state. `prevState`를 [`this.state`](#state)와 비교하여 변경된 내용을 확인합니다.</Trans>

* `snapshot`: If you implemented [`getSnapshotBeforeUpdate`](#getsnapshotbeforeupdate), `snapshot` will contain the value you returned from that method. Otherwise, it will be `undefined`.
<Trans>`snapshot`: [`getSnapshotBeforeUpdate`](#getsnapshotbeforeupdate)를 구현한 경우, `스냅샷`에는 해당 메서드에서 반환한 값이 포함됩니다. 그렇지 않으면 `undefined`가 될 것입니다.</Trans>
#### Returns<Trans>반환값</Trans> {/*componentdidupdate-returns*/}

`componentDidUpdate` should not return anything.
<Trans>`componentDidUpdate`는 아무것도 반환하지 않아야 합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*componentdidupdate-caveats*/}

- `componentDidUpdate` will not get called if [`shouldComponentUpdate`](#shouldcomponentupdate) is defined and returns `false`.
<Trans>[`shouldComponentUpdate`](#shouldcomponentupdate)가 정의되어 있으면 `componentDidUpdate`가 호출되지 않고 `false`를 반환합니다.</Trans>

- The logic inside `componentDidUpdate` should usually be wrapped in conditions comparing `this.props` with `prevProps`, and `this.state` with `prevState`. Otherwise, there's a risk of creating infinite loops.
<Trans>`componentDidUpdate` 내부의 로직은 일반적으로 `this.props`를 `prevProps`와 비교하고 `this.state`를 `prevState`와 비교하는 조건으로 감싸야 합니다. 그렇지 않으면 무한 루프가 생성될 위험이 있습니다.</Trans>

- Although you may call [`setState`](#setstate) immediately in `componentDidUpdate`, it's best to avoid that when you can. It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the [`render`](#render) will be called twice in this case, the user won't see the intermediate state. This pattern often causes performance issues, but it may be necessary for rare cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position.
<Trans>`componentDidUpdate`에서 [`setState`](#setstate)를 바로 호출할 수도 있지만, 가능하면 피하는 것이 좋습니다. 이러한 경우 추가 렌더링을 촉발될 수 있지만, 브라우저가 화면을 업데이트하기 전에 발생합니다. 이 경우 [`render`](#render)가 두 번 호출되더라도 사용자에게 중간 state가 표시되지 않습니다. 이 패턴은 종종 성능 문제를 일으키지만 모달이나 툴팁처럼 드물게 크기나 위치에 따라 달라지는 것을 렌더링하기 전에 DOM 노드를 측정해야 하는 경우에 필요할 수 있습니다.</Trans>

<Note>

For many use cases, defining `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` together in class components is equivalent to calling [`useEffect`](/reference/react/useEffect) in function components. In the rare cases where it's important for the code to run before browser paint, [`useLayoutEffect`](/reference/react/useLayoutEffect) is a closer match.
<Trans>많은 사용 사례에서 컴포넌트 클래스 컴포넌트 내부에 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`를 함께 정의하는 것은 함수 컴포넌트에서 [`useEffect`](/reference/react/useEffect)를 호출하는 것과 동일합니다. 드물지만 브라우저를 그리기 전에 코드를 실행하는 것이 중요한 경우에는 [`useLayoutEffect`](/reference/react/useLayoutEffect)가 더 적합합니다.</Trans>

[See how to migrate.](#migrating-a-component-with-lifecycle-methods-from-a-class-to-a-function)
<Trans>[마이그레이션 방법을 참조하세요.](#migrating-a-component-with-lifecycle-methods-from-a-class-to-a-function)</Trans>

</Note>
---

### `componentWillMount()` {/*componentwillmount*/}

<Deprecated>

This API has been renamed from `componentWillMount` to [`UNSAFE_componentWillMount`.](#unsafe_componentwillmount) The old name has been deprecated. In a future major version of React, only the new name will work.
<Trans>이 API의 이름이 `componentWillMount`에서 [`UNSAFE_componentWillMount`.](#unsafe_componentwillmount)로 변경되었습니다. 이전 이름은 지원 중단 되었습니다. 향후 React의 주요 버전에서는 새로운 이름만 작동합니다.</Trans>

Run the [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) to automatically update your components.
<Trans>자동으로 컴포넌트를 업데이트하려면 [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles)를 실행하세요.</Trans>

</Deprecated>

---

### `componentWillReceiveProps(nextProps)` {/*componentwillreceiveprops*/}

<Deprecated>

This API has been renamed from `componentWillReceiveProps` to [`UNSAFE_componentWillReceiveProps`.](#unsafe_componentwillreceiveprops) The old name has been deprecated. In a future major version of React, only the new name will work.
<Trans>이 API의 이름이 `componentWillReceiveProps`에서 [`UNSAFE_componentWillReceiveProps`.](#unsafe_componentwillreceiveprops)로 변경되었습니다. 이전 이름은 지원 중단 되었습니다. 향후 React의 주요 버전에서는 새로운 이름만 작동합니다.</Trans>

Run the [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) to automatically update your components.
<Trans>자동으로 컴포넌트를 업데이트하려면 [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles)를 실행하세요.</Trans>

</Deprecated>

---

### `componentWillUpdate(nextProps, nextState)` {/*componentwillupdate*/}

<Deprecated>

This API has been renamed from `componentWillUpdate` to [`UNSAFE_componentWillUpdate`.](#unsafe_componentwillupdate) The old name has been deprecated. In a future major version of React, only the new name will work.
<Trans>이 API의 이름이 `componentWillUpdate`에서 [`UNSAFE_componentWillUpdate`.](#unsafe_componentwillupdate)로 변경되었습니다. 이전 이름은 지원 중단 되었습니다. 향후 React의 주요 버전에서는 새로운 이름만 작동합니다.</Trans>

Run the [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) to automatically update your components.
<Trans>자동으로 컴포넌트를 업데이트하려면 [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles)를 실행하세요.</Trans>

</Deprecated>

---

### `componentWillUnmount()` {/*componentwillunmount*/}

If you define the `componentWillUnmount` method, React will call it before your component is removed *(unmounted)* from the screen. This is a common place to cancel data fetching or remove subscriptions.
<Trans>`componentWillUnmount` 메서드를 정의하면 React는 컴포넌트가 화면에서 제거*(마운트 해제)*되기 전에 이 메서드를 호출합니다. 이는 데이터 불러오기를 취소하거나 구독을 제거하는 로직을 작성하는 일반적인 장소입니다.</Trans>

The logic inside `componentWillUnmount` should "mirror" the logic inside [`componentDidMount`.](#componentdidmount) For example, if `componentDidMount` sets up a subscription, `componentWillUnmount` should clean up that subscription. If the cleanup logic in your `componentWillUnmount` reads some props or state, you will usually also need to implement [`componentDidUpdate`](#componentdidupdate) to clean up resources (such as subscriptions) corresponding to the old props and state.
<Trans>`componentWillUnmount` 내부의 로직은 [`componentDidMount`.](#componentdidmount) 내부의 로직을 "미러링"해야 합니다. 예를 들어 `componentDidMount`가 구독을 셋업 하면 `componentWillUnmount`는 해당 구독을 클린업 해야 합니다. `componentWillUnmount`의 클린업 로직이 일부 props나 state를 읽는 경우, 일반적으로 이전 props나 state에 해당하는 리소스(예: 구독)를 클린업 하기 위해 [`componentDidUpdate`](#componentdidupdate)도 구현해야 합니다.</Trans>

```js {20-22}
class ChatRoom extends Component {
  state = {
    serverUrl: 'https://localhost:1234'
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  // ...
}
```

[See more examples.](#adding-lifecycle-methods-to-a-class-component)
<Trans>[더 많은 예시를 확인하세요.](#adding-lifecycle-methods-to-a-class-component)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*componentwillunmount-parameters*/}

`componentWillUnmount` does not take any parameters.
<Trans>`componentWillUnmount`는 매개변수를 받지 않습니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*componentwillunmount-returns*/}

`componentWillUnmount` should not return anything.
<Trans>`componentWillUnmount`는 아무것도 반환하지 않아야 합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*componentwillunmount-caveats*/}

- When [Strict Mode](/reference/react/StrictMode) is on, in development React will call [`componentDidMount`,](#componentdidmount) then immediately call `componentWillUnmount`, and then call `componentDidMount` again. This helps you notice if you forgot to implement `componentWillUnmount` or if its logic doesn't fully "mirror" what `componentDidMount` does.
<Trans outdent>[Strict Mode](/reference/react/StrictMode)가 켜져 있으면 React는 개발 환경에서 [`componentDidMount`](#componentdidmount)를 호출한 다음 즉시 `componentWillUnmount`를 호출하고 다시 `componentDidMount`를 호출합니다. 이렇게 하면 `componentWillUnmount`를 구현하는 것을 잊어버렸거나 그 로직이 `componentDidMount`가 하는 일을 완전히 "미러링"하지 않는지 알 수 있습니다.</Trans>

<Note>

For many use cases, defining `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` together in class components is equivalent to calling [`useEffect`](/reference/react/useEffect) in function components. In the rare cases where it's important for the code to run before browser paint, [`useLayoutEffect`](/reference/react/useLayoutEffect) is a closer match.
<Trans>많은 사용 사례에서 컴포넌트 클래스 컴포넌트 내부에 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`를 함께 정의하는 것은 함수 컴포넌트에서 [`useEffect`](/reference/react/useEffect)를 호출하는 것과 동일합니다. 드물지만 브라우저 그리기 전에 코드를 실행하는 것이 중요한 경우에는 [`useLayoutEffect`](/reference/react/useLayoutEffect)가 더 적합합니다.</Trans>

[See how to migrate.](#migrating-a-component-with-lifecycle-methods-from-a-class-to-a-function)
<Trans>[마이그레이션 방법을 확인하세요.](#migrating-a-component-with-lifecycle-methods-from-a-class-to-a-function)</Trans>

</Note>

---

### `forceUpdate(callback?)` {/*forceupdate*/}

Forces a component to re-render.
<Trans>컴포넌트를 강제로 다시 렌더링합니다.</Trans>

Usually, this is not necessary. If your component's [`render`](#render) method only reads from [`this.props`](#props), [`this.state`](#state), or [`this.context`,](#context) it will re-render automatically when you call [`setState`](#setstate) inside your component or one of its parents. However, if your component's `render` method reads directly from an external data source, you have to tell React to update the user interface when that data source changes. That's what `forceUpdate` lets you do.
<Trans>일반적으로는 필요하지 않습니다. 컴포넌트의 [`render`](#render) 메서드가 [`this.props`](#props), [`this.state`](#state) 또는 [`this.context`,](#context)에서만 읽는 경우, 컴포넌트 내부 또는 부모 중 하나에서 [`setState`](#setstate)를 호출하면 자동으로 다시 렌더링됩니다. 하지만 컴포넌트의  `render` 메서드가 외부 데이터 소스로부터 직접 읽어오는 경우, 데이터 소스가 변경될 때 사용자 인터페이스를 업데이트하도록 React에 지시해야 합니다. 이것이 바로 `forceUpdate`가 할 수 있는 일입니다.</Trans>

Try to avoid all uses of `forceUpdate` and only read from `this.props` and `this.state` in `render`.
<Trans>`forceUpdate`의 모든 사용을 피하고 `render`에서 `this.props`와 `this.state`에서만 읽도록 하세요.</Trans>

#### Parameters<Trans>매개변수</Trans> {/*forceupdate-parameters*/}

* **optional** `callback` If specified, React will call the `callback` you've provided after the update is committed.
<Trans outdent>**선택적** `callback`을 지정하면, React는 업데이트가 커밋된 후 사용자가 제공한 `callback` 을 호출합니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*forceupdate-returns*/}

`forceUpdate` does not return anything.
<Trans>`forceUpdate`는 아무 것도 반환하지 않습니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*forceupdate-caveats*/}

- If you call `forceUpdate`, React will re-render without calling [`shouldComponentUpdate`.](#shouldcomponentupdate)
<Trans outdent>`forceUpdate`를 호출하면 React는 [`shouldComponentUpdate`.](#shouldcomponentupdate)를 호출하지 않고 리렌더링합니다.</Trans>

<Note>

Reading an external data source and forcing class components to re-render in response to its changes with `forceUpdate` has been superseded by [`useSyncExternalStore`](/reference/react/useSyncExternalStore) in function components.
<Trans>외부 데이터 소스를 읽고 클래스 컴포넌트가 변경 사항에 대응하여 리렌더링하도록 강제하는 `forceUpdate`는 함수형 컴포넌트에서 [`useSyncExternalStore`](/reference/react/useSyncExternalStore)로 대체되었습니다.</Trans>

</Note>

---

### `getChildContext()` {/*getchildcontext*/}

<Deprecated>

This API will be removed in a future major version of React. [Use `Context.Provider` instead.](/reference/react/createContext#provider)
<Trans>이 API는 향후 React의 주요 버전에서 제거될 예정입니다. [대신 `Context.Provider`를 사용하세요.](/reference/react/createContext#provider)</Trans>

</Deprecated>

Lets you specify the values for the [legacy context](https://reactjs.org/docs/legacy-context.html) is provided by this component.
<Trans>이 컴포넌트가 제공하는 [legacy 컨텍스트](https://reactjs.org/docs/legacy-context.html)에 대한 값을 지정할 수 있습니다.</Trans>

---

### `getSnapshotBeforeUpdate(prevProps, prevState)` {/*getsnapshotbeforeupdate*/}

If you implement `getSnapshotBeforeUpdate`, React will call it immediately before React updates the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle method will be passed as a parameter to [`componentDidUpdate`.](#componentdidupdate)
<Trans>`getSnapshotBeforeUpdate`를 구현하면 React가 DOM을 업데이트하기 바로 전에 호출합니다. 이를 통해 컴포넌트가 잠재적으로 변경되기 전에 DOM에서 일부 정보(예: 스크롤 위치)를 캡처할 수 있습니다. 이 생명주기 메서드가 반환하는 모든 값은 [`componentDidUpdate`](#componentdidupdate)에 매개변수로 전달됩니다.</Trans>

For example, you can use it in a UI like a chat thread that needs to preserve its scroll position during updates:
<Trans>예를 들어 업데이트 중에 스크롤 위치를 유지해야 하는 채팅 스레드와 같은 UI에서 이 기능을 사용할 수 있습니다:</Trans>

```js {7-17,19}
class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // 목록에 새 항목을 추가하고 있나요?
    // Capture the scroll position so we can adjust scroll later.
    // 나중에 스크롤을 조정할 수 있도록 스크롤 위치를 캡처합니다.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // 스냅샷 값이 있으면 방금 새 항목을 추가한 것입니다.
    // Adjust scroll so these new items don't push the old ones out of view.
    // 새 항목이 기존 항목을 화면 밖으로 밀어내지 않도록 스크롤을 조정합니다.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    // (여기서 스냅샷은 getSnapshotBeforeUpdate에서 반환된 값입니다.)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}
```

In the above example, it is important to read the `scrollHeight` property directly in `getSnapshotBeforeUpdate`. It is not safe to read it in [`render`](#render), [`UNSAFE_componentWillReceiveProps`](#unsafe_componentwillreceiveprops), or [`UNSAFE_componentWillUpdate`](#unsafe_componentwillupdate) because there is a potential time gap between these methods getting called and React updating the DOM.
<Trans>위의 예시에서는 `getSnapshotBeforeUpdate`에서 직접 `scrollHeight` 속성을 읽는 것이 중요합니다. 이러한 메서드가 호출되는 시점과 React가 DOM을 업데이트하는 시점 사이에 잠재적인 시간 간격이 있기 때문에 [`render`](#render), [`UNSAFE_componentWillReceiveProps`](#unsafe_componentwillreceiveprops) 또는 [`UNSAFE_componentWillUpdate`](#unsafe_componentwillupdate)에서 읽어오는 것은 안전하지 않습니다.</Trans>

#### Parameters<Trans>매개변수</Trans> {/*getsnapshotbeforeupdate-parameters*/}

* `prevProps`: Props before the update. Compare `prevProps` to [`this.props`](#props) to determine what changed.
<Trans>업데이트 전 props. `prevProps`와 [`this.props`](#props)를 비교하여 변경된 내용을 확인합니다.</Trans>

* `prevState`: State before the update. Compare `prevState` to [`this.state`](#state) to determine what changed.
<Trans>prevState: 업데이트 전 state. `prevState`를 [`this.state`](#state)와 비교하여 변경된 내용을 확인합니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*getsnapshotbeforeupdate-returns*/}

You should return a snapshot value of any type that you'd like, or `null`. The value you returned will be passed as the third argument to [`componentDidUpdate`.](#componentdidupdate)
<Trans>원하는 유형의 스냅샷 값 또는 `null`을 반환해야 합니다. 반환한 값은 [`componentDidUpdate`](#componentdidupdate)의 세 번째 인자로 전달됩니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*getsnapshotbeforeupdate-caveats*/}

- `getSnapshotBeforeUpdate` will not get called if [`shouldComponentUpdate`](#shouldcomponentupdate) is defined and returns `false`.
<Trans outdent>[`shouldComponentUpdate`](#shouldcomponentupdate)가 정의되어 있고 `false`를 반환하는 경우 `getSnapshotBeforeUpdate`가 호출되지 않습니다.</Trans>

<Note>

At the moment, there is no equivalent to `getSnapshotBeforeUpdate` for function components. This use case is very uncommon, but if you have the need for it, for now you'll have to write a class component.
<Trans>현재로서는 함수형 컴포넌트에 대한 `getSnapshotBeforeUpdate`와 동등한 함수가 없습니다. 이 사용 사례는 매우 드물지만, 이 기능이 필요한 경우 현재로서는 클래스 컴포넌트를 작성해야 합니다.</Trans>

</Note>

---

### `render()` {/*render*/}

The `render` method is the only required method in a class component.
<Trans>`render` 메서드는 클래스 컴포넌트에서 유일하게 필요한 메서드입니다.</Trans>

The `render` method should specify what you want to appear on the screen, for example:
<Trans>예를 들어 `render` 메서드에는 화면에 표시할 내용을 지정해야 합니다:</Trans>


```js {4-6}
import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

React may call `render` at any moment, so you shouldn't assume that it runs at a particular time. Usually, the `render` method should return a piece of [JSX](/learn/writing-markup-with-jsx), but a few [other return types](#render-returns) (like strings) are supported. To calculate the returned JSX, the `render` method can read [`this.props`](#props), [`this.state`](#state), and [`this.context`](#context).
<Trans>React는 언제든 `render`를 호출할 수 있으므로 특정 시간에 실행된다고 가정해서는 안 됩니다. 일반적으로 `render` 메서드는 [JSX](/learn/writing-markup-with-jsx)를 반환해야 하지만 문자열과 같은 몇 가지 [다른 반환 유형](#render-returns)이 지원됩니다. 반환된 JSX를 계산하기 위해 렌더 메서드는 [`this.props`](#props), [`this.state`](#state), [`this.context`](#context)를 읽을 수 있습니다.</Trans>

You should write the `render` method as a pure function, meaning that it should return the same result if props, state, and context are the same. It also shouldn't contain side effects (like setting up subscriptions) or interact with the browser APIs. Side effects should happen either in event handlers or methods like [`componentDidMount`.](#componentdidmount)
<Trans>`render` 메서드는 순수 함수로 작성해야 합니다. 즉, props, state 및 context가 동일한 경우 동일한 결과를 반환해야 합니다. 또한 구독 설정과 같은 사이드 이펙트를 포함하거나 브라우저 API와 상호 작용해서는 안 됩니다. 사이드 이펙트는 이벤트 핸들러나 [`componentDidMount`.](#componentdidmount)와 같은 메서드에서 발생해야 합니다.</Trans>

#### Parameters<Trans>매개변수</Trans> {/*render-parameters*/}

* `prevProps`: Props before the update. Compare `prevProps` to [`this.props`](#props) to determine what changed.
<Trans>`prevProps`: 업데이트 전 props. `prevProps`와 [`this.props`](#props)를 비교하여 변경된 내용을 확인합니다.</Trans>

* `prevState`: State before the update. Compare `prevState` to [`this.state`](#state) to determine what changed.
<Trans>`prevState`: 업데이트 전 state. `prevState`를 [`this.state`](#state)와 비교하여 변경된 내용을 확인합니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*render-returns*/}

`render` can return any valid React node. This includes React elements such as `<div />`, strings, numbers, [portals](/reference/react-dom/createPortal), empty nodes (`null`, `undefined`, `true`, and `false`), and arrays of React nodes.
<Trans>`render`는 유효한 모든 React 노드를 반환할 수 있습니다. 여기에는 `<div />`, 문자열, 숫자, [포털](/reference/react-dom/createPortal), 빈 노드(`null`, `undefined`, `true`, `false`), React 노드 배열과 같은 React 요소가 포함됩니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*render-caveats*/}

- `render` should be written as a pure function of props, state, and context. It should not have side effects.
<Trans>`render`는 props, state, context의 순수한 함수로 작성되어야 합니다. 사이드 이펙트가 없어야 합니다.</Trans>

- `render` will not get called if [`shouldComponentUpdate`](#shouldcomponentupdate) is defined and returns `false`.
<Trans>[`shouldComponentUpdate`](#shouldcomponentupdate)가 정의되고 `false`을 반환하면 `render`가 호출되지 않습니다.</Trans>

- When [Strict Mode](/reference/react/StrictMode) is on, React will call `render` twice in development and then throw away one of the results. This helps you notice the accidental side effects that need to be moved out of the `render` method.
<Trans>[Strict Mode](/reference/react/StrictMode)가 켜져 있으면 React는 개발 환경에서 `render` 를 두 번 호출한 다음 결과 중 하나를 버립니다. 이렇게 하면 `render` 메서드에서 제거해야 하는 실수로 발생한 부작용을 알아차릴 수 있습니다.</Trans>

- There is no one-to-one correspondence between the `render` call and the subsequent `componentDidMount` or `componentDidUpdate` call. Some of the `render` call results may be discarded by React when it's beneficial.
<Trans>`render` 호출과 후속 `componentDidMount` 또는 `componentDidUpdate` 호출 사이에는 일대일 대응이 없습니다. `redner`호출 결과 중 일부는 유익할 때 React에 의해 버려질 수 있습니다.</Trans>

---

### `setState(nextState, callback?)` {/*setstate*/}

Call `setState` to update the state of your React component.
<Trans>`setState`를 호출하여 React 컴포넌트의 state를 업데이트합니다.</Trans>

```js {8-10}
class Form extends Component {
  state = {
    name: 'Taylor',
  };

  handleNameChange = (e) => {
    const newName = e.target.value;
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <>
        <input value={this.state.name} onChange={this.handleNameChange} />
        <p>Hello, {this.state.name}.
      </>
    );
  }
}
```

`setState` enqueues changes to the component state. It tells React that this component and its children need to re-render with the new state. This is the main way you'll update the user interface in response to interactions.
<Trans>`setState`는 컴포넌트 state에 대한 변경 사항을 큐에 넣습니다. 이 컴포넌트와 그 자식들이 새로운 state로 다시 렌더링해야 한다는 것을 React에게 알려줍니다. 이것이 상호작용에 반응하여 사용자 인터페이스를 업데이트하는 주요 방법입니다.</Trans>

<Pitfall>

Calling `setState` **does not** change the current state in the already executing code:
<Trans>`setState`를 호출해도 이미 실행 중인 코드의 현재 state는 변경되지 않습니다:</Trans>

```js {6,7}
function handleClick() {
  console.log(this.state.name); // "Taylor"
  this.setState({
    name: 'Robin'
  });
  console.log(this.state.name); // Still "Taylor"!
                                // 여전히 "Taylor"입니다!
}
```

It only affects what `this.state` will return starting from the *next* render.
<Trans>다음 렌더링부터 `this.state`가 반환할 내용에만 영향을 줍니다.</Trans>

</Pitfall>

You can also pass a function to `setState`. It lets you update state based on the previous state:
<Trans>`setState`에 함수를 전달할 수도 있습니다. 이전 state를 기반으로 state를 업데이트할 수 있습니다:</Trans>

```js {2-6}
  handleIncreaseAge = () => {
    this.setState(prevState => {
      return {
        age: prevState.age + 1
      };
    });
  }
```

You don't have to do this, but it's handy if you want to update state multiple times during the same event.
<Trans>이 작업을 수행할 필요는 없지만 동일한 이벤트 중에 state를 여러 번 업데이트하려는 경우 유용합니다.</Trans>

#### Parameters<Trans>매개변수</Trans> {/*setstate-parameters*/}

* `nextState`: Either an object or a function.
<Trans outdent>`nextState`: 객체 또는 함수입니다.</Trans>

  * If you pass an object as `nextState`, it will be shallowly merged into `this.state`.
  <Trans outdent>객체를 `nextState`로 전달하면 `this.state`에 얕게 병합됩니다.</Trans>
  * If you pass a function as `nextState`, it will be treated as an _updater function_. It must be pure, should take the pending state and props as arguments, and should return the object to be shallowly merged into `this.state`. React will put your updater function in a queue and re-render your component. During the next render, React will calculate the next state by applying all of the queued updaters to the previous state.
  <Trans outdent>함수를 `nextState`로 전달하면 _업데이터 함수_로 처리됩니다. 이 함수는 순수해야 하며, 보류 중인 state와 props를 인자로 받아야 하고, `this.state`에 얕게 병합할 객체를 반환해야 합니다. React는 업데이터 함수를 대기열에 넣고 컴포넌트를 리렌더링합니다. 다음 렌더링 중에 React는 대기열에 있는 모든 업데이터를 이전 state에 적용하여 다음 state를 계산합니다.</Trans>
* **optional** `callback`: If specified, React will call the `callback` you've provided after the update is committed.
<Trans outdent>**선택적** `callback`: 지정하면 React는 업데이트가 커밋된 후 사용자가 제공한 `callback`을 호출합니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*setstate-returns*/}

`setState` does not return anything.
<Trans>`setState`는 아무것도 반환하지 않습니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*setstate-caveats*/}

- Think of `setState` as a *request* rather than an immediate command to update the component. When multiple components update their state in response to an event, React will batch their updates and re-render them together in a single pass at the end of the event. In the rare case that you need to force a particular state update to be applied synchronously, you may wrap it in [`flushSync`,](/reference/react-dom/flushSync) but this may hurt performance.
<Trans>`setState`를 컴포넌트를 업데이트하는 즉각적인 명령이 아닌 요청으로 생각하세요. 여러 컴포넌트가 이벤트에 반응하여 state를 업데이트하면 React는 업데이트를 일괄 처리하고 이벤트가 끝날 때 단일 패스로 함께 다시 렌더링합니다. 드물게 특정 state 업데이트를 강제로 동기화하여 적용해야 하는 경우, [`flushSync`](/reference/react-dom/flushSync)로 감쌀 수 있지만, 이 경우 성능이 저하될 수 있습니다.</Trans>

- `setState` does not update `this.state` immediately. This makes reading `this.state` right after calling `setState` a potential pitfall. Instead, use [`componentDidUpdate`](#componentdidupdate) or the setState `callback` argument, either of which are guaranteed to fire after the update has been applied. If you need to set the state based on the previous state, you can pass a function to `nextState` as described above.
<Trans>`setState`는 `this.state`를 즉시 업데이트하지 않습니다. 따라서 `setState`를 호출한 직후 `this.state`를 읽는 것은 잠재적인 함정이 될 수 있습니다. 대신, 업데이트가 적용된 후에 실행되도록 보장되는 [`componentDidUpdate`](#componentdidupdate) 또는 setState `callback` 인자를 사용하십시오. 이전 state를 기반으로 state를 설정해야 하는 경우 위에서 설명한 대로 함수를 `nextState`에 전달할 수 있습니다.</Trans>

<Note>

Calling `setState` in class components is similar to calling a [`set` function](/reference/react/useState#setstate) in function components.
<Trans>클래스 컴포넌트에서 `setState`를 호출하는 것은 함수 컴포넌트에서 [`set` 함수](/reference/react/useState#setstate)를 호출하는 것과 유사합니다.</Trans>

[See how to migrate.](#migrating-a-component-with-state-from-a-class-to-a-function)
<Trans>[마이그레이션 방법을 참조하세요.](#migrating-a-component-with-state-from-a-class-to-a-function)</Trans>

</Note>

---

### `shouldComponentUpdate(nextProps, nextState, nextContext)` {/*shouldcomponentupdate*/}

If you define `shouldComponentUpdate`, React will call it to determine whether a re-render can be skipped.
<Trans>>shouldComponentUpdate`를 정의하면 React가 이를 호출하여 재렌더링을 건너뛸 수 있는지 여부를 결정합니다.</Trans>

If you are confident you want to write it by hand, you may compare `this.props` with `nextProps` and `this.state` with `nextState` and return `false` to tell React the update can be skipped.
<Trans>직접 작성하는 것이 확실하다면, `this.props`를 `nextProps`와, `this.state`를 `nextState`와 비교하고 `false`를 반환하여 React에 업데이트를 건너뛸 수 있음을 알릴 수 있습니다.</Trans>


```js {6-18}
class Rectangle extends Component {
  state = {
    isHovered: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.position.x === this.props.position.x &&
      nextProps.position.y === this.props.position.y &&
      nextProps.size.width === this.props.size.width &&
      nextProps.size.height === this.props.size.height &&
      nextState.isHovered === this.state.isHovered
    ) {
      // Nothing has changed, so a re-render is unnecessary
      return false;
    }
    return true;
  }

  // ...
}

```

React calls `shouldComponentUpdate` before rendering when new props or state are being received. Defaults to `true`. This method is not called for the initial render or when [`forceUpdate`](#forceupdate) is used.
<Trans>새로운 prosp나 state가 수신되면 렌더링하기 전에 `shouldComponentUpdate`를 호출합니다. 기본값은 `true`입니다. 이 메서드는 초기 렌더링이나 [`forceUpdate`](#forceupdate)가 사용될 때는 호출되지 않습니다.</Trans>

#### Parameters<Trans>매개변수</Trans> {/*shouldcomponentupdate-parameters*/}

- `nextProps`: The next props that the component is about to render with. Compare `nextProps` to [`this.props`](#props) to determine what changed.
<Trans outdent>`nextProps`: 컴포넌트가 렌더링할 다음 props. `nextProps`와 [`this.props`](#props)를 비교하여 무엇이 변경되었는지 확인합니다.</Trans>
- `nextState`: The next state that the component is about to render with. Compare `nextState` to [`this.state`](#props) to determine what changed.
<Trans outdent>`nextState`: 컴포넌트가 렌더링할 다음 state. `nextState`를 [`this.state`](#props)와 비교하여 변경된 내용을 확인합니다.</Trans>
- `nextContext`: The next context that the component is about to render with. Compare `nextContext` to [`this.context`](#context) to determine what changed. Only available if you specify [`static contextType`](#static-contexttype) (modern) or [`static contextTypes`](#static-contexttypes) (legacy).
<Trans outdent>`nextContext`: 컴포넌트가 렌더링할 다음 context. `nextContext`와 [`this.context`](#context)를 비교하여 변경된 내용을 확인합니다. [`static contextType`](#static-contexttype) (최신) 이나 [`static contextTypes`](#static-contexttypes) (legacy)을 지정한 경우에만 사용할 수 있습니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*shouldcomponentupdate-returns*/}

Return `true` if you want the component to re-render. That's the default behavior.
<Trans>컴포넌트를 리렌더링하려면 `true`를 반환합니다. 이것이 기본 동작입니다. </Trans>

Return `false` to tell React that re-rendering can be skipped.
<Trans>React에 리렌더링을 건너뛸 수 있음을 알리려면 `false`를 반환합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*shouldcomponentupdate-caveats*/}

- This method *only* exists as a performance optimization. If your component breaks without it, fix that first. 
<Trans>이 방법은 *오직* 성능 최적화를 위해서만 존재합니다. 이 방법 없이 컴포넌트가 중단되는 경우 먼저 이 문제를 해결하세요.</Trans>

- Consider using [`PureComponent`](/reference/react/PureComponent) instead of writing `shouldComponentUpdate` by hand. `PureComponent` shallowly compares props and state, and reduces the chance that you'll skip a necessary update.
<Trans>`shouldComponentUpdate`를 직접 작성하는 대신 [`PureComponent`](/reference/react/PureComponent)를 사용하는 것을 고려해 보세요. `PureComponent`는 props와 state를 얕게 비교하므로 필요한 업데이트를 건너뛸 가능성이 줄어듭니다.</Trans>

- We do not recommend doing deep equality checks or using `JSON.stringify` in `shouldComponentUpdate`. It makes performance unpredictable and dependent on the data structure of every prop and state. In the best case, you risk introducing multi-second stalls to your application, and in the worst case you risk crashing it.
<Trans>심층적인 동일성 검사를 수행하거나 `shouldComponentUpdate`에서 `JSON.stringify`를 사용하는 것은 권장하지 않습니다. 이는 성능을 예측할 수 없게 만들고 모든 props과 state의 데이터 구조에 따라 달라집니다. 최상의 경우 애플리케이션에 몇 초씩 멈추는 현상이 발생하고 최악의 경우 애플리케이션이 충돌할 위험이 있습니다.</Trans>

- Returning `false` does not prevent child components from re-rendering when *their* state changes.
<Trans>`false`를 반환해도 state가 변경될 때 자식 컴포넌트가 리렌더링되는 것을 막지는 못합니다.</Trans>

- Returning `false` does not *guarantee* that the component will not re-render. React will use the return value as a hint but it may still choose to re-render your component if it makes sense to do for other reasons.
<Trans>`false`를 반환해도 컴포넌트가 리렌더링되지 않는다는 보장은 없습니다. React는 반환값을 힌트로 사용하지만 다른 이유로 컴포넌트를 다시 렌더링하는 것이 합리적일 경우 여전히 렌더링을 선택할 수 있습니다.</Trans>

<Note>

Optimizing class components with `shouldComponentUpdate` is similar to optimizing function components with [`memo`.](/reference/react/memo) Function components also offer more granular optimization with [`useMemo`.](/reference/react/useMemo)
<Trans>`shouldComponentUpdate`로 클래스 컴포넌트를 최적화하는 것은 [`memo`](/reference/react/memo)로 함수 컴포넌트를 최적화하는 것과 유사합니다. 함수 컴포넌트는 [`useMemo`](/reference/react/useMemo)를 통해 더 세분화된 최적화도 제공합니다.</Trans>

</Note>

---

### `UNSAFE_componentWillMount()` {/*unsafe_componentwillmount*/}

If you define `UNSAFE_componentWillMount`, React will call it immediately after the [`constructor`.](#constructor) It only exists for historical reasons and should not be used in any new code. Instead, use one of the alternatives:
<Trans>`UNSAFE_componentWillMount`를 정의하면 React는 [`생성자`](#constructor) 바로 뒤에 이를 호출합니다. 이 함수는 역사적인 이유로만 존재하며 새로운 코드에서 사용해서는 안 됩니다. 대신 다른 대안을 사용하세요:</Trans>

- To initialize state, declare [`state`](#state) as a class field or set `this.state` inside the [`constructor`.](#constructor)
<Trans outdent>`state`를 초기화하려면, [`state`](#state)를 클래스 필드로 선언하거나 [생성자](#constructor) 내부에서 `this.state`를 설정하세요.</Trans>
- If you need to run a side effect or set up a subscription, move that logic to [`componentDidMount`](#componentdidmount) instead.
<Trans outdent>사이드 이펙트를 실행하거나 구독을 설정해야 하는 경우 해당 로직을 [`componentDidMount`](#componentdidmount)로 옮기세요.</Trans>

[See examples of migrating away from unsafe lifecycles.](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#examples)
<Trans>[안전하지 않은 생명주기에서 마이그레이션하는 예시를 참조하세요.](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#examples)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*unsafe_componentwillmount-parameters*/}

`UNSAFE_componentWillMount` does not take any parameters.
<Trans>`UNSAFE_componentWillMount` 는 어떤 매개변수도 갖지 않습니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*unsafe_componentwillmount-returns*/}

`UNSAFE_componentWillMount` should not return anything.
<Trans>`UNSAFE_componentWillMount`는 어떤 것도 반환하지 않습니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*unsafe_componentwillmount-caveats*/}

- `UNSAFE_componentWillMount` will not get called if the component implements [`static getDerivedStateFromProps`](#static-getderivedstatefromprops) or [`getSnapshotBeforeUpdate`.](#getsnapshotbeforeupdate)
<Trans>컴포넌트가 [`static getDerivedStateFromProps`](#static-getderivedstatefromprops) 또는 [`getSnapshotBeforeUpdate`.](#getsnapshotbeforeupdate)를 구현하는 경우 `UNSAFE_componentWillMount`가 호출되지 않습니다.</Trans>

- Despite its naming, `UNSAFE_componentWillMount` does not guarantee that the component *will* get mounted if your app uses modern React features like [`Suspense`.](/reference/react/Suspense) If a render attempt is suspended (for example, because the code for some child component has not loaded yet), React will throw the in-progress tree away and attempt to construct the component from scratch during the next attempt. This is why this method is "unsafe". Code that relies on mounting (like adding a subscription) should go into [`componentDidMount`.](#componentdidmount)
<Trans>이름과는 달리, 앱에서 [`Suspense`](/reference/react/Suspense)와 같은 최신 React 기능을 사용하는 경우 `UNSAFE_componentWillMount`는 컴포넌트가 마운트된다는 것을 보장하지 않습니다. 렌더링 시도가 일시 중단되면(예를 들어 일부 자식 컴포넌트의 코드가 아직 로드되지 않았기 때문에) React는 진행 중인 트리를 버리고 다음 시도에서 컴포넌트를 처음부터 다시 구성하려고 시도합니다. 이것이 바로 이 메서드가 "안전하지 않은" 이유입니다. 마운팅에 의존하는 코드(예: 구독 추가)는 [`componentDidMount`](#componentdidmount)로 이동해야 합니다.</Trans>

- `UNSAFE_componentWillMount` is the only lifecycle method that runs during [server rendering.](/reference/react-dom/server) For all practical purposes, it is identical to [`constructor`,](#constructor) so you should use the `constructor` for this type of logic instead.
<Trans>`UNSAFE_componentWillMount`는 [서버 렌더링](/reference/react-dom/server) 중에 실행되는 유일한 생명주기 메서드입니다. 모든 실용적인 목적으로 볼 때 `생성자`와 동일하므로 이러한 유형의 로직에는 [`생성자`](#constructor)를 대신 사용해야 합니다.</Trans>

<Note>

Calling [`setState`](#setstate) inside `UNSAFE_componentWillMount` in a class component to initialize state is equivalent to passing that state as the initial state to [`useState`](/reference/react/useState) in a function component.
<Trans>클래스 컴포넌트에서 `UNSAFE_componentWillMount` 내부에서 `setState`를 호출하여 state를 초기화하는 것은 함수형 컴포넌트에서 해당 state를 `useState`에 초기 state로 전달하는 것과 동일합니다.</Trans>

</Note>

---

### `UNSAFE_componentWillReceiveProps(nextProps, nextContext)` {/*unsafe_componentwillreceiveprops*/}

If you define `UNSAFE_componentWillReceiveProps`, React will call it when the component receives new props. It only exists for historical reasons and should not be used in any new code. Instead, use one of the alternatives:
<Trans>`UNSAFE_componentWillReceiveProps`를 정의하면 컴포넌트가 새로운 props를 수신할 때 React가 이를 호출합니다. 이 함수는 역사적인 이유로만 존재하며 새로운 코드에서 사용해서는 안 됩니다. 대신 다른 방법을 사용하세요:</Trans>

- If you need to **run a side effect** (for example, fetch data, run an animation, or reinitialize a subscription) in response to prop changes, move that logic to [`componentDidUpdate`](#componentdidupdate) instead.
<Trans outdent>prop 변경에 대한 응답으로 데이터 가져오기, 애니메이션 실행, 구독 재초기화 등의 **사이드 이펙트** 작업을 실행해야 하는 경우 해당 로직을 [`componentDidUpdate`](#componentdidupdate)로 옮기세요.</Trans>
- If you need to **avoid re-computing some data only when a prop changes,** use a [memoization helper](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization) instead.
<Trans outdent>props가 변경될 때만 일부 데이터를 다시 계산하지 않으려면 [메모이제이션 헬퍼](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)를 대신 사용하세요.</Trans>
- If you need to **"reset" some state when a prop changes,** consider either making a component [fully controlled](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component) or [fully uncontrolled with a key](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) instead.
<Trans outdent>props가 변경될 때 일부 state를 "초기화"해야 하는 경우, 대신 컴포넌트를 키로 [완전히 제어](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)하거나 [완전히 비제어](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)  만드는 것을 고려하세요.</Trans>
- If you need to **"adjust" some state when a prop changes,** check whether you can compute all the necessary information from props alone during rendering. If you can't, use [`static getDerivedStateFromProps`](/reference/react/Component#static-getderivedstatefromprops) instead.
<Trans outdent>**props가 변경될 때 일부 state를 "조정"해야 하는 경우,** 렌더링 중에 props만으로 필요한 모든 정보를 계산할 수 있는지 확인하세요. 그렇지 않은 경우 [`static getDerivedStateFromProps`](/reference/react/Component#static-getderivedstatefromprops)를 대신 사용하세요.</Trans>

[See examples of migrating away from unsafe lifecycles.](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)

#### Parameters<Trans>매개변수</Trans> {/*unsafe_componentwillreceiveprops-parameters*/}

- `nextProps`: The next props that the component is about to receive from its parent component. Compare `nextProps` to [`this.props`](#props) to determine what changed.
<Trans outdent>`nextProps`: 컴포넌트가 부모 컴포넌트로부터 받으려는 `nextProps`입니다. `nextProps` [`this.props`](#props)를 비교하여 변경된 내용을 확인합니다.</Trans>
- `nextContext`: The next props that the component is about to receive from the closest provider. Compare `nextContext` to [`this.context`](#context) to determine what changed. Only available if you specify [`static contextType`](#static-contexttype) (modern) or [`static contextTypes`](#static-contexttypes) (legacy).
<Trans outdent>`nextContext`: 컴포넌트가 가장 가까운 provider로부터 받으려는 next props입니다. `nextContext`를 `this.context`와 비교하여 변경된 내용을 확인합니다. [`static contextType`](#static-contexttype) (최신) 또는 [`static contextTypes`](#static-contexttypes) (legacy)를 지정한 경우에만 사용할 수 있습니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*unsafe_componentwillreceiveprops-returns*/}

`UNSAFE_componentWillReceiveProps` should not return anything.
<Trans>`UNSAFE_componentWillReceiveProps`는 아무것도 반환하지 않아야 합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*unsafe_componentwillreceiveprops-caveats*/}

- `UNSAFE_componentWillReceiveProps` will not get called if the component implements [`static getDerivedStateFromProps`](#static-getderivedstatefromprops) or [`getSnapshotBeforeUpdate`.](#getsnapshotbeforeupdate)
<Trans>컴포넌트가 [`static getDerivedStateFromProps`](#static-getderivedstatefromprops) 또는 [`getSnapshotBeforeUpdate`](#getsnapshotbeforeupdate)를 구현하는 경우 `UNSAFE_componentWillReceiveProps`가 호출되지 않습니다.</Trans>

- Despite its naming, `UNSAFE_componentWillReceiveProps` does not guarantee that the component *will* receive those props if your app uses modern React features like [`Suspense`.](/reference/react/Suspense) If a render attempt is suspended (for example, because the code for some child component has not loaded yet), React will throw the in-progress tree away and attempt to construct the component from scratch during the next attempt. By the time of the next render attempt, the props might be different. This is why this method is "unsafe". Code that should run only for committed updates (like resetting a subscription) should go into [`componentDidUpdate`.](#componentdidupdate)
<Trans>이름과는 달리, 앱이 [`Suspense`](/reference/react/Suspense)와 같은 최신 React 기능을 사용하는 경우 `UNSAFE_componentWillReceiveProps`는 컴포넌트가 해당 props을 수신한다는 것을 보장하지 않습니다. 렌더링 시도가 일시 중단되면(예를 들어 일부 자식 컴포넌트의 코드가 아직 로드되지 않았기 때문에) React는 진행 중인 트리를 버리고 다음 시도에서 컴포넌트를 처음부터 다시 구성하려고 시도합니다. 다음 렌더링을 시도할 때쯤이면 props가 달라져 있을 수 있습니다. 이것이 바로 이 메서드가 "안전하지 않은" 이유입니다. 커밋된 업데이트(예: 구독 재설정)에 대해서만 실행되어야 하는 코드는 [`componentDidMount`](#componentdidmount)로 이동해야 합니다.</Trans>

- `UNSAFE_componentWillReceiveProps` does not mean that the component has received *different* props than the last time. You need to compare `nextProps` and `this.props` yourself to check if something changed.
<Trans>`UNSAFE_componentWillReceiveProps`는 컴포넌트가 지난번과 *다른* props을 받았다는 것을 의미하지 않습니다. `nextProps` 와 `this.props` 를 직접 비교하여 변경된 사항이 있는지 확인해야 합니다.</Trans>

- React doesn't call `UNSAFE_componentWillReceiveProps` with initial props during mounting. It only calls this method if some of component's props are going to be updated. For example, calling [`setState`](#setstate) doesn't generally trigger `UNSAFE_componentWillReceiveProps` inside the same component.
<Trans>React는 마운트하는 동안 초기 props로 `UNSAFE_componentWillReceiveProps`를 호출하지 않습니다. 컴포넌트의 일부 props가 업데이트될 경우에만 이 메서드를 호출합니다. 예를 들어, 일반적으로 같은 컴포넌트 내부에서 [`setState`](#setstate)를 호출해도 `UNSAFE_componentWillReceiveProps`가 촉발되지 않습니다.</Trans>

<Note>

Calling [`setState`](#setstate) inside `UNSAFE_componentWillReceiveProps` in a class component to "adjust" state is equivalent to [calling the `set` function from `useState` during rendering](/reference/react/useState#storing-information-from-previous-renders) in a function component.
<Trans>클래스 컴포넌트에서 `UNSAFE_componentWillReceiveProps` 내부의 [`setState`](#setstate)를 호출하여 state를 "조정"하는 것은 [함수 컴포넌트에서 렌더링 중에 `useState`에서 `set` 함수를 호출하는 것](/reference/react/useState#storing-information-from-previous-renders)과 동일합니다.</Trans>

</Note>

---

### `UNSAFE_componentWillUpdate(nextProps, nextState)` {/*unsafe_componentwillupdate*/}


If you define `UNSAFE_componentWillUpdate`, React will call it before rendering with the new props or state. It only exists for historical reasons and should not be used in any new code. Instead, use one of the alternatives:
<Trans>`UNSAFE_componentWillUpdate`를 정의하면 React는 새로운 props나 state로 렌더링하기 전에 이를 호출합니다. 이 함수는 역사적인 이유로만 존재하며 새로운 코드에서 사용해서는 안 됩니다. 대신 다른 대안을 사용하세요:</Trans>

- If you need to run a side effect (for example, fetch data, run an animation, or reinitialize a subscription) in response to prop or state changes, move that logic to [`componentDidUpdate`](#componentdidupdate) instead.
<Trans outdent>prop 또는 state 변경에 대한 응답으로 사이드 이펙트(예: 데이터 페치, 애니메이션 실행, 구독 다시 초기화)를 실행해야 하는 경우 해당 로직을 [`componentDidUpdate`](#componentdidupdate)로 옮기세요.</Trans>
- If you need to read some information from the DOM (for example, to save the current scroll position) so that you can use it in [`componentDidUpdate`](#componentdidupdate) later, read it inside [`getSnapshotBeforeUpdate`](#getsnapshotbeforeupdate) instead.
<Trans outdent>나중에 `componentDidUpdate`에서 사용할 수 있도록 DOM에서 일부 정보를 읽어야 하는 경우(예: 현재 스크롤 위치를 저장하기 위해), 대신 `getSnapshotBeforeUpdate` 내부에서 읽습니다.</Trans>

[See examples of migrating away from unsafe lifecycles.](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#examples)
<Trans>[안전하지 않은 생명주기에서 마이그레이션하는 예시를 참조하세요.](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#examples)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*unsafe_componentwillupdate-parameters*/}

- `nextProps`: The next props that the component is about to render with. Compare `nextProps` to [`this.props`](#props) to determine what changed.
<Trans outdent>`nextProps`: 컴포넌트가 렌더링할 다음 props. `nextProps` 와 [`this.props`](#props) 를 비교하여 무엇이 변경되었는지 확인합니다.</Trans>
- `nextState`: The next state that the component is about to render with. Compare `nextState` to [`this.state`](#state) to determine what changed.
<Trans outdent>`nextState`: 컴포넌트가 렌더링할 다음 state. `nextState`를 [`this.state`](#state)와 비교하여 변경된 내용을 확인합니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*unsafe_componentwillupdate-returns*/}

`UNSAFE_componentWillUpdate` should not return anything.
<Trans>`UNSAFE_componentWillUpdate`는 아무것도 반환하지 않아야 합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*unsafe_componentwillupdate-caveats*/}

- `UNSAFE_componentWillUpdate` will not get called if [`shouldComponentUpdate`](#shouldcomponentupdate) is defined and returns `false`.
<Trans>[`shouldComponentUpdate`](#shouldcomponentupdate)`가 정의된 경우 `UNSAFE_componentWillUpdate`는 호출되지 않으며 `false`를 반환합니다.</Trans>

- `UNSAFE_componentWillUpdate` will not get called if the component implements [`static getDerivedStateFromProps`](#static-getderivedstatefromprops) or [`getSnapshotBeforeUpdate`.](#getsnapshotbeforeupdate)
<Trans>컴포넌트가 [`static getDerivedStateFromProps`](#static-getderivedstatefromprops) 또는 [`getSnapshotBeforeUpdate`.](#getsnapshotbeforeupdate)를 구현하는 경우 `UNSAFE_componentWillUpdate`가 호출되지 않습니다.</Trans>

- It's not supported to call [`setState`](#setstate) (or any method that leads to `setState` being called, like dispatching a Redux action) during `componentWillUpdate`.
<Trans>`componentWillUpdate` 중에 [`setState`](#setstate)를 호출하는 것은 지원되지 않습니다(또는 Redux 액션 디스패치와 같이 `setState`가 호출되도록 유도하는 메서드).</Trans>

- Despite its naming, `UNSAFE_componentWillUpdate` does not guarantee that the component *will* update if your app uses modern React features like [`Suspense`.](/reference/react/Suspense) If a render attempt is suspended (for example, because the code for some child component has not loaded yet), React will throw the in-progress tree away and attempt to construct the component from scratch during the next attempt. By the time of the next render attempt, the props and state might be different. This is why this method is "unsafe". Code that should run only for committed updates (like resetting a subscription) should go into [`componentDidUpdate`.](#componentdidupdate)
<Trans>이름과는 달리, 앱이 [`Suspense`](/reference/react/Suspense)와 같은 최신 React 기능을 사용하는 경우 `UNSAFE_componentWillUpdate`가 컴포넌트의 업데이트를 보장하지는 않습니다. 렌더링 시도가 일시 중단되면(예를 들어 일부 자식 컴포넌트의 코드가 아직 로드되지 않았기 때문에) React는 진행 중인 트리를 버리고 다음 시도에서 컴포넌트를 처음부터 다시 구성하려고 시도합니다. 다음 렌더링 시도 시에는 props과 state가 달라질 수 있습니다. 이것이 바로 이 메서드가 "안전하지 않은" 이유입니다. 커밋된 업데이트(예: 구독 재설정)에 대해서만 실행되어야 하는 코드는 [`componentDidUpdate`](#componentdidupdate)로 이동해야 합니다.</Trans>

- `UNSAFE_componentWillUpdate` does not mean that the component has received *different* props or state than the last time. You need to compare `nextProps` with `this.props` and `nextState` with `this.state` yourself to check if something changed.
<Trans>`UNSAFE_componentWillUpdate`는 컴포넌트가 지난번과 다른 props나 state를 받았다는 것을 의미하지는 않습니다. `nextProps` 를 `this.props`와, `nextState`를 `this.state`와 직접 비교하여 변경된 사항이 있는지 확인해야 합니다.</Trans>

- React doesn't call `UNSAFE_componentWillUpdate` with initial props and state during mounting.
<Trans>React는 마운트하는 동안 초기 props와 state를 가지고 `UNSAFE_componentWillUpdate`를 호출하지 않습니다.</Trans>

<Note>

There is no direct equivalent to `UNSAFE_componentWillUpdate` in function components.
<Trans>함수형 컴포넌트에는 `UNSAFE_componentWillUpdate`와 직접적으로 대응하는 것이 없습니다.</Trans>

</Note>

---

### `static childContextTypes` {/*static-childcontexttypes*/}

<Deprecated>

This API will be removed in a future major version of React. [Use `static contextType` instead.](#static-contexttype)
<Trans>이 API는 향후 React의 주요 버전에서 제거될 예정입니다.[대신 `정적 contextType`을 사용하세요.](#static-contexttype)</Trans>

</Deprecated>

Lets you specify which [legacy context](https://reactjs.org/docs/legacy-context.html) is provided by this component.
<Trans>이 컴포넌트가 제공하는 [legacy context](https://reactjs.org/docs/legacy-context.html)를 지정할 수 있습니다.</Trans>

---

### `static contextTypes` {/*static-contexttypes*/}

<Deprecated>

This API will be removed in a future major version of React. [Use `static contextType` instead.](#static-contexttype)
<Trans>이 API는 향후 React의 주요 버전에서 제거될 예정입니다.[대신 `static contextType`을 사용하세요.](#static-contexttype)</Trans>

</Deprecated>

Lets you specify which [legacy context](https://reactjs.org/docs/legacy-context.html) is consumed by this component.
<Trans>이 컴포넌트가 제공하는 [legacy context](https://reactjs.org/docs/legacy-context.html)를 지정할 수 있습니다.</Trans>

---

### `static contextType` {/*static-contexttype*/}

If you want to read [`this.context`](#context-instance-field) from your class component, you must specify which context it needs to read. The context you specify as the `static contextType` must be a value previously created by [`createContext`.](/reference/react/createContext)
<Trans>클래스 컴포넌트에서 [`this.context`](#context-instance-field)를 읽으려면 읽어야 하는 컨텍스트를 지정해야 합니다. `static contextType`으로 지정하는 컨텍스트는 이전에 [`createContext`](/reference/react/createContext)`로 생성한 값이어야 합니다.</Trans>


```js {2}
class Button extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {this.props.children}
      </button>
    );
  }
}
```

<Note>

Reading `this.context` in class components is equivalent to [`useContext`](/reference/react/useContext) in function components.
<Trans>클래스 컴포넌트에서 `this.context`를 읽는 것은 함수 컴포넌트에서 [`useContext`](/reference/react/useContext)를 읽는 것과 동일합니다.</Trans>

[See how to migrate.](#migrating-a-component-with-context-from-a-class-to-a-function)
<Trans>[마이그레이션 방법을 참조하세요.](#migrating-a-component-with-context-from-a-class-to-a-function)</Trans>

</Note>

---

### `static defaultProps` {/*static-defaultprops*/}

You can define `static defaultProps` to set the default props for the class. They will be used for `undefined` and missing props, but not for `null` props.
<Trans>`static defaultProps`를 정의하여 클래스의 기본 props을 설정할 수 있습니다. `undefined` props과 누락된 props에는 사용되지만 `null` props에는 사용되지 않습니다</Trans>

For example, here is how you define that the `color` prop should default to `'blue'`:
<Trans>예를 들어, 다음은 `color` prop이 기본 `'blue'`로 설정되도록 정의하는 방법입니다:</Trans>

```js {2-4}
class Button extends Component {
  static defaultProps = {
    color: 'blue'
  };

  render() {
    return <button className={this.props.color}>click me</button>;
  }
}
```

If the `color` prop is not provided or is `undefined`, it will be set by default to `'blue'`:
<Trans>`color` prop이 제공되지 않거나 `undefined`이면, 기본 `'blue'`로 설정됩니다:</Trans>

```js
<>
  {/* this.props.color is "blue" */}
  <Button />

  {/* this.props.color is "blue" */}
  <Button color={undefined} />

  {/* this.props.color is null */}
  <Button color={null} />

  {/* this.props.color is "red" */}
  <Button color="red" />
</>
```

<Note>

Defining `defaultProps` in class components is similar to using [default values](/learn/passing-props-to-a-component#specifying-a-default-value-for-a-prop) in function components.
<Trans>클래스 컴포넌트에서 `defaultProps`를 정의하는 것은 함수 컴포넌트에서 [기본값](/learn/passing-props-to-a-component#specifying-a-default-value-for-a-prop)을 사용하는 것과 유사합니다.</Trans>

</Note>

---

### `static propTypes` {/*static-proptypes*/}

You can define `static propTypes` together with the [`prop-types`](https://www.npmjs.com/package/prop-types) library to declare the types of the props accepted by your component. These types will be checked during rendering and in development only.
<Trans>`prop-types` 라이브러리와 함께 `정적 propTypes`를 정의하여 컴포넌트에서 허용되는 props의 유형을 선언할 수 있습니다. 이러한 유형은 렌더링 중과 개발 중에만 확인됩니다.</Trans>


```js
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
```

<Note>

We recommend using [TypeScript](https://www.typescriptlang.org/) instead of checking prop types at runtime.
<Trans>런타임에 props 유형을 확인하는 대신 [TypeScript](https://www.typescriptlang.org/)를 사용하는 것이 좋습니다.</Trans>

</Note>

---

### `static getDerivedStateFromError(error)` {/*static-getderivedstatefromerror*/}

If you define `static getDerivedStateFromError`, React will call it when a child component (including distant children) throws an error during rendering. This lets you display an error message instead of clearing the UI.
<Trans>`static getDerivedStateFromError`를 정의하면 렌더링 도중 자식 컴포넌트(멀리 떨어진 자식 포함)가 에러를 던질 때 React가 이를 호출합니다. 이렇게 하면 UI를 지우는 대신 에러 메시지를 표시할 수 있습니다. </Trans>

Typically, it is used together with [`componentDidCatch`](#componentDidCatch) which lets you send the error report to some analytics service. A component with these methods is called an *error boundary.*
<Trans>일반적으로 에러 리포트를 일부 분석 서비스에 보낼 수 있는 [`componentDidCatch`](#componentDidCatch)와 함께 사용됩니다. 이러한 메서드가 있는 컴포넌트를 *error boundary*라고 합니다. </Trans>


[See an example.](#catching-rendering-errors-with-an-error-boundary)
<Trans>[예시를 참조하세요.](#catching-rendering-errors-with-an-error-boundary)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*static-getderivedstatefromerror-parameters*/}

* `error`: The error that was thrown. In practice, it will usually be an instance of [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) but this is not guaranteed because JavaScript allows to [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) any value, including strings or even `null`.
<Trans outdent>`error`: 발생한 에러입니다. 일반적으로 [`Error`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error)의 인스턴스가 되지만 자바스크립트에서는 문자열이나 `null`을 포함한 모든 값을 [`throw`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/throw)할 수 있으므로 보장되지는 않습니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*static-getderivedstatefromerror-returns*/}

`static getDerivedStateFromError` should return the state telling the component to display the error message.
<Trans>`static getDerivedStateFromError`는 컴포넌트에 오류 메시지를 표시하도록 지시하는 state를 반환해야 합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*static-getderivedstatefromerror-caveats*/}

* `static getDerivedStateFromError` should be a pure function. If you want to perform a side effect (for example, to call an analytics service), you need to also implement [`componentDidCatch`.](#componentdidcatch)
<Trans outdent>`static getDerivedStateFromError`는 순수 함수여야 합니다. 예를 들어 분석 서비스를 호출하는 등의 사이트 이펙트를 수행하려면 [`componentDidCatch`.](#componentdidcatch)도 구현해야 합니다.</Trans>

<Note>

There is no direct equivalent for `static getDerivedStateFromError` in function components yet. If you'd like to avoid creating class components, write a single `ErrorBoundary` component like above and use it throughout your app. Alternatively, use the [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary) package which does that.
<Trans>함수형 컴포넌트에서 `static getDerivedStateFromError`에 대한 직접적인 대응은 아직 없습니다. 클래스형 컴포넌트를 만들지 않으려면 위와 같이 하나의 `ErrorBoundary` 컴포넌트를 작성하고 앱 전체에서 사용하세요. 또는 이를 수행하는 [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary) 패키지를 사용하세요.</Trans>

</Note>

---

### `static getDerivedStateFromProps(props, state)` {/*static-getderivedstatefromprops*/}

If you define `static getDerivedStateFromProps`, React will call it right before calling [`render`,](#render) both on the initial mount and on subsequent updates. It should return an object to update the state, or `null` to update nothing.
<Trans>`static getDerivedStateFromProps`를 정의하면 React는 초기 마운트 및 후속 업데이트 모두에서 [`render`](#render)를 호출하기 바로 전에 이를 호출합니다. state를 업데이트하려면 객체를 반환하고, 아무것도 업데이트하지 않으려면 `null`을 반환해야 합니다. </Trans>

This method exists for [rare use cases](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state) where the state depends on changes in props over time. For example, this `Form` component resets the `email` state when the `userID` prop changes:
<Trans>이 메서드는 시간이 지남에 따라 state가 props의 변화에 따라 달라지는 [드문 사용 사례](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state)를 위해 존재합니다. 예를 들어, 이 `Form` 컴포넌트는 `userID` prop이 변경되면 `이메일` state를 재설정합니다:</Trans>

```js {7-18}
class Form extends Component {
  state = {
    email: this.props.defaultEmail,
    prevUserID: this.props.userID
  };

  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (props.userID !== state.prevUserID) {
      return {
        prevUserID: props.userID,
        email: props.defaultEmail
      };
    }
    return null;
  }

  // ...
}
```

Note that this pattern requires you to keep a previous value of the prop (like `userID`) in state (like `prevUserID`).
<Trans>이 패턴을 사용하려면 props의 이전 값(예: `userID`)을 state(예: `prevUserID`)로 유지해야 한다는 점에 유의하세요.</Trans>

<Pitfall>

Deriving state leads to verbose code and makes your components difficult to think about. [Make sure you're familiar with simpler alternatives:](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
<Trans>state를 파생하면 코드가 장황해지고 컴포넌트에 대해 생각하기 어려워집니다. [더 간단한 대안에 익숙해지도록 하세요.](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)</Trans>

- If you need to **perform a side effect** (for example, data fetching or an animation) in response to a change in props, use [`componentDidUpdate`](#componentdidupdate) method instead.
<Trans>props 변경에 대한 응답으로 데이터 불러오기나 애니메이션과 같은 사이드 이펙트를 수행해야 하는 경우, 대신[`componentDidUpdate`](#componentdidupdate) 메서드를 사용하세요.</Trans>

- If you want to **re-compute some data only when a prop changes,** [use a memoization helper instead.](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)
<Trans>**props가 변경될 때만 일부 데이터를 다시 계산하려면,** [메모이제이션 헬퍼](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)를 대신 사용하세요.</Trans>

- If you want to **"reset" some state when a prop changes,** consider either making a component [fully controlled](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component) or [fully uncontrolled with a key](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) instead.
<Trans>props가 변경될 때 일부 state를 "리셋"하려면 대신 키를 사용하여 컴포넌트를 [완전히 제어](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)하거나 [완전히 비제어](https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)하는 것을 고려하세요.</Trans>

</Pitfall>

#### Parameters<Trans>매개변수</Trans> {/*static-getderivedstatefromprops-parameters*/}

- `props`: The next props that the component is about to render with.
<Trans>`props`: 컴포넌트가 렌더링할 다음 props.</Trans>
- `state`: The next state that the component is about to render with.
<Trans>`state`: 컴포넌트가 렌더링할 다음 state.</Trans>

#### Returns<Trans>반환값</Trans> {/*static-getderivedstatefromprops-returns*/}

`static getDerivedStateFromProps` return an object to update the state, or `null` to update nothing.
<Trans>`static getDerivedStateFromProps`는 state를 업데이트할 객체를 반환하거나, 아무것도 업데이트하지 않으면 `null`을 반환합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*static-getderivedstatefromprops-caveats*/}

- This method is fired on *every* render, regardless of the cause. This is different from [`UNSAFE_componentWillReceiveProps`](#unsafe_cmoponentwillreceiveprops), which only fires when the parent causes a re-render and not as a result of a local `setState`.
<Trans>이 메서드는 원인에 관계없이 모든 렌더링에서 호출됩니다. 부모가 리렌더링을 일으킬 때만 발동하고 지역 `setState`의 결과가 아닐 때만 발동하는 [`UNSAFE_componentWillReceiveProps`](#unsafe_cmoponentwillreceiveprops)와는 다릅니다.</Trans>

- This method doesn't have access to the component instance. If you'd like, you can reuse some code between `static getDerivedStateFromProps` and the other class methods by extracting pure functions of the component props and state outside the class definition.
<Trans>이 메서드에는 컴포넌트 인스턴스에 대한 접근 권한이 없습니다. 원하는 경우 클래스 정의 외부에서 순수 함수인 컴포넌트의 props와 state를 추출하여 `static getDerivedStateFromProps`와 다른 클래스 메서드 사이에 일부 코드를 재사용할 수 있습니다.</Trans>

<Note>

Implementing `static getDerivedStateFromProps` in a class component is equivalent to [calling the `set` function from `useState` during rendering](/reference/react/useState#storing-information-from-previous-renders) in a function component.
<Trans>클래스형 컴포넌트에서 `static getDerivedStateFromProps`를 구현하는 것은 함수형 컴포넌트에서 렌더링하는 동안 [`useState`에서 `set` 함수를 호출하는 것](/reference/react/useState#storing-information-from-previous-renders)과 동일합니다.</Trans>

</Note>

---

## Usage<Trans>사용법</Trans> {/*usage*/}

### Defining a class component<Trans>클래스형 컴포넌트 정의하기</Trans> {/*defining-a-class-component*/}

To define a React component as a class, extend the built-in `Component` class and define a [`render` method:](#render)
<Trans>React 컴포넌트를 클래스로 정의하려면 빌트인 `Component` 클래스를 확장하고 [`render` 메서드](#render)를 정의합니다:</Trans>

```js
import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

React will call your [`render`](#render) method whenever it needs to figure out what to display on the screen. Usually, you will return some [JSX](/learn/writing-markup-with-jsx) from it. Your `render` method should be a [pure function:](https://en.wikipedia.org/wiki/Pure_function) it should only calculate the JSX.
<Trans>React는 화면에 표시할 내용을 파악해야 할 때마다 [`render`](#render) 메서드를 호출합니다. 보통은 [JSX](/learn/writing-markup-with-jsx)를 반환합니다. `render` 메서드는 [순수 함수](https://en.wikipedia.org/wiki/Pure_function)여야 합니다. JSX만 계산해야 합니다. </Trans>

Similarly to [function components,](/learn/your-first-component#defining-a-component) a class component can [receive information by props](/learn/your-first-component#defining-a-component) from its parent component. However, the syntax for reading props is different. For example, if the parent component renders `<Greeting name="Taylor" />`, then you can read the `name` prop from [`this.props`](#props), like `this.props.name`:
<Trans>[함수형 컴포넌트](/learn/your-first-component#defining-a-component)와 마찬가지로 클래스 컴포넌트는 부모 컴포넌트 [props로부터 정보를 받을 수 있습니다.](/learn/your-first-component#defining-a-component) 하지만 props를 읽는 구문은 다릅니다. 예를 들어 부모 컴포넌트가 `<Greeting name="Taylor" />`를 렌더링하는 경우, `this.props.name`과 같이 [`this.props`](#props)에서 `name` prop을 읽을 수 있습니다:</Trans>

<Sandpack>

```js
import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default function App() {
  return (
    <>
      <Greeting name="Sara" />
      <Greeting name="Cahal" />
      <Greeting name="Edite" />
    </>
  );
}
```

</Sandpack>

Note that Hooks (functions starting with `use`, like [`useState`](/reference/react/useState)) are not supported inside class components.
<Trans>클래스 컴포넌트 내부에서는 Hook(`use`으로 시작하는 함수, 예를 들어 [`useState`](/reference/react/useState))이 지원되지 않습니다.</Trans>

<Pitfall>

We recommend defining components as functions instead of classes. [See how to migrate.](#migrating-a-simple-component-from-a-class-to-a-function)
<Trans>컴포넌트를 클래스 대신 함수로 정의하는 것이 좋습니다. [마이그레이션 방법을 참조하세요.](#migrating-a-simple-component-from-a-class-to-a-function)</Trans>

</Pitfall>

---

### Adding state to a class component<Trans>클래스형 컴포넌트에 state 추가하기</Trans> {/*adding-state-to-a-class-component*/}

To add [state](/learn/state-a-components-memory) to a class, assign an object to a property called [`state`](#state). To update state, call [`this.setState`](#setstate).
<Trans>클래스에 state를 추가하려면 [`state`](#state)라는 프로퍼티에 객체를 할당합니다. state를 업데이트하려면 [`this.setState`](#setstate)를 호출합니다.</Trans>

<Sandpack>

```js
import { Component } from 'react';

export default class Counter extends Component {
  state = {
    name: 'Taylor',
    age: 42,
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 1 
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleAgeChange}>
          Increment age
        </button>
        <p>Hello, {this.state.name}. You are {this.state.age}.</p>
      </>
    );
  }
}
```

```css
button { display: block; margin-top: 10px; }
```

</Sandpack> 

<Pitfall>

We recommend defining components as functions instead of classes. [See how to migrate.](#migrating-a-component-with-state-from-a-class-to-a-function)
<Trans>컴포넌트를 클래스 대신 함수로 정의하는 것이 좋습니다. [마이그레이션 방법을 참조하세요.](#migrating-a-component-with-state-from-a-class-to-a-function)</Trans>

</Pitfall>

---

### Adding lifecycle methods to a class component<Trans>클래스형 컴포넌트에 생명주기 메서드 추가하기</Trans> {/*adding-lifecycle-methods-to-a-class-component*/}

There are a few special methods you can define on your class.
<Trans>클래스에서 정의할 수 있는 몇 가지 특별한 메서드가 있습니다. </Trans>

If you define the [`componentDidMount`](#componentdidmount) method, React will call it when your component is added *(mounted)* to the screen. React will call [`componentDidUpdate`](#componentdidupdate) after your component re-renders due to changed props or state. React will call [`componentWillUnmount`](#componentwillunmount) after your component has been removed *(unmounted)* from the screen.
<Trans>[`componentDidMount`](#componentdidmount) 메서드를 정의하면 컴포넌트가 화면에 추가*(마운트)*될 때 React가 이를 호출합니다. 컴포넌트가 props나 state 변경으로 인해 다시 렌더링되면 React는 [`componentDidUpdate`](#componentdidupdate)를 호출합니다. 컴포넌트가 화면에서 제거*(마운트 해제)*된 후 React는 [`componentWillUnmount`](#componentwillunmount)를 호출합니다. </Trans>

If you implement `componentDidMount`, you usually need to implement all three lifecycles to avoid bugs. For example, if `componentDidMount` reads some state or props, you also have to implement `componentDidUpdate` to handle their changes, and `componentWillUnmount` to clean up whatever `componentDidMount` was doing.
<Trans>`componentDidMount`를 구현하는 경우 일반적으로 버그를 피하기 위해 세 가지 생명주기를 모두 구현해야 합니다. 예를 들어, `componentDidMount`가 일부 state나 props를 읽었다면 해당 변경 사항을 처리하기 위해 `componentDidUpdate`도 구현해야 하고, `componentDidMount`가 수행하던 작업을 클린업 하기 위해 `componentWillUnmount`도 구현해야 합니다. </Trans>

For example, this `ChatRoom` component keeps a chat connection synchronized with props and state:
<Trans>예를 들어 다음 `ChatRoom` 컴포넌트는 채팅 연결을 props 및 state와 동기화합니다:</Trans>


<Sandpack>

```js App.js
import { useState } from 'react';
import ChatRoom from './ChatRoom.js';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
```

```js ChatRoom.js active
import { Component } from 'react';
import { createConnection } from './chat.js';

export default class ChatRoom extends Component {
  state = {
    serverUrl: 'https://localhost:1234'
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  setupConnection() {
    this.connection = createConnection(
      this.state.serverUrl,
      this.props.roomId
    );
    this.connection.connect();    
  }

  destroyConnection() {
    this.connection.disconnect();
    this.connection = null;
  }

  render() {
    return (
      <>
        <label>
          Server URL:{' '}
          <input
            value={this.state.serverUrl}
            onChange={e => {
              this.setState({
                serverUrl: e.target.value
              });
            }}
          />
        </label>
        <h1>Welcome to the {this.props.roomId} room!</h1>
      </>
    );
  }
}
```

```js chat.js
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
```

```css
input { display: block; margin-bottom: 20px; }
button { margin-left: 10px; }
```

</Sandpack>

Note that in development when [Strict Mode](/reference/react/StrictMode) is on, React will call `componentDidMount`, immediately call `componentWillUnmount`, and then call `componentDidMount` again. This helps you notice if you forgot to implement `componentWillUnmount` or if its logic doesn't fully "mirror" what `componentDidMount` does.
<Trans>개발 환경에서 [Strict Mode](/reference/react/StrictMode)가 켜져 있을 때 React는 `componentDidMount`를 호출하고, 즉시 `componentWillUnmount`를 호출한 다음, `componentDidMount`를 다시 호출합니다. 이렇게 하면 `componentWillUnmount`를 구현하는 것을 잊어버렸거나 그 로직이 `componentDidMount`의 동작을 완전히 "미러링"하지 않는지 알 수 있습니다.</Trans>

<Pitfall>

We recommend defining components as functions instead of classes. [See how to migrate.](#migrating-a-component-with-lifecycle-methods-from-a-class-to-a-function)
<Trans>컴포넌트를 클래스 대신 함수로 정의하는 것이 좋습니다. [마이그레이션 방법을 확인하세요.](#migrating-a-component-with-lifecycle-methods-from-a-class-to-a-function)</Trans>

</Pitfall>

---

### Catching rendering errors with an error boundary<Trans>에러 경계로 렌더링 오류 포착하기</Trans> {/*catching-rendering-errors-with-an-error-boundary*/}

By default, if your application throws an error during rendering, React will remove its UI from the screen. To prevent this, you can wrap a part of your UI into an *error boundary*. An error boundary is a special component that lets you display some fallback UI instead of the part that crashed--for example, an error message.
<Trans>기본적으로 애플리케이션이 렌더링 도중 에러를 발생시키면 React는 화면에서 해당 UI를 제거합니다. 이를 방지하기 위해 UI의 일부를 *에러 경계(error boundary)*로 감싸면 됩니다. 에러 경계는 에러가 발생한 부분 대신 에러 메시지와 같은 폴백 UI를 표시할 수 있는 특수한 컴포넌트입니다.</Trans>

To implement an error boundary component, you need to provide [`static getDerivedStateFromError`](#static-getderivedstatefromerror) which lets you update state in response to an error and display an error message to the user. You can also optionally implement [`componentDidCatch`](#componentdidcatch) to add some extra logic, for example, to log the error to an analytics service.
<Trans>에러 경계 컴포넌트를 구현하려면 에러에 대한 응답으로 state를 업데이트하고 사용자에게 에러 메시지를 표시할 수 있는 [`static getDerivedStateFromError`](#static-getderivedstatefromerror)를 제공해야 합니다. 또한 선택적으로 [`componentDidCatch`](#componentdidcatch)를 구현하여 분석 서비스에 에러를 기록하는 등 몇 가지 추가 로직을 추가할 수도 있습니다.</Trans>

```js {7-10,12-19}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}
```

Then you can wrap a part of your component tree with it:
<Trans>그런 다음 컴포넌트 트리의 일부를 감쌀 수 있습니다:</Trans>

```js {1,3}
<ErrorBoundary fallback={<p>Something went wrong</p>}>
  <Profile />
</ErrorBoundary>
```

If `Profile` or its child component throws an error, `ErrorBoundary` will "catch" that error, display a fallback UI with the error message you've provided, and send a production error report to your error reporting service.
<Trans>`Profile` 또는 자식 컴포넌트가 에러를 발생시키면 `ErrorBoundary`가 해당 에러를 "포착"하고 사용자가 제공한 에러 메시지와 함께 폴백 UI를 표시한 다음 상용 환경용 에러 리포트를 에러 리포트 서비스로 전송합니다.</Trans>

You don't need to wrap every component into a separate error boundary. When you think about the [granularity of error boundaries,](https://aweary.dev/fault-tolerance-react/) consider where it makes sense to display an error message. For example, in a messaging app, it makes sense to place an error boundary around the list of conversations. It also makes sense to place one around every individual message. However, it wouldn't make sense to place a boundary around every avatar.
<Trans>모든 컴포넌트를 별도의 에러 경계로 감쌀 필요는 없습니다. [에러 경계의 세분성](https://aweary.dev/fault-tolerance-react/)에 대해 생각할 때 에러 메시지를 표시하는 것이 합당한 위치를 고려하세요. 예를 들어 메시징 앱의 경우 대화 목록 주위에 에러 경계를 배치하는 것이 좋습니다. 모든 개별 메시지 주위에 에러 경계를 배치하는 것도 좋습니다. 하지만 모든 아바타 주위에 경계를 설정하는 것은 적절하지 않습니다.</Trans>

<Note>

There is currently no way to write an error boundary as a function component. However, you don't have to write the error boundary class yourself. For example, you can use [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary) instead.
<Trans>현재 에러 경계를 함수 컴포넌트로 작성할 수 있는 방법은 없습니다. 하지만 에러 경계 클래스를 직접 작성할 필요는 없습니다. 예를 들어, [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary)`를 대신 사용할 수 있습니다.</Trans>

</Note>

---

## Alternatives<Trans>대안</Trans> {/*alternatives*/}

### Migrating a simple component from a class to a function<Trans>클래스에서 함수로 간단한 컴포넌트 마이그레이션하기</Trans> {/*migrating-a-simple-component-from-a-class-to-a-function*/}

Typically, you will [define components as functions](/learn/your-first-component#defining-a-component) instead.
<Trans>일반적으로 [컴포넌트를 함수로 정의](/learn/your-first-component#defining-a-component)하는 것 대신 사용합니다.</Trans>

For example, suppose you're converting this `Greeting` class component to a function:
<Trans>예를 들어 `Greeting` 클래스 컴포넌트를 함수로 변환한다고 가정해 보겠습니다:</Trans>

<Sandpack>

```js
import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default function App() {
  return (
    <>
      <Greeting name="Sara" />
      <Greeting name="Cahal" />
      <Greeting name="Edite" />
    </>
  );
}
```

</Sandpack>

Define a function called `Greeting`. This is where you will move the body of your `render` function.
<Trans>`Greeting`이라는 함수를 정의합니다. 여기서 `render` 함수의 본문을 움직일 것입니다.</Trans>

```js
function Greeting() {
  // ... move the code from the render method here ...
}
```

Instead of `this.props.name`, define the `name` prop [using the destructuring syntax](/learn/passing-props-to-a-component) and read it directly:
<Trans>`this.props.name` 대신 [파괴 구문을 사용](/learn/passing-props-to-a-component)하여 `name` prop을 정의하고 직접 읽습니다:</Trans>

```js
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

Here is a complete example:
<Trans>완성 예제입니다:</Trans>

<Sandpack>

```js
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return (
    <>
      <Greeting name="Sara" />
      <Greeting name="Cahal" />
      <Greeting name="Edite" />
    </>
  );
}
```

</Sandpack>

---

### Migrating a component with state from a class to a function<Trans>클래스에서 함수로 state가 있는 컴포넌트 마이그레이션하기</Trans> {/*migrating-a-component-with-state-from-a-class-to-a-function*/}

Suppose you're converting this `Counter` class component to a function:
<Trans>다음 `Counter` 클래스 컴포넌트를 함수로 변환한다고 가정해 봅시다:</Trans>

<Sandpack>

```js
import { Component } from 'react';

export default class Counter extends Component {
  state = {
    name: 'Taylor',
    age: 42,
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleAgeChange = (e) => {
    this.setState({
      age: this.state.age + 1 
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleAgeChange}>
          Increment age
        </button>
        <p>Hello, {this.state.name}. You are {this.state.age}.</p>
      </>
    );
  }
}
```

```css
button { display: block; margin-top: 10px; }
```

</Sandpack>

Start by declaring a function with the necessary [state variables:](/reference/react/useState#adding-state-to-a-component)
<Trans>필요한 [state 변수](/reference/react/useState#adding-state-to-a-component)로 함수를 선언하여 시작하세요.</Trans>

```js {4-5}
import { useState } from 'react';

function Counter() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);
  // ...
```

Next, convert the event handlers:
<Trans>그런 다음, 이벤트 핸들러를 변환하세요:</Trans>

```js {5-7,9-11}
function Counter() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAgeChange() {
    setAge(age + 1);
  }
  // ...
```

Finally, replace all references starting with `this` with the variables and functions you defined in your component. For example, replace `this.state.age` with `age`, and replace `this.handleNameChange` with `handleNameChange`.
<Trans>마지막으로, `this`로 시작하는 모든 ref를 컴포넌트에서 정의한 변수 및 함수로 바꿉니다. 예를 들어, `this.state.age`를 `age`로 바꾸고, `this.handleNameChange`를 `handleNameChange`로 바꿉니다.</Trans>

Here is a fully converted component:
<Trans>다음은 완전히 변환된 컴포넌트입니다:</Trans>

<Sandpack>

```js
import { useState } from 'react';

export default function Counter() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAgeChange() {
    setAge(age + 1);
  }

  return (
    <>
      <input
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={handleAgeChange}>
        Increment age
      </button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  )
}
```

```css
button { display: block; margin-top: 10px; }
```

</Sandpack>

---

### Migrating a component with lifecycle methods from a class to a function<Trans>생명주기 메서드가 있는 컴포넌트를 클래스에서 함수로 마이그레이션하기</Trans> {/*migrating-a-component-with-lifecycle-methods-from-a-class-to-a-function*/}

Suppose you're converting this `ChatRoom` class component with lifecycle methods to a function:
<Trans>생명주기 메서드가 있는 `ChatRoom` 클래스 컴포넌트를 함수로 변환한다고 가정해 보겠습니다:</Trans>

<Sandpack>

```js App.js
import { useState } from 'react';
import ChatRoom from './ChatRoom.js';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
```

```js ChatRoom.js active
import { Component } from 'react';
import { createConnection } from './chat.js';

export default class ChatRoom extends Component {
  state = {
    serverUrl: 'https://localhost:1234'
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  setupConnection() {
    this.connection = createConnection(
      this.state.serverUrl,
      this.props.roomId
    );
    this.connection.connect();    
  }

  destroyConnection() {
    this.connection.disconnect();
    this.connection = null;
  }

  render() {
    return (
      <>
        <label>
          Server URL:{' '}
          <input
            value={this.state.serverUrl}
            onChange={e => {
              this.setState({
                serverUrl: e.target.value
              });
            }}
          />
        </label>
        <h1>Welcome to the {this.props.roomId} room!</h1>
      </>
    );
  }
}
```

```js chat.js
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
```

```css
input { display: block; margin-bottom: 20px; }
button { margin-left: 10px; }
```

</Sandpack>

First, verify that your [`componentWillUnmount`](#componentwillunmount) does the opposite of [`componentDidMount`.](#componentdidmount) In the above example, that's true: it disconnects the connection that `componentDidMount` sets up. If such logic is missing, add it first.
<Trans>먼저, [`componentWillUnmount`](#componentwillunmount)가 [`componentDidMount`.](#componentdidmount)와 반대 동작을 하는지 확인합니다. 위의 예시에서는 `componentDidMount`가 설정한 연결을 끊어버리는 것이 맞습니다. 이러한 로직이 누락된 경우 먼저 추가하세요.</Trans>

Next, verify that your [`componentDidUpdate`](#componentdidupdate) method handles changes to any props and state you're using in `componentDidMount`. In the above example, `componentDidMount` calls `setupConnection` which reads `this.state.serverUrl` and `this.props.roomId`. This is why `componentDidUpdate` checks whether `this.state.serverUrl` and `this.props.roomId` have changed, and resets the connection if they did. If your `componentDidUpdate` logic is missing or doesn't handle changes to all relevant props and state, fix that first.
<Trans>다음으로, [`componentDidUpdate`](#componentdidupdate) 메서드가 `componentDidMount`에서 사용 중인 모든 props와 state의 변경을 처리하는지 확인합니다. 위 예시에서 `componentDidMount`는 `setupConnection`을 호출하여 `this.state.serverUrl`과 `this.props.roomId`를 읽습니다. 이것이 바로 `componentDidUpdate`가 `this.state.serverUrl`과 `this.props.roomId`가 변경되었는지 확인하고, 변경된 경우 연결을 재설정하는 이유입니다. `componentDidUpdate` 로직이 누락되었거나 모든 관련 props와 state의 변경 사항을 처리하지 않는 경우, 먼저 이 부분을 수정하세요.</Trans>

In the above example, the logic inside the lifecycle methods connects the component to a system outside of React (a chat server). To connect a component to an external system, [describe this logic as a single Effect:](/reference/react/useEffect#connecting-to-an-external-system)
<Trans>위의 예시에서, 생명주기 메서드 내부의 로직은 컴포넌트를 React 외부의 시스템(채팅 서버)에 연결합니다. 컴포넌트를 외부 시스템에 연결하려면 [해당 로직을 하나의 Effect로 설명하세요.](/reference/react/useEffect#connecting-to-an-external-system)</Trans>

```js {6-12}
import { useState, useEffect } from 'react';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);

  // ...
}
```

This [`useEffect`](/reference/react/useEffect) call is equivalent to the logic in the lifecycle methods above. If your lifecycle methods do multiple unrelated things, [split them into multiple independent Effects.](/learn/removing-effect-dependencies#is-your-effect-doing-several-unrelated-things) Here is a complete example you can play with:
<Trans>이 [`useEffect`](/reference/react/useEffect) 호출은 위의 생명주기 메서드의 로직과 동일합니다. 생명주기 메서드가 서로 관련이 없는 여러 가지 작업을 수행하는 경우, [여러 개의 독립적인 Effect로 분할하세요.](/learn/removing-effect-dependencies#is-your-effect-doing-several-unrelated-things) 다음은 전체 예제입니다:</Trans>

<Sandpack>

```js App.js
import { useState } from 'react';
import ChatRoom from './ChatRoom.js';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
```

```js ChatRoom.js active
import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

export default function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
```

```js chat.js
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}
```

```css
input { display: block; margin-bottom: 20px; }
button { margin-left: 10px; }
```

</Sandpack>

<Note>

If your component does not synchronize with any external systems, [you might not need an Effect.](/learn/you-might-not-need-an-effect)
<Trans>컴포넌트가 외부 시스템과 동기화되지 않는 경우, [Effect가 필요하지 않을 수 있습니다.](/learn/you-might-not-need-an-effect)</Trans>

</Note>

---

### Migrating a component with context from a class to a function<Trans>컨텍스트가 있는 컴포넌트를 클래스에서 함수로 마이그레이션하기 </Trans> {/*migrating-a-component-with-context-from-a-class-to-a-function*/}

In this example, the `Panel` and `Button` class components read [context](/learn/passing-data-deeply-with-context) from [`this.context`:](#context)
<Trans>다음 예시에서 `Panel` 및 `Button` 클래스 컴포넌트는 [`this.context`](#context)에서 [컨텍스트](/learn/passing-data-deeply-with-context)를 읽습니다.</Trans>

<Sandpack>

```js
import { createContext, Component } from 'react';

const ThemeContext = createContext(null);

class Panel extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = 'panel-' + theme;
    return (
      <section className={className}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </section>
    );    
  }
}

class Button extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {this.props.children}
      </button>
    );
  }
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}
```

```css
.panel-light,
.panel-dark {
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px;
}
.panel-light {
  color: #222;
  background: #fff;
}

.panel-dark {
  color: #fff;
  background: rgb(23, 32, 42);
}

.button-light,
.button-dark {
  border: 1px solid #777;
  padding: 5px;
  margin-right: 10px;
  margin-top: 10px;
}

.button-dark {
  background: #222;
  color: #fff;
}

.button-light {
  background: #fff;
  color: #222;
}
```

</Sandpack>

When you convert them to function components, replace `this.context` with [`useContext`](/reference/react/useContext) calls:
<Trans>함수 컴포넌트로 변환할 때, `this.context`를 [`useContext`](/reference/react/useContext) 호출로 바꾸세요:</Trans>

<Sandpack>

```js
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}
```

```css
.panel-light,
.panel-dark {
  border: 1px solid black;
  border-radius: 4px;
  padding: 20px;
}
.panel-light {
  color: #222;
  background: #fff;
}

.panel-dark {
  color: #fff;
  background: rgb(23, 32, 42);
}

.button-light,
.button-dark {
  border: 1px solid #777;
  padding: 5px;
  margin-right: 10px;
  margin-top: 10px;
}

.button-dark {
  background: #222;
  color: #fff;
}

.button-light {
  background: #fff;
  color: #222;
}
```

</Sandpack>
