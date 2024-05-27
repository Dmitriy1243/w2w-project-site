import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import styles from './signIn.module.scss';
import Field from '../../components/Field/Field';
import { yupResolver } from "@hookform/resolvers/yup"; 
import { signInSchema } from "../../validatorSchemas/validationSchema";


const defaultValues = {
    userName: "",
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
            <h1 className={styles.titleText}>Вход</h1>
            <form className={styles.form} onSubmit={handleSubmit(handleSignIn)}>
                <h2 className={styles.lable}>Пользователь</h2>
                <Field 
                    register={{...register("userName")}}
                    autoComplete="off"
                    placeholder="пользователь..."
                    className={styles.input}
                    />
                {Boolean(errors.userName) && <p className={styles.error}>{errors.userName?.message}</p>}
                <h2 className={styles.lable}>Пароль</h2>
                <Field 
                    register={{...register("password")}}
                    autoComplete="off"
                    placeholder="пароль..."
                    className={styles.input}
                    />
                {Boolean(errors.password) && <p className={styles.error}>{errors.password?.message}</p>}
                <Button className={styles.button} name={'Вход'} type="submit"/>
            </form>
        </>
    )
};

export default SignIn;
