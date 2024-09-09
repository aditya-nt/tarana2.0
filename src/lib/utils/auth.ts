import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from '../constants';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

function getAccessToken() {
  return Cookies.get(ACCESS_TOKEN);
}

function setAccessToken(accessToken: string) {
  Cookies.set(ACCESS_TOKEN, accessToken);
}

function removeAccessToken() {
  Cookies.remove(ACCESS_TOKEN);
}

const fakeAuthProvider = {
  hasAccess: getAccessToken(),
  signin(accessToken: string, callback: VoidFunction) {
    setAccessToken(accessToken);
    setTimeout(() => {
      callback();
    }, 100);
  },
  signout(callback: VoidFunction) {
    removeAccessToken();
    setTimeout(() => {
      callback();
    }, 100);
  },
};

// i18n initialization
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true, 
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en','fr', 'es', 'de', 'it', 'zh', 'ja'], 
  });
export { fakeAuthProvider , i18n};
