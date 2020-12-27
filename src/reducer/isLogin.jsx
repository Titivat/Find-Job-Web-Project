

const loggedReducer = ( state = {}, action ) => {
    switch (action.type) {
        case "SIGN_IN":
            return getUserId();
        default:
            return false;
    }
};

const getUserId = () => {
    return {
        id: 'name',
        email: 'titivemo@gmail.com'
    }
}

export default loggedReducer;