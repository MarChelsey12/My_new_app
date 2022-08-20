import React from 'react'
import * as Yup from 'yup';
import { userFormik } from 'formik';
import Button from '../components/Button';


const FormSchema = Yup.object(
    {
        email: Yup.string().email("Must be a valid email format").required(),
        password: Yup.string().required()
    }
)

const initialValues ={
    email: '',
    password: ''
}

const handleSubmit = (values) => {
    console.log(values)
}

const formik = userFormik({
    initialValues: initialValues, 
    validationSchema: FormSchema,
    onSubmit: (values) => {handleSubmit(values)}
}) 

export default function LoginForm() {

  return (
    <form onSubmit={formik.handleSubmit}>
        
    </form>
  )
}
