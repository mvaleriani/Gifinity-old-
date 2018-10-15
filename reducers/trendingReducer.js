import { RECEIVE_TRENDING_GIFS } from '../actions/gifActions';

export default function gifReducer(state = null, action) {
    switch (action.type) {
        case RECEIVE_TRENDING_GIFS:
            return action.trendingGIFs;
        default:
            return state;
    }
}
