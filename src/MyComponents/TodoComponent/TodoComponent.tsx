import {ITodo} from "../../models/ITodo/ITodo.ts";
import {FC} from "react";

type TodoPropsType={
    item:ITodo
}

const TodoComponent:FC<TodoPropsType> = ({item}) => {
    return (
        <div className={item.completed ? 'completed':'not-completed'}>
            <h3>{item.userId}</h3>
            <p>{item.title}</p>
            <p>{item.id}</p>
            <p>{item.completed}</p>
        </div>
    );
};

export default TodoComponent;