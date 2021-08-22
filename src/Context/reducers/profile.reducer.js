import { ACTION_TYPES } from '../actions/profile.actions';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADDFAVORITES:
            localStorage.setItem('favorites', action.payload);
            return { ...state, favorites: action.payload };
        case ACTION_TYPES.GET_SESSION:
            return {
                ...state
            };
        case ACTION_TYPES.CHANGE_PAGE:
            localStorage.setItem('currentPage', action.payload);
            return { ...state, currentPage: action.payload };
        case ACTION_TYPES.GET_CURRENT_PAGE:
            return { ...state, currentPage: localStorage.getItem('currentPage') };
        default:
            return state;
    }
};

export default profileReducer;
