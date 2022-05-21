const initialState = [{
    description:"this is demo",
    id:"1242"

}]
const store = (state = initialState, action) => {
    switch (action.type) {
        case 'addtoCart':
            return [
                ...state,
                {
                    description: action.payload.description,
                    id: action.payload.id,
                }
            ];
        default:
            return state;
    }

}

export default store;