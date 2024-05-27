import * as Yup from "yup";

export const preSignUpSchema = Yup.object({
    phone: Yup.string()
        .required("Поле обязательное!")
        .max(20, "максимальная длина - 20 символов!"),
    email: Yup.string()
        .required("Поле обязательное!")
        .min(3, "Пароль - минимум 3 символа!")
        .max(20, "Maximum length - 20 characters!"),
});

export const signInSchema = Yup.object({
    userName: Yup.string()
        .required("Поле обязательное!")
        .max(20, "максимальная длина - 20 символов!"),
    password: Yup.string()
        .required("Поле обязательное!")
        .min(3, "Пароль - минимум 3 символа!")
        .max(20, "максимальная длина - 20 символов!"),
});

export const signUpSchema = Yup.object({
    userName: Yup.string()
        .required("Поле обязательное!")
        .max(20, "максимальная длина - 20 символов!"),
    password: Yup.string()
        .required("Поле обязательное!")
        .min(3, "Пароль - минимум 3 символа!")
        .max(20, "максимальная длина - 20 символов!"),
    /* role: Yup.number()
        .required("Field required!")
        .typeError("Значение должно быть числом!")
        .min(1, "Минимальное значение - 1")
        .max(3, "Максимальное значение - 3"), */
});