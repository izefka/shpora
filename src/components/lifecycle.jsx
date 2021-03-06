import React from "react";

function Lifecycle() {
  return (
    <>
      <h2>Lifecycle</h2>
      <p>
        Конструкторы – это такая специальная функция, которая будет вызываться
        всякий раз, когда создается новый объект. Очень важно вызывать функцию
        super в случаях, когда наш класс расширяет поведение другого класса,
        который имеет конструктор. Выполнение этой специальной функции будет
        вызывать конструктор нашего родительского класса и разрешать ему
        проинициализировать себя. Поэтому конструкторы — это отличное место для
        инициализации компонента. Это также единственное место где вы можете
        изменять/устанавливать состояние (state) напрямую перезаписывая поле
        this.state. Во всех других случаях необходимо использовать
        this.setState.
      </p>
      <pre>
        <code>{`class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  ...`}</code>
      </pre>
      <p><hr/></p>
      <p>
        shouldComponentUpdate(nextProps, nextState, nextContext) <br />
        По умолчанию, все компоненты будут перерисовывать себя всякий раз, когда
        их состояние (state) изменяется, изменяется контекст или они принимают
        props от родителя. Если перерисовка компонента довольно тяжелая
        (например генерация чарта, графика) или не рекомендуется по каким-либо
        перфоманс причинам, то у разработчиков есть доступ к специальной
        функции, которая будет вызываться всякий раз при апдейт цикле. Эта
        функция будет вызываться сo следующими значениями props, состоянием
        (state) и объектом. И разработчик может использовать эти параметры для
        того чтобы решить нужно ли делать перерисовку компонента или вернуть
        false и предотвратить ее. В противном случае от вас ожидают, что вы
        вернете true.
      </p>
      <pre>
        <code>{` shouldComponentUpdate() {
    return false;
  }`}</code>
      </pre>
      <p><hr/></p>
      <p>
        componentDidUpdate(prevProps, prevState, prevContext) <br />
        Эта функция будет вызываться после того как отработала функция render, в
        каждом цикле перерисовки. Это означает, что вы можете быть уверены, что
        компонент и все его дочерние компоненты уже перерисовали себя. В связи с
        этим эта функция является единственной функцией, что гарантировано будет
        вызвана только раз в каждом цикле перерисовки, поэтому любые
        сайд-эффекты рекомендуется выполнять именно здесь. B эту функцию
        передается предыдущие props, состояние (state) и контекст, даже если в
        этих значениях не было изменений. Поэтому разработчики должны вручную
        проверять переданные значения на изменения и только потом производить
        различные апдейт операции.
      </p>
      <pre>
        <code>{`componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }`}</code>
      </pre>
      <p><hr/></p>
      <p>
        componentDidMount
        <br />
        Эта функция будет вызвана лишь раз во всем жизненном цикле данного
        компонента и будет сигнализировать, что компонент и все его дочерние
        компоненты отрисовались без ошибок.
      </p>
      <pre>
        <code>{`componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }`}</code>
      </pre>
      <p><hr/></p>
      <p>
        componentWillUnmount <br />
        Bызывается перед удалением компонента из DOM. Используйте эту функцию
        для «очистки» после компонента, если он использует таймеры (setTimeout,
        setInterval), открывает сокеты или производит любые операции, которые
        нуждаются в закрытии или удалении.
      </p>
      <pre>
        <code>{`componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }`}</code>
      </pre>
      <p><hr/></p>
      <p>
        render() <br />
        Pендеринг компонента (если shouldComponentUpdate возвращает true)
      </p>
    </>
  );
}

export default Lifecycle;
