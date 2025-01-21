import { useState } from 'react';
import InputMask from 'react-input-mask';
import * as yup from 'yup';
import { formSchema } from '../utils/validationSchema';
import Badge from "../components/Badge";

function RecordForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const specializations = [
    'разработчик',
    'бизнес-аналитик',
    'продакт-менеджер',
    'тестировщик',
    'scrum-мастер',
    'системный аналитик',
    'дата-аналитик'
  ];

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
    <section className="bg-[var(--bg-section)] text-white py-16 rounded-xl">
      <div className="container flex flex-col md:flex-row gap-16">
        {/* Left Column */}
        <div className='flex-1'>
          <h2 className="text-xl md:text-3xl font-semibold mb-6">
            Полный курс SA в тесном <br />
            взаимодействии с преподавателями <br />
            и с практикой в back-end реального <br />
            проекта
          </h2>

          <div className="flex items-center gap-4 mb-8">
            <span className="bg-[#285EA4] px-2 md:px-4 py-2 rounded-lg">10 недель</span>
            <Badge>Набор открыт</Badge>
          </div>

          <p className="text-white mb-12 opacity-70">
            Комплексная программа обучения системному анализу с <br />
            фокусом на практические навыки. Вы научитесь <br />
            проектировать архитектуру, работать с базами данных, API <br />
            и современными инструментами разработки.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Имя"
                  className={`w-full bg-white rounded-lg px-4 py-3 text-black ${
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
                  className={`w-full bg-white rounded-lg px-4 py-3 text-black ${
                    errors.phone ? 'border-2 border-red-500' : ''
                  }`}
                />
                {errors.phone && (
                  <span className="text-red-400 text-sm mt-1">{errors.phone}</span>
                )}
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full bg-white rounded-lg px-4 py-3 text-black ${
                  errors.email ? 'border-2 border-red-500' : ''
                }`}
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-1">{errors.email}</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--button-primary)] text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Пройти тестовый собес
            </button>
          </form>

          <p className="text-sm mt-4 text-[var(--white)] opacity-80">
            Запишись на живой митинг с преподавателем, чтобы в режиме <br />
            тестового собеседования узнать о своих пробелах!
          </p>
        </div>

        {/* white separater */}
        <div className="w-full px-8 md:h-full md:w-1">
          <div className="w-full h-px md:h-full md:w-px bg-white opacity-20"></div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <h3 className="text-2xl  mb-6">
            Чтобы понимать программу, нужно <br />
            иметь хотя бы базовое понимание IT
          </h3>

          <p className="mb-6 opacity-70 text-xl">
            Курсы принесут максимальную пользу для <br />
            следующих специалистов уровня junior/<br />
            middle:
          </p>

          <div className="flex flex-wrap gap-3 max-w-[400px]">
            {specializations.map((spec) => (
              <Badge
              className='text-lg'
              >
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecordForm;
