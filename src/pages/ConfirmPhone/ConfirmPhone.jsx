import styles from './confirmPhone.module.scss';
import ArrowBack from '../../components/Svg/ArrowBack';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { nameButtonSignIn } from '../../datas/datas';
import { useState } from 'react';

const ConfirmPhone = () => {

const [otp, setOtp] = useState(new Array(4).fill(""));//console.log(otp.join(""))

const handleChange = (e, index) => {

    if(isNaN(e.target.value)) return false;

    setOtp([...otp.map((data, ind) => (ind === index ? e.target.value : data))]);

    if(e.target.value && e.target.nextSibling) {
        e.target.nextSibling.focus();
    }
};

    return (
        <>
            <div className={styles.wrapperArrow}>
                <Link to='/signUp-create'><ArrowBack className={styles.buttonArrow}/></Link>
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
                <Button className={styles.button} name={nameButtonSignIn}/>

            </div>
        </>
    )
};

export default ConfirmPhone;