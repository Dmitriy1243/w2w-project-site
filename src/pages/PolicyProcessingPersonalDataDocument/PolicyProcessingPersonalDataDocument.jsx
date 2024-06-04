import styles from './policyPersonalData.module.scss';
import ArrowBack from '../../components/Svg/ArrowBack';
import { Link } from 'react-router-dom';


const PolicyProcessingPersonalDataDocument = () => {
    return (
        <>
            <div className={styles.wrapperArrow}>
                <Link to='/signUp-Create'><ArrowBack className={styles.button}/></Link>
            </div>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>Политика в отношении обработки персональных данных</h2>
            </div>
            <div className={styles.textWrapper}>

            </div>
        </>
    )
};

export default PolicyProcessingPersonalDataDocument;