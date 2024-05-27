import styles from './theheader.module.scss';
import { Link } from 'react-router-dom';

const TheHeader = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.textLink} to='/'>HOME</Link>
            <Link className={styles.textLink} to='/sign-up'>SIGN UP</Link>
            <Link className={styles.textLink} to='/sign-in'>SIGN IN</Link>
            <Link className={styles.textLink} to='/card'>CARD</Link>
        </header>
    )
};

export default TheHeader;