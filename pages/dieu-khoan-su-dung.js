import { memo } from "react";
import { dieuKhoanSuDungConst } from "../constants";
import styles from "../assets/styles/dieuKhoanSuDung.module.scss";
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

const DieuKhoanSuDung = () => {
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
          <h1>{t('dieuKhoanSuDung.title')}</h1>
        </div>

        <div className={styles.container_contain}>
          <p><strong>{t('dieuKhoanSuDung.strong1')}</strong></p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p11')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p12')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p13')}</p>

          <p>&nbsp;</p>
          <p><strong>{t('dieuKhoanSuDung.strong2')}</strong></p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p21')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p22')}</p>

          <p>&nbsp;</p>
          <p><strong>{t('dieuKhoanSuDung.strong3')}</strong></p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p3')}</p>

          <p>&nbsp;</p>
          <p><strong>{t('dieuKhoanSuDung.strong4')}</strong></p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p41')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p42')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p43')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p44')}</p>
          <p>&nbsp;</p>

          <p><strong>{t('dieuKhoanSuDung.strong5')}</strong></p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p51')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p52')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p53')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p54')}</p>

          <p><strong>{t('dieuKhoanSuDung.strong6')}</strong></p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p61')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p62')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p63')}</p>


          <p><strong>{t('dieuKhoanSuDung.strong7')}</strong></p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p71')}</p>
          <p>&nbsp;</p>
          <p>{t('dieuKhoanSuDung.p72')}</p>

          <p><strong>{t('dieuKhoanSuDung.strong8')}</strong></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong81') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong82') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong83') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong84') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong85') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong86') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong87') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong88') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong89') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong810') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong811') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong812') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong813') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong814') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong815') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong816') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong817') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong818') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong819') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong820') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong821') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong822') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong823') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong824') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong825') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong826') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong827') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong828') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong829') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong830') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong831') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong832') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong833') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong834') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong835') }}></p>
          <p>&nbsp;</p>
          <p dangerouslySetInnerHTML={{ __html: t('dieuKhoanSuDung.strong836') }}></p>
        </div>

        <div className={styles.subtitle_line} ></div>

        <div className={styles.bottom_banner}>
          <h3>{t('dieuKhoanSuDung.download')}</h3>
          <div className={styles.bottom_banner_link_mobile}>
            <a href={dieuKhoanSuDungConst.URL_DOWNLOAD_APP_IOS}><div className={styles.bottom_banner_URL} style={topIconApple}></div></a>
            <a href={dieuKhoanSuDungConst.URL_DOWNLOAD_APP_ANDROID}><div className={styles.bottom_banner_URL} style={topIconAndroid}></div></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default memo(DieuKhoanSuDung);