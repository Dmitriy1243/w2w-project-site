import styles from './personalInfo.module.scss';


const PersononalInfo = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Персона́льные данные (сокр. ПД) или личностные данные — сведения, относящиеся к прямо или косвенно определённому или определяемому физическому лицу (субъекту персональных данных), которые могут быть предоставлены другим лицам</p>
            <div className={styles.cross}>X</div>
        </div>
    )
};

export default PersononalInfo;