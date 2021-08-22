import actions from "../actions/profile.actions";

const profileFunctions = dispatch => {


    const getSession = () => {
        dispatch(actions.getSession());
    };
    const changePage = page => {
        dispatch(actions.changeTab(page));
    };
    const getCurrentPage = () => {
        dispatch(actions.getActivePage);
    };

    const changeFavorites = (list) => {
        dispatch(actions.changeFavorites(list));
    };

    return {
        getSession,
        changePage,
        getCurrentPage,
        changeFavorites
    };
};

export default profileFunctions;
