import React, { useEffect } from "react";

const AmoCRMForm: React.FC = () => {
  useEffect(() => {
    // Определяем тип для window с учетом amo_forms_
    type WindowWithAmoForms = typeof window & {
      amo_forms_params?: { setMeta: (params: any) => void };
      amo_forms_load?: (config: any) => void;
      amo_forms_loaded?: (args: any) => void;
    };

    const win = window as WindowWithAmoForms;

    // Создаем функцию для добавления первого скрипта
    const loadScript = (src: string, id: string) => {
      if (document.getElementById(id)) return; // Проверяем, не был ли скрипт уже добавлен
      const script = document.createElement("script");
      script.src = src;
      script.id = id;
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    };

    // Вставляем первый скрипт
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      !function(a,m,o,c,r,m){
        a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}};
        a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])};
        a[o+r]({id:"1476046",hash:"f8300594a301b2877be13eb2c1cdaede",locale:"ru"});
        a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}
      }(window,0,"amo_forms_","params","load","loaded");
    `;
    document.body.appendChild(inlineScript);

    // Вставляем второй скрипт
    loadScript(
      "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1737453325",
      "amoforms_script_1476046"
    );

    // Очистка при размонтировании компонента
    return () => {
      inlineScript.remove();
      const loadedScript = document.getElementById("amoforms_script_1476046");
      if (loadedScript) loadedScript.remove();
    };
  }, []);

  return null; // Компонент ничего не рендерит, только добавляет скрипты
};

export default AmoCRMForm;