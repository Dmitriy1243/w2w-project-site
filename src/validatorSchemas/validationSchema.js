import * as Yup from "yup";

const phoneRegExp = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?/;

export const signUpCreateSchema = Yup.object({
    phoneNumber: Yup
        .string()
        .required("Поле обязательное!")
        .matches(phoneRegExp, 'Длина или формат телефона не правильный!'),
    email: Yup
        .string()
        .email("В поле должен быть email!")
        .required("Поле обязательное!"),
    password: Yup
        .string()
        .required("Поле обязательное!")
        .min(3, "Пароль - минимум 3 символа!")
        .max(120, "максимальная длина - 120 символов!"),
});

export const signInSchema = Yup.object({
    userName: Yup
        .string()
        .required("Поле обязательное!")
        .min(3, "Имя пользователя - минимум 3 символа!")
        .max(20, "максимальная длина - 20 символов!"),
    password: Yup
        .string()
        .required("Поле обязательное!")
        .min(3, "Пароль - минимум 3 символа!")
        .max(120, "максимальная длина - 120 символов!"),
});