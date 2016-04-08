import React from "react"
import ReactDOM from "react-dom"
import "./todo_list.css"

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      markAll: false,
    };
  }

  createNewItem(event) {
    if (event.key === 'Enter') {
      if (event.target.value !== '') {
        // this.setState(this.state.items.push(event.target.value))
        this.state.items.push({name: event.target.value, checked: false})
        this.setState({items: this.state.items, markAll: false})
        event.target.value = ''
      }
    }
  }

  deleteItem(idx) {
    this.state.items.splice(idx, 1)
    this.setState({items: this.state.items})
  }

  checkItem(idx) {
    this.state.items[idx]['checked'] = !this.state.items[idx]['checked'];
    if (this.state.markAll && !this.state.items[idx]['checked'])
      this.state.markAll = false;
    this.setState({items: this.state.items,
                   markAll: this.state.markAll})
  }

  clearComplete() {
    this.state.items = this.state.items.filter((item) => !item.checked)
    this.setState({items: this.state.items})
  }

  markAll(event) {
    let markAll = this.state.markAll;
    if (!markAll) {
      markAll = true
      this.state.items.forEach((item) => item.checked=true)
    }
    else {
      markAll = false
      this.state.items.forEach((item) => item.checked=false)
    }
    this.setState({items: this.state.items,
                   markAll: markAll})
  }

  render() {
    const count = this.state.items.filter((item) => !item['checked']).length;
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" onKeyPress={this.createNewItem.bind(this)} autoFocus />
          </header>
          <section className="main">
            <input className="toggle-all" type="checkbox" onChange={this.markAll.bind(this)} checked={this.state.markAll} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              {this.state.items.map((item, idx) => <TodoItem key={idx} item={item} onDelete={this.deleteItem.bind(this, idx)} onCheck={this.checkItem.bind(this, idx)} />)}
            </ul>
          </section>
          <footer className="footer">
            <CountDisplay count={count} />
            <button className="clear-completed" onClick={this.clearComplete.bind(this)}>Clear completed</button>
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
      <li className={this.props.item.checked? 'completed': ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.props.item.checked} onChange={this.props.onCheck} />
          <label>{this.props.item.name}</label>
          <button className="destroy" onClick={this.props.onDelete}></button>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  item: React.PropTypes.object,
};

TodoItem.defaultProps = {
  item: {name: '', checked: false}
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
