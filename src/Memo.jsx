import React from 'react';

const Memo = ({ memo }) => {
    // const handleTodoClick = () => {
    //     toggleTodo(todo.id)
    // }
    return (
        <div>{memo.name}</div>
    );
};

export default Memo;