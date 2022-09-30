import React, { Fragment, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// STYLES
import "./styles.css";

const IMAGE_DATA = [
  "bg-house-nft-1",
  "bg-house-nft-2",
  "bg-house-nft-3",
  "bg-house-nft-4",
  "bg-house-nft-5",
  "bg-house-nft-6",
  "bg-house-nft-7",
];

const Home = () => {

  const [translate] = useTranslation();
  const [stepIdx, setStepIdx] = useState(0);

  const changeStepIdx = (newStep: number) => {
    if (newStep < 0) {
      newStep = 3;
    }
    if (newStep >= 4) {
      newStep = 0;
    }
    setStepIdx(newStep);
  };

  const initialSteps = [
    "Elige tu propiedad favorita.",
    "Dirígete a OpenSea y conecta tu wallet Metamask.",
    "Adquiere tu token de la propiedad.",
    "Empieza a recibir ingresos pasivos.",
  ];

  return (
    <Fragment>
      <div className="relative mt-20 w-full h-[650px] bg-white rounded-2xl shadow-lg">
        <div className="h-full w-full bg-house-bg-home bg-cover bg-center">
          <div className="w-full h-full bg-[#141414] opacity-25"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center pt-40 pb-20 px-52"> 
          <h1 className="text-6xl text-white font-bold uppercase text-center">{translate("home.lblTitle")}</h1>
          
          <p className="text-3xl text-center text-primary-text font-semibold">{translate("home.lblDescription")}</p>

          <Link to={'/marketplace'}>
            <button className="inv-btn rounded-full flex items-center justify-center px-10 py-2 bg-custom-purple text-custom-gray text-xl font-semibold shadow-lg hover:bg-primary-title hover:text-white">
                <span className="mr-1">{translate("home.lblButton")}</span>
                <svg
                  className="HoverArrow"
                  width="13"
                  height="13"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                >
                  <g fill-rule="evenodd">
                    <path className="HoverArrow__linePath" d="M0 5h7"></path>
                    <path
                      className="HoverArrow__tipPath"
                      d="M1 1l4 4-4 4"
                    ></path>
                  </g>
                </svg>
              </button>
            </Link>
        </div>
      </div>

      <div className="h-[100%] w-full bg-white flex flex-col">
        <div className="w-full px-20 py-24">
          <h1 className="w-full text-primary-title text-4xl font-extrabold text-center px-20">
            La herramienta que conecta a los dueños de las propiedades con
            inversionistas directamente usando las ventajas de Blockchain.
          </h1>
        </div>
        <PhotoScroll imageData={IMAGE_DATA} />
      </div>

      <div className="h-[88%] w-full flex">
        <div className="h-full w-[57%] bg-gray-700 p-20">
          <div className="w-full h-full flex justify-center items-center">
            <iframe
              className="w-full aspect-video"
              title="iac-invest-video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              src="https://www.youtube.com/embed/0P8b6pteVqk"
            ></iframe>
          </div>
        </div>

        <div className="h-full w-[63%] bg-light-blue py-14 pl-14 pr-32 flex flex-col justify-center items-center">
          <h2 className="text-gray-900 text-2xl font-extrabold">
            Empieza a invertir en el mercado inmobiliario de
            <span className="text-secondary-blue">
              {" "}
              manera rapida y sencilla{" "}
            </span>{" "}
            teniendo una alta gama de lineas de negocio de{" "}
            <span className="text-secondary-blue"> muy poco capital </span>y
            empieza a obtener beneficios de manera{" "}
            <span className="text-secondary-blue">inmediata.</span>
          </h2>

          <p className="text-base text-justify 2xl:text-xl text-gray-900 mt-16">
            La solución propone un marketplace que usa todos los beneficios
            desentralizados del blockchain para que las personas sin necesidad
            de prestamos bancarios o un gran capital disponible pueda invertir
            en el mercado de bienes raices de manera rapida y segura
          </p>
        </div>
      </div>

      <div className="h-[88%] w-full flex">
        <div className="h-full w-[63%] bg-light-blue pl-32 pr-20 py-14 flex flex-col justify-center items-start">
          <h2 className="text-gray-900 text-2xl font-extrabold">
            Con solo 4 pasos puedes empezar a generar ganancias pasivas!
          </h2>

          <div className="mt-10">
            {initialSteps.map((step, idx) => {
              let borderColor =
                idx === stepIdx ? "border-primary-blue" : "border-gray-900";
              let textStyle =
                idx === stepIdx
                  ? "text-secondary-blue scale-105"
                  : "text-gray-900";
              return (
                <div
                  className={"flex mt-6 hover:cursor-pointer " + textStyle}
                  onClick={() => setStepIdx(idx)}
                >
                  <div
                    className={
                      "border-[1px] text-lg rounded-[50%] w-8 h-8 flex justify-center items-center " +
                      borderColor
                    }
                  >
                    {idx + 1}
                  </div>
                  <p className="text-lg ml-3">{step}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-full w-[57%] bg-gray-700 p-20 pt-36">
          <Slider selectedIdx={stepIdx} changeSelectedIdx={changeStepIdx} />
        </div>
      </div>
    </Fragment>
  );
};

interface SliderProps {
  selectedIdx: number;
  changeSelectedIdx: (idx: number) => void;
}

const Slider = ({ selectedIdx, changeSelectedIdx }: SliderProps) => {
  const stepImages = [
    "bg-house-model",
    "bg-open-sea-logo",
    "bg-nft",
    "bg-valuation",
  ];

  return (
    <div className="h-full w-full flex flex-col justify-start items-center">
      <div
        className={
          "h-5/6 w-full bg-center bg-contain bg-no-repeat bg-local " +
          stepImages[selectedIdx]
        }
      ></div>
      <div className="h-1/6 w-full flex items-center justify-center text-custom-white">
        <i
          className="fa fa-arrow-left mr-4 hover:cursor-pointer"
          onClick={() => changeSelectedIdx(selectedIdx - 1)}
        ></i>
        <p className="mr-4">{selectedIdx + 1}/4</p>
        <i
          className="fa fa-arrow-right hover:cursor-pointer"
          onClick={() => changeSelectedIdx(selectedIdx + 1)}
        ></i>
      </div>
    </div>
  );
};

const Slider3D = () => {
  const [imagesPositions, setImagesPositions] = useState([
    "center-photo",
    "right-photo",
    "left-photo",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagesPositions((prevState) => [
        prevState[2],
        prevState[0],
        prevState[1],
      ]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative flex items-center">
      <div
        className={`bg-house-1 bg-center bg-contain bg-no-repeat bg-local absolute left-0 top-0 w-full h-3/5 m-auto trans-time ${imagesPositions[0]}`}
      ></div>

      <div
        className={`bg-house-2 bg-center bg-cover bg-no-repeat bg-local absolute left-0 top-0 w-full h-3/5 m-auto trans-time ${imagesPositions[1]}`}
      ></div>

      <div
        className={`bg-house-3 bg-center bg-cover bg-no-repeat bg-local absolute left-0 top-0 w-full h-3/5 m-auto trans-time ${imagesPositions[2]}`}
      ></div>
    </div>
  );
};

const ITEM_WIDTH = 200;
const ITEM_HEIGHT = 200;
const PADDING_X = 10;

const PhotoScroll = (props: { imageData: string[] }) => {
  // Instance variable to save current selected photo
  const selectedIndex = useRef(-1);

  // Reference to gallery container
  const el = useRef<HTMLDivElement>(null);

  // Apply select effect on item
  const doSelect = (targetIndex: number) => {
    const children = el.current!.children;

    if (selectedIndex.current !== -1) {
      const currentEl = children[selectedIndex.current] as HTMLDivElement;
      currentEl.style.transform = "scale(1)";
      currentEl.style.zIndex = "0";
    }

    const targetEl = children[targetIndex] as HTMLDivElement;
    if (!targetEl) return;
    targetEl.style.transform = "scale(1.75)";
    targetEl.style.zIndex = "999";
    selectedIndex.current = targetIndex;

    // Update container position
    const theWidth = ITEM_WIDTH + PADDING_X;
    el.current!.style.transform = `translateX(calc(50% - ${
      theWidth * targetIndex + theWidth * 0.5
    }px))`;
  };

  useEffect(() => {
    doSelect(3);
  });

  // Render the items
  const renderedList = props.imageData.map((it, index) => (
    <div
      className={`absolute sahdotransition-all duration-700 top-20 ease-out origin-center rounded-lg bg-no-repeat bg-contain bg-center bg-local my-2 cursor-pointer ${it}`}
      key={index}
      onClick={(e) => doSelect(index)}
      style={{
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        boxShadow: "2px 10px 40px -6px rgba(0,0,0,0.85)",
        left: (ITEM_WIDTH + PADDING_X) * index,
      }}
    />
  ));

  return (
    <div
      className="relative transition-all duration-700 w-screen h-full my-4 px-20"
      ref={el}
    >
      {renderedList}
    </div>
  );
};
export default Home;
