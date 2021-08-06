import React, {useReducer} from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const User = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>Count:{state.count}
      <button type="button" className="primary btn-sm" onClick={() => dispatch({type: 'increment'})}>
        +1
      </button>
      <button
        type="button"
        className="primary btn-sm"
        onClick={() => dispatch({type: 'decrement'})}
      >
        -1
      </button>
    </div>
  );
};
export default User;
