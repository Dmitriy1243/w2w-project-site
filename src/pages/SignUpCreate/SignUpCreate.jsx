import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import styles from './signUpCreate.module.scss';
import Field from '../../components/Field/Field';
import { yupResolver } from "@hookform/resolvers/yup"; 
import { signUpCreateSchema } from "../../validatorSchemas/validationSchema";
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveModal, selectStatusCreateUser, selectStatusLoadCreate } from '../../redux/selectors/selectors';
import { modalPersonalDatalReducer } from '../../redux/slices/informationSlice';
import { postAuthCreate } from '../../api/postAuthCreate';
import Logo from '../../components/Svg/LogoSvg'; 
import { nameButtonRegistration } from '../../datas/datas';
import { Link } from 'react-router-dom';
import BasicModalPersonalDataDocument from '../../components/ModalPersonalDataDocument/ModalPersonalDataDocument';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


const defaultValues = {
    phoneNumber: "",
    email: "",
    password: "",
};

const SignUpCreate = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isActiveModal = useSelector(selectActiveModal);
    const statusCreateUser = useSelector(selectStatusCreateUser);
    const statusLoadCreate = useSelector(selectStatusLoadCreate);

    const { register, handleSubmit, formState: { errors }, } = useForm({
        defaultValues, resolver: yupResolver(signUpCreateSchema)
    });

    const handleCreateUser = async (data) => {
        dispatch(postAuthCreate(data));
    };
                                                                                //4598
    useEffect(() => {
        if(statusCreateUser === 200 && statusLoadCreate === 'resolved') {
            navigate("/signUp-create/confirm-phone");
        }
        }, [statusLoadCreate]);

    const openModal = () => {
        dispatch(modalPersonalDatalReducer(true));
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
            <form className={styles.form} onSubmit={handleSubmit(handleCreateUser)}>
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
                    Зарегистрировавшись, я принимаю условия <Link to="/signUp-create/user-agreements" className={styles.link}>пользовательского соглашения</Link> и даю свое согласие на <Link onClick={openModal} className={styles.link}>обработку персональных данных</Link> в соответствии с <Link to="/signUp-create/policy-personalData" className={styles.link}>политикой обработки персональных данных.</Link>
                    </p>
                </div>
                <Button className={styles.button} name={nameButtonRegistration} type="submit"/>
            </form>
            <div className={styles.wrapperQuestinText}>
                <h3 className={styles.questionText}>Уже есть профиль? <Link to="/signIn" className={styles.link}>Войти</Link></h3>
            </div>
        </>
    )
};

export default SignUpCreate;
