import styles from './confirmPhone.module.scss';
import ArrowBack from '../../components/Svg/ArrowBack';
import { Link } from 'react-router-dom';

const ConfirmPhone = () => {
    return (
        <>
            <div className={styles.wrapperArrow}>
                <Link to='/signUp-create'><ArrowBack className={styles.button}/></Link>
            </div>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>Подтвердите номер телефона</h2>
            </div>
            <div className={styles.descriptionWrapper}>
                <h3 className={styles.description}>Введите 4 цифры кода, отправленного на ваш номер телефона ****2469.</h3>
            </div>
        </>
    )
};

export default ConfirmPhone;