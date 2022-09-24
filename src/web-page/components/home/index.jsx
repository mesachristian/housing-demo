import React, { Fragment, useEffect, useState } from 'react';

// STYLES
import './styles.css';

const Home = () => {

    const [stepIdx, setStepIdx] = useState(0);

    const changeStepIdx = (newStep) => {
        if (newStep < 0) {
            newStep = 3;
        }
        if (newStep >= 4) {
            newStep = 0;
        }
        setStepIdx(newStep);
    }

    const initialSteps = [
        'Elige tu propiedad favorita.',
        'Dirígete a OpenSea y conecta tu wallet Metamask.',
        'Adquiere tu token de la propiedad.',
        'Empieza a recibir ingresos pasivos.'
    ];

    return (
        <Fragment>
            <div className='h-full w-full bg-light-blue pt-28 pb-7 px-20 flex items-center justify-center'>
                <div className='h-full w-7/12 py-20 2xl:py-36 flex flex-col justify-between items-start'>
                    <h1 className='text-primary-blue font-extrabold text-5xl 2xl:text-7xl'>Marketplace mundial de acciones inmobiliarias</h1>
                    <p className='text-primary-blue text-lg 2xl:text-2xl'>
                        Permite a los propietarios acceder al valor de sus bienes inmobiliarios sin
                        necesidad de prestamos e inversionistas inmobiliarios. Tienen la oportunidad
                        de construir una cartera de bienes raíces residenciales fraccionados tokenizados.
                    </p>

                    <button className='py-3 px-5 bg-primary-blue text-white rounded-md text-base 2xl:text-2xl'>Ir al Marketplace</button>
                </div>

                <div className='h-full w-5/12 p-20 flex items-center justify-center'>
                    <Slider3D />
                </div>
            </div>

            <div className='h-[88%] w-full bg-white'>
                <div className='w-full px-20 py-10'>
                    <h1 className='w-full text-secondary-blue text-3xl font-extrabold text-center'>
                        La herramienta que conecta a los dueños de las propiedades con inversionistas
                        directamente usando las ventajas de Blockchain.
                    </h1>
                </div>

                <div className=''>
                    
                </div>
            </div>

            <div className='h-[88%] w-full flex'>
                <div className='h-full w-[57%] bg-gray-700 p-20'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <iframe
                            className="w-full aspect-video"
                            title='iac-invest-video'
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            src="https://www.youtube.com/embed/0P8b6pteVqk"></iframe>
                    </div>
                </div>

                <div className='h-full w-[63%] bg-light-blue py-14 pl-14 pr-32 flex flex-col justify-center items-center'>
                    <h2 className='text-gray-900 text-2xl font-extrabold'>
                        Empieza a invertir en el mercado inmobiliario de
                        <span className='text-secondary-blue'> manera rapida y sencilla </span> teniendo
                        una alta gama de lineas de negocio de <span className='text-secondary-blue'> muy poco capital </span>
                        y empieza a obtener beneficios de manera <span className='text-secondary-blue'>inmediata.</span>
                    </h2>

                    <p className='text-base text-justify 2xl:text-xl text-gray-900 mt-16'>
                        La solución propone un marketplace que usa todos los beneficios
                        desentralizados del blockchain para que las personas sin necesidad de prestamos bancarios
                        o un gran capital disponible pueda invertir en el mercado de bienes raices de manera
                        rapida y segura
                    </p>
                </div>
            </div>

            <div className='h-[88%] w-full flex'>
                <div className='h-full w-[63%] bg-light-blue px-20 py-14 flex flex-col justify-center items-start'>
                    <h2 className='text-gray-900 text-2xl font-extrabold'>
                        Con solo 4 pasos puedes empezar a generar ganancias pasivas!
                    </h2>

                    <div className='mt-10'>
                        {initialSteps.map((step, idx) => {
                            let borderColor = idx === stepIdx ? 'border-primary-blue' : 'border-gray-900';
                            let textStyle = idx === stepIdx ? 'text-secondary-blue scale-105' : 'text-gray-900';
                            return (
                                <div className={'flex mt-6 hover:cursor-pointer ' + textStyle} onClick={() => setStepIdx(idx)}>
                                    <div className={'border-[1px] text-lg rounded-[50%] w-8 h-8 flex justify-center items-center ' + borderColor}>{idx + 1}</div>
                                    <p className='text-lg ml-3'>{step}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='h-full w-[57%] bg-gray-700 p-20 pt-36pp'>
                    <Slider selectedIdx={stepIdx} changeSelectedIdx={changeStepIdx} />
                </div>
            </div>

        </Fragment>
    )
}

const Slider = ({ selectedIdx, changeSelectedIdx }) => {

    const stepImages = [
        'bg-house-card',
        'bg-house-portrait',
        'bg-house-card',
        'bg-house-search-bg'
    ];

    return (
        <div className='h-full w-full flex flex-col justify-start items-center'>
            <div className={'h-5/6 w-full bg-center bg-cover bg-no-repeat bg-local ' + stepImages[selectedIdx]}>

            </div>
            <div className='h-1/6 w-full flex items-center justify-center text-custom-white'>
                <i className="fa fa-arrow-left mr-4 hover:cursor-pointer" onClick={() => changeSelectedIdx(selectedIdx - 1)}></i>
                <p className='mr-4'>{selectedIdx + 1}/4</p>
                <i className="fa fa-arrow-right hover:cursor-pointer" onClick={() => changeSelectedIdx(selectedIdx + 1)}></i>
            </div>
        </div>
    );
}

const Slider3D = () => {

    const [ imagesPositions, setImagesPositions ] = useState(['center-photo', 'right-photo', 'left-photo']);

    useEffect(() => {
        const interval = setInterval(() => {
          setImagesPositions( (prevState) => ([ prevState[2] , prevState[0], prevState[1]]));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full h-full relative flex items-center'>

            <div className={`bg-house-1 bg-center bg-cover bg-no-repeat bg-local absolute left-0 top-0 w-full h-3/5 m-auto trans-time ${imagesPositions[0]}`}></div>

            <div className={`bg-house-2 bg-center bg-cover bg-no-repeat bg-local absolute left-0 top-0 w-full h-3/5 m-auto trans-time ${imagesPositions[1]}`}></div>

            <div className={`bg-house-3 bg-center bg-cover bg-no-repeat bg-local absolute left-0 top-0 w-full h-3/5 m-auto trans-time ${imagesPositions[2]}`}></div>
        </div>
    );
}

export default Home;