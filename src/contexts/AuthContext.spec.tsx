import { render,screen ,renderHook} from "@testing-library/react";
import { AuthProvider,useAuth } from "./AuthContext";
import { fakeAuthProvider } from "../lib/utils/auth";
import { act } from "react-dom/test-utils";


  
jest.mock('../lib/utils/auth', () => ({
   fakeAuthProvider: {
     hasAccess: undefined,
     signin: jest.fn().mockImplementation((user, callback) => {
       fakeAuthProvider.hasAccess = user;
       callback();
     }),
     signout: jest.fn().mockImplementation((callback) => {
       fakeAuthProvider.hasAccess = undefined;
       callback();
     }),
   },
 }));
 
 describe('<AuthProvider>', () => {
   beforeEach(() => {
     fakeAuthProvider.hasAccess = undefined; 
   });
 
   it('initializes user to null', () => {
     const { result } = renderHook(() => useAuth(), {
       wrapper: AuthProvider,
     });
 
     expect(result.current.user).toBeNull();
   });
 
   it('updates user on signin', async () => {
     const { result } = renderHook(() => useAuth(), {
       wrapper: AuthProvider,
     });
 
     await act(async () => {
       await result.current.signin('testuser', () => {});
     });
 
     expect(fakeAuthProvider.signin).toHaveBeenCalledWith('testuser', expect.any(Function));
     expect(result.current.user).toBe('testuser');
   });
 
   it('clears user on signout', async () => {
     const { result } = renderHook(() => useAuth(), {
       wrapper: AuthProvider,
     });
     await act(async () => {
       await result.current.signin('testuser', () => {});
     });
     await act(async () => {
       await result.current.signout(() => {});
     });
 
     expect(fakeAuthProvider.signout).toHaveBeenCalled();
     expect(result.current.user).toBeNull();
   });
 });