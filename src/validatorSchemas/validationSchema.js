import * as Yup from "yup";

export const signInSchema = Yup.object({
    userName: Yup.string()
        .required("Field required!")
        .max(20, "Maximum length - 20 characters"),
    password: Yup.string()
        .required("Field required!")
        .min(3, "Password - minimum 3 characters")
        .max(20, "Maximum length - 20 characters"),
});

export const signUpSchema = Yup.object({
    userName: Yup.string()
        .required("Field required!")
        .max(20, "Maximum length - 20 characters"),
    password: Yup.string()
        .required("Field required!")
        .min(3, "Password - minimum 3 characters")
        .max(20, "Maximum length - 20 characters"),
    /* role: Yup.number()
        .required("Field required!")
        .typeError("Значение должно быть числом!")
        .min(1, "Минимальное значение - 1")
        .max(3, "Максимальное значение - 3"), */
});