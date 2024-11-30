import React, { useState } from 'react';
import { loginUser } from '../../api/auth';
import { useFormValidation } from '../../hooks/useFormValidation';
import { loginSchema } from '../../utils/validationSchemas';
import LocalStorageService from '../../services/localStorageService';
import patternImage from '../../assets/thumbs/pattern-3.png';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, errors } = useFormValidation(loginSchema);
  // Call API using the custom hook
  //   const { data, loading, error } = useApi(loginUser, { email, password });

  const onSubmit = data => {
    console.log('Login Data:', data);
    const { email, password } = data;
  };

  //   if (loading) return <div>Loading...</div>;

  return (
    <div
      className="account vh-100"
      style={{
        background: `url(${patternImage}) repeat-x center bottom, #F5F5F5`
      }}>
      <div className="container" style={{ margin: 'auto' }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="account-form">
              <div className="account-form__header text-center" />
              <div className="d-flex justify-content-center align-items-center">
                <a className="mb-4" href="https://www.mysquarefeet.net">
                  <img src="https://www.mysquarefeet.net/assets/images/logo_icon/logo.png" width={'200px'} />
                </a>
              </div>
              <h5 className="account-form__title mb-3">Create an Account</h5>
              <div className="account-form__social-btns">
                <div className="continue-facebook flex-grow-1">
                  <a href="https://www.mysquarefeet.net/user/social-login/facebook" className="btn w-100 facebook">
                    <span className="facebook-icon">
                      <img src="https://www.mysquarefeet.net/assets/templates/basic/images/facebook.svg" alt="Facebook" />
                    </span>{' '}
                    Facebook{' '}
                  </a>
                </div>
                <div className="continue-google flex-grow-1">
                  <a href="https://www.mysquarefeet.net/user/social-login/google" className="btn w-100 google">
                    <span className="google-icon">
                      <img src="https://www.mysquarefeet.net/assets/templates/basic/images/google.svg" alt="Google" />
                    </span>{' '}
                    Google{' '}
                  </a>
                </div>
                <div className="continue-facebook flex-grow-1">
                  <a href="https://www.mysquarefeet.net/user/social-login/linkedin" className="btn w-100 linkedin">
                    <span className="facebook-icon">
                      <img src="https://www.mysquarefeet.net/assets/templates/basic/images/linkedin.svg" alt="Linkedin" />
                    </span>{' '}
                    Linkedin{' '}
                  </a>
                </div>
              </div>
              <div className="other-option">
                <span className="other-option__text">OR</span>
              </div>
              <div className="account-form__body">
                <div className="row"></div>
                <div className="row gx-3">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="email" className="form--label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input className="form--control" type="email" {...register('email')} />
                      {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>
                  </div>
                </div>
                <div className="row gx-3">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="your-password" className="form--label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <div className="position-relative">
                        <input className="form--control " type="password" {...register('password')} />
                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gx-3">
                  <div className="col">
                    <div className="flex-between">
                      <div className="form--check">
                        <input className="form-check-input" type="checkbox" {...register('rememberMe')} />
                        <label className="form-check-label" htmlFor="remember">
                          Remember me
                        </label>
                      </div>
                      <a href="https://www.mysquarefeet.net/user/password/reset" className="account-form__forgot-pass" style={{ color: '#ff6600' }}>
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="account-form__footer">
                <button type="submit" className="w-100 btn orange_btn">
                  Login
                </button>
                <p className="account-form__subtitle mt-3">
                  Don't have an account?
                  <NavLink to="/register" style={{ color: '#ff6600', paddingLeft: 5 }}>
                    Register
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
