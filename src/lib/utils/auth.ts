import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from '../constants';

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

export { fakeAuthProvider };
