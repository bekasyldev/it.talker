interface AmoFormData {
    name: string;
    phone: string;
    email: string;
}

interface AmoFormsParams {
    setMeta: (params: AmoFormData) => void;
    params?: AmoFormData[];
}

interface AmoFormsCallbacks {
    f?: Array<(data: AmoFormData) => void>;
}

interface AmoWindow extends Window {
    amo_forms_params?: AmoFormsParams;
    amo_forms_load?: {
        (callback: (data: AmoFormData) => void): void;
        f?: AmoFormsCallbacks['f'];
    };
    amo_forms_loaded?: {
        (params: [string, (data: AmoFormData) => void][]): void;
        f?: AmoFormsCallbacks['f'];
    };
}

export const useAmoCRM = () => {
    const FORM_ID = '1476046';
    const FORM_HASH = 'f8300594a301b2877be13eb2c1cdaede';

    const initAmoScript = () => {
        const amoWindow = window as AmoWindow;

        if (!amoWindow.amo_forms_params) {
            // Initialize base objects
            amoWindow.amo_forms_params = {
                setMeta: function (params: AmoFormData) {
                    this.params = (this.params || []).concat([params]);
                }
            };

            // Create and append the script
            const script = document.createElement('script');
            script.id = `amoforms_script_${FORM_ID}`;
            script.async = true;
            script.charset = 'utf-8';
            script.innerHTML = `
                (function(a,m,o,c,r,m){
                    a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}};
                    a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])};
                    a[o+r]({id:"${FORM_ID}",hash:"${FORM_HASH}",locale:"ru"});
                })(window,0,"amo_forms_","params","load","loaded");
            `;

            document.body.appendChild(script);
        }
    };

    const submitToAmo = async (formData: AmoFormData): Promise<boolean> => {
        try {
            const amoWindow = window as AmoWindow;

            if (!amoWindow.amo_forms_params) {
                console.error('AmoCRM form is not initialized');
                return false;
            }

            // Создаем промис для отслеживания результата отправки
            return new Promise((resolve) => {
                // Добавляем обработчик для получения результата
                if (amoWindow.amo_forms_load) {
                    amoWindow.amo_forms_load((response) => {
                        console.log('AmoCRM response:', response);
                        resolve(true);
                    });
                }

                // Отправляем данные
                amoWindow.amo_forms_params.setMeta(formData);
            });
        } catch (error) {
            console.error('Error submitting to AmoCRM:', error);
            return false;
        }
    };

    return { initAmoScript, submitToAmo };
}; 