import React from 'react';

const Button = ({ onClick, children, className }) => {
    return (
        <button className='w-[8rem] bg-[#65386f] border-[2px] rounded-md border-[#392a56] my-1 pt-1 pb-1 pl-2 pr-2 text-white' onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;