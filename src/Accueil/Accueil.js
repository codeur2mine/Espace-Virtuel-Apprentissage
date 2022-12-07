import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faBook, faChalkboardTeacher, faDoorClosed, faDoorOpen, faEarth, faEarthAfrica, faGear, faHandHoldingDollar, faMessage, faPlane, faPlaneArrival, faPlay, faSchool, faSearch, faStar, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";




function Logo() {
    const [show, setShow] = useState(false)
    const [see, setSee] = useState(false)

    return (
        <div>
            <Header />
            <main className="h-full overflow-y-auto ml-[12%] bg-[#f2f2fc] font-[andika] ">

                <div className="container px-6 mx-auto grid">

                    <a
                        className="flex items-center mt-[8%] justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
                        href="#"
                    >
                        <div className="flex items-center ">
                            <FontAwesomeIcon className="text-sm mr-[15px]" icon={faStar}></FontAwesomeIcon>
                            <span className="font-bold">L'éducation est la première pierre du développement d'un pays, nous nous engageons à la préserver.</span>
                        </div>
                    </a>
                    {/*<!--cards-->*/}
                    <div className="mb-8 flex h-[15rem] md:grid-cols-2 xl:grid-cols-4 justify-start">
                        <div
                            className="flex  p-4 items-center border rounded-lg shadow-xs dark:bg-gray-800 top-[37%]">
                            <div>
                                <h2 className="hello text-[27px] m-[15px_0] font-[600]">Bonjour, mon nom est <span className="text-[30px] text-[#22b35e] font-black">Zana Sidi-Mohamed Coulibaly</span></h2>
                                <p className="text-gray-500">Je suis un étudiant en Sciences Politiques et Developpeur Web, Infographe, Designer et Homme d'affaires Ivoirien, et beaucoup plus. <br /><br />Only God can judge Me...</p>
                                <Link to='/about'>
                                    <a href="#about" className="btn hire-me bg-[#22b35e] mt-2 border-none rounded-full text-white text-[13px] inline-block whitespace-nowrap font-medium p-[12px_17px] transition-all hover:scale-105">Plus sur moi</a>
                                </Link>

                            </div>
                            <div className="home-img pl-[20px] pr-[15px] flex-[0_0_30%] relative">
                                <img src="IMG_5730.jpg" alt="IMAGE DE MOMO" className="m-auto rounded-full h-[200px]" />
                                <button type="button" className="absolute right-[25%] bottom-0 inline-block transform translate-x-1 -translate-y-1 bg-green-500 w-10 border rounded-[10px] m-[5px] p-[2px] hover:bg-green-900 border-white">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" class="svg-inline--fa fa-pen-to-square text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"></path></svg></button>
                            </div>

                        </div>

                    </div>
                    <header className="fixed z-10 py-4 bg-[#f2f2fc] border-b w-[100%]  mr-[70%]">
                        <div

                            className="container flex items-center justify-between h-full px-36 mx-auto text-purple-600 dark:text-purple-300 float-left">
                            {/* <!-- Mobile hamburger --> */}

                            <button
                                className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple">
                                <FontAwesomeIcon className="text-sm mr-[15px]" icon={faBars}></FontAwesomeIcon>
                            </button>
                            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                                Tableau de bord
                            </h2>
                            {/* <!-- Search input --> */}
                            <div className="flex justify-center flex-1 lg:mr-32">
                                <div
                                    className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                                    <div className="absolute inset-y-0 flex items-center pl-2">
                                        <FontAwesomeIcon className="text-sm mr-[15px] text-[#22b35e]" icon={faSearch}></FontAwesomeIcon>
                                    </div>
                                    <input
                                        className="w-full pl-8  pr-2 text-sm placeholder-gray-600 bg-white border-0 h-9 rounded-md focus:outline-none text-black"
                                        type="text"
                                        placeholder="Recherchez ..." />
                                </div>
                            </div>
                            <ul className="flex items-center flex-shrink-0 space-x-6">
                                {/* <!-- Theme toggler --> */}
                                <li class="flex">
                                    <button
                                        className="rounded-md focus:outline-none focus:shadow-outline-purple"                                    >
                                    </button>
                                </li>
                                {/* <!-- Notifications menu --> */}
                                <li className="relative">
                                    <button onClick={() => setShow(!show)}
                                        className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple text-[#22b35e]">
                                        <FontAwesomeIcon className="text-sm mr-[15px]" icon={faBell} ></FontAwesomeIcon>

                                        {/* <!-- Notification badge --> */}
                                        <span aria-hidden="true" className="absolute top-1 -right-[-12px] inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"></span>
                                    </button>
                                    {show ? <ul
                                        className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                                    >
                                        <li className="flex">
                                            <a
                                                className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href="#"
                                            >
                                                <span>Messages</span>
                                            </a>
                                        </li>
                                        <li class="flex">
                                            <a
                                                className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href="#"
                                            >

                                                <span>Alerts</span>
                                            </a>
                                        </li>
                                    </ul> : null}
                                </li>
                                {/* <!-- Profile menu --> */}
                                <li className="relative">
                                    <button onClick={() => setSee(!see)}
                                        className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                                    >
                                        <img
                                            class="object-cover w-8 h-8 rounded-full"
                                            src="IMG_5730.jpg"
                                            alt=""
                                        />
                                    </button>
                                    {see ? <ul
                                        className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                                    >
                                        <li className="flex">
                                            <a
                                                className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href="#"
                                            >
                                                <FontAwesomeIcon className="text-sm mr-[15px]" icon={faUser}></FontAwesomeIcon>
                                                <span>Profile</span>
                                            </a>
                                        </li>
                                        <li class="flex">
                                            <a
                                                class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href="#"
                                            >
                                                <FontAwesomeIcon className="text-sm mr-[15px]" icon={faGear}></FontAwesomeIcon>

                                                <span>Settings</span>
                                            </a>
                                        </li>
                                        <li class="flex">
                                            <a
                                                class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                                href="#"
                                            >
                                                <FontAwesomeIcon className="text-sm mr-[15px]" icon={faDoorOpen}></FontAwesomeIcon>
                                                <span>Log out</span>
                                            </a>
                                        </li>
                                    </ul> : null}
                           
                                </li>
                            </ul>
                        </div>
                    </header>

                    {/* <!-- CTA --> */}

                    {/* <!-- Cards --> */}
                    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                        {/* <!-- Card --> */}
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border">
                            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                <FontAwesomeIcon className="" icon={faUserGraduate}></FontAwesomeIcon>
                            </div>
                            <div>
                                <p
                                    className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                >
                                    Nbres D'étudiants Inscrits
                                </p>
                                <p
                                    className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                >
                                    0
                                </p>
                            </div>
                        </div>
                        {/* <!-- Card --> */}

                        <div
                            className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border"
                        >
                            <div
                                className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
                            >
                                <FontAwesomeIcon className="" icon={faChalkboardTeacher}></FontAwesomeIcon>

                            </div>
                            <div>
                                <p
                                    className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                >
                                    Nbres D'enseignants Inscrits
                                </p>
                                <p
                                    className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                >
                                    0
                                </p>
                            </div>
                        </div>
                        {/* <!-- Card --> */}
                        <div
                            className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border"
                        >
                            <div
                                className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
                            >
                                <FontAwesomeIcon className="" icon={faEarth}></FontAwesomeIcon>

                            </div>
                            <div>
                                <h1 className="mb-2 text-2xl font-bold text-[#00004d]">
                                    15
                                </h1>
                                <p className="text-gray-400 font-thin text-sm">Fil d'actualité</p>
                            </div>
                        </div>

                        {/* <!-- Card --> */}
                        <div
                            className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border"
                        >
                            <div
                                className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
                            >
                                <FontAwesomeIcon className="" icon={faPlane}></FontAwesomeIcon>

                            </div>
                            <div>
                                <h1 className="mb-2 text-2xl font-bold text-[#00004d]">
                                    Reconnaissance
                                </h1>
                                <p className="text-gray-400 font-thin text-sm">Mot du jour</p>
                            </div>
                        </div>

                        {/* <!-- Charts --> */}
                    </div>
                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        <div
                            className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                        >
                            <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                                Calendrier
                            </h4>
                            <canvas id="pie"></canvas>
                            <div
                                className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
                            >
                                {/* <!-- Chart legend --> */}
                                <div className="flex items-center">
                                    <span
                                        className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"
                                    ></span>
                                    <span>Shirts</span>
                                </div>
                                <div className="flex items-center">
                                    <span
                                        className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
                                    ></span>
                                    <span>Shoes</span>
                                </div>
                                <div className="flex items-center">
                                    <span
                                        className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
                                    ></span>
                                    <span>Bags</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                        >
                            <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                                Examens
                            </h4>
                            <canvas id="line"></canvas>
                            <div
                                className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
                            >
                                {/* <!-- Chart legend --> */}
                                <div className="flex items-center">
                                    <span
                                        className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
                                    ></span>
                                    <span>Organic</span>
                                </div>
                                <div className="flex items-center">
                                    <span
                                        className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
                                    ></span>
                                    <span>Paid</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- New Table --> */}
                    <div className="w-full overflow-hidden rounded-lg shadow-xs mb-[2%]">
                        <div className="w-full overflow-x-auto">
                            <table className="w-[50%] whitespace-no-wrap">
                                <thead>
                                    <tr
                                        className="text-xs font-bold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                                    >

                                        <th className="px-4 py-3">Etudiants</th>
                                        <th className="px-4 py-3">Date d'anniversaire</th>
                                        <th className="px-4 py-3">Parents</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Rang</th>

                                    </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 "
                                >

                                    <tr className="text-gray-700 dark:text-gray-400 ">

                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                {/* <!-- Avatar with inset shadow --> */}
                                                <div
                                                    className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                >
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src="IMG_5730.jpg"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    ></div>
                                                </div>
                                                <div>
                                                    <p className="font-semibold">Zana Sidi-Mohamed</p>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                                        Actor
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            15/07/2000
                                        </td>

                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            555 888 555
                                        </td>
                                        <td className="px-4 py-3 text-xs">

                                            <span
                                                className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                                            >
                                                Approved
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            <span className=" font-bold">1</span>
                                        </td>

                                    </tr>

                                    <tr className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                {/* <!-- Avatar with inset shadow --> */}
                                                <div
                                                    className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                >
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    ></div>
                                                </div>
                                                <div>
                                                    <p className="font-semibold">Jolina Angelie</p>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                                        Unemployed
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            --- --- ---
                                        </td>

                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            --- --- ---
                                        </td>
                                        <td className="px-4 py-3 text-xs">
                                            <span
                                                className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"
                                            >
                                                Pending
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            <span className=" font-bold">2</span>
                                        </td>
                                    </tr>


                                    <tr className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                {/* <!-- Avatar with inset shadow --> */}
                                                <div
                                                    className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                                >
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    ></div>
                                                </div>
                                                <div>
                                                    <p className="font-semibold">Mehdi Gouiad</p>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                                        Influencer
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            --- --- ---
                                        </td>

                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            --- --- ---
                                        </td>
                                        <td className="px-4 py-3 text-xs">
                                            <span
                                                className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
                                            >
                                                Expiré
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            <span className=" font-bold">3</span>
                                        </td>
                                    </tr>

                                    <tr class="text-gray-700 dark:text-gray-400">
                                        <td class="px-4 py-3">
                                            <div class="flex items-center text-sm">
                                                {/* <!-- Avatar with inset shadow --> */}
                                                <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                    <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                </div>
                                                <div>
                                                    <p class="font-semibold">Sarah Yasmine</p>
                                                    <p class="text-xs text-gray-600 dark:text-gray-400">
                                                        Designer
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-4 py-3 text-sm text-gray-500">
                                            06/10/2000
                                        </td>
                                        <td class="px-4 py-3 text-sm text-gray-500">
                                            555-555-888
                                        </td>
                                        <td class="px-4 py-3 text-xs">
                                            <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                                                Denied
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            <span className=" font-bold">4</span>
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Logo