'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoApp).call(this, props));

    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(TodoApp, [{
    key: 'createNewItem',
    value: function createNewItem(event) {
      if (event.key === 'Enter') {
        if (event.target.value !== '') {
          // this.setState(this.state.items.push(event.target.value))
          this.state.items.push({ name: event.target.value, checked: false });
          this.setState({ items: this.state.items });
          event.target.value = '';
        }
      }
    }
  }, {
    key: 'deleteItem',
    value: function deleteItem(idx) {
      this.state.items.splice(idx, 1);
      this.setState({ items: this.state.items });
    }
  }, {
    key: 'checkItem',
    value: function checkItem(idx) {
      this.state.items[idx]['checked'] = !this.state.items[idx]['checked'];
      this.setState({ items: this.state.items });
    }
  }, {
    key: 'clearComplete',
    value: function clearComplete() {
      this.state.items = this.state.items.filter(function (item) {
        return !item.checked;
      });
      this.setState({ items: this.state.items });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var count = this.state.items.filter(function (item) {
        return !item['checked'];
      }).length;
      return React.createElement(
        'div',
        null,
        React.createElement(
          'section',
          { className: 'todoapp' },
          React.createElement(
            'header',
            { className: 'header' },
            React.createElement(
              'h1',
              null,
              'todos'
            ),
            React.createElement('input', { className: 'new-todo', placeholder: 'What needs to be done?', onKeyPress: this.createNewItem.bind(this), autoFocus: true })
          ),
          React.createElement(
            'section',
            { className: 'main' },
            React.createElement('input', { className: 'toggle-all', type: 'checkbox' }),
            React.createElement(
              'label',
              { htmlFor: 'toggle-all' },
              'Mark all as complete'
            ),
            React.createElement(
              'ul',
              { className: 'todo-list' },
              this.state.items.map(function (item, idx) {
                return React.createElement(TodoItem, { key: idx, item: item, onDelete: _this2.deleteItem.bind(_this2, idx), onCheck: _this2.checkItem.bind(_this2, idx) });
              })
            )
          ),
          React.createElement(
            'footer',
            { className: 'footer' },
            React.createElement(CountDisplay, { count: count }),
            React.createElement(
              'button',
              { className: 'clear-completed', onClick: this.clearComplete.bind(this) },
              'Clear completed'
            )
          )
        ),
        React.createElement(
          'footer',
          { className: 'info' },
          React.createElement(
            'p',
            null,
            'Part of ',
            React.createElement(
              'a',
              { href: 'http://todomvc.com' },
              'TodoMVC'
            )
          )
        )
      );
    }
  }]);

  return TodoApp;
}(React.Component);

var TodoItem = function (_React$Component2) {
  _inherits(TodoItem, _React$Component2);

  function TodoItem() {
    _classCallCheck(this, TodoItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoItem).apply(this, arguments));
  }

  _createClass(TodoItem, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        { className: this.props.item.checked ? 'completed' : '' },
        React.createElement(
          'div',
          { className: 'view' },
          React.createElement('input', { className: 'toggle', type: 'checkbox', checked: this.props.item.checked, onChange: this.props.onCheck }),
          React.createElement(
            'label',
            null,
            this.props.item.name
          ),
          React.createElement('button', { className: 'destroy', onClick: this.props.onDelete })
        )
      );
    }
  }]);

  return TodoItem;
}(React.Component);

TodoItem.propTypes = {
  item: React.PropTypes.object
};

TodoItem.defaultProps = {
  item: { name: '', checked: false }
};

var CountDisplay = function (_React$Component3) {
  _inherits(CountDisplay, _React$Component3);

  function CountDisplay() {
    _classCallCheck(this, CountDisplay);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CountDisplay).apply(this, arguments));
  }

  _createClass(CountDisplay, [{
    key: 'render',
    value: function render() {
      var itemLeftStr = void 0;
      var count = this.props.count;
      if (count === 0) itemLeftStr = "no item";else if (count === 1) itemLeftStr = "item left";else itemLeftStr = "items left";

      return React.createElement(
        'span',
        { className: 'todo-count' },
        count === 0 ? '' : React.createElement(
          'strong',
          null,
          count
        ),
        ' ',
        itemLeftStr
      );
    }
  }]);

  return CountDisplay;
}(React.Component);

CountDisplay.propTypes = {
  count: React.PropTypes.number
};

CountDisplay.defaultProps = {
  count: 0
};

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('root'));