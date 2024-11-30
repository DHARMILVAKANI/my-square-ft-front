import React, { useState } from 'react';
import { useFormValidation } from '../../hooks/useFormValidation';
import { signupSchema } from '../../utils/validationSchemas';
import patternImage from '../../assets/thumbs/pattern-3.png';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/slices/authSlice';

const SignupForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  // Handle the checkbox change
  const handleCheckboxChange = e => {
    setIsChecked(e.target.checked);
  };

  const { register, handleSubmit, errors } = useFormValidation(signupSchema);
  const { loading, error } = useSelector(state => state.auth);

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append('legal_name', data.firstName + data.lastName);
    formData.append('email_id', data.email);
    formData.append('password', data.password);
    formData.append('password_confirmed', data.confirmPassword);
    try {
      await dispatch(signupUser(formData)).unwrap();
      console.log('Signup Data:', data);
    } catch (err) {
      console.error('Signup failed:', err);
    }
  };

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
                  <div className="col-xsm-6 col-sm-6">
                    <div className="form-group">
                      <label className="form--label" htmlFor="firstname">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input className="form--control" type="text" {...register('firstName')} />
                      {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                    </div>
                  </div>
                  <div className="col-xsm-6 col-sm-6">
                    <div className="form-group">
                      <label className="form--label" htmlFor="lastname">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input className="form--control" type="text" {...register('lastName')} />
                      {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                    </div>
                  </div>
                </div>
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
                  <div className="col-xsm-6 col-sm-6">
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
                  <div className="col-xsm-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="your-password" className="form--label">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <div className="position-relative">
                        <input className="form--control" type="password" {...register('confirmPassword')} />
                        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gx-3">
                  <div className="col">
                    <div className="form--check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={isChecked} // Bind checkbox state
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="agree">
                        I agree with
                        <a href="https://www.mysquarefeet.net/policy/privacy-policy" target="_blank">
                          Privacy Policy
                        </a>
                        ,
                        <a href="https://www.mysquarefeet.net/policy/terms-of-service" target="_blank">
                          Terms of Service
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="account-form__footer">
                <button type="submit" id="recaptcha" className="w-100 btn orange_btn" disabled={!isChecked}>
                  Register
                </button>
                <p className="account-form__subtitle mt-3">
                  Already have an account?
                  <NavLink to="/login" style={{ color: '#ff6600', paddingLeft: 5 }}>
                    Login
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

export default SignupForm;
