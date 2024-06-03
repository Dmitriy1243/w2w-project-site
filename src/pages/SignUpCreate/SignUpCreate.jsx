import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import styles from './signUpCreate.module.scss';
import Field from '../../components/Field/Field';
import { yupResolver } from "@hookform/resolvers/yup"; 
import { signUpCreateSchema } from "../../validatorSchemas/validationSchema";
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveModal, selectStatusCreateUser } from '../../redux/selectors/selectors';
import { modalReducer } from '../../redux/slices/informationSlice';
import { postAuthCreate } from '../../api/postAuthCreate';
import Logo from '../../components/Svg/LogoSvg'; 
import { nameButtonRegistration } from '../../datas/datas';
import { Link } from 'react-router-dom';
import BasicModalPersonalDataDocument from '../../components/ModalPersonalDataDocument/ModalPersonalDataDocument';


const defaultValues = {
    phoneNumber: "",
    email: "",
    password: "",
};

const SignUpCreate = () => {

    const dispatch = useDispatch();
    const isActiveModal = useSelector(selectActiveModal);
    const statusCreateUser = useSelector(selectStatusCreateUser);

    const { register, handleSubmit, formState: { errors }, } = useForm({
        defaultValues, resolver: yupResolver(signUpCreateSchema)
    });

    const handleRegistration = async (data) => {
        dispatch(postAuthCreate(data));
    };

    const openModal = () => {
        dispatch(modalReducer(true))
    };


    return (
        <>
            <BasicModalPersonalDataDocument open={isActiveModal} />
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.titleWrapper}>
                <h2 className={styles.titleText}>Регистрация</h2>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(handleRegistration)}>
                <h2 className={styles.lable}>Телефон</h2>
                <Field 
                    register={{...register("phoneNumber")}}
                    autoComplete="off"
                    placeholder="+7 (999) 999-99-99"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.phoneNumber) && <p className={styles.error}>{errors.phoneNumber?.message}</p>}</div>
                <h2 className={styles.lable}>Email</h2>
                <Field 
                    register={{...register("email")}}
                    autoComplete="off"
                    placeholder="exemple@mail.com"
                    className={styles.input}
                    type={'text'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.email) && <p className={styles.error}>{errors.email?.message}</p>}</div>
                <h2 className={styles.lable}>Пароль</h2>
                <Field 
                    register={{...register("password")}}
                    autoComplete="off"
                    placeholder="пароль"
                    className={styles.input}
                    type={'password'}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.password) && <p className={styles.error}>{errors.password?.message}</p>}</div>
                <div className={styles.policyDoc}>
                    <p className={styles.policyText}>
                    Зарегистрировавшись, я принимаю условия <Link to='/user-agreements' className={styles.link}>пользовательского соглашения</Link> и даю свое согласие на <Link onClick={openModal} className={styles.link}>обработку персональных данных</Link> в соответствии с <Link to='/policy-persononal-info' className={styles.link}>политикой обработки персональных данных.</Link>
                    </p>
                </div>
                <Button className={styles.button} name={nameButtonRegistration} type="submit"/>
            </form>
            <div className={styles.wrapperQuestinText}><h3 className={styles.questionText}>Уже есть профиль? <Link className={styles.link}>Войти</Link></h3>
            </div>
        </>
    )
};

export default SignUpCreate;
