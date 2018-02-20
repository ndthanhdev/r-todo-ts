import * as React from 'react';
import './App.css';
import InsertBar from './InsertBar';
import ListTodo from './ListTodo';
import { Card } from 'material-ui';
import * as Faker from 'faker';

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  isDeleted: boolean;
}

interface State {
  todos: Todo[];
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    let todos: Todo[] = [];
    this.state = {
      todos: todos
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }
  handleAddTodo(text: string) {
    let todo: Todo = {
      text: text,
      id: Faker.random.uuid(),
      isCompleted: false,
      isDeleted: false
    };
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  }
  handleToggleTodo(toggledTodo: Todo) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === toggledTodo.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  }
  handleDeleteTodo(deletedTodo: Todo) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === deletedTodo.id) {
          todo.isDeleted = true;
        }
        return todo;
      })
    });
  }

  render() {
    return (
      <Card>
        <InsertBar onAddTodo={this.handleAddTodo} />
        <ListTodo todos={this.state.todos} onToggleTodo={this.handleToggleTodo} onDeleteTodo={this.handleDeleteTodo} />
      </Card>
    );
  }
}

export default App;
