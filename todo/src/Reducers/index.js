import { ADD_TODO, TOGGLE_TODO} from "../Actions";

const initialState = {
    todos: [
        {value: 'Walk the dog!'},
        {completed: false}
    ]
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO:
            console.log('add_todo', action);
            const newtodo = {
                value: action.payload,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newtodo]
            };


        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    action.payload === index
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        default:
            return state;
    }
};