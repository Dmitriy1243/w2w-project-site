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
        </>
    )
};

export default ConfirmPhone;