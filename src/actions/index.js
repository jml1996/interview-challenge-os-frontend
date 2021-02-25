import axios from 'axios';
export const API_START = "API_START";
export const API_GET_SUCCESS = "API_GET_SUCCESS";
export const API_POST_SUCCESS = "API_POST_SUCCESS";
export const API_PUT_SUCCESS = "API_PUT_SUCCESS";
export const API_DELETE_SUCCESS = "API_DELETE_SUCCESS";
export const API_FAIL = "API_FAIL";

export const fetchAllAthletes = () => dispatch => {
    dispatch({type:API_START});
    axios
        .get("https://agile-dawn-86756.herokuapp.com/api/athlete")
        .then(res => {
            dispatch({type:API_GET_SUCCESS, payload:res.data});
        })
        .catch(err => dispatch({type:API_FAIL, payload:err}));
}

export const postNewAthlete = (athleteInfo) => dispatch => {
    dispatch({type:API_START})
    axios
        .post("https://agile-dawn-86756.herokuapp.com/api/athlete", athleteInfo)
        .then((res) => {
            dispatch({type:API_POST_SUCCESS, payload:res.data});
        })
        .catch(err => dispatch({type:API_FAIL, payload:err}))
}

export const editAthlete = (id, editedAthleteInfo) => dispatch => {
    axios
        .put(`https://agile-dawn-86756.herokuapp.com/api/athlete/${id}`, editedAthleteInfo)
        .then((res) => {
            dispatch({type:API_PUT_SUCCESS, payload:res.data});
        })
        .catch(err => dispatch({type:API_FAIL, payload:err}));
}

export const deleteAthlete = (id) => dispatch => {
    axios
        .delete(`https://agile-dawn-86756.herokuapp.com/api/athlete/${id}`)
        .then((res) => {
            dispatch({type:API_DELETE_SUCCESS, payload:id});
        })
        .catch(err => dispatch({type:API_FAIL, payload:err}));
}
