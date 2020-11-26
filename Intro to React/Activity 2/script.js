'use strict';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.todoText;
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList:
        ["delectus aut autem",
          "et porro tempora",
          "fugiat veniam minus",
          "quis ut nam facilis et officia qui"
        ]
    };
  }

  render() {
    return this.state.todoList.map((todoText) => {
      return React.createElement(
        TodoItem,
        { todoText: todoText }
      );
    })
  }
}

const domContainer = document.querySelector('#react_container');
ReactDOM.render(React.createElement(TodoList), domContainer);