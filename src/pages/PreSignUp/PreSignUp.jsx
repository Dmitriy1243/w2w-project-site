import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import styles from './preSignUp.module.scss';
import Field from '../../components/Field/Field';
import { yupResolver } from "@hookform/resolvers/yup"; 
import { preSignUpSchema } from "../../validatorSchemas/validationSchema";
import { useSelector, useDispatch } from 'react-redux';
import { selectPreLoginUser } from '../../redux/selectors/selectors';
import { loginReducer } from '../../redux/slices/preAuthSlice';


const defaultValues = {
    phone: "",
    email: "",
};

const SignUp = () => {

    const dispatch = useDispatch();
    const PreloginUser = useSelector(selectPreLoginUser);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        resolver: yupResolver(preSignUpSchema)
    });


    const handleRegistration = async (data) => {
        dispatch(loginReducer(data))
    };

    return (
        <>
            <h1 className={styles.titleText}>Предрегистрация</h1>
            <form className={styles.form} onSubmit={handleSubmit(handleRegistration)}>
                <h2 className={styles.lable}>Телефон</h2>
                <Field 
                    register={{...register("phone")}}
                    autoComplete="off"
                    placeholder="телефон..."
                    className={styles.input}
                    />
                {Boolean(errors.phone) && <p className={styles.error}>{errors.phone?.message}</p>}
                <h2 className={styles.lable}>Почта</h2>
                <Field 
                    register={{...register("email")}}
                    autoComplete="off"
                    placeholder="почта..."
                    className={styles.input}
                    />
                {Boolean(errors.email) && <p className={styles.error}>{errors.email?.message}</p>}
                <Button className={styles.button} name={'Предрегистрация'} type="submit"/>
            </form>
            <h2>{`Phone: ${PreloginUser.phone}`}</h2>
            <h2>{`Email: ${PreloginUser.email}`}</h2>
        </>
    )
};

export default SignUp;
