import { memo } from "react";
import { kithiHSKConst } from "../constants";
import styles from "../assets/styles/thithuhsk.module.scss";
const KiThiHSK = () => {

    function hskOnline() {
        return {__html: kithiHSKConst.IFRAME};
      }

    return (
        <div className={styles.thi_thu_hsk_body} dangerouslySetInnerHTML={hskOnline()}>
          
        </div>
    )
}

export default memo(KiThiHSK);