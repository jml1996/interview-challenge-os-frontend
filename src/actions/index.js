import axios from 'axios';
// import { axiosWithAuth } from './../utils/axiosWithAuth';

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
            console.log(res)
            dispatch({type:API_GET_SUCCESS, payload:res.data});
        })
        .catch(err => dispatch({type:API_FAIL, payload:err}));
}

// export const addPost = (newPost) => dispatch => {
//     axiosWithAuth()
//         .post("https://expatjournal2021.herokuapp.com/posts/", newPost)
//         .then((res) => {
//             console.log(res.data);
//             dispatch({type:API_POST_ALL_POSTS_SUCCESS, payload:res.data});
//         })
//         .catch(err => dispatch({type:API_ALL_POSTS_FAIL, payload:err}));
// }

// export const fetchMyPosts = (user_id) => dispatch => {
//     dispatch({type:API_ALL_POSTS_START});

//     axiosWithAuth()
//         .get(`https://expatjournal2021.herokuapp.com/${user_id}/posts/`)
//         .then(res => {
//             dispatch({type:API_GET_ALL_POSTS_SUCCESS, payload:res.data});
//         })
//         .catch(err => dispatch({type:API_ALL_POSTS_FAIL, payload:err}));
// }

// export const editPost = (id, editedPost) => dispatch => {
    
//     axiosWithAuth()
//         .put(`https://expatjournal2021.herokuapp.com/posts/${id}`, editedPost)
//         .then((res) => {
//             dispatch({type:API_PUT_MY_POSTS_SUCCESS, payload:res.data});
//         })
//         .catch(err => dispatch({type:API_ALL_POSTS_FAIL, payload:err}));
// }

// export const deletePost = (id) => dispatch => {
//     axiosWithAuth()
//         .delete(`https://expatjournal2021.herokuapp.com/posts/${id}`)
//         .then((res) => {
//             dispatch({type:API_DELETE_MY_POST_SUCCESS, payload:id});
//         })
//         .catch(err => dispatch({type:API_ALL_POSTS_FAIL, payload:err}));
// }

// export const setCurrentUsername = () => {
//     const currentUsernameLocalStorage = localStorage.getItem("currentUsernameLocalStorage");
//     return {type:SET_CURRENT_USERNAME, payload:currentUsernameLocalStorage};
// }
