import styles from './confirmPhone.module.scss';
import ArrowBack from '../../components/Svg/ArrowBack';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { nameButtonEnter } from '../../datas/datas';
import { useState } from 'react';
import { selectStatusRegistrationUser } from '../../redux/selectors/selectors';
import { postAuthRegistration } from '../../api/postAuthRegistration';
import { useSelector, useDispatch } from 'react-redux';
import { statusLoadNullReducer } from '../../redux/slices/authCreateSlice';

const ConfirmPhone = () => {

const [otp, setOtp] = useState(new Array(4).fill(""));

const dispatch = useDispatch();
const statusRegistrationUser = useSelector(selectStatusRegistrationUser);

const handleChange = (e, index) => {

    if(isNaN(e.target.value)) return false;

    setOtp([...otp.map((data, ind) => (ind === index ? e.target.value : data))]);

    if(e.target.value && e.target.nextSibling) {
        e.target.nextSibling.focus();
    }
};

const handleRegistrationUser = () => {
        dispatch(postAuthRegistration(otp.join("")));
};

    return (
        <>
            <div className={styles.wrapperArrow}>
                <Link to='/signUp-create'><ArrowBack onClick={dispatch(statusLoadNullReducer())} className={styles.buttonArrow}/></Link>
            </div>
            <div className={styles.functionalArea}>
                <div>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>Подтвердите номер телефона</h2>
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <h3 className={styles.description}>Введите 4 цифры кода, отправленного на ваш номер телефона ****2469.</h3>
                    </div>
                    <div className={styles.wrapperInput}>
                        {otp.map((data, i) => {
                            return <input key={i} className={styles.otpInput}
                            type='password' 
                            value={data}
                            maxLength={1}
                            onChange={(e) => handleChange(e, i)}
                            />})}
                    </div>
                    <div className={styles.linkWrapper}>        
                        <Link className={styles.link}>Отправить код ещё раз</Link>
                    </div>
                </div>
                <Button click={handleRegistrationUser} className={styles.button} name={nameButtonEnter}/>
            </div>
        </>
    )
};

export default ConfirmPhone;