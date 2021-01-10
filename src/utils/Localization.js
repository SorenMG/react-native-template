import { I18n } from 'aws-amplify'

export const setUpLanguage = (lang) => {
  if (lang == 'en-US' || lang =='en-gb' || lang == 'en') {
    I18n.setLanguage('en');
  } else if (lang == 'da-DK'){
    I18n.setLanguage('da');
  }
}

export const loadVocabularies = () => {
   const dict = {
    en: {
        Welcome: 'Hello World!! Welcome..'
    },
    da: {
        Welcome: 'Hejsa! Velkommen'
    },
   }
   
   I18n.putVocabularies(dict);
};