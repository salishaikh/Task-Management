import { changeErrorMessage, changeMessage } from './store/features/messageSlice';
import store from './store/store';

export const setMessage = (message, time = 10000) => {
    let timeout = null;
    store.dispatch(changeMessage(message));
    timeout = setTimeout(() => {
        store.dispatch(changeMessage(''));
        clearTimeout(timeout);
    }, time);
};

export const setErrorMessage = (message, time = 10000) => {
    let timeout = null;
    store.dispatch(changeErrorMessage(message));
    timeout = setTimeout(() => {
        store.dispatch(changeErrorMessage(''));
        clearTimeout(timeout);
    }, time);
};