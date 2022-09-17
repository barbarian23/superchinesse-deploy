import { memo } from "react";
import styles from "../assets/styles/chinhSachBaoMat.module.scss";
import { chinhSachBaoMatConst } from "../constants";
import { useTranslation } from 'react-i18next'
import iconGoogle from "../assets/images/icon_google.png";
import iconApple from "../assets/images/icon_apple.png";
import stylesCaro from '../assets/Home.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import bannerimg from '../assets/images/banner.png';
import bannersupertest from '../assets/images/banner-super-test.jpg';

const topIconAndroid = {
    background: `url(${iconGoogle.src}) no-repeat`,
    backgroundSize: "100% 100%"
}

const topIconApple = {
    background: `url(${iconApple.src}) no-repeat`,
    backgroundSize: "100% 100%"
}

const ChinhSachBaoMat = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.container}>

            <div className={stylesCaro.listbanner}>
                <Carousel>
                    <div>
                        <Image src={bannersupertest} alt="banner_super_test" height={0} width={0} layout="fill" />
                        <div className={stylesCaro.text_bg} >
                            <h2>Nói tiếng Trung Quốc như người bản xứ</h2>
                            <p className={stylesCaro.bg_supertest}>Tự tin giao tiếp</p>
                            <p className={stylesCaro.bg_supertest}>Tiếng Trung phổ thông</p>
                            <p className={stylesCaro.bg_supertest}>Học hiệu quả bởi sự hỗ trợ của Trí tuệ nhân tạo</p>
                            <a className={stylesCaro.a_supertest} href="/super-chinese">Học ngay Super Chinese</a>

                        </div>
                    </div>
                    <div>
                        <Image src={bannerimg} alt="banner" height={0} width={0} />
                        <div className={stylesCaro.text_bg}>
                            <h2>Tiếng Trung siêu việt</h2>
                            <p className={stylesCaro.bg_chinese}>Luyện thi hiệu quả bởi sự hỗ trợ của Big data và Trí tuệ nhân tạo</p>
                            <a className={stylesCaro.a_chinese} href="/super-test">Luyện ngay Super Test</a>
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className={styles.container_course}>
                <div className={styles.container_contain}>
                    <h1>{t('chinhSachBaoMat.title')}</h1>
                </div>

                <div className={styles.container_contain}>
                    <p>{t('chinhSachBaoMat.p11')}</p>
                    <p>&nbsp;</p>
                    <p>{t('chinhSachBaoMat.p12')}</p>

                    <p>&nbsp;</p>
                    <p><strong>{t('chinhSachBaoMat.strong2')}</strong></p>
                    <p>&nbsp;</p>
                    <p>{t('chinhSachBaoMat.p21')}</p>

                    <p>&nbsp;</p>
                    <p><strong>{t('chinhSachBaoMat.strong3')}</strong></p>
                    <p>&nbsp;</p>
                    <p>{t('chinhSachBaoMat.p31')}</p>

                    <p>&nbsp;</p>
                    <p><strong>{t('chinhSachBaoMat.strong4')}</strong></p>
                    <p>&nbsp;</p>
                    <p>{t('chinhSachBaoMat.p41')}</p>
                    <p>&nbsp;</p>
                    <p>{t('chinhSachBaoMat.p42')}</p>
                    <p>&nbsp;</p>
                    <p>{t('chinhSachBaoMat.p43')}</p>
                    <p>&nbsp;</p>

                    <p><strong>{t('chinhSachBaoMat.strong5')}</strong></p>
                    <p>&nbsp;</p>
                    <p>{t('chinhSachBaoMat.p51')}</p>
                    <p>&nbsp;</p>
                    <p>{t('chinhSachBaoMat.p52')}</p>
                    <p>&nbsp;</p>

                    <p><strong>{t('chinhSachBaoMat.strong6')}</strong></p>
                    <p>&nbsp;</p>
                    <p>{t('chinhSachBaoMat.p61')}</p>
                    <p>&nbsp;</p>

                    <p><strong>{t('chinhSachBaoMat.strong7')}</strong></p>
                    <p>&nbsp;</p>
                    <p>{t('chinhSachBaoMat.p71')}</p>
                </div>

                <div className={styles.subtitle_line} ></div>

                <div className={styles.bottom_banner}>
                    <h3>{t('chinhSachBaoMat.download')}</h3>
                    <div className={styles.bottom_banner_link_mobile}>
                        <a href={chinhSachBaoMatConst.URL_DOWNLOAD_APP_IOS}><div className={styles.bottom_banner_URL} style={topIconApple}></div></a>
                        <a href={chinhSachBaoMatConst.URL_DOWNLOAD_APP_ANDROID}><div className={styles.bottom_banner_URL} style={topIconAndroid}></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ChinhSachBaoMat);