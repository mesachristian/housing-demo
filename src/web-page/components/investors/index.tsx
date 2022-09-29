import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

// STYLES
import "./styles.css";

// IMG
import valuation from "assets/img/valuation.png";
import openSeaLogo from "assets/img/open-sea-logo.png";
import nftLogo from "assets/img/nft.png";
import houseNft from "assets/img/house-nft-cute.png";

interface ImageSlider2Interface {
  moveImages(): void;
}

const Investors = () => {
  const [translate] = useTranslation();

  const TABLE_INFO = [
    [
      {
        label: translate("investors.section-2.table.row-1-col-1"),
        useApprovedLogo: false,
      },
      {
        label: translate("global.lblYes"),
        useApprovedLogo: true,
      },
      {
        label: translate("global.lblYes"),
        useApprovedLogo: true,
      },
    ],
    [
      {
        label: translate("investors.section-2.table.row-2-col-1"),
        useApprovedLogo: false,
      },
      {
        label: translate("global.lblYes"),
        useApprovedLogo: true,
      },
      {
        label: translate("global.lblYes"),
        useApprovedLogo: true,
      },
    ],
    [
      {
        label: translate("investors.section-2.table.row-3-col-1"),
        useApprovedLogo: false,
      },
      {
        label: translate("global.lblNone"),
        useApprovedLogo: true,
      },
      {
        label: translate("investors.section-2.table.row-3-col-3"),
        useApprovedLogo: false,
      },
    ],
    [
      {
        label: translate("investors.section-2.table.row-4-col-1"),
        useApprovedLogo: false,
      },
      {
        label: translate("global.lblNone"),
        useApprovedLogo: true,
      },
      {
        label: translate("investors.section-2.table.row-4-col-3"),
        useApprovedLogo: false,
      },
    ],
    [
      {
        label: translate("investors.section-2.table.row-5-col-1"),
        useApprovedLogo: false,
      },
      {
        label: translate("global.lblNone"),
        useApprovedLogo: true,
      },
      {
        label: translate("investors.section-2.table.row-5-col-3"),
        useApprovedLogo: false,
      },
    ],
    [
      {
        label: translate("investors.section-2.table.row-6-col-1"),
        useApprovedLogo: false,
      },
      {
        label: translate("global.lblYes"),
        useApprovedLogo: true,
      },
      {
        label: translate("investors.section-2.table.row-6-col-3"),
        useApprovedLogo: false,
      },
    ],
    [
      {
        label: translate("investors.section-2.table.row-7-col-1"),
        useApprovedLogo: false,
      },
      {
        label: translate("global.lblYes"),
        useApprovedLogo: true,
      },
      {
        label: translate("global.lblNo"),
        useApprovedLogo: false,
      },
    ],
  ];

  const ADVANTAGES = [
    translate("investors.section-3.lblAdvantage1"),
    translate("investors.section-3.lblAdvantage2"),
    translate("investors.section-3.lblAdvantage3"),
    translate("investors.section-3.lblAdvantage4"),
  ];

  const [adquireIdx, setAdquireIdx] = useState(0);

  const sliderRef = useRef<ImageSlider2Interface>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.moveImages();
      setAdquireIdx((prevIdx) => {
        return prevIdx + 1 > 3 ? 0 : prevIdx + 1; 
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <div className="relative top-0 left-0 w-full h-[120%] bg-[#f6f9fc]">
        <div className="other-first-section pl-32 pr-16 pt-44 z-10 flex">
          <div className="w-6/12 h-full flex flex-col justify-between items-center z-2">
            <h1 className="title-anim z-2 text-primary-title text-5xl font-extrabold mt-10">
              {translate("investors.section-1.lblTitle")}
            </h1>

            <p className="description-anim text-xl text-primary-text font-montserrat">
              {translate("investors.section-1.lblDescription")}
            </p>

            <div className="w-full flex justify-start">
              <button className="inv-btn rounded-full flex items-center justify-center px-3 h-8 bg-custom-purple text-custom-gray font-semibold shadow-lg hover:bg-primary-title hover:text-white">
                <span className="mr-1">{translate("global.lblStart")}</span>
                <svg
                  className="HoverArrow"
                  width="10"
                  height="10"
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
              <button className="inv-btn rounded-full flex items-center justify-center px-3 h-8 text-custom-purple font-semibold hover:text-primary-title">
                <span className="mr-1">{translate("global.lblGoToMarketplace")}</span>
                <svg
                  className="HoverArrow"
                  width="10"
                  height="10"
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
              
            </div>
          </div>
          <div className="w-6/12 h-full flex flex-col justify-between items-center z-10 px-16 pt-12 rounded-2xl">
            <div className="w-full h-full bg-center bg-cover bg-no-repeat bg-local bg-stonks rounded-2xl"></div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1664340058">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="w-full pt-12 px-28">
        <h1 className="w-full text-center text-5xl text-[#656A85] mb-24 font-black">
          {translate("investors.section-2.lblTitle")}
        </h1>

        <table className="table-fixed w-full border-t-[0px] border-custom-gray rounded-2xl shadow-[10px_10px_29px_0px_rgba(0,0,0,0.26)]">
          <tr className="rounded-tl-3xl rounded-tr-3xl">
            <th></th>
            <th className="py-9 text-lg capitalize">
              {translate("global.lblHouseWaySolutions")}
            </th>
            <th className="py-9 text-lg capitalize">
              {translate("global.lblTraditionalInvesting")}
            </th>
          </tr>

          {TABLE_INFO.map((row, rowIdx) => {
            let border = rowIdx === 6 ? "rounded-bl-3xl rounded-br-3xl" : "";
            return (
              <tr className={border}>
                {row.map((col, colIdx) => {
                  let bgColor =
                    colIdx === 0
                      ? "bg-[#656A85]"
                      : colIdx === 1
                      ? "bg-[#DCE2E1]"
                      : "bg-[#F3F7F6]";
                  let textStyle =
                    colIdx === 0
                      ? "text-white font-bold uppercase"
                      : "text-gray-900";
                  let style = `py-[40px] pl-[40px] pr-[15px] text-left text-[20px] ${bgColor} ${textStyle}`;
                  let icon = col.useApprovedLogo
                    ? "bg-check-logo-green"
                    : "bg-warning-logo";
                  return (
                    <td className={style}>
                      <div className="flex items-center">
                        {colIdx !== 0 && (
                          <div
                            className={`${icon} w-[18px] h-[18px] mr-4`}
                          ></div>
                        )}
                        <p>{col.label}</p>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
      </div>

      <div className="relative left-0 w-full h-[150%] flex bg-custom-dark-blue mt-[45px] z-0 pt-12">
        <div className="relative w-full flex items-center">
          <div className="w-1/2 h-full p-12 pl-40 z-10 flex flex-col justify-center items-start mt-10">
            <h1 className="text-5xl text-white font-bold">
              {translate("investors.section-3.lblTitle")}
            </h1>
            <div className="w-full flex flex-col items-start justify-center mt-16">
              {ADVANTAGES.map((advantage, idx) => {
                let textStyle =
                  idx === adquireIdx ? "text-custom-cyan" : "text-custom-gray";
                return (
                  <div className="mb-8">
                    <p className={`text-xl font-semibold ${textStyle}`}>
                      {advantage}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-[45%] h-5/6 px-14 py-36 z-10">
            <ImageSlider2 ref={sliderRef} />
          </div>
        </div>

        <div className="custom-shape-divider-top-1661805617">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-bottom-1661807083">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

const ImageSlider2 = forwardRef<ImageSlider2Interface, {}>((props, ref) => {
  const IMAGES = [valuation, openSeaLogo, nftLogo, houseNft];

  const [transClass, setTransClass] = useState("");
  const [imgIdx, setImgIdx] = useState(0);
  const [nextImgIdx, setNextImgIdx] = useState(1);

  useImperativeHandle(ref, () => ({
    moveImages() {
      setTransClass("move-to-right move-trans-time");
      setTimeout(() => {
        setTransClass("");
        let newImgIdx = imgIdx + 1 === IMAGES.length ? 0 : imgIdx + 1;
        let newNextImgIdx = newImgIdx + 1 === IMAGES.length ? 0 : newImgIdx + 1;

        setImgIdx(newImgIdx);
        setNextImgIdx(newNextImgIdx);
      }, 1700);
    },
  }));

  return (
    <div className="h-full w-full flex flex-col justify-start items-center rounded-2xl">
      <div className="w-full h-full flex justify-end overflow-x-hidden rounded-2xl">
        <img
          alt=""
          src={IMAGES[nextImgIdx]}
          className={`w-full ${transClass} rounded-2xl`}
        ></img>
        <img
          alt=""
          src={IMAGES[imgIdx]}
          className={`w-full ${transClass} rounded-2xl`}
        ></img>
      </div>
    </div>
  );
});

export default Investors;
