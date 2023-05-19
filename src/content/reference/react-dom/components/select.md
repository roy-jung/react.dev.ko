---
title: "<select>"
translators: [원주혜, 이나령, 정재남]
---

<Intro>

The [built-in browser `<select>` component](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) lets you render a select box with options.
<Trans>[브라우저 빌트인 `<select>` 컴포넌트](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)로 옵션들과 함께 셀렉트 박스를 렌더링할 수 있습니다.</Trans>

```js
<select>
  <option value="someOption">Some option</option>
  <option value="otherOption">Other option</option>
</select>
```

</Intro>

<InlineToc />

---

## Reference<Trans>참조</Trans> {/*reference*/}

### `<select>` {/*select*/}

To display a select box, render the [built-in browser `<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) component.
<Trans>셀렉트 박스를 표시하려면, [브라우저 빌트인 `<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) 컴포넌트를 렌더링하세요.</Trans>

```js
<select>
  <option value="someOption">Some option</option>
  <option value="otherOption">Other option</option>
</select>
```

[See more examples below.](#usage)
<Trans>[아래에서 더 많은 예시를 확인하세요.](#usage)</Trans>

#### Props {/*props*/}

`<select>` supports all [common element props.](/reference/react-dom/components/common#props)
<Trans>`<select>`는 모든 [공통 엘리먼트의 props](/reference/react-dom/components/common#props)를 지원합니다.</Trans>

You can [make a select box controlled](#controlling-a-select-box-with-a-state-variable) by passing a `value` prop:
<Trans>`value` prop을 전달함으로써 [이를 제어 컴포넌트가 되게 할 수 있습니다](#controlling-a-text-area-with-a-state-variable):</Trans>

* `value`: A string (or an array of strings for [`multiple={true}`](#enabling-multiple-selection)). Controls which option is selected. Every value string match the `value` of some `<option>` nested inside the `<select>`.
<Trans outdent>`value`: 문자열(혹은 [`multiple={true}`](#enabling-multiple-selection)일 경우 문자열로 구성된 배열). 어떤 옵션이 선택되는지를 제어합니다. 각 문자열 값은 `<select>` 안에 있는 `<option>`들의 `value`와 일치합니다.</Trans>

When you pass `value`, you must also pass an `onChange` handler that updates the passed value.
<Trans>`value`를 전달할 때는 전달된 value를 업데이트 하는 `onChange` 핸들러도 함께 전달해야 합니다. </Trans>

If your `<select>` is uncontrolled, you may pass the `defaultValue` prop instead:
<Trans>`<select>`가 비제어 컴포넌트인 경우에는, 대신 `defaultValue`를 전달할 수 있습니다:</Trans>

* `defaultValue`: A string (or an array of strings for [`multiple={true}`](#enabling-multiple-selection)). Specifies [the initially selected option.](#providing-an-initially-selected-option)
<Trans outdent>`defaultValue`: 문자열(혹은 [`multiple={true}`](#enabling-multiple-selection)일 경우 문자열로 구성된 배열). [초기 선택값](#providing-an-initially-selected-option)을 지정합니다.</Trans>

These `<select>` props are relevant both for uncontrolled and controlled select boxes:
<Trans>다음 `<select>` prop들은 비제어 및 제어 컴포넌트 모두에 영향을 미칩니다:</Trans>

* [`autoComplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-autocomplete): A string. Specifies one of the possible [autocomplete behaviors.](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values)
<Trans>[`autoComplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-autocomplete): 문자열. 가능한 [자동 완성 동작](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values)을 지정합니다.</Trans>

* [`autoFocus`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-autofocus): A boolean. If `true`, React will focus the element on mount.
<Trans>[`autoFocus`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-autofocus): 불리언. `true`일 경우 마운트시 엘리먼트에 초점이 맞춰집니다.</Trans>

* `children`: `<select>` accepts [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option), [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup), and [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup) components as children. You can also pass your own components as long as they eventually render one of the allowed components. If you pass your own components that eventually render `<option>` tags, each `<option>` you render must have a `value`.
<Trans>`children`: `<select>` 는 [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option), [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup), [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup) 컴포넌트를 자식으로 받습니다. 최종적으로 위 허용된 컴포넌트들 중 하나(`<option>`, `<optgroup`, `<datalist>`)를 렌더링하는 컴포넌트도 괜찮습니다. `option` 태그들을 렌더링하는 컴포넌트의 경우, 각 `<option>`에는 반드시 `value`가 있어야 합니다.</Trans>

* [`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-disabled): A boolean. If `true`, the select box will not be interactive and will appear dimmed.
<Trans>[`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-disabled): 불리언. `true`일 경우, 입력이 비활성화되고 흐릿하게 표시됩니다.</Trans>

* [`form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-form): A string. Specifies the `id` of the `<form>` this select box belongs to. If omitted, it's the closest parent form.
<Trans>[`form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-form): 문자열. 이 셀렉트 박스가 속한 `<form>`의 `id`를 지정합니다. 생략하면 가장 가까운 상위 form이 됩니다.</Trans>

* [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple): A boolean. If `true`, the browser allows [multiple selection.](#enabling-multiple-selection)
<Trans>[`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple): 불리언. `true`일 경우, [여러 옵션을 선택](#enabling-multiple-selection)할 수 있습니다.</Trans>

* [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-name): A string. Specifies the name for this select box that's [submitted with the form.](#reading-the-select-box-value-when-submitting-a-form)
<Trans>[`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name): 문자열. [폼 제출시](#reading-the-select-box-value-when-submitting-a-form) 해당 셀렉트 박스의 이름을 지정합니다.</Trans>

* `onChange`: An [`Event` handler](/reference/react-dom/components/common#event-handler) function. Required for [controlled select boxes.](#controlling-a-select-box-with-a-state-variable) Fires immediately when the user picks a different option. Behaves like the browser [`input` event.](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
<Trans>`onChange`: [이벤트 핸들러](reference/react-dom/components/common#event-handler). [제어 컴포넌트](#controlling-a-text-area-with-a-state-variable)로 사용할 때 필요합니다. 사용자가 다른 옵션을 선택하는 즉시 실행됩니다. 브라우저의 [`input` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)처럼 동작합니다.</Trans>

* `onChangeCapture`: A version of `onChange` that fires in the [capture phase.](/learn/responding-to-events#capture-phase-events)
<Trans>`onChangeCapture`: [캡쳐 단계](learn/responding-to-events#capture-phase-events)에 실행되는 버전의 `onChange`입니다.</Trans>

* [`onInput`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event): An [`Event` handler](/reference/react-dom/components/common#event-handler) function. Fires immediately when the value is changed by the user. For historical reasons, in React it is idiomatic to use `onChange` instead which works similarly.
<Trans>[`onInput`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event): [이벤트 핸들러](reference/react-dom/components/common#event-handler). 사용자에 의해 값이 변결될 때마다 실행됩니다. 역사적인 이유로 React에서는 일반적으로 비슷하게 작동하는 `onChange`를 대신 사용합니다.</Trans>

* `onInputCapture`: A version of `onInput` that fires in the [capture phase.](/learn/responding-to-events#capture-phase-events)
<Trans>`onInputCapture`: [캡쳐 단계](learn/responding-to-events#capture-phase-events)에 실행되는 버전의 `onInput`입니다.</Trans>

* [`onInvalid`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event): An [`Event` handler](/reference/react-dom/components/common#event-handler) function. Fires if an input fails validation on form submit. Unlike the built-in `invalid` event, the React `onInvalid` event bubbles.
<Trans>[`onInvalid`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event): [이벤트 핸들러](reference/react-dom/components/common#event-handler). 폼 제출시 유효성 검사에 실패하면 발생합니다. 빌트인 `invalid` 이벤트와는 달리, React `onInvalid` 이벤트는 버블이 발생합니다.</Trans>

* `onInvalidCapture`: A version of `onInvalid` that fires in the [capture phase.](/learn/responding-to-events#capture-phase-events)
<Trans>`onInvalidCapture`: [캡쳐 단계](learn/responding-to-events#capture-phase-events)에 실행되는 버전의 `onInvalid`입니다.</Trans>

* [`required`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-required): A boolean. If `true`, the value must be provided for the form to submit.
<Trans>[`required`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-required): 불리언. `true`일 경우 form 제출시 값이 있어야 합니다.</Trans>

* [`size`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-size): A number. For `multiple={true}` selects, specifies the preferred number of initially visible items.
<Trans>[`size`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-size): 숫자. `multiple={true}`인 경우 초기에 보여줄 항목 수를 지정합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*caveats*/}

- Unlike in HTML, passing a `selected` attribute to `<option>` is not supported. Instead, use [`<select defaultValue>`](#providing-an-initially-selected-option) for uncontrolled select boxes and [`<select value>`](#controlling-a-select-box-with-a-state-variable) for controlled select boxes.
<Trans>HTML과 달리, `<option>`에 `selected` 속성을 전달하는 것은 지원되지 않습니다. 대신, 비제어 컴포넌트의 경우 [`<select defaultValue>`](#providing-an-initially-selected-option)를, 제어 컴포넌트의 경우 [`<select value>`](#controlling-a-select-box-with-a-state-variable)를 사용하세요.</Trans>

- If a select box receives a `value` prop, it will be [treated as controlled.](#controlling-a-select-box-with-a-state-variable)
<Trans>문자열 `value` prop을 제공하면 [제어 컴포넌트로 취급됩니다.](#controlling-a-text-area-with-a-state-variable)</Trans>

- A select box can't be both controlled and uncontrolled at the same time.
<Trans>제어 컴포넌트이면서 동시에 비제어 컴포넌트일 수는 없습니다.</Trans>

- A select box cannot switch between being controlled or uncontrolled over its lifetime.
<Trans>생명주기 동안 제어 컴포넌트와 비제어 컴포넌트 사이를 전환할 수 없습니다.</Trans>

- Every controlled select box needs an `onChange` event handler that synchronously updates its backing value.
<Trans>제어컴포넌트는 값을 동기적으로 업데이트 하는 `onChange` 이벤트 핸들러가 필요합니다.</Trans>

---

## Usage<Trans>사용법</Trans> {/*usage*/}

### Displaying a select box with options<Trans>option들과 함께 셀렉트 박스 표시하기</Trans> {/*displaying-a-select-box-with-options*/}

Render a `<select>` with a list of `<option>` components inside to display a select box. Give each `<option>` a `value` representing the data to be submitted with the form.
<Trans>셀렉트 박스를 표시하려면 `<option>` 컴포넌트 목록을 `<select>` 안에 넣어 렌더하세요. 각 `<option>`에는 폼 제출시 데이터가 될 `value`가 있어야 합니다.</Trans>
<Sandpack>

```js
export default function FruitPicker() {
  return (
    <label>
      Pick a fruit:
      <select name="selectedFruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </label>
  );
}
```

```css
select { margin: 5px; }
```

</Sandpack>  

---

### Providing a label for a select box<Trans>셀렉트 박스에 label 제공하기</Trans> {/*providing-a-label-for-a-select-box*/}

Typically, you will place every `<select>` inside a [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) tag. This tells the browser that this label is associated with that select box. When the user clicks the label, the browser will automatically focus the select box. It's also essential for accessibility: a screen reader will announce the label caption when the user focuses the select box.
<Trans>흔히 `<select>`를 `<label>` 태그 안에 위치시킵니다. 이렇게 하면 해당 label이 셀렉트 박스와 연결되어 있음을 의미하게 됩니다. 사용자가 label을 클릭하면 브라우저가 셀렉트 박스에 초점을 맞춥니다. 스크린 리더는 사용자가 셀렉트 박스에 초점을 맞추면 label 캡션을 읽어주므로, 접근성을 위해서도 이렇게 하는 것이 필수적입니다.</Trans>

If you can't nest `<select>` into a `<label>`, associate them by passing the same ID to `<select id>` and [`<label htmlFor>`.](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor) To avoid conflicts between multiple instances of one component, generate such an ID with [`useId`.](/reference/react/useId)
<Trans>`<select>`를 `<label>`에 넣을 수 없는 경우에는, `<select id>`와 [`<label htmlFor>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor)에 동일한 ID를 전달하여 연결하세요. 한 컴포넌트에서 여러 인스턴스간의 충돌을 피하기 위해서는 다음과 같이 [`useId`](reference/react/useId)로 ID를 생성하세요.</Trans>

<Sandpack>

```js
import { useId } from 'react';

export default function Form() {
  const vegetableSelectId = useId();
  return (
    <>
      <label>
        Pick a fruit:
        <select name="selectedFruit">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <hr />
      <label htmlFor={vegetableSelectId}>
        Pick a vegetable:
      </label>
      <select id={vegetableSelectId} name="selectedVegetable">
        <option value="cucumber">Cucumber</option>
        <option value="corn">Corn</option>
        <option value="tomato">Tomato</option>
      </select>
    </>
  );
}
```

```css
select { margin: 5px; }
```

</Sandpack>


---

### Providing an initially selected option<Trans>초기 선택 옵션 제공하기</Trans> {/*providing-an-initially-selected-option*/}

By default, the browser will select the first `<option>` in the list. To select a different option by default, pass that `<option>`'s `value` as the `defaultValue` to the `<select>` element.
<Trans>기본적으로 브라우저는 첫번째 `<option>`을 기본값으로 선택합니다. 만약 다른 옵션을 기본값으로 선택하고 싶다면, 해당 `<option>`의 `value`를 `<select>`의 `defaultValue`로 전달하세요.</Trans>

<Sandpack>

```js
export default function FruitPicker() {
  return (
    <label>
      Pick a fruit:
      <select name="selectedFruit" defaultValue="orange">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </label>
  );
}
```

```css
select { margin: 5px; }
```

</Sandpack>  

<Pitfall>

Unlike in HTML, passing a `selected` attribute to an individual `<option>` is not supported.
<Trans>HTML과 달리, 개별 `<option>`에 `selected` 속성을 전달하는 것은 지원되지 않습니다.</Trans>
</Pitfall>

---

### Enabling multiple selection<Trans>다중 선택 활성화하기</Trans> {/*enabling-multiple-selection*/}

Pass `multiple={true}` to the `<select>` to let the user select multiple options. In that case, if you also specify `defaultValue` to choose the initially selected options, it must be an array.
<Trans>다중 선택을 활성화하려면 `<select>`에 `multiple={true}`를 전달하세요. 이 경우 만약 `defaultValue`를 지정하려면 이 값은 초기 선택 옵션들로 구성된 배열이어야 합니다.</Trans>

<Sandpack>

```js
export default function FruitPicker() {
  return (
    <label>
      Pick some fruits:
      <select
        name="selectedFruit"
        defaultValue={['orange', 'banana']}
        multiple={true}
      >
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </label>
  );
}
```

```css
select { display: block; margin-top: 10px; width: 200px; }
```

</Sandpack>

---

### Reading the select box value when submitting a form<Trans>form 제출시 셀렉트 박스 값 읽기</Trans> {/*reading-the-select-box-value-when-submitting-a-form*/}

Add a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) around your select box with a [`<button type="submit">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) inside. It will call your `<form onSubmit>` event handler. By default, the browser will send the form data to the current URL and refresh the page. You can override that behavior by calling `e.preventDefault()`. Read the form data with [`new FormData(e.target)`](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
<Trans>셀렉트 박스를 [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)으로 감싸고, form 안에 [`<button type="submit">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)을 넣으세요. 그러면 `<form onSubmit>` 이벤트 핸들러가 호출됩니다. 기본적으로 브라우저는 form 데이터를 현재 URL로 전송하고 페이지를 새로고침 합니다. `e.preventDefault()`를 호출하여 이 동작을 재정의할 수 있습니다. form 데이터를 읽으려면 [`new FormData(e.target)`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)를 사용하세요.</Trans>

<Sandpack>

```js
export default function EditPost() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });
    // You can generate a URL out of it, as the browser does by default:
    console.log(new URLSearchParams(formData).toString());
    // You can work with it as a plain object.
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // (!) This doesn't include multiple select values
    // Or you can get an array of name-value pairs.
    console.log([...formData.entries()]);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Pick your favorite fruit:
        <select name="selectedFruit" defaultValue="orange">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <label>
        Pick all your favorite vegetables:
        <select
          name="selectedVegetables"
          multiple={true}
          defaultValue={['corn', 'tomato']}
        >
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>
      </label>
      <hr />
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
}
```

```css
label, select { display: block; }
label { margin-bottom: 20px; }
```

</Sandpack>

<Note>

Give a `name` to your `<select>`, for example `<select name="selectedFruit" />`. The `name` you specified will be used as a key in the form data, for example `{ selectedFruit: "orange" }`.
<Trans>`<select name="selectedFruit" />`과 같이 `<select>`에 `name`를 지정하세요. 이렇게 지정한 `name`은 `{ selectedFruit: "orange" }`와 같이 form 데이터의 키로 사용될 것입니다.</Trans>

If you use `<select multiple={true}>`, the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) you'll read from the form will include each selected value as a separate name-value pair. Look closely at the console logs in the example above.
<Trans>`<select multiple={true}>`의 경우, [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)에는 선택된 값들이 각각 이름-값 쌍으로 분리되어 들어갑니다. 위 예시의 콘솔 로그를 자세히 살펴보세요.</Trans>

</Note>

<Pitfall>

By default, *any* `<button>` inside a `<form>` will submit it. This can be surprising! If you have your own custom `Button` React component, consider returning [`<button type="button">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button) instead of `<button>`. Then, to be explicit, use `<button type="submit">` for buttons that *are* supposed to submit the form.
<Trans>기본적으로 `<form>` 안의 어떠한 `<button>`이든 클릭하면 브라우저는 이를 제출 요청으로 인식합니다. 이러한 동작이 당황스러울 수 있습니다! 사용자정의 `Button` React 컴포넌트를 사용하고 있다면 `<button>` 대신 [`<button type="button">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)로 작성하는 것을 고려하세요. 다음 form 제출 버튼에는 [`<button type="submit">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)`을 명확하게 표시하세요.</Trans>

</Pitfall>

---

### Controlling a select box with a state variable<Trans>state 변수를 사용하여 셀렉트 박스 제어하기</Trans> {/*controlling-a-select-box-with-a-state-variable*/}

A select box like `<select />` is *uncontrolled.* Even if you [pass an initially selected value](#providing-an-initially-selected-option) like `<select defaultValue="orange" />`, your JSX only specifies the initial value, not the value right now.
<Trans>`<select />`는 기본적으로 *비제어 컴포넌트*입니다. `<select defaultValue="orange" />`와 같이 [초기 선택값을 전달](#providing-an-initially-selected-option)하더라도, JSX는 초기값만을 지정할 뿐, 현재값은 지정하지 않습니다.</Trans>

**To render a _controlled_ select box, pass the `value` prop to it.** React will force the select box to always have the `value` you passed. Typically, you will control a select box by declaring a [state variable:](/reference/react/useState)
<Trans>**_제어_ 컴포넌트로 렌더링하기 위해서는 `value` prop을 전달하세요.** React는 셀렉트 박스가 항상 전달한 `value`를 갖도록 강제합니다. 일반적으로 [state 변수](reference/react/useState)로 셀렉트 박스를 제어합니다.</Trans>

```js {2,6,7}
function FruitPicker() {
  const [selectedFruit, setSelectedFruit] = useState('orange'); // Declare a state variable...
  // ...
  return (
    <select
      value={selectedFruit} // ...force the select's value to match the state variable...
      onChange={e => setSelectedFruit(e.target.value)} // ... and update the state variable on any change!
    >
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
    </select>
  );
}
```

This is useful if you want to re-render some part of the UI in response to every selection.
<Trans>이는 선택시마다 UI의 일부를 다시 렌더링하려는 경우에 유용합니다.</Trans>

<Sandpack>

```js
import { useState } from 'react';

export default function FruitPicker() {
  const [selectedFruit, setSelectedFruit] = useState('orange');
  const [selectedVegs, setSelectedVegs] = useState(['corn', 'tomato']);
  return (
    <>
      <label>
        Pick a fruit:
        <select
          value={selectedFruit}
          onChange={e => setSelectedFruit(e.target.value)}
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <hr />
      <label>
        Pick all your favorite vegetables:
        <select
          multiple={true}
          value={selectedVegs}
          onChange={e => {
            const options = [...e.target.selectedOptions];
            const values = options.map(option => option.value);
            setSelectedVegs(values);
          }}
        >
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>
      </label>
      <hr />
      <p>Your favorite fruit: {selectedFruit}</p>
      <p>Your favorite vegetables: {selectedVegs.join(', ')}</p>
    </>
  );
}
```

```css
select { margin-bottom: 10px; display: block; }
```

</Sandpack>

<Pitfall>

**If you pass `value` without `onChange`, it will be impossible to select an option.** When you control a select box by passing some `value` to it, you *force* it to always have the value you passed. So if you pass a state variable as a `value` but forget to update that state variable synchronously during the `onChange` event handler, React will revert the select box after every selection back to the `value` that you specified.
<Trans>**`onChange` 없이 `value`만 전달하면 옵션을 선택할 수 없습니다.** 셀렉트 박스에 `value`를 전달하여 제어하면 항상 전달한 값을 갖도록 *강제*합니다. 따라서 state 변수를 `value`로 전달했지만 `onChange` 이벤트 핸들러에서 해당 상태 변수를 동기적으로 업데이트 하는 것을 잊어버리면, React는 옵션 선택시마다 셀렉트 박스를 지정한 `value`으로 되돌립니다.</Trans>

Unlike in HTML, passing a `selected` attribute to an individual `<option>` is not supported.
<Trans>HTML과 달리, 개별 `<option>`에 `selected` 속성을 전달하는 것은 지원되지 않습니다.</Trans>

</Pitfall>
