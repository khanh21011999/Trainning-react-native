import * as actionList from "../Action/ActionList.js";

const initState={
    user:undefined
}
const User = (state=initState, action)=>{
    switch(action.type){
        case actionList.SET_USER:
            const {user} = action
            return {user:user}
        default:
            return state;
    }
}
export default User