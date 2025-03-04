import  {useEffect, useState} from 'react';
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import {ITodo} from "../../models/ITodo/ITodo.ts";
import {IDummy} from "../../models/IDummy/IDummy.ts";
import ApiService from "../../services/api.service.ts";

const TodoComponents = () => {

    const [todos,setTodos]=useState<ITodo[]>([])

    useEffect(()=>{

        ApiService()
            .then(({todos}:IDummy)=>
                setTodos(todos)
            );
    },[])


    return (
        <div>
            {
               todos.map(value => <TodoComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default TodoComponents;