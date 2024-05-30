import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import styles from './signUp.module.scss';
import Field from '../../components/Field/Field';
import { yupResolver } from "@hookform/resolvers/yup"; 
import { signUpSchema } from "../../validatorSchemas/validationSchema";
import { useSelector, useDispatch } from 'react-redux';
import { selectLoginUser } from '../../redux/selectors/selectors';
import { loginReducer } from '../../redux/slices/authSlice';
import { PostRegistration } from '../../api/postRegistration';
import Logo from '../../components/Svg/LogoSvg'; 
import { nameButtonRegistration } from '../../datas/datas';
import { Link } from 'react-router-dom';


const defaultValues = {
    phone: "",
    email: "",
    password: "",
};

const SignUp = () => {

    const dispatch = useDispatch();
    const loginUser = useSelector(selectLoginUser);

    const { register, handleSubmit, formState: { errors }, } = useForm({
        defaultValues, resolver: yupResolver(signUpSchema)
    });

    const handleRegistration = async (data) => {
        dispatch(loginReducer(data));
        //dispatch(PostRegistration(data));
    };


    return (
        <>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.titleWrapper}>
                <h2 className={styles.titleText}>Регистрация</h2>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(handleRegistration)}>
                <h2 className={styles.lable}>Телефон</h2>
                <Field 
                    register={{...register("phone")}}
                    autoComplete="off"
                    placeholder="+7 (999) 999-99-99"
                    className={styles.input}
                    />
                {Boolean(errors.phone) && <p className={styles.error}>{errors.phone?.message}</p>}
                <h2 className={styles.lable}>Email</h2>
                <Field 
                    register={{...register("email")}}
                    autoComplete="off"
                    placeholder="exemple@mail.com"
                    className={styles.input}
                    />
                {Boolean(errors.email) && <p className={styles.error}>{errors.email?.message}</p>}
                <h2 className={styles.lable}>Пароль</h2>
                <Field 
                    register={{...register("password")}}
                    autoComplete="off"
                    placeholder="пароль"
                    className={styles.input}
                    type={'password'}
                    />
                {Boolean(errors.password) && <p className={styles.error}>{errors.password?.message}</p>}
                <div className={styles.policyDoc}>
                    <p className={styles.policyText}>
                    Зарегистрировавшись, я принимаю условия <Link className={styles.link}>пользовательского соглашения</Link> и даю свое согласие на <Link className={styles.link}>обработку персональных данных</Link> в соответствии с <Link className={styles.link}>политикой обработки персональных данных.</Link>
                    </p>
                </div>
                <Button className={styles.button} name={nameButtonRegistration} type="submit"/>
            </form>
            <div className={styles.wrapperQuestinText}><h3 className={styles.questionText}>Уже есть профиль? <Link className={styles.link}>Войти</Link></h3></div>
        </>
    )
};

export default SignUp;
