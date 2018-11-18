import React, { Component } from 'react';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// ! Query quando vamos consutar os dados da api
// * Mutation quando vamos mudar algo na api
// todo => tipo subscription quando queremos 'ouvir' nossa api em tempo real


class TodoList extends Component {

    renderTodoList = () => {
        return (
            <ul>
                {this.props.todos.allTodoes.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                    </li>
                ))
                }
            </ul>
        );
    }

    render() {
        console.log(this.props);
        const { todos } = this.props;
        return (
            <div>
                {
                    todos.loading ? (<p>Carregando...</p>)
                        : this.renderTodoList()
                }
            </div>
        );
    }
}


const TodosQuery = gql`
    query {
        allTodoes{
            id
            text
        }
    }
`;

export default graphql(TodosQuery,
    { name: 'todos' }
)(TodoList);