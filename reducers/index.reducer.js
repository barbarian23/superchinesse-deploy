import indexAction from "../actions/index.action"

const initState = {
    loading: false,
    headerColorStyle: "MENU_BLUE" //MENU_BLUE/MENU_ORANGE
}

const indexReducer = (state = initState, action) => {
    switch (action.type) {
        case indexAction.SOMEACTION:
            return state;
        case indexAction.SET_HEADER_STYLE:
            return { ...state, ...{ headerColorStyle: action.value } };
        case '1':
            return state;
        default:
            return state;
    }
}

export default indexReducer;