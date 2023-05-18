---
title: createElement
translators: [조성민, 이승효]
---

<Intro>

`createElement` lets you create a React element. It serves as an alternative to writing [JSX.](/learn/writing-markup-with-jsx)
<Trans>`createElement`를 사용하면 React 엘리먼트를 생성할 수 있습니다. [JSX](/learn/writing-markup-with-jsx)의 대안으로 사용할 수 있습니다.</Trans>

```js
const element = createElement(type, props, ...children)
```

</Intro>

<InlineToc />

---

## Reference<Trans>참조</Trans> {/*reference*/}

### `createElement(type, props, ...children)` {/*createelement*/}

Call `createElement` to create a React element with the given `type`, `props`, and `children`.
<Trans>`createElement`를 호출하면 주어진 `type`, `props`, `children`으로 React 엘리먼트를 생성합니다.</Trans>

```js
import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello'
  );
}
```

[See more examples below.](#usage)
<Trans>[아래에서 더 많은 예시를 확인하세요.](#usage)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*parameters*/}

* `type`: The `type` argument must be a valid React component type. For example, it could be a tag name string (such as `'div'` or `'span'`), or a React component (a function, a class, or a special component like [`Fragment`](/reference/react/Fragment)).
<Trans>`type`: `type` 인수는 유효한 React 컴포넌트 타입이어야 합니다. 예를 들어,태그 이름 문자열 (예: `'div'` 또는 `'span'`) 또는 React 컴포넌트(함수, 클래스 또는 [`Fragment`](/reference/react/Fragment)와 같은 특수 컴포넌트)가 될 수 있습니다.</Trans>

* `props`: The `props` argument must either be an object or `null`. If you pass `null`, it will be treated the same as an empty object. React will create an element with props matching the `props` you have passed. Note that `ref` and `key` from your `props` object are special and will *not* be available as `element.props.ref` and `element.props.key` on the returned `element`. They will be available as `element.ref` and `element.key`.
<Trans>`props`: `props` 인자는 객체이거나 `null` 이어야 합니다. `null`을 전달하면 빈 객체와 동일하게 취급됩니다. React는 전달한 `props`와 일치하는 props를 가진 엘리먼트를 생성합니다. 참고로 `props` 객체의 `ref`와 `key`는 특수하게, 반환된 `element`에서 `element.props.ref`와 `element.props.key`로 사용할 수 없다는 점에 유의하세요. 이들은 `element.ref` 및 `element.key`로 사용할 수 있습니다.</Trans>

**optional** `...children`: Zero or more child nodes. They can be any React nodes, including React elements, strings, numbers, [portals](/reference/react-dom/createPortal), empty nodes (`null`, `undefined`, `true`, and `false`), and arrays of React nodes.
<Trans>**선택적** `...children`:  0 또는 그 이상의 자식 노드. React 엘리먼트, 문자열, 숫자, [portals](/reference/react-dom/createPortal), 빈 노드(`null`, `undefined`, `true`, `false`), React 노드의 배열 등을 포함한 모든 요소들이 React 노드가 될 수 있습니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*returns*/}

`createElement` returns a React element object with a few properties:
<Trans>`createElement`는 몇 가지 프로퍼티가 있는 React 엘리먼트 객체를 반환합니다:</Trans>

* `type`: The `type` you have passed.
<Trans>`type`: 전달해준 `type`.</Trans>

* `props`: The `props` you have passed except for `ref` and `key`. If the `type` is a component with legacy `type.defaultProps`, then any missing or undefined `props` will get the values from `type.defaultProps`.
<Trans>`props`: 전달해준 `props`(`ref`와 `key` 제외). `type`이 레거시인 `type.defaultProps`가 있는 컴포넌트인 경우, 누락되었거나 정의되지 않은 `props`는 `type.defaultProps`의 값을 가져옵니다.</Trans>

* `ref`: The `ref` you have passed. If missing, `null`.
<Trans>`ref`: 전달한 `ref`. 없으면 `null` </Trans>

* `key`: The `key` you have passed, coerced to a string. If missing, `null`.
<Trans>`key`: 전달한 `key`. 문자열로 형변환 됩니다. 없다면 `null` </Trans>

Usually, you'll return the element from your component or make it a child of another element. Although you may read the element's properties, it's best to treat every element as opaque after it's created, and only render it.
<Trans>일반적으로 컴포넌트에서 엘리먼트를 반환하거나 다른 엘리먼트의 자식으로 만들 것입니다. 엘리먼트의 프로퍼티를 읽을 수는 있지만, 생성된 후에는 모든 엘리먼트를 불명확하게 처리하고, 렌더링만 하는 것이 가장 좋습니다.</Trans>


#### Caveats<Trans>주의사항</Trans> {/*caveats*/}

* You must **treat React elements and their props as [immutable](https://en.wikipedia.org/wiki/Immutable_object)** and never change their contents after creation. In development, React will [freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) the returned element and its `props` property shallowly to enforce this.
<Trans>**React 엘리먼트와 그 prop**는 [불변값](https://ko.wikipedia.org/wiki/%EB%B6%88%EB%B3%80%EA%B0%9D%EC%B2%B4)으로 취급해야 하며, 생성 후에는 절대 내용을 변경해서는 안 됩니다. 개발 환경에서 React는 이를 강제하기 위해 반환된 엘리먼트와 그 `prop` 프로퍼티를 얕게 [freeze](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)합니다.</Trans>

* When you use JSX, **you must start a tag with a capital letter to render your own custom component.** In other words, `<Something />` is equivalent to `createElement(Something)`, but `<something />` (lowercase) is equivalent to `createElement('something')` (note it's a string, so it will be treated as a built-in HTML tag).
<Trans>JSX를 사용할 때 **사용자 정의 컴포넌트를 렌더링하려면 태그를 대문자로 시작해야 합니다.** 즉, `<Something />`은 `createElement(Something)`과 같지만 `<something />`(소문자)는 `createElement('something')`과 같습니다(문자열이므로 내장된 HTML 태그로 취급됨).</Trans>

* You should only **pass children as multiple arguments to `createElement` if they are all statically known,** like `createElement('h1', {}, child1, child2, child3)`. If your children are dynamic, pass the entire array as the third argument: `createElement('ul', {}, listItems)`. This ensures that React will [warn you about missing `key`s](/learn/rendering-lists#keeping-list-items-in-order-with-key) for any dynamic lists. For static lists this is not necessary because they never reorder.
<Trans>**`createElement`에 자식들을 여러 개의 인수로 전달하는 것은 오직** `createElement('h1', {}, child1, child2, child3)`와 같이 **모든 자식이 정적으로 알려진 경우에 한해야 합니다.** 자식들이 동적인 경우, `createElement('ul', {}, listItems).` 처럼 세 번째 인자로 전체 배열을 전달하세요. 이렇게 해야만 모든 동적 리스트에 대해 React가 [`key` 누락에 대해 경고](/learn/rendering-lists#keeping-list-items-in-order-with-key)하는 것을 보장할 수 있습니다. 정적 리스트의 경우 순서가 바뀌지 않으므로 이 작업이 필요하지 않습니다.</Trans>

---

## Usage<Trans>사용법</Trans> {/*usage*/}

### Creating an element without JSX<Trans>JSX 없이 엘리먼트 생성하기</Trans> {/*creating-an-element-without-jsx*/}

If you don't like [JSX](/learn/writing-markup-with-jsx) or can't use it in your project, you can use `createElement` as an alternative.
<Trans>[JSX](/learn/writing-markup-with-jsx) 가 마음에 들지 않거나 프로젝트에 사용할 수 없는 경우 `createElement`를 대안으로 사용할 수 있습니다.</Trans>

To create an element without JSX, call `createElement` with some <CodeStep step={1}>type</CodeStep>, <CodeStep step={2}>props</CodeStep>, and <CodeStep step={3}>children</CodeStep>:
<Trans>JSX 없이 element를 생성하려면 <CodeStep step={1}>type</CodeStep>, <CodeStep step={2}>props</CodeStep> 및 <CodeStep step={3}>children</CodeStep>과 함께 `createElement`를 호출하세요:</Trans>

```js [[1, 5, "'h1'"], [2, 6, "{ className: 'greeting' }"], [3, 7, "'Hello ',"], [3, 8, "createElement('i', null, name),"], [3, 9, "'. Welcome!'"]]
import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
}
```

The <CodeStep step={3}>children</CodeStep> are optional, and you can pass as many as you need (the example above has three children). This code will display a `<h1>` header with a greeting. For comparison, here is the same example rewritten with JSX:
<Trans><CodeStep step={3}>children</CodeStep>은 선택 사항이며 필요한 만큼 전달할 수 있습니다(위 예시에는 세 개의 children이 있습니다). 이 코드는 인사말이 포함된 `<h1>` 헤더를 표시합니다. 비교를 위해 동일한 예제를 JSX로 재작성했습니다:</Trans>

```js [[1, 3, "h1"], [2, 3, "className=\\"greeting\\""], [3, 4, "Hello <i>{name}</i>. Welcome!"], [1, 5, "h1"]]
function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}
```

To render your own React component, pass a function like `Greeting` as the <CodeStep step={1}>type</CodeStep> instead of a string like `'h1'`:
<Trans>커스텀 React 컴포넌트를 렌더링하려면 `'h1'`과 같은 문자열 대신 `Greeting`과 같은 함수를 <CodeStep step={1}>type</CodeStep>으로 전달하세요:</Trans>

```js [[1, 2, "Greeting"], [2, 2, "{ name: 'Taylor' }"]]
export default function App() {
  return createElement(Greeting, { name: 'Taylor' });
}
```

With JSX, it would look like this:
<Trans>JSX를 사용하면 다음과 같이 표시됩니다:</Trans>

```js [[1, 2, "Greeting"], [2, 2, "name=\\"Taylor\\""]]
export default function App() {
  return <Greeting name="Taylor" />;
}
```

Here is a complete example written with `createElement`:
<Trans>다음은 `createElement`로 작성한 예시 코드입니다:</Trans>

<Sandpack>

```js
import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
}

export default function App() {
  return createElement(
    Greeting,
    { name: 'Taylor' }
  );
}
```

```css
.greeting {
  color: darkgreen;
  font-family: Georgia;
}
```

</Sandpack>

And here is the same example written using JSX:
<Trans>다음은 JSX를 사용하여 작성한 동일한 예시입니다:</Trans>

<Sandpack>

```js
function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}

export default function App() {
  return <Greeting name="Taylor" />;
}
```

```css
.greeting {
  color: darkgreen;
  font-family: Georgia;
}
```

</Sandpack>

Both coding styles are fine, so you can use whichever one you prefer for your project. The main benefit of using JSX compared to `createElement` is that it's easy to see which closing tag corresponds to which opening tag.
<Trans>두 코딩 스타일 모두 괜찮으며, 선호하는 스타일을 프로젝트에 사용할 수 있습니다. `createElement`에 비해 JSX를 사용할 때의 주요 이점은, 닫는 태그가 어떤 여는 태그에 대응하는지 쉽게 확인할 수 있다는 것입니다.</Trans>

<DeepDive>

#### What is a React element, exactly?<Trans>React 엘리먼트란 정확히 무엇인가요?</Trans> {/*what-is-a-react-element-exactly*/}

An element is a lightweight description of a piece of the user interface. For example, both `<Greeting name="Taylor" />` and `createElement(Greeting, { name: 'Taylor' })` produce an object like this:
<Trans>엘리먼트는 사용자 인터페이스의 일부에 대한 축약 정보입니다. 예를 들어, `<Greeting name="Taylor" />`와 `createElement(Greeting, { name: 'Taylor' })`는 모두 다음과 같은 객체를 생성합니다:</Trans>

```js
// Slightly simplified
{
  type: Greeting,
  props: {
    name: 'Taylor'
  },
  key: null,
  ref: null,
}
```

**Note that creating this object does not render the `Greeting` component or create any DOM elements.**
<Trans>**이 객체를 생성해도 `Greeting` 컴포넌트가 렌더링되거나 DOM 요소가 생성되지는 않습니다.**</Trans>

A React element is more like a description--an instruction for React to later render the `Greeting` component. By returning this object from your `App` component, you tell React what to do next.
<Trans>React 엘리먼트는 나중에 `Greeting` 컴포넌트를 렌더링하기 위한 React의 지침서에 가깝습니다. `App` 컴포넌트에서 이 객체를 반환함으로써 React에게 다음에 수행할 작업을 지시할 수 있습니다.</Trans>

Creating elements is extremely cheap so you don't need to try to optimize or avoid it.
<Trans>엘리먼트 생성 비용은 매우 저렴하므로 최적화하거나 피하려고 노력할 필요가 없습니다.</Trans>

</DeepDive>
