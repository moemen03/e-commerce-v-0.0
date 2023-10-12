import axios from 'axios';
import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navigate, useNavigate } from 'react-router-dom';
import * as Yup from "yup";

const ForgetPassword = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    async function forgetpassword_submit(values){
        setError(null)
        setIsLoading(true)
        const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", values)
        .catch((err)=>{
            setError(err.response.data.message)
            setIsLoading(false)
        });
        if(data.statusMsg === "success"){
            navigate("/verificationCode")
        }
        console.log(data);
    } 


    const validationSchema = Yup.object({
        email: Yup.string().required("this feild is required").email("enter a valid email"),
    })

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema,
        onSubmit: forgetpassword_submit,
    });

  return (
    <div className='forgetpassword'>
      <Helmet>
        <meta charSet='utf-8'/>
        <title>Forget Password</title>
      </Helmet>

        {error? (
              <div className='alert alert-danger w-75 m-auto mb-4 p-3 rounded-4 text-center'>
              {error}
            </div>
            ):null}

        <h2 className='text-main text-center'>Forget Password</h2>
        <form onSubmit={formik.handleSubmit}>

            

            <label htmlFor="email">Email: </label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control mb-3' type="email" id='email' name='email' />
            {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">
            {formik.errors.email}
            </div> : null}


            {isLoading ? <button disabled type='button' className='btn bg-main text-white ms-auto d-block'> <i className='fas fa-spinner fa-spin'></i> </button>
            : <button type='submit' className='btn bg-main text-white ms-auto d-block'>Send</button>
            }

        </form>

    </div>
  )
}

export default ForgetPassword
