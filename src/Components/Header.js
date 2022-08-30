import React from 'react'

const Header = () => {
    return(
        <div data-cy="header-background" className='header-background bg-blue w-screen flex align-middle max-w-full'>
            <div data-cy="header-title" className='header-title text-white-100 text-2xl font-bold my-9 ml-56'>TO DO LIST APP</div>
        </div>
    )
}

export default Header