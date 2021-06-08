import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import GlobalMenu from '../../components/GlobalMenu';

const DeliverymenRegister = () => {

    /* const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Obrigatório';
        }

        if (!values.nickname)
            errors.nickname = 'Obrigatório';

        if (!values.cpf) {
            errors.cpf = 'Obrigatório';
        } else if (!/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/.test(values.cpf)) {
            errors.cpf = 'CPF inválido';
        }

        if (!values.email) {
            errors.email = 'Obrigatório';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'E-mail inválido';
        }
        return errors;
    } */

    const formik = useFormik({
        initialValues: {
            name: '',
            cpf: '',
            nickname: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Obrigatório'),
            cpf: Yup.string()
                .required('Obrigatório')
                /* .min(18, 'Insira um valor superior a 18')
                .max(60, 'Insira um valor inferior a 60')
                .length(14, 'CPF inválido') */
                .matches(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/, { message: 'CPF inválido' }),
            nickname: Yup.string()
                .required('Obrigatório'),
            email: Yup.string()
                .required('Obrigatótio')
                .email('E-mail inválido'),
        }),
        /* validate: validate, */
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <GlobalMenu />
            <h1>Cadastro de Entregadores</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label for="name">Nome:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name && <span>{formik.errors.name}</span>}
                </div>
                <div>
                    <label for="cpf">CPF:</label>
                    <input
                        id="cpf"
                        type="text"
                        {...formik.getFieldProps('cpf')}
                    /* name="cpf"
                    value={formik.values.cpf}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} */
                    />
                    {formik.errors.cpf && formik.touched.cpf && <span>{formik.errors.cpf}</span>}
                </div>
                <div>
                    <label for="nickname">Apelido:</label>
                    <input
                        id="nickname"
                        type="text"
                        name="nickname"
                        value={formik.values.nickname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.nickname && formik.touched.nickname && <span>{formik.errors.nickname}</span>}
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && formik.touched.email && <span>{formik.errors.email}</span>}
                </div>
                <button type="submit">Salvar</button>
            </form>
        </>
    );
}

export default DeliverymenRegister;