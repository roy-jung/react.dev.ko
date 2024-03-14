---
title: Understanding Your UI as a Tree
translatedTitle: UI를 트리로 이해하기
translators: [윤다솜]
---

<Intro>

Your React app is taking shape with many components being nested within each other. How does React keep track of your app's component structure?
<Trans>React 앱은 많은 컴포넌트들이 서로 중첩된 형태로 구성되어 있습니다. React는 어떻게 앱의 컴포넌트 구조를 추적할까요?</Trans>

React, and many other UI libraries, model UI as a tree. Thinking of your app as a tree is useful for understanding the relationship between components. This understanding will help you debug future concepts like performance and state management.
<Trans>React와 다른 많은 UI 라이브러리들은 UI를 트리로 모델링합니다. 앱을 트리로 생각하면 컴포넌트 간의 관계를 이해하는 데 유용합니다. 이러한 이해는 성능 및 상태 관리와 같이 앞으로 배울 개념을 디버깅하는 데 도움이 될 것입니다.</Trans>

</Intro>

<YouWillLearn>

* How React "sees" component structures
<Trans>React가 컴포넌트 구조를 "보는" 방법</Trans>

* What a render tree is and what it is useful for
<Trans>렌더 트리란 무엇이며 어떤 용도로 유용한지</Trans>

* What a module dependency tree is and what it is useful for
<Trans>모듈 종속성 트리란 무엇이며 어떤 용도로 유용한지</Trans>

</YouWillLearn>

## Your UI as a tree<Trans>트리로 보는 UI</Trans> {/*your-ui-as-a-tree*/}

