import { I18n } from 'aws-amplify'

const strings = {
  en: {
    welcome: 'Hello World!! Welcome..'
  },
  da: {
    welcome: 'Hejsa! Velkommen'
  }
}

export const setUpLanguage = (lang) => {
  if (lang == 'en-US' || lang =='en-gb' || lang == 'en') {
    I18n.setLanguage('en');
  } else if (lang == 'da-DK'){
    I18n.setLanguage('da');
  }
}

export const loadVocabularies = () => {
   I18n.putVocabularies(strings);
};