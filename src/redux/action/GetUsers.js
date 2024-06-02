import instance from "../Api";
import { ERROR, ALLUSERS, CREATEUSERS, DELETEUSERS, SINGLEUSERS, UPDATEUSERS } from "../actiontype";


export const Users = () => {
    return (dispatch) => {
        return instance.get('/posts')
            .then(data => {
                dispatch({
                    type: ALLUSERS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error.response
                })
            });
    };

}

export const CreateUsers = (data) => {
    return (dispatch) => {
        return instance.post('/posts', data)
            .then(data => {
                dispatch({
                    type: CREATEUSERS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error.response
                })
            });
    };
}
export const DeleteUsers = (data) => {
    return (dispatch) => {
        return instance.delete(`/posts/${data}`)
            .then(data => {
                dispatch({
                    type: DELETEUSERS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error.response
                })
            });
    };
}
export const SingleUsers = (data) => {
    return (dispatch) => {
        return instance.get(`/posts/${data}`)
            .then(data => {
                dispatch({
                    type: SINGLEUSERS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error.response
                })
            });
    };
}
export const UpdateUsers = (data) => {
    return (dispatch) => {
        return instance.put(`/posts/${data.id}`, data)
            .then(data => {
                dispatch({
                    type: UPDATEUSERS,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error.response
                })
            });
    };
}