Trees are a relationship model between items and UI is often represented using tree structures. For example, browsers use tree structures to model HTML ([DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction)) and CSS ([CSSOM](https://developer.mozilla.org/docs/Web/API/CSS_Object_Model)). Mobile platforms also use trees to represent their view hierarchy.
<Trans>트리는 아이템 간의 관계 모델이며 UI는 트리 구조를 사용하여 표현되는 경우가 많습니다. 예를 들어 브라우저는 트리 구조를 사용하여 HTML([DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction)) 및 CSS([CSSOM](https://developer.mozilla.org/docs/Web/API/CSS_Object_Model))를 모델링합니다. 모바일 플랫폼 또한 트리를 사용하여 뷰 계층 구조를 나타냅니다.</Trans>

<Diagram name="preserving_state_dom_tree" height={193} width={864} alt="Diagram with three sections arranged horizontally. In the first section, there are three rectangles stacked vertically, with labels 'Component A', 'Component B', and 'Component C'. Transitioning to the next pane is an arrow with the React logo on top labeled 'React'. The middle section contains a tree of components, with the root labeled 'A' and two children labeled 'B' and 'C'. The next section is again transitioned using an arrow with the React logo on top labeled 'React DOM'. The third and final section is a wireframe of a browser, containing a tree of 8 nodes, which has only a subset highlighted (indicating the subtree from the middle section).">

React creates a UI tree from your components. In this example, the UI tree is then used to render to the DOM.
<Trans>React는 컴포넌트로 UI 트리를 생성합니다. 이 예시에서, UI 트리를 사용하여 DOM에 렌더링이 됩니다.</Trans>
</Diagram>

Like browsers and mobile platforms, React also uses tree structures to manage and model the relationship between components in a React app. These trees are useful tools to understand how data flows through a React app and how to optimize rendering and app size.
<Trans>브라우저 및 모바일 플랫폼과 마찬가지로 React 역시 트리 구조를 사용하여 React 앱의 컴포넌트 간의 관계를 관리하고 모델링합니다. 이 트리들은 React 앱을 통해 데이터가 어떻게 흘러가는지, 렌더링 및 앱의 크기를 최적화하는 방법을 이해하는 데 유용한 도구입니다.</Trans>

## The Render Tree {/*the-render-tree*/}

A major feature of components is the ability to compose components of other components. As we [nest components](/learn/your-first-component#nesting-and-organizing-components), we have the concept of parent and child components, where each parent component may itself be a child of another component.
<Trans>컴포넌트의 주요 특징은 다른 컴포넌트의 컴포넌트를 합성할 수 있다는 것입니다. [컴포넌트를 중첩](/learn/your-first-component#nesting-and-organizing-components)하면 부모 컴포넌트와 자식 컴포넌트라는 개념이 생기며, 각 부모 컴포넌트는 그 자체로 다른 컴포넌트의 자식이 될 수 있습니다.</Trans>

When we render a React app, we can model this relationship in a tree, known as the render tree.
<Trans>React 앱을 렌더링할 때 렌더 트리라고 알려진 트리에서 이 관계를 모델링할 수 있습니다.</Trans>

Here is a React app that renders inspirational quotes.
<Trans>아래는 영감을 주는 인용문을 만들어 주는 React 앱입니다.</Trans>

<Sandpack>

```js src/App.js
import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}

```

```js src/FancyText.js
export default function FancyText({title, text}) {
  return title
    ? <h1 className='fancy title'>{text}</h1>
    : <h3 className='fancy cursive'>{text}</h3>
}
```

```js src/InspirationGenerator.js
import * as React from 'react';
import quotes from './quotes';
import FancyText from './FancyText';

export default function InspirationGenerator({children}) {
  const [index, setIndex] = React.useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
```

```js src/Copyright.js
export default function Copyright({year}) {
  return <p className='small'>©️ {year}</p>;
}
```

```js src/quotes.js
export default [
  "Don’t let yesterday take up too much of today.” — Will Rogers",
  "Ambition is putting a ladder against the sky.",
  "A joy that's shared is a joy made double.",
  ];
```

```css
.fancy {
  font-family: 'Georgia';
}
.title {
  color: #007AA3;
  text-decoration: underline;
}
.cursive {
  font-style: italic;
}
.small {
  font-size: 10px;
}
```

</Sandpack>

<Diagram name="render_tree" height={250} width={500} alt="Tree graph with five nodes. Each node represents a component. The root of the tree is App, with two arrows extending from it to 'InspirationGenerator' and 'FancyText'. The arrows are labelled with the word 'renders'. 'InspirationGenerator' node also has two arrows pointing to nodes 'FancyText' and 'Copyright'.">

React creates a *render tree*, a UI tree, composed of the rendered components.
<Trans>React는 렌더링된 컴포넌트로 구성된 UI 트리인 *렌더 트리*를 생성합니다.</Trans>

</Diagram>

From the example app, we can construct the above render tree.
<Trans>예제 앱에서 위의 렌더 트리를 구성할 수 있습니다.</Trans>

The tree is composed of nodes, each of which represents a component. `App`, `FancyText`, `Copyright`, to name a few, are all nodes in our tree.
<Trans>트리는 노드들로 구성되어 있으며, 각 노드는 컴포넌트를 나타냅니다. `App`, `FancyText`, `Copyright` 등은 모두 트리의 노드입니다.</Trans>

The root node in a React render tree is the [root component](/learn/importing-and-exporting-components#the-root-component-file) of the app. In this case, the root component is `App` and it is the first component React renders. Each arrow in the tree points from a parent component to a child component.
<Trans>React 렌더 트리의 루트 노드는 앱의 [루트 컴포넌트](/learn/importing-and-exporting-components#the-root-component-file) 입니다. 이 경우 루트 컴포넌트는 App이며 React가 렌더링하는 첫 번째 컴포넌트입니다. 트리의 각 화살표는 상위 컴포넌트에서 하위 컴포넌트를 가리킵니다.</Trans>

<DeepDive>

#### Where are the HTML tags in the render tree?<Trans>렌더 트리에서 HTML 태그는 어디에 있을까요?</Trans> {/*where-are-the-html-elements-in-the-render-tree*/}

You'll notice in the above render tree, there is no mention of the HTML tags that each component renders. This is because the render tree is only composed of React [components](learn/your-first-component#components-ui-building-blocks).
<Trans>위 렌더 트리에서는 각 컴포넌트가 렌더링하는 HTML 태그에 대한 언급이 없습니다. 렌더 트리는 React [컴포넌트](learn/your-first-component#components-ui-building-blocks)로만 구성되어 있기 때문입니다.</Trans>

React, as a UI framework, is platform agnostic. On react.dev, we showcase examples that render to the web, which uses HTML markup as its UI primitives. But a React app could just as likely render to a mobile or desktop platform, which may use different UI primitives like [UIView](https://developer.apple.com/documentation/uikit/uiview) or [FrameworkElement](https://learn.microsoft.com/en-us/dotnet/api/system.windows.frameworkelement?view=windowsdesktop-7.0).
<Trans>UI 프레임워크인 React는 플랫폼에 구애받지 않습니다. React.dev에서는 HTML 마크업을 UI 기본 요소로 사용하는 웹으로 렌더링하는 예제를 보여줍니다. 그러나 React 앱은 [UIView](https://developer.apple.com/documentation/uikit/uiview) 또는 [FrameworkElement](https://learn.microsoft.com/en-us/dotnet/api/system.windows.frameworkelement?view=windowsdesktop-7.0)와 같은 다양한 UI 기본 요소를 사용할 수 있는 모바일, 데스크톱 플랫폼로도 렌더링할 수 있습니다.</Trans>

These platform UI primitives are not a part of React. React render trees can provide insight to our React app regardless of what platform your app renders to.
<Trans>이러한 플랫폼 UI 기본 요소는 React의 일부가 아닙니다. React 렌더 트리는 앱이 렌더링되는 플랫폼에 관계없이 React 앱을 제공할 수 있습니다.</Trans>

</DeepDive>

A render tree represents a single render pass of a React application. With [conditional rendering](/learn/conditional-rendering), a parent component may render different children depending on the data passed.
<Trans>렌더 트리는 React 애플리케이션의 싱글 렌더 패스를 나타냅니다. [조건부 렌더링](/learn/conditional-rendering)을 사용하면 상위 컴포넌트는 전달된 데이터에 따라 다른 하위 컴포넌트를 렌더링할 수 있습니다.</Trans>

We can update the app to conditionally render either an inspirational quote or color.
<Trans>영감을 주는 인용문이나 색상을 조건부로 렌더링하도록 앱을 업데이트할 수 있습니다.</Trans>


<Sandpack>

```js src/App.js
import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}

```

```js src/FancyText.js
export default function FancyText({title, text}) {
  return title
    ? <h1 className='fancy title'>{text}</h1>
    : <h3 className='fancy cursive'>{text}</h3>
}
```

```js src/Color.js
export default function Color({value}) {
  return <div className="colorbox" style={{backgroundColor: value}} />
}
```

```js src/InspirationGenerator.js
import * as React from 'react';
import inspirations from './inspirations';
import FancyText from './FancyText';
import Color from './Color';

export default function InspirationGenerator({children}) {
  const [index, setIndex] = React.useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      {inspiration.type === 'quote'
      ? <FancyText text={inspiration.value} />
      : <Color value={inspiration.value} />}

      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
```

```js src/Copyright.js
export default function Copyright({year}) {
  return <p className='small'>©️ {year}</p>;
}
```

```js src/inspirations.js
export default [
  {type: 'quote', value: "Don’t let yesterday take up too much of today.” — Will Rogers"},
  {type: 'color', value: "#B73636"},
  {type: 'quote', value: "Ambition is putting a ladder against the sky."},
  {type: 'color', value: "#256266"},
  {type: 'quote', value: "A joy that's shared is a joy made double."},
  {type: 'color', value: "#F9F2B4"},
];
```

```css
.fancy {
  font-family: 'Georgia';
}
.title {
  color: #007AA3;
  text-decoration: underline;
}
.cursive {
  font-style: italic;
}
.small {
  font-size: 10px;
}
.colorbox {
  height: 100px;
  width: 100px;
  margin: 8px;
}
```
</Sandpack>

<Diagram name="conditional_render_tree" height={250} width={561} alt="Tree graph with six nodes. The top node of the tree is labelled 'App' with two arrows extending to nodes labelled 'InspirationGenerator' and 'FancyText'. The arrows are solid lines and are labelled with the word 'renders'. 'InspirationGenerator' node also has three arrows. The arrows to nodes 'FancyText' and 'Color' are dashed and labelled with 'renders?'. The last arrow points to the node labelled 'Copyright' and is solid and labelled with 'renders'.">

With conditional rendering, across different renders, the render tree may render different components.
<Trans>조건부 렌더링을 사용하면 다양한 렌더링에 따라, 렌더 트리가 다른 컴포넌트를 렌더링할 수 있습니다.</Trans>

</Diagram>

In this example, depending on what `inspiration.type` is, we may render `<FancyText>` or `<Color>`. The render tree may be different for each render pass.
<Trans>이 예에서는 `Inspiration.type`이 무엇인지에 따라 `<FancyText>` 또는 `<Color>`를 렌더링할 수 있습니다. 렌더 트리는 각 렌더 패스마다 다를 수 있습니다.</Trans>

Although render trees may differ across render passes, these trees are generally helpful for identifying what the *top-level* and *leaf components* are in a React app. Top-level components are the components nearest to the root component and affect the rendering performance of all the components beneath them and often contain the most complexity. Leaf components are near the bottom of the tree and have no child components and are often frequently re-rendered.
<Trans>렌더 트리는 렌더 패스마다 다를 수 있지만 일반적으로 이러한 트리는 React 앱의 최상위 컴포넌트와 리프 컴포넌트가 무엇인지 식별하는 데 도움이 됩니다. 최상위 컴포넌트는 루트 컴포넌트에 가장 가까운 컴포넌트로, 그 아래에 있는 모든 컴포넌트의 렌더링 성능에 영향을 미치며 종종 가장 복잡한 컴포넌트를 포함합니다. 리프 컴포넌트는 트리 하단에 있으며 하위 컴포넌트가 없고 자주 리렌더링됩니다.</Trans>

Identifying these categories of components are useful for understanding data flow and performance of your app.
<Trans>이러한 컴포넌트들를 식별하는 것은 앱의 데이터 흐름과 성능을 이해하는 데 유용합니다.</Trans>

## The Module Dependency Tree<Trans>모듈 의존성 트리</Trans> {/*the-module-dependency-tree*/}

Another relationship in a React app that can be modeled with a tree are an app's module dependencies. As we [break up our components](/learn/importing-and-exporting-components#exporting-and-importing-a-component) and logic into separate files, we create [JS modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) where we may export components, functions, or constants.
<Trans>트리로 모델링할 수 있는 React 앱의 또 다른 관계는 앱의 모듈 종속성입니다. [컴포넌트와 로직을 별도의 파일로 분할](/learn/importing-and-exporting-components#exporting-and-importing-a-component)하면서 컴포넌트, 함수 또는 상수를 내보낼 수 있는 [JS 모듈](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)을 만듭니다.</Trans>

Each node in a module dependency tree is a module and each branch represents an `import` statement in that module.
<Trans>모듈 종속성 트리의 각 노드는 모듈이고 각 분기는 해당 모듈의 import 문을 나타냅니다.</Trans>

If we take the previous Inspirations app, we can build a module dependency tree, or dependency tree for short.
<Trans>이전 Inspirations 앱을 사용하면 모듈 종속성 트리, 줄여서 종속성 트리를 구축할 수 있습니다.</Trans>

<Diagram name="module_dependency_tree" height={250} width={658} alt="A tree graph with seven nodes. Each node is labelled with a module name. The top level node of the tree is labelled 'App.js'. There are three arrows pointing to the modules 'InspirationGenerator.js', 'FancyText.js' and 'Copyright.js' and the arrows are labelled with 'imports'. From the 'InspirationGenerator.js' node, there are three arrows that extend to three modules: 'FancyText.js', 'Color.js', and 'inspirations.js'. The arrows are labelled with 'imports'.">

The module dependency tree for the Inspirations app.
<Trans>Inspirations앱의 모듈 종속성 트리</Trans>

</Diagram>

The root node of the tree is the root module, also known as the entrypoint file. It often is the module that contains the root component.
<Trans>트리의 루트 노드는 entrypoint 파일이라고도 알려진 루트 모듈입니다. 루트 컴포넌트를 포함하는 모듈인 경우가 많습니다.</Trans>

Comparing to the render tree of the same app, there are similar structures but some notable differences:
<Trans>동일한 앱의 렌더 트리와 비교해 보면 구조는 비슷하지만 몇 가지 눈에 띄는 차이점이 있습니다:</Trans>

* The nodes that make-up the tree represent modules, not components.
<Trans>트리를 구성하는 노드는 컴포넌트가 아닌 모듈을 나타냅니다.</Trans>

* Non-component modules, like `inspirations.js`, are also represented in this tree. The render tree only encapsulates components.
<Trans>`Inspirations.js`와 같은 컴포넌트가 아닌 모듈도 트리에 표시됩니다. 반면에 렌더 트리는 컴포넌트만 트리로 캡슐화합니다.</Trans>

* `Copyright.js` appears under `App.js` but in the render tree, `Copyright`, the component, appears as a child of `InspirationGenerator`. This is because `InspirationGenerator` accepts JSX as [children props](/learn/passing-props-to-a-component#passing-jsx-as-children), so it renders `Copyright` as a child component but does not import the module.
<Trans>`Copyright.js`는 `App.js`의 하위 노드로 나타나지만 렌더 트리에서는 `Copyright` 컴포넌트는 `InspirationGenerator`의 하위 컴포넌트로 나타납니다. 이는 `InspirationGenerator`가 JSX를 [Child Prop](/learn/passing-props-to-a-component#passing-jsx-as-children)으로 전달하므로 `Copyright`을 자식 컴포넌트로 렌더링하지만 모듈을 가져오지 않기 때문입니다.</Trans>

Dependency trees are useful to determine what modules are necessary to run your React app. When building a React app for production, there is typically a build step that will bundle all the necessary JavaScript to ship to the client. The tool responsible for this is called a [bundler](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview#the_modern_tooling_ecosystem), and bundlers will use the dependency tree to determine what modules should be included.
<Trans>종속성 트리는 React 앱을 실행하는 데 필요한 모듈들을 결정하는 데 유용합니다. 프로덕션용 React 앱을 빌드할 때 일반적으로 클라이언트에 제공하는 데 필요한 모든 JavaScript를 번들로 묶는 빌드 단계가 있습니다. 이를 담당하는 도구를 [번들러](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview#the_modern_tooling_ecosystem)라고 하며, 번들러는 종속성 트리를 사용하여 어떤 모듈을 포함할지 결정합니다.</Trans>

As your app grows, often the bundle size does too. Large bundle sizes are expensive for a client to download and run. Large bundle sizes can delay the time for your UI to get drawn. Getting a sense of your app's dependency tree may help with debugging these issues.
<Trans>앱이 성장함에 따라 번들 크기도 커지는 경우가 많습니다. 큰 번들 크기는 클라이언트가 다운로드하고 실행하는 데 비용이 많이 듭니다. 번들 크기가 크면 UI가 그려지는 시간이 지연될 수 있습니다. 앱의 종속성 트리를 이해하면 이러한 문제를 디버깅하는 데 도움이 될 수 있습니다.</Trans>

[comment]: <> (perhaps we should also deep dive on conditional imports)

<Recap>

* Trees are a common way to represent the relationship between entities. They are often used to model UI.
<Trans>트리는 엔터티 간의 관계를 나타내는 일반적인 방법입니다. UI를 모델링하는 데 자주 사용됩니다.</Trans>

* Render trees represent the nested relationship between React components across a single render.
<Trans>렌더 트리는 단일 렌더 전반에 걸쳐 React 컴포넌트 간의 중첩 관계를 나타냅니다.</Trans>

* With conditional rendering, the render tree may change across different renders. With different prop values, components may render different children components.
<Trans>조건부 렌더링을 사용하면 렌더 트리가 여러 렌더링에 걸쳐 변경될 수 있습니다. prop 값이 다르면 컴포넌트가 다른 하위 컴포넌트를 렌더링할 수 있습니다.</Trans>

* Render trees help identify what the top-level and leaf components are. Top-level components affect the rendering performance of all components beneath them and leaf components are often re-rendered frequently. Identifying them is useful for understanding and debugging rendering performance.
<Trans>렌더 트리는 최상위 컴포넌트와 리프 컴포넌트가 무엇인지 식별하는 데 도움이 됩니다. 최상위 컴포넌트는 그 아래에 있는 모든 컴포넌트의 렌더링 성능에 영향을 미치며 리프 컴포넌트는 자주 리렌더링되는 경우가 많습니다. 이를 식별하는 것은 렌더링 성능을 이해하고 디버깅하는 데 유용합니다.</Trans>

* Dependency trees represent the module dependencies in a React app.
<Trans>종속성 트리는 React 앱의 모듈 종속성을 나타냅니다.</Trans>

* Dependency trees are used by build tools to bundle the necessary code to ship an app.
<Trans>종속성 트리는 빌드 도구에서 앱을 출시하는 데 필요한 코드를 묶는 데 사용됩니다.</Trans>

* Dependency trees are useful for debugging large bundle sizes that slow time to paint and expose opportunities for optimizing what code is bundled.
<Trans>종속성 트리는 페인팅 시간을 늦추고 번들로 묶인 코드를 최적화할 수 있는 기회를 제공하는 대규모 번들 크기를 디버깅하는 데 유용합니다.</Trans>

</Recap>

[TODO]: <> (Add challenges)
