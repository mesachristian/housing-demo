import React, { Fragment } from 'react'

const HomeOwners = () => {
  return (
    <Fragment>
        <div className='h-full w-full bg-[#eebc6d] pt-32 pb-7 px-20 flex flex-col items-center justify-center'>
            <h2 className='text-[#3d405b] text-3xl font-extrabold'>Imagina poder acceder al capital de tu casa cuando lo necesites.</h2>

            <div className='mt-10 w-full flex justify-center items-center'>
                <div className='w-4/6'>
                    
                </div>

                <div className='w-2/6 h-full'>
                  <ul>
                    <li>Leverage the value of your property to your advantage and not the bank's</li>
                    <li>Leverage the value of your property to your advantage and not the bank's</li>
                    <li>Manage your asset with tools and market data.</li>
                    <li>Leverage the value of your property to your advantage and not the bank's</li>
                  </ul>

                  <button>
                    Sign Up
                  </button>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default HomeOwners;