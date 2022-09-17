import { combineReducers } from "redux";
import indexReducer from "./index.reducer";
import goiVipsuperchineseReducer from "./goi-vip-superchinese.reducer";
import kythihsklagiReducer from './ky-thi-hsk-la-gi.reducer';
import superchineseReducer from './superchinese.reducer';

export default combineReducers({
    indexReducer:indexReducer,
    goivipsuperchinese: goiVipsuperchineseReducer,
    kythihsklagi:kythihsklagiReducer,
    superchinese:superchineseReducer
});