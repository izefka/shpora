import React from "react";

function Async() {
  return (
    <>
      <h2>Asynchronous request</h2>
      <p>
        GET <br /> Метод GET запрашивает представление ресурса. Запросы с
        использованием этого метода могут только извлекать данные. <br />
        &emsp;&emsp;POST
        <br /> POST используется для отправки сущностей к определённому ресурсу.
        Часто вызывает изменение состояния или какие-то побочные эффекты на
        сервере. <br /> &emsp;&emsp;PUT <br /> PUT заменяет все текущие
        представления ресурса данными запроса. <br /> &emsp;&emsp;DELETE <br />
        DELETE удаляет указанный ресурс.
      </p>
      <p>
        Вы можете сделать AJAX-запрос в componentDidMount. Когда вы получите
        данные, вызовите setState, чтобы передать их компоненту.
      </p>
      <pre>
        <code>{` class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}`}</code>
      </pre>
      <p>
      Вот эквивалент с хуками:
      </p>
      <pre>
        <code>{`function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}`}</code>
      </pre>
    </>
  );
}

export default Async;
