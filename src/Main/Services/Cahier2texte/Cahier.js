import React from 'react'
import { useState, Fragment, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faDoorOpen, faGear, faMessage, faSearch, faUser, faPaperPlane, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from '../../../Header/Header';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';
import { Link } from "react-router-dom";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


function Cahier() {

    // useEffect(() => {
    //     viewPost();
    // }, []);

    // const [ispost, setpost] = useState([]);
    // const viewPost = async () => {
    //     try {
    //         await axios.get(`http://localhost:5000/allPost`,)
    //             .then(res => {
    //                 if (res.data.success === true) {
    //                     setpost(res.data.listall);
    //                 }
    //             })
    //     } catch (error) { throw error; }
    // }

    //Header Open
    const [show, setShow] = useState(false);
    const [see, setSee] = useState(false);

    //Accordion Open
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="font-[andika]">
            <header className="fixed z-10 py-4 bg-[#f2f2fc] border-b w-[100%] mr-[70%]">
                <div className="container flex items-center justify-between h-full px-36 mx-auto text-purple-600 dark:text-purple-300 ">
                    {/* <!-- Mobile hamburger --> */}

                    <button
                        className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple">
                        <FontAwesomeIcon className="text-sm mr-[15px]" icon={faBars}></FontAwesomeIcon>
                    </button>
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Cahier de texte
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
                                    src="../IMG_5730.jpg"
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
                <div className="container pb-[40px] pt-[60px] max-w-[1500px] w-[100%] m-auto" >
                    <div className="row flex flex-wrap ml-[10px] mr-[10px] relative pl-[8%] justify-between mt-[10%]">
                        <h1 className="text-[34px] font-bold min-h-[20px] p-[19px] mb-[20px] border w-[100%] rounded-[10px]  bg-gradient-to-r from-gray-200 to-gray-200"> Créez votre <span className="text-[#1967d2]"> Cahier de Texte </span> EAT</h1>

                        <div className="row">
                            <Link to="/Add" className="bg-[#1967d2] border border-[#1967d2] outline-none inline-block mb-0 font-semi-bold align-center cursor-pointer p-[9px_30px] text-[22px] text-white rounded-[8px]"> Créer une feuille </Link>
                            {/* {ispost.map((item, index) => (
                                <div className="post__list" key={index}>
                                    <h2>{item.title}</h2>

                                    <div className="post__description" dangerouslySetInnerHTML={{ __html: item.description }} />
                                    <Link to={`/Edit/${item.id}`} className="btn btn__theme"> Edit </Link>

                                </div>
                            ))} */}



                        </div>

                        {/* <div className="card mt-[10px] w-[100%] border border-gray-400 shadow-lg shadow-gray-500/50 ">
                            <header className="bg-gray-200 rounded-sm text-xl text-center cursor-pointer flex justify-between px-10 py-2 border border-b-gray-400">Jane Doe

                                <div>
                                    <button className="bg-green-500 w-10 border rounded-[10px] mx-2 p-[2px] hover:bg-green-900"><FontAwesomeIcon className="text-white" icon={faPenToSquare}></FontAwesomeIcon></button>
                                    <button className="bg-red-600 w-10 border rounded-[10px] mx-2 p-[2px] hover:bg-red-900"><FontAwesomeIcon className="text-white" icon={faTrash}></FontAwesomeIcon></button>

                                </div>
                            </header>

                            <section className="body bg-[#fff]">

                                <p className=" text-md">Je suis inconnu</p>



                                <footer className="text-[#979797] text-sm m-2">
                                    Created On - date
                                </footer>

                            </section>
                        </div> */}
                        <div className="mt-[10px] w-[100%] border border-gray-200 shadow-lg shadow-gray-500/50">
                            <Accordion open={open === 1}>
                                <AccordionHeader onClick={() => handleOpen(1)} className="bg-white">
                                    <h1>What is Material Tailwind?</h1>
                                    <div className="ml-[50%]">
                                        <button className="bg-green-500 w-10 border rounded-[10px] p-[2px] hover:bg-green-900"><FontAwesomeIcon className="text-white" icon={faPenToSquare}></FontAwesomeIcon></button>
                                        <button className="bg-red-600 w-10 border rounded-[10px]  p-[2px] hover:bg-red-900"><FontAwesomeIcon className="text-white" icon={faTrash}></FontAwesomeIcon></button>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody>
                                    We're not always in the position that we want to be at. We're
                                    constantly growing. We're constantly making mistakes. We're constantly
                                    trying to express ourselves and actualize our dreams.
                                    <footer className="text-[#979797] text-sm m-2">Created date</footer>
                                </AccordionBody>
                            </Accordion>

                        </div>


                        <div className="mt-[10px] w-[100%] border border-gray-200 shadow-lg shadow-gray-500/50">

                            <Accordion open={open === 2}>
                                <AccordionHeader onClick={() => handleOpen(2)}>
                                   <h1> How to use Material Tailwind?</h1>
                                    <div className="ml-[50%]">
                                        <button className="bg-green-500 w-10 border rounded-[10px] p-[2px] hover:bg-green-900"><FontAwesomeIcon className="text-white" icon={faPenToSquare}></FontAwesomeIcon></button>
                                        <button className="bg-red-600 w-10 border rounded-[10px]  p-[2px] hover:bg-red-900"><FontAwesomeIcon className="text-white" icon={faTrash}></FontAwesomeIcon></button>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody>
                                    We're not always in the position that we want to be at. We're
                                    constantly growing. We're constantly making mistakes. We're constantly
                                    trying to express ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                        </div>

                        <div className="mt-[10px] w-[100%] border border-gray-200 shadow-lg shadow-gray-500/50">

                            <Accordion open={open === 3}>
                                <AccordionHeader onClick={() => handleOpen(3)}>
                                   <h1> What can I do with Material Tailwind?</h1>
                                    <div className="ml-[50%]">
                                        <button className="bg-green-500 w-10 border rounded-[10px] p-[2px] hover:bg-green-900"><FontAwesomeIcon className="text-white" icon={faPenToSquare}></FontAwesomeIcon></button>
                                        <button className="bg-red-600 w-10 border rounded-[10px]  p-[2px] hover:bg-red-900"><FontAwesomeIcon className="text-white" icon={faTrash}></FontAwesomeIcon></button>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody>
                                    We're not always in the position that we want to be at. We're
                                    constantly growing. We're constantly making mistakes. We're constantly
                                    trying to express ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                        </div>

                    </div>


                </div>

            </main >


        </div>
    )


}
export default Cahier