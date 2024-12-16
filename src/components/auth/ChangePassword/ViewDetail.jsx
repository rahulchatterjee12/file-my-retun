import React from 'react';

const ViewDetail = ({name, email}) => (
    <div className='bg-[#F1F9FF] rounded-[16px] px-6 py-3'>
        <h1 className='text-black font-medium md:text-[16px] text-[20px] pb-3'>Name :  {name ? name : 'email'}</h1>
        <p className='text-black font-medium md:text-[16px] text-[20px]'>Current Email ID : {email ? email : 'email'}</p>
    </div>
);
export default ViewDetail;
