import React from "react";

function Key() {
  return (
    <>
      <h2>Key</h2>
      <p>
        «Ключ» — это специальный строковый атрибут, который нужно указывать при
        создании списка элементов.
      </p>
      <p>
        Ключи помогают React определять, какие элементы были изменены, добавлены
        или удалены. Их необходимо указывать, чтобы React мог сопоставлять
        элементы массива с течением времени:
      </p>
      <pre>
        <code>{` const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);`}</code>
      </pre>
    </>
  );
}

export default Key;
