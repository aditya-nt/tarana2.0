import { init } from "i18next";
import { ACCESS_TOKEN } from "../constants";
import { fakeAuthProvider,i18n } from "./auth";
import  Cookies from "js-cookie";


jest.mock('js-cookie',()=>({
  get:jest.fn(),
  set:jest.fn(),
  remove:jest.fn()
}));

describe('fakeAuthProvider',()=>{
  const accessToken='test-token';
  const callback=jest.fn();

  afterEach(()=>{
    jest.clearAllMocks();
  })

  test('for getting access',()=>{
    fakeAuthProvider.hasAccess;
  expect(Cookies.get).toHaveBeenCalledWith(ACCESS_TOKEN);
  })

  test('setting access',()=>{
  fakeAuthProvider.signin(accessToken,()=>{
    expect(Cookies.set).toHaveBeenCalledWith(ACCESS_TOKEN,accessToken);
  })
  })
  
  test('removing access',()=>{
    fakeAuthProvider.signout(()=>{
      expect(Cookies.remove).toHaveBeenCalledWith(ACCESS_TOKEN);
      
    });
});
  });
  describe('i18n',()=>{
 test('',async()=>{
await init()
expect(i18n.language).toBeDefined;
const fallbackLng=i18n.options.fallbackLng;

expect(fallbackLng).toContain('en');
const backend=i18n.options.backend as {loadPath?:string};
expect(backend && backend.loadPath).toBe('/locales/{{lng}}/translation.json');
const interpolation=i18n.options.interpolation as {escapeValue?:boolean};
expect(interpolation && interpolation.escapeValue ).toBe(false);

const supportedLngs=i18n.options.supportedLngs;
expect(supportedLngs).toEqual(['en', 'fr', 'es', 'de', 'it', 'zh', 'ja','cimode']);
});
  })
