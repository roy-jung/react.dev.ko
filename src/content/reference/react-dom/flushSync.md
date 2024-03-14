---
title: flushSync
translators: [류재준, 고석영]
---

<Pitfall>

Using `flushSync` is uncommon and can hurt the performance of your app.
<Trans>`flushSync`는 자주 사용되지 않으며 앱 성능을 저하시킬 수 있습니다.</Trans>

</Pitfall>

<Intro>

`flushSync` lets you force React to flush any updates inside the provided callback synchronously. This ensures that the DOM is updated immediately.
<Trans>flushSync를 사용하면 강제로 제공된 콜백 내부의 모든 업데이트를 동기적으로 flush(강제로 비워냄)하도록 할 수 있습니다. 이렇게 하면 DOM이 즉시 업데이트됩니다.</Trans>

```js
flushSync(callback)
```

</Intro>

<InlineToc />

---

## Reference<Trans>참조</Trans> {/*reference*/}

### `flushSync(callback)` {/*flushsync*/}

Call `flushSync` to force React to flush any pending work and update the DOM synchronously.
<Trans>`flushSync`를 호출하면 React가 보류 중이던 작업을 강제로 flush하고 DOM을 동기적으로 업데이트 합니다.</Trans>

```js
import { flushSync } from 'react-dom';

flushSync(() => {
  setSomething(123);
});
```

Most of the time, `flushSync` can be avoided. Use `flushSync` as last resort.
<Trans>대부분의 경우 `flushSync`를 피할 수 있습니다. `flushSync`는 최후의 수단으로 사용하세요.</Trans>

