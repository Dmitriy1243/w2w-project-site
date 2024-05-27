import styles from './theheader.module.scss';
import { Link } from 'react-router-dom';

const TheHeader = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.textLink} to='/'>Главная</Link>
            <Link className={styles.textLink} to='/presign-up'>Предрегистрация</Link>
            <Link className={styles.textLink} to='/sign-up'>Регистрация</Link>
            <Link className={styles.textLink} to='/sign-in'>Вход</Link>
            <Link className={styles.textLink} to='/card'>Карточка</Link>
            <Link className={styles.textLink} to='/quiz'>Квиз</Link>
        </header>
    )
};

export default TheHeader;