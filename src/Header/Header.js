import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faUser, faUserAlt, faList, faDoorOpen, faComments, faDoorClosed, faFileWord, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react'



function Header() {

    return (
        <div className="m-0 p-0 outline-none box-border block font-serif ">
            <div className="aside w-[14%] bg-[#fdf9ff] fixed flex justify-center border-r border-[#e8dfec] p-[1.5%] left-0 top-0 items-center z-[10] h-[100%]">

                <div className="logo top-[30px] absolute w-[150%]">
                    <img src="loggo.png" className="relative" alt="logo" />
                </div>
                <div className="nav-toggler">
                    <span></span>
                </div>
                <ul className="nav mt-[20%]">

                    <Link to='/accueil'>
                        <li className="mb-[20px] block hover:text-[#22b35e] text-gray-500 hover:md:ml-[1rem] ease-in-out duration-300"><a href="#home" className="active text-[16px] font-semibold block border-b border-[#e8dfec] p-[5px_15px] tracking-wider"><FontAwesomeIcon className="text-sm  mr-[15px]" icon={faHouseChimney}></FontAwesomeIcon>Accueil </a></li>
                    </Link>
                    {/* <Link to='/about'>
                        <li className="mb-[20px] block hover:text-[#22b35e] text-gray-500 hover:md:ml-[1rem] ease-in-out duration-300"><a href="#about" className="text-[16px] font-semibold block border-b border-[#e8dfec] p-[5px_15px] tracking-wider"><FontAwesomeIcon className="text-sm mr-[15px]" icon={faUser}></FontAwesomeIcon> A propos</a></li>
                    </Link> */}
                    <li className="mb-[20px] block hover:text-[#22b35e] text-gray-500 hover:md:ml-[1rem] ease-in-out duration-300"><a href="#" className="text-[16px] font-semibold block border-b border-[#e8dfec] p-[5px_15px] tracking-wider"><FontAwesomeIcon className="text-sm mr-[15px]" icon={faFileWord}></FontAwesomeIcon>Mot du Jour</a></li>
                    <Link to='/services'>
                        <li className="mb-[20px] block hover:text-[#22b35e] text-gray-500 hover:md:ml-[1rem] ease-in-out duration-300"><a href="#services" className="text-[16px] font-semibold block border-b border-[#e8dfec] p-[5px_15px] tracking-wider"><FontAwesomeIcon className="text-sm mr-[15px]" icon={faList}></FontAwesomeIcon> Services</a></li>
                    </Link>
                    <li className="hover:text-[#22b35e] text-gray-500 hover:md:ml-[1rem] ease-in-out duration-300"><a href="#" className=" absolute bottom-[4rem] text-[16px] font-semibold block border-b border-[#e8dfec] p-[5px_15px] tracking-wider"><FontAwesomeIcon className="text-sm mr-[15px]" icon={faDoorClosed}></FontAwesomeIcon> Déconnexion</a></li>
                
                    <Link to='/paiements'>
                        <li className="mb-[20px] block hover:text-[#22b35e] text-gray-500 hover:md:ml-[1rem] ease-in-out duration-300"><a href="#home" className="active text-[16px] font-semibold block border-b border-[#e8dfec] p-[5px_15px] tracking-wider"><FontAwesomeIcon className="text-sm  mr-[15px]" icon={faMoneyBill}></FontAwesomeIcon>Paiements </a></li>
                    </Link>
                </ul>

            </div>

        </div>
    )
}

export default Header   