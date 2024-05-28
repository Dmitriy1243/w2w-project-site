import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import styles from './preSignUp.module.scss';
import Field from '../../components/Field/Field';
import { yupResolver } from "@hookform/resolvers/yup"; 
import { preSignUpSchema } from "../../validatorSchemas/validationSchema";
import { useSelector, useDispatch } from 'react-redux';
import { selectPreLoginUser } from '../../redux/selectors/selectors';
import { loginReducer } from '../../redux/slices/preAuthSlice';
import { postPreRegistration } from '../../api/postPreRegistration';


const defaultValues = {
    username: "",
    password: "",
};

const SignUp = () => {

    const dispatch = useDispatch();
    const preloginUser = useSelector(selectPreLoginUser);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        resolver: yupResolver(preSignUpSchema)
    });


    const handleRegistration = async (data) => {
        dispatch(loginReducer(data));
        dispatch(postPreRegistration(data));
    };

    return (
        <>
            <h1 className={styles.titleText}>Предрегистрация</h1>
            <form className={styles.form} onSubmit={handleSubmit(handleRegistration)}>
                <h2 className={styles.lable}>Пользователь</h2>
                <Field 
                    register={{...register("username")}}
                    autoComplete="off"
                    placeholder="пользователь..."
                    className={styles.input}
                    />
                {Boolean(errors.username) && <p className={styles.error}>{errors.username?.message}</p>}
                <h2 className={styles.lable}>Пароль</h2>
                <Field 
                    register={{...register("password")}}
                    autoComplete="off"
                    placeholder="пароль..."
                    className={styles.input}
                    />
                {Boolean(errors.password) && <p className={styles.error}>{errors.password?.message}</p>}
                <Button className={styles.button} name={'Предрегистрация'} type="submit"/>
            </form>
            <h2>{`Username: ${preloginUser.username}`}</h2>
            <h2>{`Password: ${preloginUser.password}`}</h2>
        </>
    )
};

export default SignUp;
