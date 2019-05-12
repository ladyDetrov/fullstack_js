import {alertActions} from "redux/actions/alert/alert.actions.js";

export const eventConstants = {
    POST_REQUEST: 'POST_EVENT_REQUEST',
    POST_SUCCESS: 'POST_EVENT_SUCCESS',
    POST_FAILURE: 'POST_EVENT_FAILURE'
};

const BASE_URL = `${process.env.REACT_APP_API_URL}`;

export function addEvent(event) {
    return dispatch => {
        dispatch(request());
        dispatch(alertActions.clear());
        fetch(BASE_URL + '/events', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                event
            )
        })
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(
                response => {
                    dispatch(success(response));
                    dispatch(alertActions.success(response.message));
                })
            .catch(errorMessage => {
                dispatch(failure(errorMessage.data.message.error));
                dispatch(alertActions.error(errorMessage.data.message.error));
            })
    };

    function request() {
        return {type: eventConstants.POST_REQUEST,}
    }

    function success(data) {
        return {type: eventConstants.POST_SUCCESS, data}
    }

    function failure(error) {
        return {type: eventConstants.POST_FAILURE, error}
    }
}
