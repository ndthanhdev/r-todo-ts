import * as React from 'react';
import './App.css';
import InsertBar from './InsertBar';
import ListTodo from './ListTodo';
import { Card } from 'material-ui';

interface State {
  todos: string[];
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    let todos: string[] = [];
    this.state = {
      todos: todos
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(text: string) {
    this.setState({
      todos: [text, ...this.state.todos]
    });

  }

  render() {
    return (
      <Card>
        <InsertBar onAddTodo={this.handleAddTodo} />
        <ListTodo todos={this.state.todos} />
      </Card>
    );
  }
}

export default App;
