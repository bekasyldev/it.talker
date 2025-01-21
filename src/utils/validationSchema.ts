import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Введите ваше имя')
        .min(2, 'Имя должно содержать минимум 2 символа'),
    phone: yup
        .string()
        .required('Введите номер телефона')
        .matches(/^\+7\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/, 'Введите корректный номер телефона'),
    email: yup
        .string()
        .required('Введите email')
        .email('Введите корректный email')
}); 