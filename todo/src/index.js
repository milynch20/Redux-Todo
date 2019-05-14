import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {todoReducer} from './Reducers/index';
import ToDoList from './Components/ToDoList';

import './index.css';


const store = createStore(todoReducer);


function App() {
    return (
        <div className="App">
            < ToDoList/>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
