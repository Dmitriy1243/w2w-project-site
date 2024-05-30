import * as Yup from "yup";

export const signUpSchema = Yup.object({
    phone: Yup
        .number()
        .required("Поле обязательное!")
        .integer("Число должно быть целым")
        .typeError('Поле должно быть числом'),
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