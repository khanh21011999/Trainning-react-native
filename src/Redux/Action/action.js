import * as actionList from './ActionList.js'

export const getUser = () => ({
    type: actionList.GET_USER

})
export const setUser = (user) => ({
    type: actionList.SET_USER,
    user: user
})