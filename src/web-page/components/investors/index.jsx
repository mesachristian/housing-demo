import React from 'react'
import { Fragment } from 'react';
import { useTranslation } from "react-i18next";
// #DCE2E1 #F3F7F6

const Investors = () => {
    const [translate] = useTranslation();

    const TABLE_INFO = [
        [
            {
                label : translate("investors.section-2.table.row-1-col-1"),
            },
            {
                label : translate("global.lblYes"), 
                useApprovedLogo : true,
            },
            {
                label : translate("global.lblYes"), 
                useApprovedLogo : true,
            }
        ],
        [
            {
                label : translate("investors.section-2.table.row-2-col-1"),
            },
            {
                label : translate("global.lblYes"), 
                useApprovedLogo : true,
            },
            {
                label : translate("global.lblYes"), 
                useApprovedLogo : true,
            }
        ],
        [
            {
                label : translate("investors.section-2.table.row-3-col-1"),
            },
            {
                label : translate("global.lblNone"), 
                useApprovedLogo : true,
            },
            {
                label : translate("investors.section-2.table.row-3-col-3"), 
                useApprovedLogo : false,
            }
        ],
        [
            {
                label : translate("investors.section-2.table.row-4-col-1"),
            },
            {
                label : translate("global.lblNone"), 
                useApprovedLogo : true,
            },
            {
                label : translate("investors.section-2.table.row-4-col-3"), 
                useApprovedLogo : false,
            }
        ],
        [
            {
                label : translate("investors.section-2.table.row-5-col-1"),
            },
            {
                label : translate("global.lblNone"), 
                useApprovedLogo : true,
            },
            {
                label : translate("investors.section-2.table.row-5-col-3"), 
                useApprovedLogo : false,
            }
        ],
        [
            {
                label : translate("investors.section-2.table.row-6-col-1"),
            },
            {
                label : translate("global.lblYes"), 
                useApprovedLogo : true,
            },
            {
                label : translate("investors.section-2.table.row-6-col-3"), 
                useApprovedLogo : false,
            }
        ],
        [
            {
                label : translate("investors.section-2.table.row-7-col-1"),
            },
            {
                label : translate("global.lblYes"), 
                useApprovedLogo : true,
            },
            {
                label : translate("global.lblNo"), 
                useApprovedLogo : false,
            }
        ],
    ]
    return (
        <Fragment>
            
            <div className='mt-24 w-full bg-red-300 h-full'>

            </div>

            <div className='w-full pt-12 px-28'>
                <h1 className='w-full text-center text-5xl text-[#656A85] mb-24 font-black'>{translate("investors.section-2.lblTitle")}</h1>
                
                <table className='table-fixed w-full border-t-[1px] border-custom-gray rounded-2xl shadow-[10px_10px_29px_0px_rgba(0,0,0,0.26)]'>
                    <tr className='rounded-tl-3xl rounded-tr-3xl'>
                        <th></th>
                        <th className='py-9 text-lg capitalize'>{translate("global.lblHouseWaySolutions")}</th>
                        <th className='py-9 text-lg capitalize'>{translate("global.lblTraditionalInvesting")}</th>
                    </tr>

                    {TABLE_INFO.map( (row, rowIdx) => {
                        let border = rowIdx === 6 ? 'rounded-bl-3xl rounded-br-3xl' : '';
                        return(
                            <tr className={border}>
                                {row.map( (col, colIdx) => {
                                    let bgColor = colIdx === 0 ? 'bg-[#656A85]' : colIdx === 1 ? 'bg-[#DCE2E1]' : 'bg-[#F3F7F6]'; 
                                    let textStyle = colIdx === 0 ? 'text-white font-bold uppercase' : 'text-gray-900';
                                    let style = `py-[40px] pl-[40px] pr-[15px] text-left text-[20px] ${bgColor} ${textStyle}`
                                    let icon = col.useApprovedLogo ? 'bg-check-logo-green' : 'bg-warning-logo';
                                    return(
                                        <td className={style}>
                                            <div className='flex items-center'>
                                                {
                                                    colIdx !== 0 &&
                                                    <div className={`${icon} w-[18px] h-[18px] mr-4`}></div>
                                                }
                                                <p>{col.label}</p>
                                            </div>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </table>
            </div>
            <div className='w-full pt-12 px-20'>

                <div className='w-full border-[1px] border-custom-gray rounded-3xl shadow-2xl grid grid-cols-3'>
                   
                </div>
                
                <div className='bg-[#3D405B] capitalize text-white text-base px-14 py-5'>

                </div>
            </div>
        </Fragment>
    )
}

export default Investors;