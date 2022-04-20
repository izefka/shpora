import React from "react";

function Refs() {
  return (
    <>
      <h2>Refs</h2>
      <p>
        React по своей природе изолирует вас от прямой работы с DOM на 100%. Но
        нередко при интеграции сторонних компонентов, которые написаны не на
        React, возникает задача на прямой доступ к DOM. Также подобный механизм
        нужен для выделения текста, фокусов и проигрывания медиа.
      </p>

      <p>
        React позволяет сделать это с помощью рефов (refs). Важно понимать, что
        в нормальной ситуации этот механизм не нужен и следует максимально
        избегать его использования.
      </p>
      <p>
        ref — это атрибут компонента, значением которого должен быть объект,
        созданный в конструкторе через функцию React.createRef(). Этот объект, в
        отличие от остальных данных, которые находятся в props или state,
        хранится как обычное свойство объекта. Имя свойства можно выбрать
        произвольно. Свойство current этого объекта даёт доступ к элементу DOM,
        именно его можно использовать в componentDidMount или
        componentDidUpdate.
      </p>
      <pre>
        <code>{`class CustomTextInput extends React.Component {
  handleFocusTextInput = () => {
    // Explicitly focus the text input using the raw DOM API
    console.log(this.textInput);
    this.textInput.current.focus();
  };

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleFocusTextInput}
        />
      </div>
    );
  }
}
`}</code>
      </pre>
      <p>useRef</p>
      <p>
        useRef возвращает изменяемый ref-объект, свойство .current которого
        инициализируется переданным аргументом (initialValue). Возвращённый
        объект будет сохраняться в течение всего времени жизни компонента.
      </p>
      <pre>
        <code>{`function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // current указывает на смонтированный элемент input
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
    </>
  );
}`}</code>
      </pre>
    </>
  );
}

export default Refs;
