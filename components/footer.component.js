import { memo } from "react"
import styles from "../assets/styles/footer.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import Announced from '../assets/images/announced.png'
import { useTranslation } from 'react-i18next'
import locImg from "../assets/images/loc.png"
import emailImg from "../assets/images/email.png"
import sdtImg from "../assets/images/call.png"
import fbImg from "../assets/images/fb.png"

const Footer = () => {
    const { t, i18n } = useTranslation();
    const clickFooter = (item) => {
        switch (item) {
            case "kithihsk":
                console.log("click kithihsk")
                return 1;
            case "dethihsk":
                console.log("click dethihsk")
                return 1;
            case "dieukhoansudung":
                console.log("click dieukhoansudung")
                return 1;
            case "chinhsachbaomat":
                console.log("click chinhsachbaomat")
                return 1;
            default:
                break;
        }
    }
    return (
        <>
            <div ></div>
            <footer>
                <div className={styles.footer}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.col_item}>
                                <Link href="/ky-thi-hsk-la-gi">
                                    {t('footer.kithihsk')}
                                </Link>
                            </div>
                            <div className={styles.col_item}>
                                <Link href="/thi-thu-hsk">
                                    {t('footer.dethihsk')}
                                </Link>
                            </div>
                            <div className={styles.col_item}>
                                <Link href="https://hanban.vn/">
                                    {t('footer.thuvien')}
                                </Link>
                            </div>
                            <div className={styles.col_item}>
                                <Link href="https://hanban.vn/">
                                    {t('footer.blog')}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.col_content}>
                                <h3>
                                    {t('footer.lienhe')}
                                </h3>
                                <div className={styles.col_content_item}>
                                    <Image src={locImg} />
                                    <div className={styles.item_content}>
                                        {t('footer.lienhediachi')}
                                    </div>
                                </div>
                                <div className={styles.col_content_item}>
                                    <Image src={emailImg} />
                                    <div className={styles.item_content}>
                                        {t('footer.lienheemail')}
                                    </div>
                                </div>
                                <div className={styles.col_content_item}>
                                    <Image src={sdtImg} />
                                    <div className={styles.item_content}>
                                        {t('footer.lienhesdt')}
                                    </div>
                                </div>
                                <div className={styles.col_content_item}>
                                    <Image src={fbImg} />
                                </div>
                            </div>
                            <div className={styles.col_content}>
                                <h3>
                                    {t('footer.kythi')}
                                </h3>
                                <div className={styles.col_content_item} onClick={() => { clickFooter("kithihsk") }}>
                                    <Image src={locImg} />
                                    <div className={styles.item_content}>
                                        {t('footer.kithihsk')}
                                    </div>
                                </div>
                                <div className={styles.col_content_item} onClick={() => { clickFooter("dethihsk") }}>
                                    <Image src={emailImg} />
                                    <div className={styles.item_content}>
                                        {t('footer.dethihsk')}
                                    </div>
                                </div>
                                <Link href="https://hanban.vn/">
                                    <div className={styles.col_content_item}>
                                        <Image src={sdtImg} />
                                        <div className={styles.item_content}>
                                            {t('footer.thuvien')}
                                        </div>
                                    </div>
                                </Link>
                                <Link href="https://hanban.vn/">
                                    <div className={styles.col_content_item}>
                                        <Image src={fbImg} />
                                        <div className={styles.item_content}>
                                            {t('footer.blog')}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.col_content}>
                                <h3>
                                    {t('footer.dieukhoan')}
                                </h3>
                                <div className={styles.col_content_item} onClick={() => { clickFooter("dieukhoansudung") }}>
                                    <div className={styles.item_point}></div>
                                    <Link href="/dieu-khoan-su-dung">
                                        <div className={styles.item_content}>
                                            {t('footer.dieukhoansudung')}
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.col_content_item} onClick={() => { clickFooter("chinhsachbaomat") }}>
                                    <div className={styles.item_point}></div>
                                    <Link href="/chinh-sach-bao-mat">
                                        <div className={styles.item_content}>
                                            {t('footer.chinhsachbaomat')}
                                        </div>
                                    </Link>
                                </div>

                            </div>
                            <div className={styles.col_content} >
                                <h3>
                                    {t('footer.lienhe')}
                                </h3>
                                <div className={styles.col_content_item} style={{ fontWeight: 650 }}>
                                    <div>
                                        {t('footer.banquyenthuocve')}
                                    </div>
                                </div>
                                <div className={styles.col_content_item}>
                                    <div>
                                        {t('footer.banquyenthuocvecongty')}
                                    </div>
                                </div>
                                <div className={styles.col_content_item} style={{ fontWeight: 650 }}>
                                    <div>
                                        {t('footer.nhaphanphoi')}
                                    </div>
                                </div>
                                <div className={styles.col_content_item}>
                                    <div>
                                        {t('footer.tennhaphanphoi')}
                                    </div>
                                </div>
                                <span className={styles.logo}>
                                    <Image src={Announced}
                                        alt="Đã thông báo với bộ công thương"
                                        width={106} height={40}
                                        href="http://online.gov.vn/Home/WebDetails/91758"
                                        target="_blank"
                                        rel="noopener noreferrer" />
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={styles.footer_bottom}>
                    <div className={styles.container}>
                        <div className={styles.copyright}>
                            <span>
                                {t('footer.copyrightby')}{' '}
                            </span>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default memo(Footer)