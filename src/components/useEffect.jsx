import React from "react";

function Use() {
  return (
    <>
      <h2>useEffect</h2>
      <p>
        Используя этот хук, вы говорите React сделать что-то после рендера.
        React запомнит функцию (то есть «эффект»), которую вы передали и вызовет
        её после того, как внесёт все изменения в DOM.{" "}
      </p>
      <pre>
        <code>{`useEffect(() => {
    document.title = 'Вы нажали $count} раз';
  });`}</code>
      </pre>
      <p>
       По умолчанию после всех рендеров
      </p>
      <p>
        [] - после первого рендера
      </p>
      <p> [count, result] - после изменения count или result</p>
      <p>
        Для сбрасывания эффекта используется return
      </p>
      
    </>
  );
}

export default Use;
