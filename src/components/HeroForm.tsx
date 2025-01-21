import { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import * as yup from 'yup';
import { formSchema } from '../utils/validationSchema';
import { useAmoCRM } from '../hooks/useAmoCRM';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

interface FormErrors {
  [key: string]: string;
}

interface HeroFormProps {
  className?: string;
}

function HeroForm({ className = '' }: HeroFormProps) {
  const { initAmoScript, submitToAmo } = useAmoCRM();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    initAmoScript();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Валидация формы
      await formSchema.validate(formData, { abortEarly: false });
      
      // Отправка в AmoCRM
      const success = await submitToAmo(formData);
      
      if (success) {
        // Очистка формы
        setFormData({ name: '', phone: '', email: '' });
        setErrors({});
        alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
      } else {
        alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
      }
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: FormErrors = {};
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col md:flex-row gap-2 md:gap-5 ${className}`}>
      <div className="flex-1">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Имя"
          className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white mb-4 ${
            errors.name ? 'border-2 border-red-500' : ''
          }`}
        />
        {errors.name && (
          <span className="text-red-400 text-sm mt-1">{errors.name}</span>
        )}
      </div>

      <div className="flex-1">
        <InputMask
          mask="+7(999) 999 99 99"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Телефон"
          className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white mb-4 ${
            errors.phone ? 'border-2 border-red-500' : ''
          }`}
        />
        {errors.phone && (
          <span className="text-red-400 text-sm mt-1">{errors.phone}</span>
        )}
      </div>

      <div className="flex-1">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={`w-full h-[57px] px-6 rounded-[19px] text-base bg-white mb-4 ${
            errors.email ? 'border-2 border-red-500' : ''
          }`}
        />
        {errors.email && (
          <span className="text-red-400 text-sm mt-1">{errors.email}</span>
        )}
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className={`h-[57px] px-8 md:px-12 bg-[#006DFC] text-white rounded-[19px] font-semibold text-base hover:opacity-90 transition-opacity whitespace-nowrap
          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Отправка...' : 'Записаться'}
      </button>
    </form>
  );
}

export default HeroForm;
