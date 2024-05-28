import * as Yup from "yup";

export const preSignUpSchema = Yup.object({
    username: Yup.string()
        .required("Поле обязательное!")
        .min(3, "Имя пользователя - минимум 3 символа!")
        .max(20, "максимальная длина - 20 символов!"),
    password: Yup.string()
        .required("Поле обязательное!")
        .min(3, "Пароль - минимум 3 символа!")
        .max(120, "максимальная длина - 120 символов!"),
});

export const signInSchema = Yup.object({
    userName: Yup.string()
        .required("Поле обязательное!"),
        //.max(20, "максимальная длина - 20 символов!"),
    password: Yup.string()
        .required("Поле обязательное!")
        //.min(3, "Пароль - минимум 3 символа!")
        //.max(120, "максимальная длина - 120 символов!"),
});

export const signUpSchema = Yup.object({
    userName: Yup.string()
        .required("Поле обязательное!")
        .min(3, "Имя пользователя - минимум 3 символа!")
        .max(20, "максимальная длина - 20 символов!"),
    password: Yup.string()
        .required("Поле обязательное!")
        .min(3, "Пароль - минимум 3 символа!")
        .max(120, "максимальная длина - 120 символов!"),
    /* role: Yup.number()
        .required("Field required!")
        .typeError("Значение должно быть числом!")
        .min(1, "Минимальное значение - 1")
        .max(3, "Максимальное значение - 3"), */
});