// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(

) {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <input
                className="rounded"
                style={{ fontSize: '1.25rem', padding: '0.5rem' }}
                defaultValue={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />

            <div className="ms-auto">
                <button
                    className="btn btn-lg btn-warning me-1"
                    onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click"> Update </button>
                <button
                    className="btn btn-lg btn-success"
                    onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click"> Add </button>
            </div>

        </li>
    );
}