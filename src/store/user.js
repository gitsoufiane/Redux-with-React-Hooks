
const initialState = {
    name: 'soufiane',
    loggedIn: false,
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }

}

// selectors
export const getName = state => state.user.name;
export const getLoggedIn=state=>state.user.loggedIn;