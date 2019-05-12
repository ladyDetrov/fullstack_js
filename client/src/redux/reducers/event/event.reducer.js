import { eventConstants } from 'redux/actions/event/event.actions.js';

const initialState = {
    message: '',
    isFetching: false,
    error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case eventConstants.POST_REQUEST: {
            return Object.assign({}, state, {
                isFetching: true,
            });
        }

        case eventConstants.POST_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                error: false,
                message: action.message
            });
        }

        case eventConstants.POST_FAILURE: {
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            });
        }
        default:
            return state
    }
}
