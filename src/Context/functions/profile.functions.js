import actions from "../actions/profile.actions";

const profileFunctions = dispatch => {
    const changeFavorites = (list) => {
        dispatch(actions.changeFavorites(list));
    };

    return {
        changeFavorites
    };
};

export default profileFunctions;
