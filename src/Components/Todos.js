import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    
    if(this.props.users.items){
      todoItems = this.props.users.items.map(todo => {
        {console.log(todo.login);}
        return (
          <TodoItem key={todo.id} todo={todo} />
        );
      });
    }
    return (
      <div >
        <h3>Users List</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: React.PropTypes.array
}

export default Todos;
