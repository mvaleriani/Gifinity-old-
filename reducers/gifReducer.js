import { combineReducers } from 'redux';
import trendingGIFs from './trendingReducer';
import searchGIFs from './searchReducer';


const gifReducer = combineReducers({
    trendingGIFs,
    searchGIFs
});

export default gifReducer;
