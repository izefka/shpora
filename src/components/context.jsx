import React from "react";

function Context() {
  return (
    <>
      <h2>Context</h2>
      <p>
        Обычно контекст используется, если необходимо обеспечить доступ данных
        во многих компонентах на разных уровнях вложенности.
      </p>
      <p>
        Если вы хотите избавиться от передачи некоторых пропсов на множество
        уровней вниз, обычно композиция компонентов является более простым
        решением, чем контекст.
      </p>
      <p>
        Один из способов решить эту проблему без контекста — передать вниз сам
        компонент Avatar, в случае чего промежуточным компонентам не нужно знать
        о пропсах user и avatarSize:
      </p>
      <pre>
        <code>{`function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Теперь, это выглядит так:
<Page user={user} avatarSize={avatarSize}/>
// ... который рендерит ...
<PageLayout userLink={...} />
// ... который рендерит ...
<NavigationBar userLink={...} />
// ... который рендерит ...
{props.userLink}`}</code>
      </pre>
      <p>
        Создаёт объект Context. Когда React рендерит компонент, который подписан
        на этот объект, React получит текущее значение контекста из ближайшего
        подходящего Provider выше в дереве компонентов. Аргумент defaultValue
        используется только в том случае, если для компонента нет подходящего
        Provider выше в дереве. Значение по умолчанию может быть полезно для
        тестирования компонентов в изоляции без необходимости оборачивать их.
        Обратите внимание: если передать undefined как значение Provider,
        компоненты, использующие этот контекст, не будут использовать
        defaultValue.
      </p>
      <pre>
        <code>{`const MyContext = React.createContext(defaultValue);`}</code>
      </pre>
      <p>
        Каждый объект Context используется вместе с Provider компонентом,
        который позволяет дочерним компонентам, использующим этот контекст,
        подписаться на его изменения. Компонент Provider принимает проп value,
        который будет передан во все компоненты, использующие этот контекст и
        являющиеся потомками этого компонента Provider. Один Provider может быть
        связан с несколькими компонентами, потребляющими контекст.
      </p>
      <pre>
        <code>{`<MyContext.Provider value={/* некоторое значение */}>`}</code>
      </pre>
      <p>Получение свойств из Context в классовых компонентах.</p>
      <pre>
        <code>{`class Image extends React.Component {
  render() {
    const theme = this.context;
    return (
      <div className={"$theme}-image image"}>
        <div className={"$theme}-ball ball"} />
        <Button />
      </div>
    );
  }
}

Image.contextType = ThemeContext;`}</code>
      </pre>
      <p>
        К сожалению, способ выше работает только с классовыми компонентами. Так
        что для полноты картины нужно конвертировать имеющиеся компоненты в
        функциональные и использовать ThemeContext.Consumer, чтобы передать
        информацию между ними. Внутри него нужно предоставить функцию,
        возвращающую элементы. 
      </p>
      <pre>
        <code>{`function Image(props) {
  // Это больше не нужно
  // const theme = this.context

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={'$theme}-image image'}>
          <div className={'$theme}-ball ball'} />
          <Button />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}`}</code>
      </pre>
      <p>
        Если вы хотите избавиться от передачи некоторых пропсов на множество
        уровней вниз, обычно композиция компонентов является более простым
        решением, чем контекст.
      </p>
    </>
  );
}

export default Context;
