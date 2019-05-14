export const ADD_TODO  = 'ADD_TODO';
export const TOGGLE_TODO ='TOGGLE_TODO';

export function addNewToDo(newtask) {
    console.log('action', newtask);
    return {
        type: ADD_TODO,
        payload: newtask
    };
}

export function toggleToDo(index) {
    console.log('action', index);
    return {
        type: TOGGLE_TODO,
        payload: index
    };
}