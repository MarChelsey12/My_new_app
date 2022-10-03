import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';

const FormSchema = Yup.object(
    {
        name: Yup.string().required("Required")
    }
);

export default function CollectForm( {collection} ) {
    
    const initialValues ={
        name: collection?.name ?? ''
    };
    
    const handleSubmit = (values, resetForm) => {
        if (!collection) {
            console.log('Creating')
        }else{
            console.log('Editing Collection')
        }
        console.log(values)
        resetForm(initialValues)
    };

    const formik = useFormik({
        initialValues: initialValues, 
        validationSchema: FormSchema,
        onSubmit: (values, {resetForm}) => {handleSubmit(values, resetForm)},
        enableReinitialize: true
    }); 

  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField fullWidth
            id = "name"
            name = "name"
            type = "text"
            sx = {{mb:2, mt:2}}
            label = "Collection Name"
            placeholder = "Collection Name"
            value = {formik.values.name}
            onChange={formik.handleChange}
            error = {formik.touched.name && Boolean(formik.errors.name)}
            helperText = {formik.touched.name && formik.errors.name}
        />
        <Button
            type= "submit"
            sx = {{width:"100%"}}>
                Save
        </Button>
    </form>
  )
}
