import React from 'react';
import LoginForm from './Login';
import Sidelogin from './sidelogin';

const Signin = () => {
  return (
    <div className='flex flex-col lg:flex-row p-6 lg:p-20 bg-[#37af65] min-h-screen'>
      <LoginForm />
      <Sidelogin />
    </div>
  );
};

export default Signin;
