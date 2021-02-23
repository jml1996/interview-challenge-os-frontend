import { 
    API_START,
    API_GET_SUCCESS,
    API_POST_SUCCESS,
    API_PUT_SUCCESS,
    API_DELETE_SUCCESS,
    API_FAIL
} from '../actions';

// name: "",
// date_of_birth: "",
// location: "",
// team: "",
// gender: "",
// sports: [],
// about: "",
// profile_image: "",
// interests: "",
// isLoading: false,
// error: ""

export const initialState = {
    allAthletes: [],
    isLoading: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(API_START):
            return({
                ...state,
                isLoading: true,
                error: ""
            });
        case(API_GET_SUCCESS):
            return({
                ...state,
                allAthletes: action.payload,
                isLoading: false,
                error: ""
            });
        case(API_POST_SUCCESS):
            console.log(action.payload);
            return({
                ...state,
                allAthletes: [...state.allAthletes, action.payload],
                isLoading: false,
                error: ""
            });

        case(API_PUT_SUCCESS):
            const otherThan = state.allAthletes.filter(ath => ath._id !== action.payload._id);
            const editedArray = [...otherThan, action.payload];
            return({
                ...state,
                allAthletes: editedArray,
                isLoading: false,
                error: ""
            });
        case(API_DELETE_SUCCESS):
            return({
                ...state,
                allPosts: state.allAthletes.filter(post => post._id !== action.payload),
                isLoading: false,
                error: ""
            });
        case(API_FAIL):
            return({
                ...state,
                isLoading: false,
                error: action.payload
            });
        default:
            return state;
    }
}

export default reducer;