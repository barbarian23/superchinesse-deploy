import { memo } from "react";
import { thithuHSKConst } from "../constants";
import styles from "../assets/styles/thithuhsk.module.scss";
const ThiThuHSK = () => {

    function hskOnline() {
        return {__html: thithuHSKConst.IFRAME};
      }

    return (
        <div className={styles.thi_thu_hsk_body} dangerouslySetInnerHTML={hskOnline()}>
          
        </div>
    )
}

export default memo(ThiThuHSK);