[See more examples below.](#usage)
<Trans>[아래에서 더 많은 예시를 확인하세요.](#usage)</Trans>

#### Parameters<Trans>매개변수</Trans> {/*parameters*/}

* `callback`: A function. React will immediately call this callback and flush any updates it contains synchronously. It may also flush any pending updates, or Effects, or updates inside of Effects. If an update suspends as a result of this `flushSync` call, the fallbacks may be re-shown.
<Trans outdent>`callback` : 함수. React는 즉시 이 콜백을 호출하고 여기에 포함된 모든 업데이트를 동기적으로 flush합니다. 또한 보류 중인 모든 업데이트, Effect 또는 Effect 내부의 업데이트를 flush할 수도 있습니다. 이 `flushSync` 호출의 결과로 업데이트가 일시 중단되면 폴백이 다시 표시될 수 있습니다.</Trans>

#### Returns<Trans>반환값</Trans> {/*returns*/}

`flushSync` returns `undefined`.
<Trans>`flushSync` 는 `undefined`를 반환합니다.</Trans>

#### Caveats<Trans>주의사항</Trans> {/*caveats*/}

* `flushSync` can significantly hurt performance. Use sparingly.
<Trans>`flushSync`는 성능을 크게 저하시킬 수 있습니다. 아껴서 사용하세요.</Trans>

* `flushSync` may force pending Suspense boundaries to show their `fallback` state.
<Trans>`flushSync`는 보류 중인 Suspense 경계를 강제로 `fallback` state로 표시할 수 있습니다.</Trans>

* `flushSync` may run pending effects and synchronously apply any updates they contain before returning.
<Trans>`flushSync`는 보류 중인 Effect들을 실행하고, 반환하기 전에 포함된 모든 업데이트를 동기적으로 적용할 수 있습니다.</Trans>

* `flushSync` may flush updates outside the callback when necessary to flush the updates inside the callback. For example, if there are pending updates from a click, React may flush those before flushing the updates inside the callback.
<Trans>`flushSync`는 콜백 내부의 업데이트를 flush하기 위해, 필요한 경우 콜백 외부의 업데이트를 flush할 수도 있습니다. 예를 들어, 클릭으로 인해 보류 중인 업데이트가 있는 경우, React는 콜백 내부의 업데이트를 flush하기 전에 해당 업데이트를 먼저 flush할 수 있습니다.</Trans>

---

## Usage<Trans>사용법</Trans> {/*usage*/}

### Flushing updates for third-party integrations<Trans>서드파티 통합을 위한 업데이트 flush하기</Trans> {/*flushing-updates-for-third-party-integrations*/}

When integrating with third-party code such as browser APIs or UI libraries, it may be necessary to force React to flush updates. Use `flushSync` to force React to flush any <CodeStep step={1}>state updates</CodeStep> inside the callback synchronously:
<Trans>브라우저 API나 UI 라이브러리와 같은 서드파티 코드와 통합할 때, React가 강제로 flush 업데이트를 해야 할 수도 있습니다. `flushSync`를 사용하면 React가 콜백 내부의 <CodeStep step={1}>모든 state 업데이트</CodeStep>를 강제로 동기적으로 flush하도록 할 수 있습니다:</Trans>

```js [[1, 2, "setSomething(123)"]]
flushSync(() => {
  setSomething(123);
});
// By this line, the DOM is updated.
```

This ensures that, by the time the next line of code runs, React has already updated the DOM.
<Trans>이런 상황에서는 React는 다음 코드 줄이 실행될 때 이미 DOM을 업데이트한 상태가 됩니다.</Trans>

**Using `flushSync` is uncommon, and using it often can significantly hurt the performance of your app.** If your app only uses React APIs, and does not integrate with third-party libraries, `flushSync` should be unnecessary.
<Trans>**`flushSync`를 사용하는 경우는 흔하지 않으며, 자주 사용하면 앱 성능이 크게 저하될 수 있습니다.** 앱이 React API만 사용하고 서드파티 라이브러리와 통합하지 않는 경우 `flushSync`는 필요하지 않을 것입니다.</Trans>

However, it can be helpful for integrating with third-party code like browser APIs.
<Trans>하지만 브라우저 API와 같은 서드파티 코드와 함께 사용될 때는 유용할 수 있습니다.</Trans>

Some browser APIs expect results inside of callbacks to be written to the DOM synchronously, by the end of the callback, so the browser can do something with the rendered DOM. In most cases, React handles this for you automatically. But in some cases it may be necessary to force a synchronous update.
<Trans>일부 브라우저 API는 콜백이 끝날 때 콜백 내부의 결과가 DOM에 동기적으로 기록되어 브라우저가 렌더링된 DOM으로 무언가를 할 수 있기를 예상합니다. React는 대부분의 경우 이를 자동으로 처리합니다. 하지만 어떤 경우에는 동기식 업데이트를 강제해야 할 수도 있습니다.</Trans>

For example, the browser `onbeforeprint` API allows you to change the page immediately before the print dialog opens. This is useful for applying custom print styles that allow the document to display better for printing. In the example below, you use `flushSync` inside of the `onbeforeprint` callback to immediately "flush" the React state to the DOM. Then, by the time the print dialog opens, `isPrinting` displays "yes":
<Trans>예를 들어, `onbeforeprint` 브라우저 API를 사용하면 인쇄 대화 상자가 열리기 직전에 페이지를 변경할 수 있습니다. 이 기능은 문서를 인쇄할 때 더 보기 좋게 표시할 수 있는 사용자 지정 인쇄 스타일을 적용하는 데 유용합니다. 아래 예시에서는 `onbeforeprint`콜백 내부에서 `flushSync`를 사용하여 React state를 DOM에 즉시 "flush"합니다. 그런 다음 인쇄 대화 상자가 열릴 때 `isPrinting`이 "yes"를 표시합니다:</Trans>

<Sandpack>

```js src/App.js active
import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

export default function PrintApp() {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    function handleBeforePrint() {
      flushSync(() => {
        setIsPrinting(true);
      })
    }

    function handleAfterPrint() {
      setIsPrinting(false);
    }

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    }
  }, []);

  return (
    <>
      <h1>isPrinting: {isPrinting ? 'yes' : 'no'}</h1>
      <button onClick={() => window.print()}>
        Print
      </button>
    </>
  );
}
```

</Sandpack>

Without `flushSync`, the print dialog will display `isPrinting` as "no". This is because React batches the updates asynchronously and the print dialog is displayed before the state is updated.
<Trans>`flushSync`를 사용하지 않으면 인쇄 대화 상자에 `isPrinting`이 "아니요"로 표시됩니다. 이는 React가 업데이트를 비동기적으로 일괄 처리하고 state가 업데이트되기 전에 인쇄 대화 상자가 표시되기 때문입니다.</Trans>

<Pitfall>

`flushSync` can significantly hurt performance, and may unexpectedly force pending Suspense boundaries to show their fallback state.
<Trans>`flushSync` 는 성능을 크게 저하시킬 수 있으며, 예상과 다르게 보류 중인 Suspense 경계가 폴백 state를 표시하도록 강제할 수 있습니다.</Trans>

Most of the time, `flushSync` can be avoided, so use `flushSync` as a last resort.
<Trans>대부분의 경우 `flushSync`는 피할 수 있으므로, `flushSync`는 최후의 수단으로만 사용하세요.</Trans>

</Pitfall>
