import React from 'react';
import Side from './Side';
import HouseholdUserSignup from './Signup';

const CreateaccountHoushold = () => {
  return (
    <div className='flex flex-col lg:flex-row p-6 lg:p-20 bg-[#f9f8f4] min-h-screen'>
      <Side />
      <HouseholdUserSignup />
    </div>
  );
};

export default CreateaccountHoushold;
