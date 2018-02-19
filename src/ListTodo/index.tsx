import * as React from 'react';
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton, List } from 'material-ui';
import EditIcon from 'material-ui-icons/Edit';

interface Props {
    todos: string[];
}

export default class ListTodo extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        let items = this.props.todos.map((todo, i) => {
            return (
                <ListItem key={i}>
                    <Checkbox />
                    <ListItemText primary={todo} />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Comments">
                            <EditIcon />
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