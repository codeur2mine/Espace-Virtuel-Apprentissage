import { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import Header from '../../../Header/Header';
import './editor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faDoorOpen, faGear, faMessage, faSearch, faUser, faPaperPlane, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';



function Add() {

    const [show, setShow] = useState(false);
    const [see, setSee] = useState(false);

    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');

    const onChangevalue = (e) => {
        setTitle(e.target.value)
    }

    const [userInfo, setuserInfo] = useState({
        title: '',
    });

    const AddFeuille = (e) => {
        e.preventDefault();
    }
    let editorState = EditorState.createEmpty();
    const [description, setDescription] = useState(editorState);
    const onEditorStateChange = (editorState) => {
        setDescription(editorState);
    }

    const [isError, setError] = useState(null);
    const addDetails = async (event) => {
        try {
            event.preventDefault();
            event.persist();
            if (userInfo.description.value.length < 50) {
                setError('Champ requis, Ajouter une description Longueur minimum 50 caractères');
                return;
            }
            axios.post(`http://localhost:5000/addArticle`, {
                title: userInfo.title,
                description: userInfo.description.value
            })
                .then(res => {
                    if (res.data.success === true) {
                    }
                })
        } catch (error) { throw error; }
    }

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
            <main className="min-h-[100vh] block text-[#302e4d] bg-[#f2f2fc] opacity-1 p-[0_30px]">
                <div className="container pb-[40px] pt-[60px] max-w-[1500px] w-[100%] m-auto" >
                    <div className="row flex flex-wrap ml-[100px] mr-[10px] relative pl-[8%] justify-between mt-[8%]">
                        <div className="container">
                            <div className="row">
                                <form onSubmit={addDetails} className="update__forms">
                                    <h3 className="myaccount-content font-bold text-xl"> Ajouter  </h3>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label className="font-weight-bold label"> Titre <span className="required"> * </span> </label>
                                            <input type="text" name="title" onChange={onChangevalue} className="form-control input" placeholder="Titre" required />
                                        </div>
                                        <div className="form-group col-md-12 editor">
                                            <label className="font-weight-bold label"> Description <span className="required"> * </span> </label>
                                            <Editor
                                                editorState={description}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                onEditorStateChange={onEditorStateChange}
                                            />
                                            <textarea style={{ display: 'none' }} disabled ref={(val) => userInfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent()))} className="textarea" />
                                        </div>
                                        {isError !== null && <div className="errors"> {isError} </div>}
                                        <div className="form-group col-sm-12 text-right">
                                            <button type="submit" className="btnText btn__theme" onClick={AddFeuille}> Envoyer  </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Add