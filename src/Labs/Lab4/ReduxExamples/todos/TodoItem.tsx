import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type Todo = {
    id: string;
    title: string;
};
  
export default function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
    return (
      <li 
      style={{ fontSize: '1.25rem', padding: '0.5rem' }}
      key={todo.id} 
      className="list-group-item d-flex justify-content-between align-items-center">        
      {todo.title}    
      
      <div className="ms-auto">
      <button 
      className="btn btn-md btn-danger me-1"
      onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"> Delete </button>
        <button 
        className="btn btn-md btn-primary"

        onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"> Edit </button>
      </div>
        
    </li>)
};