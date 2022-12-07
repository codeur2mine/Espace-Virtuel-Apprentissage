import React from "react";
import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faDoorOpen, faGear, faMessage, faSearch, faUser, } from '@fortawesome/free-solid-svg-icons';
import Header from "../Header/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const locales = {
  "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});


const myEventsList = [
  { start: new Date(), end: new Date(), title: "special event" },
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 7, 1),
    end: new Date(2022, 7, 1),
  },
]







function MyCalendar() {
  const [show, setShow] = useState(false)
  const [see, setSee] = useState(false)
  const [open, setOpen] = useState(false)

  const [allEvents, setAllEvents] = useState(myEventsList);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (

    <div className="App font-[andika]">
      <header className="fixed z-[100] py-4 bg-[#f2f2fc] border-b w-[100%]  mr-[70%]">
        <div

          className="container flex items-center justify-between h-full px-36 mx-auto text-purple-600 dark:text-purple-300 ">
          {/* <!-- Mobile hamburger --> */}

          <button
            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple">
            <FontAwesomeIcon className="text-sm mr-[15px]" icon={faBars}></FontAwesomeIcon>
          </button>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Emploi du Temps
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
      <main className="block text-[#302e4d] opacity-1 p-[0_30px] bg-[#f2f2fc] relative">
        <div className="container pb-[40px] pt-[60px] max-w-[1500px] w-[100%] m-auto" >
          <div className="row flex flex-wrap ml-[10px] mr-[10px] relative pl-[8%] justify-between mt-[10%]">
            <div className="flex justify-between">
              <span aria-hidden="true" className=" w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"></span>
              <span>Examen</span>
              <span aria-hidden="true" className=" w-3 h-3 transform translate-x-1 -translate-y-1 bg-green-600 border-2 border-white rounded-full"></span>
              <span>1 contre 1</span>
              <span aria-hidden="true" className=" w-3 h-3 transform translate-x-1 -translate-y-1 bg-yellow-600 border-2 border-white rounded-full"></span>
              <span>Devoir</span>
            </div>


            <button onClick={() => setOpen(!open)} className=" bg-blue-800 text-white border rounded-[5px] m-[6px] px-[60px] py-[10px] mb-8">Book a Meeting</button>


            <Calendar
              culture='fr'
              localizer={localizer}
              events={allEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "100vh", width: "100%", fontWeight: "bold", }}
            />
          </div>
        </div>
        {!open ?
          <div className="absolute aside w-[350px] bg-[#fff] border flex justify-center border-r border-[#e8dfec] p-[1.5%] right-0 top-0 items-center z-10 h-[100%]">

            <div className="logo top-[30px] absolute border-b-2  p-6 w-[100%] ">
              <h1 className="text-center text-xl font-bold">BOOK A MEETING</h1>
            </div>
            <div>
              <input type="text" placeholder="Add Title" className="block w-[100%] text-center h-[34px] p-[2px_12px] text-md text-[#555] bg-[#fff] border border-[#ccc] rounded-[4px] focus:border focus:border-[#66afe9] mb-[50px]" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />


              <DatePicker placeholderText="Start Date" className="block w-[100%] text-center h-[34px] p-[2px_12px] text-md text-[#555] bg-[#fff] border border-[#ccc] rounded-[4px] focus:border focus:border-[#66afe9] mb-[50px]" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
              <DatePicker placeholderText="End Date" className="block w-[100%] text-center h-[34px] p-[2px_12px] text-md text-[#555] bg-[#fff] border border-[#ccc] rounded-[4px] focus:border focus:border-[#66afe9] mb-[50px]" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />

              <button className="w-[50%] m-[5px] p-[10px] border rounded-[10px] text-xl bg-blue-600 text-white  hover:bg-black transition duration-500 ease-in-out" onClick={handleAddEvent}>
                Ajouter
              </button>
            </div>

          </div>
          : null}
      </main>

    </div>
  )
}

export default MyCalendar