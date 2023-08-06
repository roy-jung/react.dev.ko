---
title: Children
translators: [이나령, 정재남, 고석영]
---

<iframe 
  style={{aspectRatio: 1.7778, width: '100%'}} 
  src="https://www.youtube.com/embed/playlist?list=PLjQV3hketAJkh6BEl0n4PDS_2fBd0cS9v&index=72&start=651"
  title="YouTube video player" 
  frameBorder="0" 
/>

<Pitfall>

Using `Children` is uncommon and can lead to fragile code. [See common alternatives.](#alternatives)
<Trans>`Children`을 사용해야 하는 경우는 드물고, 코드가 취약해질 수 있습니다. [다른 일반적인 대안을 참조하세요.](#alternatives)</Trans>

</Pitfall>

<Intro>

`Children` lets you manipulate and transform the JSX you received as the [`children` prop.](/learn/passing-props-to-a-component#passing-jsx-as-children)
<Trans>`Children`은 [children prop](/learn/passing-props-to-a-component#passing-jsx-as-children)으로 받은 JSX를 조작하고 변형시킬 수 있습니다.</Trans>

```js
const mappedChildren = Children.map(children, child =>
  <div className="Row">
    {child}
  </div>
);

```

</Intro>

<InlineToc />

---

## Reference<Trans>참조</Trans> {/*reference*/}

### `Children.count(children)` {/*children-count*/}

Call `Children.count(children)` to count the number of children in the `children` data structure.
<Trans>Children.count(children)`를 호출하면 `children` 데이터 구조의 자녀 수를 계산합니다.</Trans>

```js RowList.js active
import { Children } from 'react';

function RowList({ children }) {
  return (
    <>
      <h1>Total rows: {Children.count(children)}</h1>
      ...
    </>
  );
}
```

[See more examples below.](#counting-children)

#### Parameters<Trans>매개변수</Trans> {/*children-count-parameters*/}

* `children`: The value of the [`children` prop](/learn/passing-props-to-a-component#passing-jsx-as-children) received by your component.
<Trans outdent>`children`: 컴포넌트가 수신한 [`children` prop](/learn/passing-props-to-a-component#passing-jsx-as-children)의 값입니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*children-count-returns*/}

The number of nodes inside these `children`.
<Trans>이 'children' 내부의 노드 수입니다.</Trans>
#### Caveats<Trans>주의사항</Trans> {/*children-count-caveats*/}

- Empty nodes (`null`, `undefined`, and Booleans), strings, numbers, and [React elements](/reference/react/createElement) count as individual nodes. Arrays don't count as individual nodes, but their children do. **The traversal does not go deeper than React elements:** they don't get rendered, and their children aren't traversed. [Fragments](/reference/react/Fragment) don't get traversed.
<Trans outdent>빈 노드(`null`, `undefined`, 불리언), 문자열, 숫자, [React 엘리먼트](/reference/react/createElement)는 각각 개별 노드로 계산합니다. 배열 자체는 개별 노드로 계산하지 않지만, 배열의 각 요소들은 개별 노드로 계산합니다. **탐색은 React 엘리먼트보다 더 깊게 들어가지 않습니다:** 렌더링되지 않으면 그 자식도 탐색되지 않습니다. [Fragment](/reference/react/Fragment)는 탐색되지 않습니다.</Trans>

---

### `Children.forEach(children, fn, thisArg?)` {/*children-foreach*/}

Call `Children.forEach(children, fn, thisArg?)` to run some code for each child in the `children` data structure.
<Trans>`Children.forEach(children, fn, thisArg?)`를 호출하면 `children` 데이터 구조의 각 자식에 대한 코드를 실행할 수 있습니다.</Trans>

```js RowList.js active
import { Children } from 'react';

function SeparatorList({ children }) {
  const result = [];
  Children.forEach(children, (child, index) => {
    result.push(child);
    result.push(<hr key={index} />);
  });
  // ...
```

[See more examples below.](#running-some-code-for-each-child)
<Trans>[아래에서 더 많은 예시를 확인하세요.](#running-some-code-for-each-child)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*children-foreach-parameters*/}

* `children`: The value of the [`children` prop](/learn/passing-props-to-a-component#passing-jsx-as-children) received by your component.
<Trans>`children`: 컴포넌트가 수신한 [`children` prop](/learn/passing-props-to-a-component#passing-jsx-as-children)의 값.</Trans>

* `fn`: The function you want to run for each child, similar to the [array `forEach` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) callback. It will be called with the child as the first argument and its index as the second argument. The index starts at `0` and increments on each call.
<Trans>`fn`: 각 자식에 대해 실행하려는 함수. [배열 `forEach` 메서드](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 콜백과 유사합니다. 자식을 첫 번째 인자로, 인덱스를 두 번째 인자로 사용하여 호출됩니다. 인덱스는 `0`에서 시작하여 호출할 때마다 증가합니다.</Trans>

* **optional** `thisArg`: The [`this` value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) with which the `fn` function should be called. If omitted, it's `undefined`.
<Trans>**선택적** `thisArg`: `fn` 함수를 호출할 [`this` 값](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this). 생략하면 `undefined`입니다.</Trans>


#### Returns<Trans>반환값</Trans> {/*children-foreach-returns*/}

`Children.forEach` returns `undefined`.
`Children.forEach`는 `undefined`를 반환합니다.

#### Caveats<Trans>주의사항</Trans> {/*children-foreach-caveats*/}

- Empty nodes (`null`, `undefined`, and Booleans), strings, numbers, and [React elements](/reference/react/createElement) count as individual nodes. Arrays don't count as individual nodes, but their children do. **The traversal does not go deeper than React elements:** they don't get rendered, and their children aren't traversed. [Fragments](/reference/react/Fragment) don't get traversed.
<Trans outdent>빈 노드(`null`, `undefined`, 불리언), 문자열, 숫자, [React 엘리먼트](/reference/react/createElement)는 각각 개별 노드로 계산합니다. 배열은 개별 노드로 계산하지 않지만, 배열의 각 요소들은 개별 노드로 계산합니다. **탐색은 React 엘리먼트보다 더 깊게 들어가지 않습니다:** 렌더링되지 않으면 그 자식도 탐색되지 않습니다. [Fragment](/reference/react/Fragment)는 탐색되지 않습니다.</Trans>

---

### `Children.map(children, fn, thisArg?)` {/*children-map*/}

Call `Children.map(children, fn, thisArg?)` to map or transform each child in the `children` data structure.
<Trans>`Children.map(children, fn, thisArg?)`를 호출하면 `children` 데이터 구조의 각 자식을 매핑하거나 변경할 수 있습니다.</Trans>

```js RowList.js active
import { Children } from 'react';

function RowList({ children }) {
  return (
    <div className="RowList">
      {Children.map(children, child =>
        <div className="Row">
          {child}
        </div>
      )}
    </div>
  );
}
```

[See more examples below.](#transforming-children)

#### Parameters<Trans>매개변수</Trans> {/*children-map-parameters*/}

* `children`: The value of the [`children` prop](/learn/passing-props-to-a-component#passing-jsx-as-children) received by your component.
<Trans>`children`: 컴포넌트가 수신한 [`children` prop](/learn/passing-props-to-a-component#passing-jsx-as-children)의 값.</Trans>

* `fn`: The mapping function, similar to the [array `map` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) callback. It will be called with the child as the first argument and its index as the second argument. The index starts at `0` and increments on each call. You need to return a React node from this function. This may be an empty node (`null`, `undefined`, or a Boolean), a string, a number, a React element, or an array of other React nodes.
<Trans>`fn`: [배열 `map` 메서드](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 콜백과 유사한 매핑 함수. 자식을 첫 번째 인수로, 인덱스를 두 번째 인수로 사용하여 호출됩니다. 인덱스는 `0`에서 시작하여 호출할 때마다 증가합니다. 이 함수에서 React 노드를 반환해야 합니다. 빈 노드(`null`, `undefined`, 불리언), 문자열, 숫자, React 엘리먼트, 또는 다른 React 노드의 배열일 수 있습니다.</Trans>

* **optional** `thisArg`: The [`this` value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) with which the `fn` function should be called. If omitted, it's `undefined`.
<Trans>**선택적** `thisArg`: 이 함수를 호출할 [`이름` 값](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this). 생략하면 `undefined`입니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*children-map-returns*/}

If `children` is `null` or `undefined`, returns the same value.
<Trans>`children`이 `null` 또는 `undefined`이면 동일한 값을 반환합니다.</Trans>

Otherwise, returns a flat array consisting of the nodes you've returned from the `fn` function. The returned array will contain all nodes you returned except for `null` and `undefined`.
<Trans>그렇지 않으면 `fn` 함수에서 반환한 노드로 구성된 1차원 배열을 반환합니다. 반환된 배열에는 `null` 및 `undefined`를 제외한 모든 노드가 포함됩니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*children-map-caveats*/}

- Empty nodes (`null`, `undefined`, and Booleans), strings, numbers, and [React elements](/reference/react/createElement) count as individual nodes. Arrays don't count as individual nodes, but their children do. **The traversal does not go deeper than React elements:** they don't get rendered, and their children aren't traversed. [Fragments](/reference/react/Fragment) don't get traversed.
<Trans>빈 노드(`null`, `undefined`, 불리언), 문자열, 숫자, [React 엘리먼트](/reference/react/createElement)는 각각 개별 노드로 계산합니다. 배열은 개별 노드로 계산하지 않지만, 배열의 각 요소들은 개별 노드로 계산합니다. **탐색은 React 엘리먼트보다 더 깊게 들어가지 않습니다:** 렌더링되지 않으면 그 자식도 탐색되지 않습니다. [Fragment](/reference/react/Fragment)는 탐색되지 않습니다.</Trans>

- If you return an element or an array of elements with keys from `fn`, **the returned elements' keys will be automatically combined with the key of the corresponding original item from `children`.** When you return multiple elements from `fn` in an array, their keys only need to be unique locally amongst each other.
<Trans>`fn`에서 키가 있는 엘리먼트 또는 엘리먼트 배열을 반환하면, **반환된 엘리먼트의 키는 `children` 엘리먼트의 해당 원본 항목의 키와 자동으로 결합됩니다**. 배열의 `fn`에서 여러 요소를 반환하는 경우, 해당 요소의 키는 서로 간에만 고유하면 됩니다.</Trans>

---

### `Children.only(children)` {/*children-only*/}


Call `Children.only(children)` to assert that `children` represent a single React element.
<Trans>Children.only(children)`를 호출하면 React에게 `children`이 단일 React 엘리먼트임을 알립니다.</Trans>

```js
function Box({ children }) {
  const element = Children.only(children);
  // ...
```

#### Parameters<Trans>매개변수</Trans> {/*children-only-parameters*/}

* `children`: The value of the [`children` prop](/learn/passing-props-to-a-component#passing-jsx-as-children) received by your component.
<Trans outdent>`children`: 컴포넌트가 수신한 [`children` prop](/learn/passing-props-to-a-component#passing-jsx-as-children)의 값.</Trans>

#### Returns<Trans>반환값</Trans> {/*children-only-returns*/}

If `children` [is a valid element,](/reference/react/isValidElement) returns that element.
<Trans>`children`이 [유효한 엘리먼트인 경우](/reference/react/isValidElement) 해당 엘리먼트를 반환합니다.</Trans>

Otherwise, throws an error.
<Trans>그렇지 않으면 에러를 던집니다.</Trans>
#### Caveats<Trans>주의사항</Trans> {/*children-only-caveats*/}

- This method always **throws if you pass an array (such as the return value of `Children.map`) as `children`.** In other words, it enforces that `children` is a single React element, not that it's an array with a single element.
<Trans outdent>이 메서드는 배열(예: `Children.map`의 반환값)을 `children`으로 전달하면 항상 **에러를 던집니다.** 즉, `children`이 단일 엘리먼트가 있는 배열이 아니라, 단일 React 엘리먼트 자체임을 강제하는 것입니다.</Trans>

---

### `Children.toArray(children)` {/*children-toarray*/}

Call `Children.toArray(children)` to create an array out of the `children` data structure.
<Trans>`Children.toArray(children)`를 호출하면 `children` 데이터 구조에서 배열을 생성할 수 있습니다.</Trans>

```js ReversedList.js active
import { Children } from 'react';

export default function ReversedList({ children }) {
  const result = Children.toArray(children);
  result.reverse();
  // ...
```

#### Parameters<Trans>매개변수</Trans> {/*children-toarray-parameters*/}

* `children`: The value of the [`children` prop](/learn/passing-props-to-a-component#passing-jsx-as-children) received by your component.
<Trans>`children`: 컴포넌트가 수신한 [`children` prop](/learn/passing-props-to-a-component#passing-jsx-as-children)의 값.</Trans>

#### Returns<Trans>반환값</Trans> {/*children-toarray-returns*/}

Returns a flat array of elements in `children`.
<Trans>`children`에 있는 엘리먼트들로 구성된 1차원 배열을 반환합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*children-toarray-caveats*/}

- Empty nodes (`null`, `undefined`, and Booleans) will be omitted in the returned array. **The returned elements' keys will be calculated from the original elements' keys and their level of nesting and position.** This ensures that flattening the array does not introduce changes in behavior.
<Trans outdent>반환된 배열에서 빈 노드(`null`, `undefined`, 불리어)는 생략됩니다. **반환된 요소의 키는 원래 요소의 키와 중첩 수준 및 위치로부터 계산됩니다.** 이렇게 하면 배열을 평평하게 해도 동작에 변화가 생기지 않습니다.</Trans>

---

## Usage<Trans>사용법</Trans> {/*usage*/}

### Transforming children<Trans>children 변환하기</Trans> {/*transforming-children*/}

To transform the children JSX that your component [receives as the `children` prop,](/learn/passing-props-to-a-component#passing-jsx-as-children) call `Children.map`:
<Trans>컴포넌트가 [`children` prop으로 받는](/learn/passing-props-to-a-component#passing-jsx-as-children) children을 JSX로 변환하려면, `Children.map`을 호출하세요.</Trans>

```js {6,10}
import { Children } from 'react';

function RowList({ children }) {
  return (
    <div className="RowList">
      {Children.map(children, child =>
        <div className="Row">
          {child}
        </div>
      )}
    </div>
  );
}
```

In the example above, the `RowList` wraps every child it receives into a `<div className="Row">` container. For example, let's say the parent component passes three `<p>` tags as the `children` prop to `RowList`:
<Trans>위의 예시에서 `RowList`는 수신하는 모든 자식을 `<div className="Row">` 컨테이너로 감쌉니다. 예를 들어, 부모 컴포넌트가 세 개의 `<p>` 태그를 `RowList`에 `children` 프로퍼티로 전달한다고 가정해 봅시다:</Trans>

```js
<RowList>
  <p>This is the first item.</p>
  <p>This is the second item.</p>
  <p>This is the third item.</p>
</RowList>
```

Then, with the `RowList` implementation above, the final rendered result will look like this:
<Trans>그런 다음 위의 `RowList` 구현을 사용하면, 최종 렌더링 결과는 다음과 같이 표시됩니다:</Trans>

```js
<div className="RowList">
  <div className="Row">
    <p>This is the first item.</p>
  </div>
  <div className="Row">
    <p>This is the second item.</p>
  </div>
  <div className="Row">
    <p>This is the third item.</p>
  </div>
</div>
```

`Children.map` is similar to [to transforming arrays with `map()`.](/learn/rendering-lists) The difference is that the `children` data structure is considered *opaque.* This means that even if it's sometimes an array, you should not assume it's an array or any other particular data type. This is why you should use `Children.map` if you need to transform it.
<Trans>`Children.map`은 [`map()`으로 배열을 변환하는 것과 유사합니다.](/learn/rendering-lists) 차이점은 `children` 데이터 구조가 *불명확한 것*으로 간주된다는 것입니다. 즉, 때때로 배열일 수 있다고 하더라도 배열이나 다른 특정 데이터 유형이라고 가정해서는 안 된다는 뜻입니다. 그렇기 때문에 변환이 필요한 경우 `Children.map`을 사용해야 합니다.</Trans>

<Sandpack>

```js
import RowList from './RowList.js';

export default function App() {
  return (
    <RowList>
      <p>This is the first item.</p>
      <p>This is the second item.</p>
      <p>This is the third item.</p>
    </RowList>
  );
}
```

```js RowList.js active
import { Children } from 'react';

export default function RowList({ children }) {
  return (
    <div className="RowList">
      {Children.map(children, child =>
        <div className="Row">
          {child}
        </div>
      )}
    </div>
  );
}
```

```css
.RowList {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}
```

</Sandpack>

<DeepDive>

#### Why is the children prop not always an array?<Trans>children prop이 항상 배열이 아닌 이유는 무엇인가요?</Trans> {/*why-is-the-children-prop-not-always-an-array*/}

In React, the `children` prop is considered an *opaque* data structure. This means that you shouldn't rely on how it is structured. To transform, filter, or count children, you should use the `Children` methods.
<Trans>React에서 `children` prop은 *불명확한* 데이터 구조로 간주됩니다. 즉, 구조화된 방식에 의존해서는 안 된다는 뜻입니다. 자식을 변환, 필터링 또는 카운트하려면 `Children` 메서드를 사용해야 합니다.</Trans>

In practice, the `children` data structure is often represented as an array internally. However, if there is only a single child, then React won't create an extra array since this would lead to unnecessary memory overhead. As long as you use the `Children` methods instead of directly introspecting the `children` prop, your code will not break even if React changes how the data structure is actually implemented.
<Trans>실제로 `children` 데이터 구조는 내부적으로 배열로 표현되는 경우가 많습니다. 하지만 자식이 하나만 있는 경우에는 불필요한 메모리 오버헤드가 발생하기 때문에 React는 추가 배열을 생성하지 않습니다. `children` prop을 직접 내재화하지 않고 `Children` 메서드를 사용하는 한, React가 데이터 구조에 대한 실제 구현 방식을 변경하더라도 코드가 깨지지 않을 것입니다.</Trans>

Even when `children` is an array, `Children.map` has useful special behavior. For example, `Children.map` combines the [keys](/learn/rendering-lists#keeping-list-items-in-order-with-key) on the returned elements with the keys on the `children` you've passed to it. This ensures the original JSX children don't "lose" keys even if they get wrapped like in the example above.
<Trans>또한 `Children.map`에는 `children`이 배열인 경우에도 유용한 특수 동작이 있습니다. 예를 들어, `Children.map`은 반환된 엘리먼트의 [keys](/learn/rendering-lists#keeping-list-items-in-order-with-key)를 전달한 `children`의 키와 결합합니다. 이렇게 하면 위의 예시처럼 감싸더라도 원래 JSX 자식이 키를 "잃어버리지" 않습니다.</Trans>

</DeepDive>

<Pitfall>

The `children` data structure **does not include rendered output** of the components you pass as JSX. In the example below, the `children` received by the `RowList` only contains two items rather than three:
<Trans>`children` 데이터 구조에는 JSX로 전달한 컴포넌트의 **렌더링된 출력이 포함되지 않습니다**. 아래 예시에서 `RowList`가 수신한 `children`에는 3개가 아닌 2개의 항목만 포함되어 있습니다:</Trans>

1. `<p>This is the first item.</p>`
2. `<MoreRows />`

This is why only two row wrappers are generated in this example:
<Trans>이것이 이 예제에서 두 행만 생성되는 이유입니다:</Trans>

<Sandpack>

```js
import RowList from './RowList.js';

export default function App() {
  return (
    <RowList>
      <p>This is the first item.</p>
      <MoreRows />
    </RowList>
  );
}

function MoreRows() {
  return (
    <>
      <p>This is the second item.</p>
      <p>This is the third item.</p>
    </>
  );
}
```

```js RowList.js
import { Children } from 'react';

export default function RowList({ children }) {
  return (
    <div className="RowList">
      {Children.map(children, child =>
        <div className="Row">
          {child}
        </div>
      )}
    </div>
  );
}
```

```css
.RowList {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}
```

</Sandpack>

**There is no way to get the rendered output of an inner component** like `<MoreRows />` when manipulating `children`. This is why [it's usually better to use one of the alternative solutions.](#alternatives)
<Trans>**`children`을 조작할 때 `<MoreRows />`와 같은 내부 컴포넌트의 렌더링된 출력을 얻을 수 있는 방법은 없습니다. 그렇기 때문에 [일반적으로 대안책 중 하나를 사용하는 것이 더 좋습니다.](#alternatives)</Trans>

</Pitfall>

---

### Running some code for each child<Trans>각 자식마다 코드 실행하기</Trans> {/*running-some-code-for-each-child*/}

Call `Children.forEach` to iterate over each child in the `children` data structure. It does not return any value and is similar to the [array `forEach` method.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) You can use it to run custom logic like constructing your own array.
<Trans>`Children.forEach`를 호출하면 `children` 데이터 구조의 각 자식에 대해 반복합니다. 이 메서드는 값을 반환하지 않으며, [배열 `forEach` 메서드와 유사합니다.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 이 메서드를 사용하여 자신만의 배열을 구성하는 등의 사용자 정의 로직을 실행할 수 있습니다.</Trans>

<Sandpack>

```js
import SeparatorList from './SeparatorList.js';

export default function App() {
  return (
    <SeparatorList>
      <p>This is the first item.</p>
      <p>This is the second item.</p>
      <p>This is the third item.</p>
    </SeparatorList>
  );
}
```

```js SeparatorList.js active
import { Children } from 'react';

export default function SeparatorList({ children }) {
  const result = [];
  Children.forEach(children, (child, index) => {
    result.push(child);
    result.push(<hr key={index} />);
  });
  result.pop(); // Remove the last separator
  return result;
}
```

</Sandpack>

<Pitfall>

As mentioned earlier, there is no way to get the rendered output of an inner component when manipulating `children`. This is why [it's usually better to use one of the alternative solutions.](#alternatives)
<Trans>앞서 언급했듯이 `children`을 조작할 때 내부 컴포넌트의 렌더링된 출력을 얻을 수 있는 방법이 없습니다. 그렇기 때문에 [대체 솔루션 중 하나를 사용하는 것이 좋습니다](#대안).</Trans>

</Pitfall>

---

### Counting children<Trans>children 개수 세기</Trans> {/*counting-children*/}

Call `Children.count(children)` to calculate the number of children.
<Trans>`Children.count(children)`를 호출하면 children의 개수를 계산합니다.</Trans>

<Sandpack>

```js
import RowList from './RowList.js';

export default function App() {
  return (
    <RowList>
      <p>This is the first item.</p>
      <p>This is the second item.</p>
      <p>This is the third item.</p>
    </RowList>
  );
}
```

```js RowList.js active
import { Children } from 'react';

export default function RowList({ children }) {
  return (
    <div className="RowList">
      <h1 className="RowListHeader">
        Total rows: {Children.count(children)}
      </h1>
      {Children.map(children, child =>
        <div className="Row">
          {child}
        </div>
      )}
    </div>
  );
}
```

```css
.RowList {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.RowListHeader {
  padding-top: 5px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}
```

</Sandpack>

<Pitfall>

As mentioned earlier, there is no way to get the rendered output of an inner component when manipulating `children`. This is why [it's usually better to use one of the alternative solutions.](#alternatives)
<Trans>앞서 언급했듯이 `children`을 조작할 때 내부 컴포넌트의 렌더링된 출력을 얻을 수 있는 방법이 없습니다. 그렇기 때문에 [대체 솔루션 중 하나를 사용하는 것이 좋습니다](#대안).</Trans>

</Pitfall>

---

### Converting children to an array<Trans>children을 배열로 변환하기</Trans> {/*converting-children-to-an-array*/}

Call `Children.toArray(children)` to turn the `children` data structure into a regular JavaScript array. This lets you manipulate the array with built-in array methods like [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), or [`reverse`.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) 
<Trans>`Children.toArray(children)`를 호출하면 `children` 데이터 구조를 일반 JavaScript 배열로 변환합니다. 이렇게 하면 [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`reverse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)와 같은 빌트인 배열 메서드를 사용하여 조작할 수 있습니다. </Trans>

<Sandpack>

```js
import ReversedList from './ReversedList.js';

export default function App() {
  return (
    <ReversedList>
      <p>This is the first item.</p>
      <p>This is the second item.</p>
      <p>This is the third item.</p>
    </ReversedList>
  );
}
```

```js ReversedList.js active
import { Children } from 'react';

export default function ReversedList({ children }) {
  const result = Children.toArray(children);
  result.reverse();
  return result;
}
```

</Sandpack>

<Pitfall>

As mentioned earlier, there is no way to get the rendered output of an inner component when manipulating `children`. This is why [it's usually better to use one of the alternative solutions.](#alternatives)
<Trans>앞서 언급했듯이 `children`을 조작할 때 내부 컴포넌트의 렌더링된 출력을 얻을 수 있는 방법이 없습니다. 그렇기 때문에 [대체 솔루션 중 하나를 사용하는 것이 좋습니다](#대안).</Trans>

</Pitfall>

---

## Alternatives<Trans>대안</Trans> {/*alternatives*/}

<Note>

This section describes alternatives to the `Children` API (with capital `C`) that's imported like this:
<Trans>이 섹션에서는 다음과 같이 import한 `Children` API(대문자 `C` 포함)에 대한 대안을 소개합니다:</Trans>

```js
import { Children } from 'react';
```

Don't confuse it with [using the `children` prop](/learn/passing-props-to-a-component#passing-jsx-as-children) (lowercase `c`), which is good and encouraged.
<Trans>이를 [`children` prop 사용](/learn/passing-props-to-a-component#passing-jsx-as-children)(소문자 `c`)과 혼동하지 마세요.</Trans>

</Note>

### Exposing multiple components<Trans>여러 컴포넌트 노출하기</Trans> {/*exposing-multiple-components*/}

Manipulating children with the `Children` methods often leads to fragile code. When you pass children to a component in JSX, you don't usually expect the component to manipulate or transform the individual children.
<Trans>`Children` 메서드로 자식을 조작하면 종종 취약한 코드가 생성됩니다. JSX에서 컴포넌트에 자식을 전달할 때, 일반적으로 컴포넌트가 개별 자식을 조작하거나 변형할 것으로 기대하지 않습니다.</Trans>

When you can, try to avoid using the `Children` methods. For example, if you want every child of `RowList` to be wrapped in `<div className="Row">`, export a `Row` component, and manually wrap every row into it like this:
<Trans>가능하면 `Children` 메서드를 사용하지 않도록 하세요. 예를 들어, `RowList`의 모든 자식을 `<div className="Row">`로 래핑하려면, `Row` 컴포넌트를 export한 다음 모든 행을 다음과 같이 수동으로 감싸주세요:</Trans>

<Sandpack>

```js
import { RowList, Row } from './RowList.js';

export default function App() {
  return (
    <RowList>
      <Row>
        <p>This is the first item.</p>
      </Row>
      <Row>
        <p>This is the second item.</p>
      </Row>
      <Row>
        <p>This is the third item.</p>
      </Row>
    </RowList>
  );
}
```

```js RowList.js
export function RowList({ children }) {
  return (
    <div className="RowList">
      {children}
    </div>
  );
}

export function Row({ children }) {
  return (
    <div className="Row">
      {children}
    </div>
  );
}
```

```css
.RowList {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}
```

</Sandpack>

Unlike using `Children.map`, this approach does not wrap every child automatically. **However, this approach has a significant benefit compared to the [earlier example with `Children.map`](#transforming-children) because it works even if you keep extracting more components.** For example, it still works if you extract your own `MoreRows` component:
<Trans>`Children.map`과 달리 이 접근 방식은 모든 자식을 자동으로 감싸주지 않습니다. **하지만 이 접근 방식은 계속 더 많은 컴포넌트를 추출하더라도 잘 작동하기 때문에, [`Children.map`을 사용한 앞의 예제](#transforming-children)에 비해 상당한 이점이 있습니다.** 예를 들어, `MoreRows` 컴포넌트를 추출해도 여전히 작동합니다:</Trans>

<Sandpack>

```js
import { RowList, Row } from './RowList.js';

export default function App() {
  return (
    <RowList>
      <Row>
        <p>This is the first item.</p>
      </Row>
      <MoreRows />
    </RowList>
  );
}

function MoreRows() {
  return (
    <>
      <Row>
        <p>This is the second item.</p>
      </Row>
      <Row>
        <p>This is the third item.</p>
      </Row>
    </>
  );
}
```

```js RowList.js
export function RowList({ children }) {
  return (
    <div className="RowList">
      {children}
    </div>
  );
}

export function Row({ children }) {
  return (
    <div className="Row">
      {children}
    </div>
  );
}
```

```css
.RowList {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}
```

</Sandpack>

This wouldn't work with `Children.map` because it would "see" `<MoreRows />` as a single child (and a single row).
<Trans>이 코드는 `<MoreRows />`를 단일 자식(및 단일 행)으로 "보기" 때문에, `Children.map`에서는 작동하지 않습니다.</Trans>

---

### Accepting an array of objects as a prop<Trans>객체로 구성된 배열을 prop으로 받기</Trans> {/*accepting-an-array-of-objects-as-a-prop*/}

You can also explicitly pass an array as a prop. For example, this `RowList` accepts a `rows` array as a prop:
<Trans>명시적으로 배열을 prop으로 전달할 수도 있습니다. 예를 들어, 이 `RowList`는 `rows` 배열을 프로퍼티로 받습니다:</Trans>

<Sandpack>

```js
import { RowList, Row } from './RowList.js';

export default function App() {
  return (
    <RowList rows={[
      { id: 'first', content: <p>This is the first item.</p> },
      { id: 'second', content: <p>This is the second item.</p> },
      { id: 'third', content: <p>This is the third item.</p> }
    ]} />
  );
}
```

```js RowList.js
export function RowList({ rows }) {
  return (
    <div className="RowList">
      {rows.map(row => (
        <div className="Row" key={row.id}>
          {row.content}
        </div>
      ))}
    </div>
  );
}
```

```css
.RowList {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}
```

</Sandpack>

Since `rows` is a regular JavaScript array, the `RowList` component can use built-in array methods like [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) on it.
<Trans>`row`는 일반 JavaScript 배열이므로 `RowList` 컴포넌트는 [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)과 같은 빌트인 배열 메서드를 사용할 수 있습니다.</Trans>

This pattern is especially useful when you want to be able to pass more information as structured data together with children. In the below example, the `TabSwitcher` component receives an array of objects as the `tabs` prop:
<Trans>이 패턴은 자식과 함께 더 많은 정보를 구조화된 데이터로 전달하고 싶을 때 특히 유용합니다. 아래 예시에서 `TabSwitcher` 컴포넌트는 객체 배열을 `tabs` prop으로 받습니다:</Trans>

<Sandpack>

```js
import TabSwitcher from './TabSwitcher.js';

export default function App() {
  return (
    <TabSwitcher tabs={[
      {
        id: 'first',
        header: 'First',
        content: <p>This is the first item.</p>
      },
      {
        id: 'second',
        header: 'Second',
        content: <p>This is the second item.</p>
      },
      {
        id: 'third',
        header: 'Third',
        content: <p>This is the third item.</p>
      }
    ]} />
  );
}
```

```js TabSwitcher.js
import { useState } from 'react';

export default function TabSwitcher({ tabs }) {
  const [selectedId, setSelectedId] = useState(tabs[0].id);
  const selectedTab = tabs.find(tab => tab.id === selectedId);
  return (
    <>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setSelectedId(tab.id)}
        >
          {tab.header}
        </button>
      ))}
      <hr />
      <div key={selectedId}>
        <h3>{selectedTab.header}</h3>
        {selectedTab.content}
      </div>
    </>
  );
}
```

</Sandpack>

Unlike passing the children as JSX, this approach lets you associate some extra data like `header` with each item. Because you are working with the `tabs` directly, and it is an array, you do not need the `Children` methods.
<Trans>자식을 JSX로 전달하는 것과 달리, 이 접근 방식을 사용하면 `header`와 같은 추가 데이터를 각 항목에 연결할 수 있습니다. `tabs` 배열로 직접 작업하고 있기 때문에 `Children` 메서드가 필요하지 않습니다.</Trans>

---

### Calling a render prop to customize rendering<Trans>render prop을 호출하여 렌더링 커스터마이징하기</Trans> {/*calling-a-render-prop-to-customize-rendering*/}

Instead of producing JSX for every single item, you can also pass a function that returns JSX, and call that function when necessary. In this example, the `App` component passes a `renderContent` function to the `TabSwitcher` component. The `TabSwitcher` component calls `renderContent` only for the selected tab:
<Trans>모든 단일 항목에 대해 JSX를 생성하는 대신 JSX를 반환하는 함수를 전달하고, 필요할 때 해당 함수를 호출할 수도 있습니다. 다음 예시에서는 `App` 컴포넌트가 `renderContent` 함수를 `TabSwitcher` 컴포넌트에 전달합니다. `TabSwitcher` 컴포넌트는 선택한 탭에 대해서만 `renderContent`를 호출합니다:</Trans>

<Sandpack>

```js
import TabSwitcher from './TabSwitcher.js';

export default function App() {
  return (
    <TabSwitcher
      tabIds={['first', 'second', 'third']}
      getHeader={tabId => {
        return tabId[0].toUpperCase() + tabId.slice(1);
      }}
      renderContent={tabId => {
        return <p>This is the {tabId} item.</p>;
      }}
    />
  );
}
```

```js TabSwitcher.js
import { useState } from 'react';

export default function TabSwitcher({ tabIds, getHeader, renderContent }) {
  const [selectedId, setSelectedId] = useState(tabIds[0]);
  return (
    <>
      {tabIds.map((tabId) => (
        <button
          key={tabId}
          onClick={() => setSelectedId(tabId)}
        >
          {getHeader(tabId)}
        </button>
      ))}
      <hr />
      <div key={selectedId}>
        <h3>{getHeader(selectedId)}</h3>
        {renderContent(selectedId)}
      </div>
    </>
  );
}
```

</Sandpack>

A prop like `renderContent` is called a *render prop* because it is a prop that specifies how to render a piece of the user interface. However, there is nothing special about it: it is a regular prop which happens to be a function.
<Trans>`renderContent`와 같은 prop는 사용자 인터페이스의 일부를 렌더링하는 방법을 지정하는 prop이기 때문에 *render prop*이라고 불립니다. 하지만 특별한 점은 없습니다. 함수에 해당하는 일반 prop일 뿐입니다.</Trans>

Render props are functions, so you can pass information to them. For example, this `RowList` component passes the `id` and the `index` of each row to the `renderRow` render prop, which uses `index` to highlight even rows:
<Trans>render prop은 함수이기 때문에 정보를 전달할 수 있습니다. 예를 들어, 다음의 `RowList` 컴포넌트는 각 행의 `id`와 `index`를 `renderRow` render prop에 전달하고, render prop은 `index`를 사용해 짝수 행을 강조 표시합니다:</Trans>

<Sandpack>

```js
import { RowList, Row } from './RowList.js';

export default function App() {
  return (
    <RowList
      rowIds={['first', 'second', 'third']}
      renderRow={(id, index) => {
        return (
          <Row isHighlighted={index % 2 === 0}>
            <p>This is the {id} item.</p>
          </Row> 
        );
      }}
    />
  );
}
```

```js RowList.js
import { Fragment } from 'react';

export function RowList({ rowIds, renderRow }) {
  return (
    <div className="RowList">
      <h1 className="RowListHeader">
        Total rows: {rowIds.length}
      </h1>
      {rowIds.map((rowId, index) =>
        <Fragment key={rowId}>
          {renderRow(rowId, index)}
        </Fragment>
      )}
    </div>
  );
}

export function Row({ children, isHighlighted }) {
  return (
    <div className={[
      'Row',
      isHighlighted ? 'RowHighlighted' : ''
    ].join(' ')}>
      {children}
    </div>
  );
}
```

```css
.RowList {
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  padding: 5px;
}

.RowListHeader {
  padding-top: 5px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}

.Row {
  border: 2px dashed black;
  padding: 5px;
  margin: 5px;
}

.RowHighlighted {
  background: #ffa;
}
```

</Sandpack>

This is another example of how parent and child components can cooperate without manipulating the children.
<Trans>이는 부모와 자식 컴포넌트가 children을 조작하지 않고도 협력할 수 있는 또 다른 예입니다.</Trans>

---

## Troubleshooting<Trans>문제 해결</Trans> {/*troubleshooting*/}

### I pass a custom component, but the `Children` methods don't show its render result<Trans>사용자 정의 컴포넌트를 전달했지만 `Children` 메서드에 렌더링 결과가 표시되지 않습니다</Trans> {/*i-pass-a-custom-component-but-the-children-methods-dont-show-its-render-result*/}

Suppose you pass two children to `RowList` like this:
<Trans>다음과 같이 두 개의 자식을 `RowList`에 전달한다고 가정해 봅시다:</Trans>

```js
<RowList>
  <p>First item</p>
  <MoreRows />
</RowList>
```

If you do `Children.count(children)` inside `RowList`, you will get `2`. Even if `MoreRows` renders 10 different items, or if it returns `null`, `Children.count(children)` will still be `2`. From the `RowList`'s perspective, it only "sees" the JSX it has received. It does not "see" the internals of the `MoreRows` component.
<Trans>`RowList` 내에서 `Children.count(children)`를 수행하면 `2`가 반환됩니다. `MoreRows`가 10개의 다른 항목을 렌더링하거나 `null`을 반환하더라도 `Children.count(children)`는 여전히 `2`가 됩니다. `RowList`의 관점에서는 수신한 JSX만 "볼" 뿐입니다. `MoreRows` 컴포넌트의 내부는 "보지" 못합니다.</Trans>

The limitation makes it hard to extract a component. This is why [alternatives](#alternatives) are preferred to using `Children`.
<Trans>이 제한으로 인해 컴포넌트를 추출하기가 어렵습니다. 이것이 바로 `Children`보다 [대안](#alternatives)을 권장하는 이유입니다.</Trans>
