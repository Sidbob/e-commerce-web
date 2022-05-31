const INIT_STATE = {
    carts: [],
    save_carts: [],
};

export const cartReducer = (state = INIT_STATE, action) => {

    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }

        case "RMV_CART":
            const Rdata = state.carts.filter((el) =>el._id !== action.payload);

            return {
                ...state,
                carts: Rdata
            }

        default:
            return state

    }
}


// export const SaveCartReducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//         case "SAVE_CART":
//             return {
//                 ...state,
//                 carts: [...state.save_carts, action.payload]
//             }
//         default:
//             return state

//     }
// }