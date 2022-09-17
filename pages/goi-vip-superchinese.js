import { memo, useMemo, useCallback, useRef, useEffect } from "react";
import styles from '../assets/styles/goiVipSuperChinese.module.scss';
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from "react-redux";
import { goivipsuperchineseAction } from "../actions";
import { goiVipChineseConst } from "../constants";

const GoiVipSuperchinese = () => {
    const { t, i18n } = useTranslation();

    const { superChinese, superTest, selectedCourse } = useSelector(state => state.goivipsuperchinese);

    const selecCourseDiv = useRef(null);;

    useEffect(() => {

    }, [selecCourseDiv]);

    const dispatch = useDispatch();

    const chooseCourse = useCallback((courseId) => {
        const tSelectedCourse = null;
        let resChinese = superChinese.some((item) => {
            if (item.id == courseId) {
                tSelectedCourse = item;
                return true;
            }
        });
        let resTest = superTest.some((item) => {
            if (item.id == courseId) {
                tSelectedCourse = item;
                return true;
            }
        });
        tSelectedCourse.img = resChinese ? goiVipChineseConst.URL_SUPERCHINESE : goiVipChineseConst.URL_SUPERTEST;
        tSelectedCourse.text = resChinese ? i18n.t('goiVipSuperChinese.subtitle1Super') : i18n.t('goiVipSuperChinese.subtitle1Test');
        if (selectedCourse && selectedCourse.id == courseId) {
            tSelectedCourse = null;
        }
        if (tSelectedCourse) {
            if (selecCourseDiv.current) {
                selecCourseDiv.current.scrollIntoView({ top: 0, behavior: "smooth" });
            }
        }
        dispatch({ type: goivipsuperchineseAction.SET_COURSE, data: tSelectedCourse });
    }, [selectedCourse, superChinese, superTest])

    const superChineseList = useMemo(() => {
        return (
            <div className={styles.goiVip_container_course_list}>
                <div className={styles.goiVip_container_course_item}>
                    <img src={goiVipChineseConst.URL_SUPERCHINESE}></img>
                    <div className={styles.goiVip_container_course_item_title}>{t('goiVipSuperChinese.titleSuper')}</div>
                    <div className={styles.goiVip_container_course_item_subtitle1}>{t('goiVipSuperChinese.subtitle1Super')}</div>
                    <div className={styles.goiVip_container_course_item_subtitle2}>{t('goiVipSuperChinese.subtitle2Super')}</div>
                    <div className={`${styles.goiVip_container_course_item_subtitle3} ${styles.goiVip_container_course_item_color_chinese}`}>{t('goiVipSuperChinese.subtitle3Super')}</div>
                </div>
                {
                    superChinese ?
                        superChinese.map((item, index) => {
                            const border = selectedCourse && item.id == selectedCourse.id ? `${styles.goiVip_container_course_item_select} ${styles.goivip_selected}` : `${styles.goiVip_container_course_item_select}`;
                            const checked = selectedCourse && item.id == selectedCourse.id ? goiVipChineseConst.URL_SUPERCHINESE_CHECKED : goiVipChineseConst.URL_UNCHECKED;
                            return (<div className={styles.goiVip_container_course_item} key={index} onClick={() => chooseCourse(item.id)}>
                                <div className={border}>
                                    <img className={styles.unchecked} src={checked}></img>
                                    <div className={styles.time}>
                                        <span>{item.title}</span>
                                        {
                                            index == 2 ? <br></br> : null
                                        }
                                        {" " + item.unitTitle}
                                    </div>
                                    <div className={styles.price}>
                                        <span>{item.price}</span>
                                        {" " + item.unitPrice}
                                    </div>
                                </div>
                                <div className={`${styles.goiVip_container_course_item_buyer} ${styles.purchase}`}>
                                    <span>{item.numberSold}</span>
                                    {" " + item.unitNumberSold}
                                </div>
                            </div>)
                        })
                        :
                        null
                }
            </div>
        )
    }, [superChinese, selectedCourse])

    const superTestList = useMemo(() => {
        return (
            <div className={`${styles.goiVip_container_course_list} ${styles.goiVip_container_super_test}`}>
                <div className={styles.goiVip_container_course_item}>
                    <img className={styles.unchecked} src={goiVipChineseConst.URL_SUPERTEST}></img>
                    <div className={styles.goiVip_container_course_item_title}>{t('goiVipSuperChinese.titleTest')}</div>
                    <div className={styles.goiVip_container_course_item_subtitle1}>{t('goiVipSuperChinese.subtitle1Test')}</div>
                    <div className={styles.goiVip_container_course_item_subtitle2}>{t('goiVipSuperChinese.subtitle2Test')}</div>
                    <div className={`${styles.goiVip_container_course_item_subtitle3} ${styles.goiVip_container_course_item_color_test}`}>{t('goiVipSuperChinese.subtitle3Test')}</div>
                </div>
                {
                    superTest ?
                        superTest.map((item, index) => {
                            const border = selectedCourse && item.id == selectedCourse.id ? `${styles.goiVip_container_course_item_select} ${styles.goivip_selected}` : `${styles.goiVip_container_course_item_select}`;
                            const checked = selectedCourse && item.id == selectedCourse.id ? goiVipChineseConst.URL_SUPERTEST_CHECKED : goiVipChineseConst.URL_UNCHECKED;
                            return (<div className={styles.goiVip_container_course_item} key={index} onClick={() => chooseCourse(item.id)}>
                                <div className={border}>
                                    <img className={styles.unchecked} src={checked}></img>
                                    <div className={styles.time}>
                                        <span>{item.title}</span>
                                        {
                                            index == 2 ? <br></br> : null
                                        }
                                        {" " + item.unitTitle}
                                    </div>
                                    <div className={styles.price}>
                                        <span>{item.price}</span>
                                        {" " + item.unitPrice}
                                    </div>
                                </div>
                                <div className={styles.goiVip_container_course_item_buyer}>
                                    <span>{item.numberSold}</span>
                                    {" " + item.unitNumberSold}
                                </div>
                            </div>)
                        })
                        :
                        null
                }
            </div>
        )
    }, [superTest, selectedCourse])

    const purchase50k= () => {
        window.open(goiVipChineseConst.URL_PURCHASEL, '_blank', 'noopener,noreferrer')
    }

    const purchaseDiv = useMemo(() => {
        return (
            <div className={styles.purchase} ref={selecCourseDiv}>
                {
                    selectedCourse ?
                        <div className={styles.purchase}>
                            <div className={styles.purchase_container}>
                                <div className={styles.purchase_container_order}>{t('goiVipSuperChinese.order')}</div>
                                <div className={styles.purchase_container_select}>
                                    <div className={styles.title_item}>
                                        <img src={selectedCourse.img}></img>
                                        {selectedCourse.text}
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.time}>
                                            <span>{selectedCourse.title}</span>
                                            {" " + selectedCourse.unitTitle}
                                        </div>
                                        <div className={styles.price}>
                                            <span>{selectedCourse.price}</span>
                                            {" " + selectedCourse.unitPrice}
                                        </div>
                                    </div>
                                    <a href={goiVipChineseConst.URL_DISCOUNT}><div className={`${styles.discountbuyer} ${styles.discount}`}>{t('goiVipSuperChinese.studentDiscount')}</div></a>
                                </div>
                                <div className={styles.purchase_container_select}>
                                    <div className={styles.title_total}>{t('goiVipSuperChinese.total')}</div>
                                    <div className={`${styles.item} ${styles.price_total}`}>
                                        <div className={styles.price}>
                                            <span className={styles.red}>{selectedCourse.price}</span>
                                            {" " + selectedCourse.unitPrice}
                                        </div>
                                    </div>
                                    <div className={`${styles.discountbuyer} ${styles.purchase}`} onClick={purchase50k}>{t('goiVipSuperChinese.purchase')}</div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
            </div>
        )
    }, [selectedCourse]);

    return (
        <div className={styles.goiVip_container}>
            <div className={styles.goiVip_container_title}>
                <h1>{t('goiVipSuperChinese.title')}</h1>
            </div>
            <div className={styles.goiVip_container_course}>
                <div className={styles.goiVip_container_course_container}>
                    {superChineseList}
                    {superTestList}
                </div>
            </div>
            {purchaseDiv}
        </div>
    )
}

export default memo(GoiVipSuperchinese);
