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
      items: ['123', '456']
    };
    return _this;
  }

  _createClass(TodoApp, [{
    key: 'render',
    value: function render() {
      var count = this.state.items.length;
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
            React.createElement('input', { className: 'new-todo', placeholder: 'What needs to be done?', autofocus: true })
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
              this.state.items.map(function (itemName) {
                return React.createElement(TodoItem, { itemName: itemName });
              })
            )
          ),
          React.createElement(
            'footer',
            { className: 'footer' },
            React.createElement(CountDisplay, { count: count }),
            React.createElement(
              'button',
              { className: 'clear-completed' },
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
        null,
        React.createElement(
          'div',
          { className: 'view' },
          React.createElement('input', { className: 'toggle', type: 'checkbox' }),
          React.createElement(
            'label',
            null,
            this.props.itemName
          ),
          React.createElement('button', { className: 'destroy' })
        )
      );
    }
  }]);

  return TodoItem;
}(React.Component);

TodoItem.propTypes = {
  itemName: React.PropTypes.string
};

TodoItem.defaultProps = {
  itemName: ''
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