import styles from './personalInfo.module.scss';
import { useDispatch } from 'react-redux';
import { modalReducer } from '../../redux/slices/clickSlise';


const PersononalInfo = () => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(modalReducer(false));
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Персона́льные данные (сокр. ПД) или личностные данные — сведения, относящиеся к прямо или косвенно определённому или определяемому физическому лицу (субъекту персональных данных), которые могут быть предоставлены другим лицам</p>
            <div onClick={closeModal} className={styles.cross}>X</div>
        </div>
    )
};

export default PersononalInfo;