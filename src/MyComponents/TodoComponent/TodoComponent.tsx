import {ITodo} from "../../models/ITodo/ITodo.ts";
import {FC} from "react";


type TodoPropsType={
    item:ITodo
}

const TodoComponent:FC<TodoPropsType> = ({item}) => {
    return (
        <div className='border-4 border-red-700'>
            <h2>{item.id}</h2>
            <h3>{item.todo}</h3>
            <p>{item.userId}</p>
        </div>
    );
};

export default TodoComponent;