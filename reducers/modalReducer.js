// import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';

export default function modalReducer(state = null, action) {
    switch (action.type) {
        case '':
            return action.modal;
        case 'a':
            return null;
        default:
            return state;
    }
}
