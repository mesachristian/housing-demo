import React, { Fragment } from 'react';
import './styles.css';

const SearchSection = () => {
    return (
        <Fragment>            
            <div className='relative w-full h-[650px] bg-white rounded-2xl shadow-lg'>


                <div className='h-full w-full bg-house-search-bg bg-cover'>
                    <div className='w-full h-full bg-[#141414] opacity-25'>
                    </div>
                </div>

                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-20'>
                    <div className='flex justify-center items-center w-full'>
                        <h1 className='text-white text-5xl w-full text-center font-bold'>Encuentra tu propiedad</h1>
                    </div>

                    <div className='grid grid-cols-3 gap-6 w-[75%] mt-20'>
                        
                            <FormAnimatedInput width='w-full col-span-2' height='h-[40px]'>
                                Ubicación
                            </FormAnimatedInput>
                        

                        <FormAnimatedInput width='w-full' height='h-[40px]'>
                                Tipo de propiedad
                        </FormAnimatedInput>
                        
                        <div className='col-span-2 grid grid-cols-4 gap-6'>
                            <label className='block'>
                                <span className='mb-[7px] ml-4 text-[12px] text-white'>Market Value</span>
                                <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm rounded-full' placeholder='Min Value' />
                            </label>

                            <label className='block'>
                                <span className='mb-[7px] ml-4 text-[12px] text-transparent'>.</span>
                                <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm rounded-full' placeholder='Max Value' />
                            </label>

                            <label className='block'>
                                <span className='mb-[7px] ml-4 text-[12px] text-white'>Min y Max $/sqrt</span>
                                <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm rounded-full' placeholder='Min $/sqrt' />
                            </label>

                            <label className='block'>
                                <span className='mb-[7px] ml-4 text-[12px] text-transparent'>.</span>
                                <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm rounded-full' placeholder='Max $/sqrt' />
                            </label>
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            <label className='block'>
                                <span className='mb-[7px] ml-4 text-[12px] text-white'>Property Age</span>
                                <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm rounded-full' placeholder='Min Value' />
                            </label>

                            <label className='block'>
                                <span className='mb-[7px] ml-4 text-[12px] text-transparent'>.</span>
                                <input className='h-[48px] flex items-center w-full bg-white py-2 px-5 text-sm rounded-full' placeholder='Max Value' />
                            </label>
                        </div>
                    </div>

                    <button className='text-white w-44 font-bold text-lg px-5 py-2 mt-16 bg-custom-blue rounded-full hover:bg-primary-title'>Search</button>
                </div>
            </div>
        </Fragment>
    )
}

interface Props{
    width : string;
    height : string;
    children : string;
}

export const FormAnimatedInput : React.FC<Props> = ({
    width,
    height,
    children
}) => {
  return (
    <label className={`relative ${width} ${height}`}>
        <input type='text' className='w-full h-full px-4 bg-transparent border-2 rounded-lg border-gray-400 outline-none
        focus:border-custom-cyan transition duration-200 text-white'/>
        <span className='text-gray-400 text-xl absolute left-0 top-2 mx-4 transition duration-200 input-text'>
            {children}
        </span>  
    </label>
  );
}

export default SearchSection;