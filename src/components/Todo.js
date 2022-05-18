import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { insert } from "../modules/todos";

const Todo = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    const todolist = useSelector((it) => it.todos.todoList);
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleButton = () => {
        dispatch(insert(text));
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
                <button onClick={handleButton} type="submit">
                    등록
                </button>
            </form>
            <div>
                {todolist.map((data) => (
                    <TodoItem key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Todo;
