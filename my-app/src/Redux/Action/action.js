

export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove items 
export const DLT = (_id) => {
    return {
        type: "RMV_CART",
        payload: _id
    }
}

// export const SAVE = (item) => {
//     return {
//         type: "SAVE_CART",
//         payload: item
//     }
// }

