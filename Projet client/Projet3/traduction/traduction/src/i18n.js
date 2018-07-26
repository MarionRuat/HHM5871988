// import i18n from 'i18next';
// import Backend from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import { reactI18nextModule } from 'react-i18next';

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(reactI18nextModule)
//   .init({
//     fallbackLng: 'en',

//     // have a common namespace used around the full app
//     ns: ['translations'],
//     defaultNS: 'translations',

//     debug: true,



//     react: {
//       wait: true
//     }
//   });


// export default i18n;



import i18next from 'i18next';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'es', // 'en' | 'es'
    // Using simple hardcoded resources for simple example
    resources: {
      en: {
        translation: {
          age: { label: 'Age', },
          home: { label: 'Home', },
          name: { label: 'Name', },
        },
      },
      es: {
        translation: {
          age: { label: 'Años', },
          home: { label: 'Casa', },
          name: { label: 'Nombre', },
        },
      },
    },
  })

export default i18next