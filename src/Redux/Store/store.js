import { View } from 'react-native';
import { createStore } from 'redux';
initState={
    number: 0,
}
const CounterAction = (state = initState, action) => {
    if (action.type == 'increase') {
        return { number: state.number + action.amount }
    }
    return state
}
const store = createStore(CounterAction,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store