let initalState = {
    on : false,
    isLoading : true,
    success : null
};

export default function http(state = initalState, action) {
    switch (action.type) {
      case 'ON1_SUCCESS':
        return {
            ...state,
            on : true,
            success : true,
            isLoading : false
        };
      case 'OFF1_SUCCESS':
        return {
            ...state,
            success : true,
            isLoading : false,
            on : false
        };
        case 'ON1_FAILURE':
            return {
                ...state,
                success : false,
                isLoading : false
            };
        case 'OFF1_FAILURE':
            return {
                ...state,
                success : false,
                isLoading : false
            };
        case 'ON2_SUCCESS' :
            return {
                ...state,
                success : true,
                on : true,
                isLoading : false
            };
        case 'ON2_FAILURE' :
            return {
                ...state,
                success : false,
                isLoading : false
            };
        default:
            return state
    }
}