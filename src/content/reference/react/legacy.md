---
title: "Legacy React APIs"
translators: [이나령]
---

<Intro>

These APIs are exported from the `react` package, but they are not recommended for use in newly written code. See the linked individual API pages for the suggested alternatives.
<Trans>이 API는 `리액트` 패키지에서 내보내지만 새로 작성된 코드에 사용하기에는 권장되지 않습니다. 대안은 링크된 개별 API 페이지를 참조하세요.</Trans>

</Intro>

---

## Legacy APIs {/*legacy-apis*/}

* [`Children`](/reference/react/Children) lets you manipulate and transform the JSX received as the `children` prop. [See alternatives.](/reference/react/Children#alternatives)
* [`cloneElement`](/reference/react/cloneElement) lets you create a React element using another element as a starting point. [See alternatives.](/reference/react/cloneElement#alternatives)
* [`Component`](/reference/react/Component) lets you define a React component as a JavaScript class. [See alternatives.](/reference/react/Component#alternatives)
* [`createElement`](/reference/react/createElement) lets you create a React element. Typically, you'll use JSX instead.
* [`createRef`](/reference/react/createRef) creates a ref object which can contain arbitrary value. [See alternatives.](/reference/react/createRef#alternatives)
* [`isValidElement`](/reference/react/isValidElement) checks whether a value is a React element. Typically used with [`cloneElement`.](/reference/react/cloneElement)
* [`PureComponent`](/reference/react/PureComponent) is similar to [`Component`,](/reference/react/Component) but it skip re-renders with same props. [See alternatives.](/reference/react/PureComponent#alternatives)
<TransBlock>
* [`Children`](/reference/react/Children)을 사용하면 `children` prop으로 받은 JSX를 조작하고 변형할 수 있습니다. [대안을 참조하세요.](/reference/react/Children#alternatives)
* [`cloneElement`](/reference/react/cloneElement)를 사용하면 다른 엘리먼트를 시작점으로 사용하여 리액트 엘리먼트를 생성할 수 있습니다. [대안을 참조하세요.](/reference/react/cloneElement#alternatives)
* [`Component`](/reference/react/Component)를 사용하면 리액트 컴포넌트를 자바스크립트 클래스로 정의할 수 있습니다. [대안을 참조하세요.](/reference/react/Component#alternatives)
* [`createElement`](/reference/react/createElement)를 사용하면 리액트 엘리먼트를 생성할 수 있습니다. 일반적으로 JSX를 대신 사용합니다.
* [`createRef`](/reference/react/createRef)는 임의의 값을 포함할 수 있는 참조 객체를 생성합니다. [대안을 참조하세요.](/reference/react/createRef#alternatives)
* [`isValidElement`](/reference/react/isValidElement)는 값이 리액트 엘리먼트인지 여부를 확인합니다. 일반적으로 [`cloneElement`](/reference/react/cloneElement)와 함께 사용됩니다.
* [`PureComponent`](/reference/react/PureComponent) [`Component`](/reference/react/Component)와 비슷하지만 동일한 소품으로 다시 렌더링하는 것을 건너뜁니다. [대안을 참조하세요.](/reference/react/PureComponent#alternatives)
</TransBlock>


---

## Deprecated APIs <Trans>지원 중단된 API들</Trans> {/*deprecated-apis*/}

<Deprecated>

These APIs will be removed in a future major version of React.
<Trans>다음 API들은 향후 React의 메인 버전에서 삭제될 예정입니다.</Trans>

</Deprecated>

* [`createFactory`](/reference/react/createFactory) lets you create a function that produces React elements of a certain type.
<Trans>[`createFactory`](/reference/react/createFactory)를 사용하면 특정 유형의 리액트 엘리먼트를 생성하는 함수를 만들 수 있습니다.
</Trans>

