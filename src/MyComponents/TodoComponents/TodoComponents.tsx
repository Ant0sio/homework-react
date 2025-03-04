import { useEffect, useState} from "react";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import ApiTodos from "../../services/api.todos.ts";
import {ITodo} from "../../models/ITodo/ITodo.ts";


const TodoComponents = () => {

    const [todos,setTodos]=useState<ITodo[]>([])

     useEffect(()=>{
            ApiTodos()
                .then(response =>
                 setTodos(response))
        },
        [])


    return (
        <div>
            {

                todos.map((todo)=><TodoComponent key={todo.id} item={todo}/>)

            }
        </div>
    );
};

export default TodoComponents;