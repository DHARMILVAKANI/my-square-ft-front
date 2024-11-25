import React, { useState } from 'react';
import { loginUser } from '../../api/auth';
import { useFormValidation } from '../../hooks/useFormValidation';
import { loginSchema } from '../../utils/validationSchemas';
import LocalStorageService from '../../services/localStorageService';

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

    if (isSubmitting) return;
    setIsSubmitting(true);

    // Trigger the API call
    loginUser(email, password)
      .then(response => {
        setIsSubmitting(false);
        // Assuming you make an API call here and get the response token
        const token = 'some-auth-token'; // Replace with actual token from API response
        LocalStorageService.setItem('token', token);
      })
      .catch(err => {
        setIsSubmitting(false);
      });
  };

  //   if (loading) return <div>Loading...</div>;

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
