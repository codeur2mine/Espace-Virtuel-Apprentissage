import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faDoorOpen, faGear, faMessage, faSearch, faUser, faPaperPlane, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Header/Header';

function Matieres() {
    const [show, setShow] = useState(false)
    const [see, setSee] = useState(false)
    return (
        <div>
            <header className="fixed z-10 py-4 bg-[#f2f2fc] border-b w-[100%]  mr-[70%] font-[andika]">
                <div

                    className="container flex items-center justify-between h-full px-36 mx-auto text-purple-600 dark:text-purple-300 ">
                    {/* <!-- Mobile hamburger --> */}

                    <button
                        className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple">
                        <FontAwesomeIcon className="text-sm mr-[15px]" icon={faBars}></FontAwesomeIcon>
                    </button>
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Matières
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
                        <li class="relative">
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
                                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
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
            <Header />
            <main className="min-h-[100vh] block text-[#302e4d] bg-[#f2f2fc] opacity-1 p-[0_30px] font-[andika]">
                <div className="container pb-[40px] pt-[60px] max-w-[1500px] w-[100%] m-auto">
                     <div className="flex flex-wrap ml-[10px] mr-[10px] relative pl-[8%] justify-between mt-[10%]">
                 
                       <div className="grid grid-cols-4 gap-4 w-auto">
                            <div className="bg-[#fdf9ff] border border-[#e8dfec] rounded-[10px] p-[30px_15px] cursor-pointer text-center transition-all hover:scale 105 hover:shadow-[0_0_10px_rgba(48,46,77,0.3)] hover:border hover:border-[#22b35e] hover:text-[25px] ">
                                <img className="w-[100%] h-[80%] object-cover" src="../all-esp.jpg" alt="Image de Bernard Dadié" />
                                <h4 className="text-[18px] mb-[15px] text-[#302e4d] font-bold capitalize">ESPAGNOL - ALLEMAND</h4>
                                <p className="text-[16px] text-[#504e70] leading-10">Nbres de leçons</p>
                            </div>
                            <div className=" bg-[#fdf9ff] border border-[#e8dfec] rounded-[10px] p-[30px_15px] cursor-pointer text-center transition-all hover:scale 105 hover:shadow-[0_0_10px_rgba(48,46,77,0.3)] hover:border hover:border-[#22b35e] hover:text-[25px]">
                                <img className="w-[100%] h-[80%] object-cover" src="../anglais.png" alt="Image de Bernard Dadié" />
                                <h4 className="text-[18px] mb-[15px] text-[#302e4d] font-bold capitalize">ANGLAIS</h4>
                                <p className="text-[16px] text-[#504e70] leading-10">Nbres de leçons</p>
                            </div>
                            <div className=" bg-[#fdf9ff] border border-[#e8dfec] rounded-[10px] p-[30px_15px] cursor-pointer text-center transition-all hover:scale 105 hover:shadow-[0_0_10px_rgba(48,46,77,0.3)] hover:border hover:border-[#22b35e] hover:text-[25px]">
                                <img className="w-[100%] h-[80%] object-cover" src="../edhc.png" alt="Image de Bernard Dadié" />
                                <h4 className="text-[18px] mb-[15px] text-[#302e4d] font-bold capitalize">EDHC</h4>
                                <p className="text-[16px] text-[#504e70] leading-10">Nbres de leçons</p>
                            </div>
                            <div className=" bg-[#fdf9ff] border border-[#e8dfec] rounded-[10px] p-[30px_15px] cursor-pointer text-center transition-all hover:scale 105 hover:shadow-[0_0_10px_rgba(48,46,77,0.3)] hover:border hover:border-[#22b35e] hover:text-[25px]">
                                <img className="w-[100%] h-[80%] object-cover" src="../svt.jpg" alt="Image de Bernard Dadié" />
                                <h4 className="text-[18px] mb-[15px] text-[#302e4d] font-bold capitalize">SVT</h4>
                                <p className="text-[16px] text-[#504e70] leading-10">Nbres de leçons</p>
                            </div>
                            <div className=" bg-[#fdf9ff] border border-[#e8dfec] rounded-[10px] p-[30px_15px] cursor-pointer text-center transition-all hover:scale 105 hover:shadow-[0_0_10px_rgba(48,46,77,0.3)] hover:border hover:border-[#22b35e] hover:text-[25px]">
                                <img className="w-[100%] h-[80%] object-cover" src="../physique-chimie.jpg" alt="Image de Bernard Dadié" />
                                <h4 className="text-[18px] mb-[15px] text-[#302e4d] font-bold capitalize">PHYSIQUE - CHIMIE</h4>
                                <p className="text-[16px] text-[#504e70] leading-10">Nbres de leçons</p>
                            </div>
                            <div className=" bg-[#fdf9ff] border border-[#e8dfec] rounded-[10px] p-[30px_15px] cursor-pointer text-center transition-all hover:scale 105 hover:shadow-[0_0_10px_rgba(48,46,77,0.3)] hover:border hover:border-[#22b35e] hover:text-[25px]">
                                <img className="w-[100%] h-[80%] object-cover" src="../histoire-geo.jpg" alt="Image de Bernard Dadié" />
                                <h4 className="text-[18px] mb-[15px] text-[#302e4d] font-bold capitalize">HISOIRE - GEOGRAPHIE</h4>
                                <p className="text-[16px] text-[#504e70] leading-10">Nbres de leçons</p>
                            </div>
                            <div className=" bg-[#fdf9ff] border border-[#e8dfec] rounded-[10px] p-[30px_15px] cursor-pointer text-center transition-all hover:scale 105 hover:shadow-[0_0_10px_rgba(48,46,77,0.3)] hover:border hover:border-[#22b35e] hover:text-[25px]">
                                <img className="w-[100%] h-[80%] object-cover" src="../maths.jpg" alt="Image de Bernard Dadié" />
                                <h4 className="text-[18px] mb-[15px] text-[#302e4d] font-bold capitalize">MATHEMATIQUES</h4>
                                <p className="text-[16px] text-[#504e70] leading-10">Nbres de leçons</p>
                            </div>
                            <div className=" bg-[#fdf9ff] border border-[#e8dfec] rounded-[10px] p-[30px_15px] cursor-pointer text-center transition-all hover:scale 105 hover:shadow-[0_0_10px_rgba(48,46,77,0.3)] hover:border hover:border-[#22b35e] hover:text-[25px]">
                                <img className="w-[100%] h-[80%] object-cover" src="../français.jpg" alt="Image de Bernard Dadié" />
                                <h4 className="text-[18px] mb-[15px] text-[#302e4d] font-bold capitalize">FRANCAIS</h4>
                                <p className="text-[16px] text-[#504e70] leading-10">Nbres de leçons</p>
                            </div>

                        </div>
                    </div> 
                    {/* <div className="box-container flex items-center justify-center flex-wrap">

                        <div className="box w-[30rem] border relative m-[1.5rem]">
                            <img src="français.jpg" alt="" className="h-[20rem] w-[100%] object-cover " />
                            <h3 className="price absolute top-[16rem] right-[1rem] h-[8rem] w-[8rem] leading-[8rem] text-center border rounded-full bg-[#22b35e] text-[#fff] text-[3rem]">$50</h3>
                            <div className="content p-[1rem]">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half"></i>
                                </div>
                                <a href="#" className="title hover:underline text-[#444] text-[1.5rem] capitalize">learn front end development</a>
                                <p className="p-[1rem_0] text-[#666] text-[1.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
                                <div className="info flex justify-between items-center pt-[.5rem] border-t">
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-clock"></i> 2 hours </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-calendar-alt"></i> 6 months </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="fas fa-book"></i> 12 modules </h3>
                                </div>
                            </div>
                        </div>

                        <div className="box w-[30rem] border relative m-[1.5rem]">
                            <img src="edhc.png" alt="" className="h-[20rem] w-[100%] object-cover" />
                            <h3 className="price absolute top-[16rem] right-[1rem] h-[8rem] w-[8rem] leading-[8rem] text-center border rounded-full bg-[#22b35e] text-[#fff] text-[3rem]">$50</h3>
                            <div className="content p-[1rem]">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half"></i>
                                </div>
                                <a href="#" className="title hover:underline text-[#444] text-[1.5rem] capitalize">learn front end development</a>
                                <p className="p-[1rem_0] text-[#666] text-[1.5rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
                                <div className="info flex justify-between items-center pt-[.5rem] border-t">
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-clock"></i> 2 hours </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-calendar-alt"></i> 6 months </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="fas fa-book"></i> 12 modules </h3>
                                </div>
                            </div>
                        </div>

                        <div className="box w-[30rem] border relative m-[1.5rem]">
                            <img src="histoire-geo.jpg" alt="" className="h-[20rem] w-[100%] object-cover " />
                            <h3 className="price absolute top-[16rem] right-[1rem] h-[8rem] w-[8rem] leading-[8rem] text-center border rounded-full bg-[#22b35e] text-[#fff] text-[3rem]">$50</h3>
                            <div className="content p-[1rem]">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half"></i>
                                </div>
                                <a href="#" className="title hover:underline text-[#444] text-[1.5rem] capitalize">learn front end development</a>
                                <p className="p-[1rem_0] text-[#666] text-[1.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
                                <div className="info flex justify-between items-center pt-[.5rem] border-t">
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-clock"></i> 2 hours </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-calendar-alt"></i> 6 months </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="fas fa-book"></i> 12 modules </h3>
                                </div>
                            </div>
                        </div>

                        <div className="box w-[30rem] border relative m-[1.5rem]">
                            <img src="svt.jpg" alt="" className="h-[20rem] w-[100%] object-cover" />
                            <h3 className="price absolute top-[16rem] right-[1rem] h-[8rem] w-[8rem] leading-[8rem] text-center border rounded-full bg-[#22b35e] text-[#fff] text-[3rem]">$50</h3>
                            <div className="content p-[1rem]">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half"></i>
                                </div>
                                <a href="#" className="title hover:underline text-[#444] text-[1.5rem] capitalize">learn front end development</a>
                                <p className="p-[1rem_0] text-[#666] text-[1.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
                                <div className="info flex justify-between items-center pt-[.5rem] border-t">
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-clock"></i> 2 hours </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-calendar-alt"></i> 6 months </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="fas fa-book"></i> 12 modules </h3>
                                </div>
                            </div>
                        </div>

                        <div className="box w-[30rem] border relative m-[1.5rem]">
                            <img src="maths.jpg" alt="" className="h-[20rem] w-[100%] object-cover " />
                            <h3 className="price absolute top-[16rem] right-[1rem] h-[8rem] w-[8rem] leading-[8rem] text-center border rounded-full bg-[#22b35e] text-[#fff] text-[3rem]">$50</h3>
                            <div className="content p-[1rem]">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half"></i>
                                </div>
                                <a href="#" className="title hover:underline text-[#444] text-[1.5rem] capitalize">learn front end development</a>
                                <p className="p-[1rem_0] text-[#666] text-[1.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
                                <div className="info flex justify-between items-center pt-[.5rem] border-t">
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-clock"></i> 2 hours </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-calendar-alt"></i> 6 months </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="fas fa-book"></i> 12 modules </h3>
                                </div>
                            </div>
                        </div>

                        <div className="box w-[30rem] border relative m-[1.5rem]">
                            <img src="anglais.png" alt="" className="h-[20rem] w-[100%] object-cover " />
                            <h3 className="price absolute top-[16rem] right-[1rem] h-[8rem] w-[8rem] leading-[8rem] text-center border rounded-full bg-[#22b35e] text-[#fff] text-[3rem]">$50</h3>
                            <div className="content p-[1rem]">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half"></i>
                                </div>
                                <a href="#" className="title hover:underline text-[#444] text-[1.5rem] capitalize">learn front end development</a>
                                <p className="p-[1rem_0] text-[#666] text-[1.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
                                <div className="info flex justify-between items-center pt-[.5rem] border-t">
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-clock"></i> 2 hours </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="far fa-calendar-alt"></i> 6 months </h3>
                                    <h3 className="text-[1.5rem] p-[1rem] text-[#666]"> <i className="fas fa-book"></i> 12 modules </h3>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>
    
            </main>

        </div>
    )
}

export default Matieres