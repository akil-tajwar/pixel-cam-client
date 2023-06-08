import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div>
            <h1 className='text-4xl border-[#12c763] font-semibold uppercase border-x-4 mb-5 w-fit mx-auto py-3 px-8'>{title}</h1>
        </div>
    );
};

export default SectionTitle;