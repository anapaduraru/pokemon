export const ACTION_TYPES = {
    ADDFAVORITES: 'ADD_TO_FAVORITES'
};

const actions = {
    changeFavorites: payload => ({
        type: ACTION_TYPES.ADD_TO_FAVORITES,
        payload
    }),

};

export default actions;

