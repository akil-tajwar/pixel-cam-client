import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div>
            <div className='border-[#12c763] font-semibold uppercase border-x-4 mb-5 w-fit mx-auto py-5 px-6 flex justify-center items-center'>
                <div className='text-4xl px-5 py-2 border-[#12c763] border-x-4'>{title}</div>
            </div>
        </div>
    );
};

export default SectionTitle;