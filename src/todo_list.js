class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['123','456']
    };
  }
  render() {
    const count = this.state.items.length;
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autofocus />
          </header>
          <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              {this.state.items.map((itemName) => <TodoItem itemName={itemName} />)}
            </ul>
          </section>
          <footer className="footer">
            <CountDisplay count={count} />
            <button className="clear-completed">Clear completed</button>
          </footer>
        </section>
        <footer className="info">
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{this.props.itemName}</label>
          <button className="destroy"></button>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  itemName: React.PropTypes.string
};

TodoItem.defaultProps = {
  itemName: ''
};

class CountDisplay extends React.Component {
  render() {
    let itemLeftStr;
    const count = this.props.count;
    if (count === 0)
      itemLeftStr = "no item";
    else if (count === 1)
      itemLeftStr = "item left";
    else
      itemLeftStr = "items left";

    return (
      <span className="todo-count">
        {count === 0 ? '': <strong>{count}</strong>} {itemLeftStr}
      </span>
    );
  }
}

CountDisplay.propTypes = {
  count: React.PropTypes.number
};

CountDisplay.defaultProps = {
  count: 0
};

ReactDOM.render(<TodoApp />, document.getElementById('root'));
