const initialState = {
    users: [
        {
            Name: "Fruit",
            vFruitType: "Mango",
            Quantity: "50",
            Location: "Takoradi",
            Date: "200-12-15",
            id: "1"
        },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            const newUser = {
                Name: action.payload.Name,
                vFruitType: action.payload.vFruitType,
                Quantity: action.payload.Quantity,
                Location: action.payload.Location,
                Date: action.payload.Date,
                id: action.payload.id
            };
            return {...state, users: [...state.users, newUser]}
        case "DELETE_USER": 
        const filteredUsers = state.users.filter(user => user.id !== action.payload)
        return {...state, users: filteredUsers}
        case "EDIT_USER":
            const editedUsers = state.users.map(user =>{
                if (user.id === action.user_id) {
                    return {...user, ...action.updated_info}
                }else {
                    return user;
                }
            })
            return {...state, users: editedUsers}
        default:
            return state;
    }
}


export default usersReducer;