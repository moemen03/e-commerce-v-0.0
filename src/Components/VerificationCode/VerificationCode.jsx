import axios from 'axios'
import { Formik , FormikProvider, useFormik } from 'formik'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";


const VerificationCode = () => {

    const [error ,setError] = useState(false)
    const [isLoading ,setIsLoading] = useState(false)
    const navigate = useNavigate()


    async function handleSubmit(values) {
        setIsLoading(true)
        const { data } = await axios
            .post(
            "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
            values
            )
            .catch((err) => {
                setError(err.response.data.message);
                setIsLoading(false)
            });
            setIsLoading(false)
        if (data.status === "Success") {
            navigate("/resetpassword");
        }
    }
    
    const validationSchema = Yup.object({
    resetCode: Yup.string()
        .required("This field is required")
        .matches(/^[0-9]{3,10}$/, "Enter numbers only"),
    });
    
    const formik = useFormik({
    initialValues: {
        resetCode: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
    });

    //   console.log(formik);
    return (
        <div className='resetCode'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Verification Code</title>
            </Helmet>

            {error ? (
                <div className="alert alert-danger mb-3 p-2 text-center">{error}</div>
            ) : null}

            <h2 className="mb-4 text-main text-center">Verification Code</h2>
    
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-2">
                <label htmlFor="resetCode" className="mb-1">
                    Reset Code:
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="resetCode"
                    name="resetCode"
                    value={formik.values.resetCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.resetCode && formik.touched.resetCode ? (
                    <div className="alert alert-danger mt-2 p-2">
                    {formik.errors.resetCode}
                    </div>
                ) : null}
                </div>
                
                {isLoading ? <button disabled type='button' className='btn bg-main text-white ms-auto d-block'> <i className='fas fa-spinner fa-spin'></i> </button>
                : <button type='submit' className='btn bg-main text-white ms-auto d-block'>Send</button>
                }
            </form>
        </div>
      )
}

export default VerificationCode
