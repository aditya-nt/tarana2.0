import React from 'react';
import { render, fireEvent ,screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import AuthStatus from '.';
import { Provider } from 'react-redux';
import FormButton from '@/components/base/FormButton';


describe('Tests',()=>{
  const mockFunction=jest.fn();
beforeEach(()=>{
  const { getByTestId } = render(
   
    <MemoryRouter>
      <AuthStatus
     />
    </MemoryRouter>
   
  );
})
test('for login button',()=>{
  const loginFunction=jest.fn();
 
const handleLogIn=screen.queryByTestId('login');
if (handleLogIn) {
  fireEvent.click(handleLogIn);
}
expect(loginFunction).toHaveBeenCalled;
})

test('for logout button',()=>{
  const logoutFunction=jest.fn();
 
const handleLogOut=screen.queryByTestId('logout');
if (handleLogOut) {
  fireEvent.click(handleLogOut);
}
expect(logoutFunction).toHaveBeenCalled;
})
})