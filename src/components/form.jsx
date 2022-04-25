import React from "react";

function Form() {
  return (
    <>
      <h2>Form</h2>
      <p>
        В HTML элементы формы, такие как input, textarea и select, обычно сами
        управляют своим состоянием и обновляют его когда пользователь вводит
        данные. В React мутабельное состояние обычно содержится в свойстве
        компонентов state и обновляется только через вызов setState()
      </p>
      <p>
        Допустим, мы хотим, чтобы предыдущий пример показал в модальном окне
        введённое имя, когда мы отправляем форму. Тогда можно написать форму в
        виде управляемого компонента:
      </p>
      <pre>
        <code>{`class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}`}</code>
      </pre>
      <p>
        React для выбора по умолчанию использует value в корневом теге select. В
        управляемом компоненте так удобнее, потому что обновлять значение нужно
        только в одном месте (state). Пример:
      </p>
      <pre>
        <code>{`class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Ваш любимый вкус: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Выберите ваш любимый вкус:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}`}</code>
      </pre>
    </>
  );
}

export default Form;
