import { View } from 'react-native';
import { createStore, compose } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';

initState = {
    loginStatus: false,
}
const LoginAction = (state =  initState , action) => {
    if (action.type == 'changeLogin') {
        return { loginStatus: !state.loginStatus }
    }
    else if (action.type == 'getDefault') {
        return { loginStatus: false }
    }
    return state
}
const store = createStore(LoginAction, composeWithDevTools());
export default store