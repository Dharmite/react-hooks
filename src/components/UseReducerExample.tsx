import React from 'react';

enum ActionType {
    Increment = 'increment',
    Decrement = 'decrement',
    INPUT = 'input'
}

type Action = { type: ActionType, payload?: number };
type State = { count: number };

const initialState: State = {
    count: 0
};

const reducer: React.Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.Increment:
            return { count: state.count + 1 };
        case ActionType.Decrement:
            return { count: state.count - 1 };
        case ActionType.INPUT:
            return { count: action.payload || state.count };
        default:
            return state;
    }
};



const UseReducerExample: React.FC = () => {
    // useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
    // useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
    // https://reactjs.org/docs/hooks-reference.html#usereducer

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const containerStyle: React.CSSProperties = {
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '50px'
    };

    return (
        <div style={containerStyle}>
            <button onClick={() => dispatch({ type: ActionType.Decrement })}>-</button>
            {state.count}
            <button onClick={() => dispatch({ type: ActionType.Increment })}>+</button>
            <input type="text" value={state.count} onChange={(e) => dispatch({ type: ActionType.INPUT, payload: Number(e.target.value) })} />
        </div>
    );
};

export default UseReducerExample;
