import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../modules/todos";

const TodoItem = ({ data }) => {
    const dispatch = useDispatch();

    const handleDeleteButton = () => {
        dispatch(remove(data.id));
    };

    return (
        <div>
            <div>
                <input type="checkbox" />
                <span>{data.text}</span>
                <button onClick={handleDeleteButton}>삭제</button>
            </div>
        </div>
    );
};

export default TodoItem;
