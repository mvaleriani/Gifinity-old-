import * as APIUtil from '../util/gifAPIUtil';

export const RECEIVE_TRENDING_GIFS = 'RECEIVE_TRENDING_GIFS';
export const RECEIVE_SEARCH_GIFS = 'RECEIVE_SEARCH_GIFS';

const receiveTrendingGIFs = trendingGIFs => ({
    type: RECEIVE_TRENDING_GIFS,
    trendingGIFs
});

const receiveSearchGIFs = searchGIFs => ({
    type: RECEIVE_SEARCH_GIFS,
    searchGIFs
});

export const fetchTrendingGIFS = (num, offset) => dispatch => (
    APIUtil.fetchTrendingGIFs(num, offset).then(trendingGIFs => dispatch(receiveTrendingGIFs(trendingGIFs)))
)

export const fetchSearchGIFS = (searchStr, num, offset) => dispatch => (
    APIUtil.fetchSearchGIFs(searchStr, num, offset).then(searchGIFs => dispatch(receiveSearchGIFs(searchGIFs)))
)