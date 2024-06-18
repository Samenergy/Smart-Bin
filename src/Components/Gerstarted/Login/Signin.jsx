import React from 'react';
import LoginForm from './Login';
import Sidelogin from './sidelogin';

const Signin = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 md:p-20 bg-[#37af65]'>
      <LoginForm />
      <Sidelogin />
    </div>
  );
};

export default Signin;
