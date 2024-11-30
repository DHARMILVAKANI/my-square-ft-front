import * as Yup from 'yup';

// Login Schema
export const loginSchema = Yup.object({
  email: Yup.string().required('field is required').email('Invalid email address'),
  password: Yup.string().required('field is required')
});

// Signup Schema
export const signupSchema = Yup.object({
  firstName: Yup.string().required('field is required'),
  lastName: Yup.string().required('field is required'),
  email: Yup.string().email('Invalid email address').required('field is required'),
  password: Yup.string().required('field is required').min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .required('field is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
