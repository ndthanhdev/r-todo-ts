import * as React from 'react';
import { TextField, Card, CardContent, CardActions, Button } from 'material-ui';

interface Props {
    onAddTodo: (text: String) => void;
}

interface State {
    text: String;
}

export default class InsertBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <TextField label="Content" onChange={this.handleChange} />
                </CardContent>
                <CardActions>
                    <Button
                        variant="raised"
                        color="primary"
                        onClick={() => this.props.onAddTodo(this.state.text)}
                    >Add
                    </Button>
                </CardActions>
            </Card>
        );
    }

    private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            text: event.target.value
        });
    }
}