import { ACTION_TYPES } from '../actions/profile.actions';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADDFAVORITES:
            localStorage.setItem('favorites', action.payload);
            return { ...state, favorites: action.payload };
        default:
            return state;
    }
};

export default profileReducer;
