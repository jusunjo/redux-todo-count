const INSERT = "INSERT";
const REMOVE = "REMOVE";

//사전에 객체 두개를 넣어놓을거라서 id = 3부터 시작
let id = 3;
export const insert = (text) => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false,
    },
});

export const remove = (id) => ({
    type: REMOVE,
    id,
});

const initialState = {
    input: "",
    todoList: [
        {
            id: 1,
            text: "리덕스 누가 만들었어",
            done: true,
        },
        {
            id: 2,
            text: "리덕스 너무 어려웡",
            done: false,
        },
    ],
};

function todos(state = initialState, action) {
    if (action.type === INSERT) {
        return {
            ...state,
            todoList: state.todoList.concat(action.todo),
        };
    } else if (action.type === REMOVE) {
        return {
            ...state,
            todoList: state.todoList.filter((todo) => todo.id !== action.id),
        };
    } else {
        return state;
    }
}

export default todos;
