import { combineReducers } from 'redux';
import alertReducer from './alert/alert.reducer';
import eventReducer from './event/event.reducer';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    alertReducer,
    eventReducer,
    form: formReducer
});

export default rootReducer;
