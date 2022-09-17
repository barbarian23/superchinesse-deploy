import kythihsklagiAction from "../actions/ky-thi-hsk-la-gi.action";
const initState = {
    loading: false
}

const kythihsklagiReducer = (state = initState, action) => {
    switch (action.type) {
        case kythihsklagiAction.SOMEACTION:
            return state;
        case '1':
            return state;
        default:
            return state;
    }
}

export default kythihsklagiReducer;