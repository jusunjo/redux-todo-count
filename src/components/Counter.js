import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../modules/counter";

const Counter = () => {
    const dispatch = useDispatch();
    const num = useSelector((it) => it.counter.number);

    console.log(num);
    return (
        <div className="counter">
            <h1>{num}</h1>
            <button onClick={() => dispatch(increase())}>+1</button>
            <button onClick={() => dispatch(decrease())}>-1</button>
        </div>
    );
};

export default Counter;
