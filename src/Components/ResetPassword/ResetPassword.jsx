import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
  
    async function goReset(values) {
        setIsLoading(true)
      const { data } = await axios
        .put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", values)
        .catch((err) => {
          setError(err.response.data.message);
          setIsLoading(false)
        });
        setIsLoading(false)
      if (data.token) {
        navigate("/login");
      }
    }
  
    const validationSchema = Yup.object({
      email: Yup.string()
        .required("This field is required")
        .email("Enter a valid email"),
      newPassword: Yup.string().required("Password is required").matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, 'Password must have special character, letter, number and must be greater than 7'),
    });
  
    const formik = useFormik({
      initialValues: {
        email: "",
        newPassword: "",
      },
      validationSchema,
      onSubmit: goReset,
    });
  
    return (
      <div className="resetcode py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reset Password</title>
        </Helmet>
        {error ? (
          <div className="alert alert-danger mb-3 p-2 text-center">{error}</div>
        ) : null}
        <h2 className="mb-4">Reset Password</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="email" className="mb-1">
              Email:
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-danger mt-2 p-2">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="newPassword" className="mb-1">
              New Password:
            </label>
            <input
              className="form-control"
              type="password"
              id="newPassword"
              name="newPassword"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.newPassword && formik.touched.newPassword ? (
              <div className="alert alert-danger mt-2 p-2">
                {formik.errors.newPassword}
              </div>
            ) : null}
          </div>
          {isLoading ? <button disabled type='button' className='btn bg-main text-white ms-auto d-block'> <i className='fas fa-spinner fa-spin'></i> </button>
            : <button type='submit' className='btn bg-main text-white ms-auto d-block'>login</button>
          }
        </form>
      </div>
    );
}

export default ResetPassword
