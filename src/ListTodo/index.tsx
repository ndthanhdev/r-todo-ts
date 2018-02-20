import * as React from 'react';
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton, List } from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import { Todo } from '../App';

interface Props {
    todos: Todo[];
    onToggleTodo: (todo: Todo) => void;
    onDeleteTodo: (todo: Todo) => void;
}

export default class ListTodo extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        let items = this.props.todos.filter(todo => !todo.isDeleted)
            .map((todo, i) => {
                return (
                    <ListItem key={i}>
                        <Checkbox onChange={() => this.props.onToggleTodo(todo)} />
                        <ListItemText primary={todo.text} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete" onClick={() => this.props.onDeleteTodo(todo)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            });
        return (
            <List>
                {items}
            </List>
        );
    }
}