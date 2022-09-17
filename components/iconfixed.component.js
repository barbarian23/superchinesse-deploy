import { memo, useState } from "react"
import styles from "../assets/styles/iconfixed.module.scss"
import Link from "next/link"

const IconFixed = ()=>{
    const [isChoose, setIsChoose] = useState(false)
    const openPopupZalo = () =>{
        console.log("Click icon zalo")
        setIsChoose(!isChoose)
    }
    return(
        <>
            <Link href="https://50k.superchinese.vn/">
                <div className={styles.iconVip} >

                </div>
            </Link>
            <div className={styles.iconZalo} onClick={()=>{openPopupZalo()}}>
            </div>
            {
                isChoose?
                <div className={styles.popupZalo}>

                </div>
                :
                null
            }
        </>
    )
}

export default memo(IconFixed)