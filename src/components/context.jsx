import React from "react";

function Fragment() {
  return (
    <>
      <h2>Fragment</h2>
      <p>
        Возврат нескольких элементов из компонента является распространённой
        практикой в React. Фрагменты позволяют формировать список дочерних
        элементов, не создавая лишних узлов в DOM.
      </p>
      <pre>
        <code>{`render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}`}</code>
      </pre>
      <p>
        Можно использовать <></> так же, как используется любой другой элемент.
        Однако такая запись не поддерживает ключи или атрибуты.
      </p>
    </>
  );
}

export default Fragment;
