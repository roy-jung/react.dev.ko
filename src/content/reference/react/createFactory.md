---
title: createFactory
translators: [정재남]
---

<Deprecated>

This API will be removed in a future major version of React. [See the alternatives.](#alternatives)
<Trans>이 API는 향후 React의 주요 버전에서 제거될 예정입니다. [대안을 확인하세요.](#alternatives)</Trans>
</Deprecated>

<Intro>

`createFactory` lets you create a function that produces React elements of a given type.
<Trans>`createFactory`를 사용하면 주어진 타입의 React 엘리먼트를 생성하는 함수를 만들 수 있습니다.</Trans>

```js
const factory = createFactory(type)
```

</Intro>

<InlineToc />

---

## Reference<Trans>참조</Trans> {/*reference*/}

### `createFactory(type)` {/*createfactory*/}

Call `createFactory(type)` to create a factory function which produces React elements of a given `type`.
<Trans>`createFactory(type)`을 호출하여 주어진 `type`의 React 엘리먼트를 생성하는 함수를 만드세요.</Trans>

```js
import { createFactory } from 'react';

const button = createFactory('button');
```

Then you can use it to create React elements without JSX:
<Trans>그러면 JSX 없이 React 엘리먼트를 생성하는 데에 사용할 수 있습니다.</Trans>

```js
export default function App() {
  return button({
    onClick: () => {
      alert('Clicked!')
    }
  }, 'Click me');
}
```

[See more examples below.](#usage)
<Trans>[아래에서 더 많은 예시를 확인하세요.](#usage)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*parameters*/}

* `type`: The `type` argument must be a valid React component type. For example, it could be a tag name string (such as `'div'` or `'span'`), or a React component (a function, a class, or a special component like [`Fragment`](/reference/react/Fragment)).
<Trans outdent>`type`: `type` 인수는 유효한 React 컴포넌트 타입이어야 합니다. 예를 들어, 태그 이름 문자열(예: `'div'` 또는 `'span'` 등)이나 React 컴포넌트(함수, 클래스, [`Fragment`](/reference/react/Fragment)와 같은 특수 컴포넌트 등)이 될 수 있습니다.</Trans>
#### Returns<Trans>반환값</Trans> {/*returns*/}

Returns a factory function. That factory function receives a `props` object as the first argument, followed by a list of `...children` arguments, and returns a React element with the given `type`, `props` and `children`.
<Trans>팩토리 함수를 반환합니다. 이 팩토리 함수는 첫 번째 인자로 `props` 객체와 '...children` 인자 목록을 받고, 주어진 `type`, `props`, `children`을 가진 React 엘리먼트를 반환합니다.</Trans>

---

## Usage<Trans>사용법</Trans> {/*usage*/}

### Creating React elements with a factory {/*creating-react-elements-with-a-factory*/}

Although most React projects use [JSX](/learn/writing-markup-with-jsx) to describe the user interface, JSX is not required. In the past, `createFactory` used to be one of the ways you could describe the user interface without JSX.
<Trans>대부분의 React 프로젝트는 사용자 인터페이스를 기술하는 데에 [JSX](/learn/writing-markup-with-jsx)를 사용하지만, JSX가 반드시 필요한 것은 아닙니다. 과거에는 JSX 없이도 사용자 인터페이스를 설명할 수 있는 방법 중 하나로 `createFactory`를 사용했습니다.</Trans>

Call `createFactory` to create a *factory function* for a specific element type like `'button'`:
<Trans>`createFactory`를 호출하면 `button`과 같은 특정 엘리먼트 유형에 대한 *팩토리 함수*를 생성할 수 있습니다:</Trans>

```js
import { createFactory } from 'react';

const button = createFactory('button');
```

Calling that factory function will produce React elements with the props and children you have provided:
<Trans>팩토리 함수를 호출하면 제공한 props 및 자식이 있는 React 엘리먼트를 생성합니다:</Trans>

<Sandpack>

```js src/App.js
import { createFactory } from 'react';

const button = createFactory('button');

export default function App() {
  return button({
    onClick: () => {
      alert('Clicked!')
    }
  }, 'Click me');
}
```

</Sandpack>

This is how `createFactory` was used as an alternative to JSX. However, `createFactory` is deprecated, and you should not call `createFactory` in any new code. See how to migrate away from `createFactory` below.
<Trans>이것이 JSX의 대안으로 `createFactory`가 사용된 방식입니다. 그러나 `createFactory`는 지원이 중단되었으므로, 새 코드에서는 `createFactory`를 호출해서는 안 됩니다. 아래에서 `createFactory`를 마이그레이션하는 방법을 참조하세요.</Trans>

---

## Alternatives<Trans>대안</Trans> {/*alternatives*/}

### Copying `createFactory` into your project<Trans>프로젝트에 `createFactory` 복사하기</Trans> {/*copying-createfactory-into-your-project*/}

If your project has many `createFactory` calls, copy this `createFactory.js` implementation into your project:
<Trans>프로젝트에 `createFactory` 호출이 많은 경우, 이 `createFactory.js` 구현을 프로젝트에 복사하세요:</Trans>

<Sandpack>

```js src/App.js
import { createFactory } from './createFactory.js';

const button = createFactory('button');

export default function App() {
  return button({
    onClick: () => {
      alert('Clicked!')
    }
  }, 'Click me');
}
```

```js src/createFactory.js
import { createElement } from 'react';

export function createFactory(type) {
  return createElement.bind(null, type);
}
```

</Sandpack>

This lets you keep all of your code unchanged except the imports.
<Trans>이렇게 하면 import를 제외한 모든 코드를 변경하지 않고 유지할 수 있습니다.</Trans>

---

### Replacing `createFactory` with `createElement`<Trans>`createFactory`를 `createElement`로 바꾸기</Trans> {/*replacing-createfactory-with-createelement*/}

If you have a few `createFactory` calls that you don't mind porting manually, and you don't want to use JSX, you can replace every call a factory function with a [`createElement`](/reference/react/createElement) call. For example, you can replace this code:
<Trans>수동으로 포팅해도 괜찮을 만큼 적은 `createFactory` 호출이 있고, 여전히 JSX를 사용하고 싶지 않다면, 팩토리 함수의 모든 호출을 [`createElement`](/reference/react/createElement) 호출로 대체할 수 있습니다. 예를 들어, 다음과 같이 할 수 있습니다:</Trans>

```js {1,3,6}
import { createFactory } from 'react';

const button = createFactory('button');

export default function App() {
  return button({
    onClick: () => {
      alert('Clicked!')
    }
  }, 'Click me');
}
```

with this code:
<Trans>위 코드를 다음과 같이 바꾸세요:</Trans>


```js {1,4}
import { createElement } from 'react';

export default function App() {
  return createElement('button', {
    onClick: () => {
      alert('Clicked!')
    }
  }, 'Click me');
}
```

Here is a complete example of using React without JSX:
<Trans>다음은 JSX 없이 React를 사용하는 완성된 예시입니다:</Trans>

<Sandpack>

```js src/App.js
import { createElement } from 'react';

export default function App() {
  return createElement('button', {
    onClick: () => {
      alert('Clicked!')
    }
  }, 'Click me');
}
```

</Sandpack>

---

### Replacing `createFactory` with JSX<Trans>`createFactory`를 JSX로 교체하기</Trans> {/*replacing-createfactory-with-jsx*/}

Finally, you can use JSX instead of `createFactory`. This is the most common way to use React:
<Trans>마지막으로, `createFactory` 대신 JSX를 사용할 수 있습니다. 이것은 React를 사용하는 가장 일반적인 방법입니다:</Trans>

<Sandpack>

```js src/App.js
export default function App() {
  return (
    <button onClick={() => {
      alert('Clicked!');
    }}>
      Click me
    </button>
  );
};
```

</Sandpack>

<Pitfall>

Sometimes, your existing code might pass some variable as a `type` instead of a constant like `'button'`:
<Trans>때론, 기존 코드에서 `button`과 같은 상수 대신 `type`으로 일부 변수를 전달했을 수도 있습니다:</Trans>

```js {3}
function Heading({ isSubheading, ...props }) {
  const type = isSubheading ? 'h2' : 'h1';
  const factory = createFactory(type);
  return factory(props);
}
```

To do the same in JSX, you need to rename your variable to start with an uppercase letter like `Type`:
<Trans>JSX에서 동일한 작업을 수행하려면 변수 이름을 'Type'과 같이 대문자로 시작하도록 변경해야 합니다:</Trans>

```js {2,3}
function Heading({ isSubheading, ...props }) {
  const Type = isSubheading ? 'h2' : 'h1';
  return <Type {...props} />;
}
```

Otherwise React will interpret `<type>` as a built-in HTML tag because it is lowercase.
<Trans>그렇지 않으면 React는 `<type>`이 소문자이기 때문에 HTML 빌트인 태그로 해석합니다.</Trans>

</Pitfall>
