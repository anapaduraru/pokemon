export const ACTION_TYPES = {
    GET_SESSION: 'GET_SESSION',
    CHANGE_PAGE: 'CHANGE_PAGE',
    GET_CURRENT_PAGE: 'GET_CURRENT_PAGE',
    ADDFAVORITES: 'ADD_TO_FAVORITES'
};

const actions = {
    getSession: payload => ({
        type: ACTION_TYPES.GET_SESSION,
        payload
    }),
    getActivePage: payload => ({
        type: ACTION_TYPES.GET_CURRENT_PAGE,
        payload
    }),
    changeFavorites: payload => ({
        type: ACTION_TYPES.ADD_TO_FAVORITES,
        payload
    }),

};

export default actions;

