import React from 'react'

const Dropdown = ({ setopen, open, current, setcurrent, data, custom}) => { // custom is for projects dropdown
    // console.log(open)
    return (
        <div className="relative ">{/* Drop down to select year  */}

            <button
                className={`text-gray-600 border-b-2 flex justify-center capitalize  ${custom && 'w-full border'}  font-medium text-sm px-4 py-2.5 text-center inline-flex items-center`}
                type='button'
                onClick={(e) => setopen((prev) => !prev)}>
                {current}

                <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                    />
                </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
                className={` ${open ? 'block' : 'hidden'
                    } bg-white absolute top-8 ${!custom && 'left-3'} text-base z-50 list-none divide-y divide-gray-100 rounded shadow  my-4 ${custom && 'w-full'}`}
                id='dropdown'>
                <ul className='py-1' aria-labelledby='dropdown'>
                    {data.map((ele) => {
                        return (
                            <li
                                key={ele}
                                className='cursor-pointer hover:bg-gray-100'
                                onClick={(e) => {
                                    setopen(false);
                                    current !== ele && setcurrent(ele); // remove update if same value is present in current state
                                    // its still gonna update any ways as setopen happens :)
                                }}>
                                <a
                                    aria-label='2022-23'
                                    className={`text-sm py-2 px-4 block whitespace-nowrap ${ele=='ai/ml'?'uppercase':'capitalize'}`}>
                                    {ele}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>{' '}
            {/* <!-- Dropdown menu --> */}
        </div> // Drop down ends

    )
}

export default Dropdown