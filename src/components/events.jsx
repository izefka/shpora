import React from "react";

function Events() {
  return (
    <>
      <h2>Events</h2>
      <p>
        Обработка событий в React-элементах очень похожа на обработку событий в
        DOM-элементах. Но есть несколько синтаксических отличий.
      </p>
      <p>Например, в HTML:</p>
      <pre>
        <code>{`<button onclick="activateLasers()">
  Активировать лазеры
</button>`}</code>
      </pre>
      <p>В React немного иначе:</p>
      <pre>
        <code>{`<button onClick={activateLasers}>
  Активировать лазеры
</button>`}</code>
      </pre>
      <p>
        В компоненте, определённом с помощью ES6-класса, в качестве обработчика
        события обычно выступает один из методов класса.При обращении к this в
        JSX-колбэках необходимо учитывать, что методы класса в JavaScript по
        умолчанию не привязаны к контексту. Если вы забудете привязать метод
        this.handleClick и передать его в onClick, значение this будет undefined
        в момент вызова функции.Если вам не по душе bind, существует два других
        способа. Если вы пользуетесь экспериментальным синтаксисом общедоступных
        полей классов, вы можете использовать его, чтобы правильно привязать
        колбэки, eсли вы не пользуетесь синтаксисом полей, можете попробовать
        стрелочные функции в колбэке.
      </p>
      <pre>
        <code>{`class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Включено' : 'Выключено'}
      </button>
    );
  }
}`}</code>
      </pre>
    </>
  );
}

export default Events;
