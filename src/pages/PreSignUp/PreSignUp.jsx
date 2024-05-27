import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import styles from './preSignUp.module.scss';
import Field from '../../components/Field/Field';
import { yupResolver } from "@hookform/resolvers/yup"; 
import { preSignInSchema } from "../../validatorSchemas/validationSchema";


const defaultValues = {
    phone: "",
    email: "",
};

const SignUp = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues,
        resolver: yupResolver(preSignInSchema)
    });


    const handleRegistration = async (data) => {
        console.log(data);
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
                {Boolean(errors.userName) && <p className={styles.error}>{errors.userName?.message}</p>}
                <h2 className={styles.lable}>Почта</h2>
                <Field 
                    register={{...register("email")}}
                    autoComplete="off"
                    placeholder="почта..."
                    className={styles.input}
                    />
                {Boolean(errors.password) && <p className={styles.error}>{errors.password?.message}</p>}
                <Button className={styles.button} name={'Предрегистрация'} type="submit"/>
            </form>
        </>
    )
};

export default SignUp;
