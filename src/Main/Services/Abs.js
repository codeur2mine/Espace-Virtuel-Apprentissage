import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faDoorOpen, faGear, faMessage, faSearch, faUser, faPaperPlane, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Header/Header';





function Abs() {
    const [show, setShow] = useState(false)
    const [see, setSee] = useState(false)
    return (
        <div>
            <header className="fixed z-10 py-4 bg-[#f2f2fc] border-b w-[100%] mr-[70%] font-[andika]">
                <div className="container flex items-center justify-between h-full px-36 mx-auto text-purple-600 dark:text-purple-300 ">
                    {/* <!-- Mobile hamburger --> */}

                    <button
                        className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple">
                        <FontAwesomeIcon className="text-sm mr-[15px]" icon={faBars}></FontAwesomeIcon>
                    </button>
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                        Absences/Retards
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
            <main className=" block text-[#302e4d] opacity-1 p-[0_30px] bg-[#f2f2fc] font-[andika]">
                <div className="container pb-[40px] pt-[60px] max-w-[1500px] w-[100%] m-auto" >
                    <div className="row flex flex-wrap ml-[10px] mr-[10px] relative pl-[8%] justify-between mt-[10%]">
                        <h1 className="text-3xl min-h-[20px] p-[19px] mb-[20px] border w-[100%] rounded-[10px] bg-gradient-to-r from-gray-200 to-gray-200">Déclarer une absence ou un Retard</h1>

                        <select ng-model="classe" ng-options="i.nomClasse for i in classesList" ng-change="getAbsencesParClasse()" className="form-control block w-[100%] h-[34px] p-[2px_12px] text-xl text-[#555] bg-[#fff] border border-[#ccc] rounded-[4px] focus:border focus:border-[#66afe9]">
                            <option className="text-xl" label="Absence"></option>
                            <option className="text-xl" label="Retard"></option>
                        </select>

                        <table class="w-[100%] whitespace-no-wrap">
                            <thead>
                                <tr className="text-xl font-bold tracking-wide text-center uppercase border-b  bg-gray-50">
                                    <th>Etudiant</th>
                                    <th>Matière</th>
                                    <th>Date</th>
                                    <th>Heure</th>

                                </tr>
                            </thead>
                            <tbody className="text-center text-xl ">
                                <tr ng-repeat="a in absencesList">
                                    <td>
                                        <input list="browsers" name="browser" className="form-control block w-[100%] text-center h-[34px] p-[2px_12px] text-md text-[#555] bg-[#fff] border border-[#ccc] rounded-[4px] focus:border focus:border-[#66afe9]"/>
                                        <datalist id="browsers">
                                            <option className="text-xl" value="Coulibaly Zana Sidi-Mohamed" />
                                            <option className="text-xl" value="Coulibaly N'golo Tiemoko Ali" />
                                            <option className="text-xl" value="Kouadio Koffi Franck Dorgeles" />
                                            <option className="text-xl" value="Zou Monioulou Sarah Yasmine" />
                                            <option className="text-xl" value="Kamagaté Mohamadi" />
                                        </datalist>
                                    </td>

                                    <td>
                                        <select ng-model="matiere" ng-options="i.nomMatiere for i in matieresList" className="form-control block w-[100%] text-center h-[34px] p-[2px_12px] text-md text-[#555] bg-[#fff] border border-[#ccc] rounded-[4px] focus:border focus:border-[#66afe9]">
                                            <option className="text-xl" label="Philosophie"></option>
                                            <option className="text-xl" label="Maths"></option>
                                            <option className="text-xl" label="Français"></option>
                                            <option className="text-xl" label="Anglais"></option>
                                            <option className="text-xl" label="Hist-Géo"></option>
                                        </select></td>
                                    <td>
                                        <input type="date" min="2000-01-01" max="2030-12-31" ng-model="absence.dateAbsence" name="dateDevoirs" required className="form-control block w-[100%] text-center h-[34px] p-[2px_12px] text-md text-[#555] bg-[#fff] border border-[#ccc] rounded-[4px] focus:border focus:border-[#66afe9]" />
                                    </td>
                                    <td>
                                        <input type="time" ng-model="absence.dateAbsence" name="dateDevoirs" required className="form-control block w-[100%] text-center h-[34px] p-[2px_12px] text-md text-[#555] bg-[#fff] border border-[#ccc] rounded-[4px] focus:border focus:border-[#66afe9]" />
                                    </td>
                                </tr>

                            </tbody>
                            <button ng-click="saveAbsenceRetard()" type="button" className="btn btn-info w-[30%] m-[5px] p-[10px] border rounded-[10px] text-xl bg-blue-600 text-white flex justify-between hover:bg-black transition duration-500 ease-in-out">VALIDER<FontAwesomeIcon className="" icon={faPaperPlane}></FontAwesomeIcon>
                            </button>

                        </table>

                    </div>
                    <div className="row flex flex-wrap ml-[10px] mr-[10px] relative pl-[8%] justify-between mt-[10%]">
                        <h1 className="text-3xl min-h-[20px] p-[19px] mb-[20px] border w-[100%] rounded-[10px] bg-gradient-to-r from-gray-200 to-gray-200">Liste des absences</h1>

                        <select ng-model="classe" ng-options="i.nomClasse for i in classesList" ng-change="getAbsencesParClasse()" className="form-control block w-[100%] h-[34px] p-[2px_12px] text-xl text-[#555] bg-[#fff] border border-[#ccc] rounded-[4px] focus:border focus:border-[#66afe9]">
                            <option value="" className="text-xl" label="--Selectionner la classe--"></option>
                        </select>

                        <table class="w-[100%] whitespace-no-wrap">
                            <thead>
                                <tr className="text-xl font-bold tracking-wide text-center uppercase border-b  bg-gray-50">
                                    <th>Etudiant</th>
                                    <th>Matière</th>
                                    <th>Date</th>
                                    <th>Modifier</th>
                                    <th>Effacer</th>

                                </tr>
                            </thead>
                            <tbody className="text-center text-xl ">
                                <tr ng-repeat="a in absencesList">
                                    <td>Nom</td>
                                    <td>Matière</td>
                                    <td>Date</td>
                                    <td> <button type="button" className="bg-green-500 w-10 border rounded-[10px] m-[5px] p-[2px] hover:bg-green-900"><FontAwesomeIcon className="text-white" icon={faPenToSquare}></FontAwesomeIcon></button></td>
                                    <td><button ui-sref='absence' type="button" className="bg-red-600 w-10 border rounded-[10px] m-[5px] p-[2px] hover:bg-red-900"><FontAwesomeIcon className="text-white" icon={faTrash}></FontAwesomeIcon></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row flex flex-wrap ml-[10px] mr-[10px] relative pl-[8%] justify-between mt-[10%]">
                        <h1 className="text-3xl min-h-[20px] p-[19px] mb-[20px] border w-[100%] rounded-[10px] bg-gradient-to-r from-gray-200 to-gray-200">Liste des Retards</h1>

                        <select ng-model="classe" ng-options="i.nomClasse for i in classesList" ng-change="getAbsencesParClasse()" className="form-control block w-[100%] h-[34px] p-[2px_12px] text-xl text-[#555] bg-[#fff] border border-[#ccc] rounded-[4px] focus:border focus:border-[#66afe9]">
                            <option value="" className="text-xl" label="--Selectionner la classe--"></option>
                        </select>

                        <table class="w-[100%] whitespace-no-wrap">
                            <thead>
                                <tr className="text-xl font-bold tracking-wide text-center uppercase border-b  bg-gray-50">
                                    <th>Etudiant</th>
                                    <th>Matière</th>
                                    <th>Date</th>
                                    <th>Modifier</th>
                                    <th>Effacer</th>
                                </tr>
                            </thead>
                            <tbody className="text-center text-xl ">
                                <tr ng-repeat="a in absencesList">
                                    <td>Nom</td>
                                    <td>Matière</td>
                                    <td>Date</td>
                                    <td> <button type="button" className="bg-green-500 w-10 border rounded-[10px] m-[5px] p-[2px] hover:bg-green-900"><FontAwesomeIcon className="text-white" icon={faPenToSquare}></FontAwesomeIcon></button></td>
                                    <td><button ui-sref='absence' type="button" className="bg-red-600 w-10 border rounded-[10px] m-[5px] p-[2px] hover:bg-red-900"><FontAwesomeIcon className="text-white" icon={faTrash}></FontAwesomeIcon></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </main >

        </div >
    )
}

export default Abs