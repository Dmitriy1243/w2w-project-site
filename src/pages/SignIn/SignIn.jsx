import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import styles from './signIn.module.scss';
import Field from '../../components/Field/Field';
import { yupResolver } from "@hookform/resolvers/yup"; 
import { signInSchema } from "../../validatorSchemas/validationSchema";
import Logo from '../../components/Svg/LogoSvg';
import { Link } from 'react-router-dom';


const defaultValues = {
    phoneNumberOrEmail: "",
    password: "",
};

const SignIn = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        resolver: yupResolver(signInSchema)
    });


    const handleSignIn = async (data) => {
        console.log(data);
    };

    return (
        <>
            <div className={styles.logo}>
                <Logo/>
            </div>

            
            <div className={styles.titleWrapper}>
                <h2 className={styles.titleText}>Вход</h2>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(handleSignIn)}>
                <h2 className={styles.lable}>Телефон/Email</h2>
                <Field 
                    register={{...register("phoneNumberOrEmail")}}
                    autoComplete="off"
                    placeholder="телефон/email"
                    className={styles.input}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.phoneNumberOrEmail) && <p className={styles.error}>{errors.phoneNumberOrEmail?.message}</p>}</div>
                <h2 className={styles.lable}>Пароль</h2>
                <Field 
                    register={{...register("password")}}
                    autoComplete="off"
                    placeholder="пароль..."
                    className={styles.input}
                    />
                <div className={styles.wrapperMessage}>{Boolean(errors.password) && <p className={styles.error}>{errors.password?.message}</p>}</div>
                <div className={styles.linkWrapper}>
                    <Link className={styles.link}>Не помню пароль</Link>
                </div>
                <Button className={styles.button} name={'Вход'} type="submit"/>
            </form>

            <div className={styles.wrapperQuestinText}>
                <h3 className={styles.questionText}>Нет профиля? <Link to="/signUp-create" className={styles.link}>Зарегистрируйтесь</Link></h3>
            </div>
        </>
    )
};

export default SignIn;
