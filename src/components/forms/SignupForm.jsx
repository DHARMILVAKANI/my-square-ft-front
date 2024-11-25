import React from 'react';
import { useFormValidation } from '../../hooks/useFormValidation';
import { signupSchema } from '../../utils/validationSchemas';

const SignupForm = () => {
  // Using the custom hook with signup schema
  const { register, handleSubmit, errors } = useFormValidation(signupSchema);

  const onSubmit = data => {
    console.log('Signup Data:', data);
    // Handle signup logic here
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register('name')} placeholder="Enter your name" />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register('email')} placeholder="Enter your email" />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register('password')} placeholder="Enter your password" />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" {...register('confirmPassword')} placeholder="Confirm your password" />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
