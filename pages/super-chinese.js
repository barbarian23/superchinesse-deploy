import styles from '../assets/styles/superchinese.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { useSelector } from "react-redux";
import banner3 from "../assets/images/banner3.png";
import iconGoogle from "../assets/images/icon_google.png";
import iconApple from "../assets/images/icon_apple.png";
import bottomBanner from "../assets/images/super-chinese-bottom-banner.png";
import { superchineseConst, commonConst } from "../constants";
import { useHeaderStyle } from "../customeHook";

const topBanner = {
    background: `url(${banner3.src}) no-repeat`,
    backgroundSize: "100% 100%"
}

const topIconAndroid = {
    background: `url(${iconGoogle.src}) no-repeat`,
    backgroundSize: "100% 100%"
}

const topIconApple = {
    background: `url(${iconApple.src}) no-repeat`,
    backgroundSize: "100% 100%"
}

const bottomBannerBackground = {
    background: `url(${bottomBanner.src}) no-repeat`,
    backgroundSize: "100% 100%"
}

const SuperChinese = () => {
    const { t, i18n } = useTranslation();

    useHeaderStyle(commonConst.MENU_ORANGE);

    const { leftIntroduce, rightIntroduce } = useSelector(state => state.superchinese);



    const leftIntroduceList = useMemo(() => {
        return (
            <div className={styles.superchinese_introduce_container}>
                {
                    leftIntroduce ? leftIntroduce.map((item, index) => {
                        const title = i18n.t('superchinese.' + item.itemTitle);
                        const subTitle = i18n.t('superchinese.' + item.itemSubTitle);
                        return (<div className={styles.superchinese_introduce_left} key={index}>
                            {
                                item.style ?
                                    <div className={styles.superchinese_introduce_image} style={item.style}></div>
                                    :
                                    null
                            }
                            <div className={styles.superchinese_introduce_text_left}>
                                {
                                    item.itemTitle ?
                                        <div className={styles.superchinese_introduce_title}>{title}</div>
                                        :
                                        null
                                }
                                {
                                    item.itemSubTitle ?
                                        <div className={styles.superchinese_introduce_subtitle}>{subTitle}</div>
                                        :
                                        null
                                }</div>
                        </div>)
                    }) : null
                }
            </div>
        )
    }, [leftIntroduce]);

    const rightIntroduceList = useMemo(() => {
        return (<div className={styles.superchinese_introduce_container}>
            {
                rightIntroduce ? rightIntroduce.map((item, index) => {
                    const title = i18n.t('superchinese.' + item.itemTitle);
                    const subTitle = i18n.t('superchinese.' + item.itemSubTitle);
                    return (<div className={styles.superchinese_introduce_right} key={index}>
                        {
                            item.style ?
                                <div className={styles.superchinese_introduce_image} style={item.style}></div>
                                :
                                null
                        }
                        <div className={styles.superchinese_introduce_text_right}>
                            {
                                item.itemTitle ?
                                    <div className={styles.superchinese_introduce_title}>{title}</div>
                                    :
                                    null
                            }
                            {
                                item.itemSubTitle ?
                                    <div className={styles.superchinese_introduce_subtitle}>{subTitle}</div>
                                    :
                                    null
                            }

                        </div>
                    </div>)
                }) : null
            }
        </div>)
    }, [rightIntroduce]);

    return (
        <div className={styles.super_chinese_container}>
            <div className={styles.super_chinese_banner} style={topBanner}>
                <div className={styles.super_chinese_banner_left_text}>
                    <h2>{t('superchinese.titleTopBanner')}</h2>
                    <a className={styles.super_chinese_banner_button_download} href={superchineseConst.URL_DOWNLOAD}>{t('superchinese.buttonTopBanner')}</a>
                    <div className={styles.super_chinese_banner_link_mobile}>
                        <a href={superchineseConst.URL_DOWNLOAD_APP_IOS}><div className={styles.super_chinese_banner_link_mobile_URL} style={topIconApple}></div></a>
                        <a href={superchineseConst.URL_DOWNLOAD_APP_ANDROID}><div className={styles.super_chinese_banner_link_mobile_URL} style={topIconAndroid}></div></a>
                    </div>
                </div>
            </div>

            <div className={styles.superchinese_subtitle} >
                <div className={styles.superchinese_subtitle_title_big} >
                    {t('superchinese.titleBig')}
                </div>
                <div className={styles.superchinese_subtitle_title_small} >
                    {t('superchinese.titleSmall')}
                </div>
                <div className={styles.subtitle_line} >
                </div>
            </div>

            <div className={styles.superchinese_introduce}>
                {leftIntroduceList}
                {rightIntroduceList}
            </div>

            <div className={styles.subtitle_line} ></div>

            <div className={styles.superchinese_bottom_banner} style={bottomBannerBackground}>
                <h3>{t('superchinese.bottomTitle')}</h3>
                <div className={styles.superchinese_bottom_banner_link_mobile}>
                    <a href={superchineseConst.URL_DOWNLOAD_APP_IOS}><div className={styles.superchinese_bottom_banner_URL} style={topIconApple}></div></a>
                    <a href={superchineseConst.URL_DOWNLOAD_APP_ANDROID}><div className={styles.superchinese_bottom_banner_URL} style={topIconAndroid}></div></a>
                </div>
            </div>

        </div>
    )
}

export default memo(SuperChinese);