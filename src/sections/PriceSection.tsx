import { useState } from 'react';
import InputMask from 'react-input-mask';
import { formSchema } from '../utils/validationSchema';
import * as yup from 'yup';

function PriceSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await formSchema.validate(formData, { abortEarly: false });
      console.log('Form submitted:', formData);
      setFormData({ name: '', phone: '', email: '' });
      setErrors({});
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: {[key: string]: string} = {};
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <section className="bg-[var(--bg-section)] text-white py-16 rounded-t-3xl">
      <div className="container">
        <div className="w-60 md:w-fit grid md:flex items-center gap-4 mb-12 bg-[var(--bg-medium-card)] rounded-3xl px-6 py-4">
          <h3 className="text-2xl opacity-80 hidden md:block">Второй поток:</h3>
          <h3 className="text-sm opacity-80 block md:hidden">Стоимость обучения для второго потока:</h3>
          <span className="text-xl md:text-4xl font-semibold">400 000 тенге</span>
        </div>

        <div className="max-w-5xl flex flex-col-reverse md:flex-col">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-4 mb-8">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Имя"
                className={`w-full bg-white rounded-xl px-6 py-3 text-black ${
                  errors.name ? 'border-2 border-red-500' : ''
                }`}
              />
              {errors.name && (
                <span className="text-red-400 text-sm mt-1">{errors.name}</span>
              )}
            </div>
            <div>
              <InputMask
                mask="+7(999) 999 99 99"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Телефон"
                className={`w-full bg-white rounded-xl px-6 py-4 text-black ${
                  errors.phone ? 'border-2 border-red-500' : ''
                }`}
              />
              {errors.phone && (
                <span className="text-red-400 text-sm mt-1">{errors.phone}</span>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full bg-white rounded-xl px-6 py-4 text-black ${
                  errors.email ? 'border-2 border-red-500' : ''
                }`}
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-1">{errors.email}</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-[var(--button-primary)] text-white px-6 py-2 md:py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Записаться на курс
            </button>

            <span className="text-sm block md:hidden opacity-80 mt-4">*С 21.02.2025 стоимость курсов вырастет на 50% и составит 600 000 тенге</span>
          </form>

          <div className="flex items-start w-full gap-8">
            <h2 className="text-xl md:text-5xl mb-4 md:mb-0 max-w-7xl">
              Запишись на курсы сейчас, <br />
              пока действует низкая цена!
            </h2>
            <img 
              src="/assets/arrow-up.svg" 
              alt="arrow" 
              className="w-24 h-24 hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceSection; 