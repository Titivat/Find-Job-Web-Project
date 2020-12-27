

const loggedReducer = ( state = {}, action ) => {
    switch (action.type) {
        case "SIGN_IN":
            return getUserId( action.email, action.password );
        default:
            return {};
    }
};
// call api in here
const getUserId = ( email, password ) => {
    return {
        email: email,
        password: password
    }
    
}

export default loggedReducer;