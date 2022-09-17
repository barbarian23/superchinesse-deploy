
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import indexAction from "../actions/index.action";
import { commonConst } from "../constants";

const useHeaderStyle = (style) => {
   const dispatch = useDispatch();
    useEffect(() => {
        switch (style) {
            case commonConst.MENU_BLUE:
                dispatch({type:indexAction.SET_HEADER_STYLE, data: commonConst.MENU_BLUE});
                return;
            case commonConst.MENU_ORANGE:
                dispatch({type:indexAction.SET_HEADER_STYLEm, data: commonConst.MENU_ORANGE});
                return;
            default:
                return;
        }
          
    },[])
}

export default useHeaderStyle