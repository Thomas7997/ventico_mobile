let initalState = {
    on : false,
    isLoading : true,
    success : null
};

export default function http(state = initalState, action) {
    switch (action.type) {
      case 'ON_SUCCESS':
        return {
            ...state,
            on : true,
            success : true,
            isLoading : false
        };
      case 'OFF_SUCCESS':
        return {
            ...state,
            success : true,
            isLoading : false,
            on : false
        };
    case 'ON_FAILURE':
        return {
            ...state,
            success : false,
            isLoading : false
        };
    case 'OFF_FAILURE':
        return {
            ...state,
            success : false,
            isLoading : false
        };
      default:
        return state
    }
}