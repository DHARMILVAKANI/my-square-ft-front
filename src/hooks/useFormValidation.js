import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Custom Hook for Handling Form Validation
export const useFormValidation = schema => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched'
  });

  return { register, handleSubmit, errors };
};
