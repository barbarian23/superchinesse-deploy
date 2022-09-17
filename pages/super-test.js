import styles from "../assets/styles/super-test.module.scss"
import { memo } from 'react'
import banner4 from "../assets/images/banner4.png";
import iconGoogle from "../assets/images/icon_google.png";
import iconApple from "../assets/images/icon_apple.png";
import bottomBanner from "../assets/images/super-chinese-bottom-banner.png";
import { superchineseConst } from "../constants";
import Image from "next/image";
import u338 from "../assets/images/u388.png"
import u391 from "../assets/images/u391.png"
import u392 from "../assets/images/u392.png"
import u403 from "../assets/images/u403.png"
import u406 from "../assets/images/u406.png"
import u407 from "../assets/images/u407.png"
import u408 from "../assets/images/u408.png"
import u409 from "../assets/images/u409.png"
import u411 from "../assets/images/u411.png"
import u412 from "../assets/images/u412.png"
import u413 from "../assets/images/u413.png"
export default function SuperTest() {
    const topBanner = {
        background: `url(${banner4.src}) no-repeat`,
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

    return (
        <div className={styles.super_chinese_container}>
            <div className={styles.super_chinese_banner} style={topBanner}>
                <div className={styles.super_chinese_banner_left_text}>
                    <h2>THE SMARTER HSK APPLICATION</h2>
                    <a className={styles.super_chinese_banner_button_download} href={superchineseConst.URL_DOWNLOAD}>Tải ứng dụng</a>
                    <div className={styles.super_chinese_banner_link_mobile}>
                        <a href={superchineseConst.URL_DOWNLOAD_APP_IOS}><div className={styles.super_chinese_banner_link_mobile_URL} style={topIconApple}></div></a>
                        <a href={superchineseConst.URL_DOWNLOAD_APP_ANDROID}><div className={styles.super_chinese_banner_link_mobile_URL} style={topIconAndroid}></div></a>
                    </div>
                </div>
            </div>

            <div className={styles.superchinese_subtitle} >
                <div className={styles.superchinese_subtitle_title_big} >
                    Ứng dụng dạy tiếng Trung của các công ty trong danh sách Fortune TOP 500
                </div>
                <div className={styles.superchinese_subtitle_title_small} >
                    Học bất cứ nơi đâu, bất cứ lúc nào
                </div>
                <div className={styles.supertest_learn_anywhere}>
                    <img className={styles.image_row} src={u338.src} />
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u391.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Thiết kế khoá học</h3>
                                <p>
                                    Sự kết hợp giữa kinh nghiệm nhiều năm giảng dạy và hơn 100 triệu lần trả lời câu hỏi
                                </p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u392.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Trí tuệ nhân tạo AI</h3>
                                <p>
                                    Luyện tập được cá nhân hoá, học từ dễ đến khó
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.superchinese_subtitle} >
                <div className={styles.superchinese_subtitle_title_small} >
                    Ứng dụng học tập
                </div>
                <div className={styles.supertest_learn_anywhere}>
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u409.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Đề thi thật, đề mô phỏng</h3>
                                <p>
                                    Mô phỏng theo đề HSK, giúp bạn làm quen với các dạng đề thi
                                </p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u408.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Luyện tập từ vựng</h3>
                                <p>
                                    Học và luyện những từ xuất hiện nhiều trong bài thi
                                </p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u407.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Nghe, đọc, viết</h3>
                                <p>
                                    Từng dạng đề luyện tập theo kỹ năng
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className={styles.image_row} src={u403.src} />
                </div>

            </div>

            <div className={styles.superchinese_subtitle} >
                <div className={styles.superchinese_subtitle_title_small} >
                    Học phụ đạo HSK 1 kèm 1
                </div>
                <div className={styles.supertest_learn_anywhere}>
                    <img className={styles.image_row} src={u406.src} />
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u411.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Tổng kết trọng tâm bài thi HSK</h3>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u412.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Giảng giải kỹ năng làm bài HSK</h3>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <a className={styles.thumb}>
                                <img src={u413.src} />
                            </a>
                            <div className={styles.s_desc}>
                                <h3>Phân tích đề thi thật các năm trước</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.superchinese_bottom_banner} >
                <h3>Tải ứng dụng</h3>
                <div className={styles.superchinese_bottom_banner_link_mobile}>
                    <a href={superchineseConst.URL_DOWNLOAD_APP_IOS}><div className={styles.superchinese_bottom_banner_URL} style={topIconApple}></div></a>
                    <a href={superchineseConst.URL_DOWNLOAD_APP_ANDROID}><div className={styles.superchinese_bottom_banner_URL} style={topIconAndroid}></div></a>
                </div>
            </div>

        </div>
    )
}