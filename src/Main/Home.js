import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPaperPlane, faTimes, faUserCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";




function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const change = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  return (
    <div>


      <nav className="fixed z-[1000] h-20 inset-0 ml-auto bg-white bg-opacity-70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="">
                <img
                  className="w-[50%] mt-4"
                  src="loggo.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <ul className="flex flex-col md:flex-row list-none lg:ml-auto ">

                    <li className="cursor-pointer active m-[0_1rem] px-3 py-2 flex items-center border-b-2 border-transparent hover:border-gray-700 duration-300 text-black rounded-md text-sm font-medium uppercase leading-snug"><LinkRoll activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>home</LinkRoll></li>

                    <li className="cursor-pointer active m-[0_1rem] px-3 py-2 flex items-center border-b-2 border-transparent hover:border-gray-700 duration-300 rounded-md text-sm font-medium uppercase leading-snug"><LinkRoll activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>about</LinkRoll></li>

                    <li className="cursor-pointer active m-[0_1rem] px-3 py-2 flex items-center border-b-2 border-transparent hover:border-gray-700 duration-300 rounded-md text-sm font-medium uppercase leading-snug"><LinkRoll activeClass="active"
                      to="course"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>course</LinkRoll></li>

                    <li className="cursor-pointer active m-[0_1rem] px-3 py-2 flex items-center border-b-2 border-transparent hover:border-gray-700 duration-300 rounded-md text-sm font-medium uppercase leading-snug"><LinkRoll activeClass="active"
                      to="teacher"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>teacher</LinkRoll></li>
                      <li className="cursor-pointer active m-[0_1rem] px-3 py-2 flex items-center border-b-2 border-transparent hover:border-gray-700 duration-300 rounded-md text-sm font-medium uppercase leading-snug"><LinkRoll activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>contact</LinkRoll></li>
                  </ul>

                </div>

              </div>
              <button id="login" className="cursor-pointer hidden md:block ">
                <Link to='/login'>
                  <FontAwesomeIcon className="text-gray-500 text-[1.8rem] hover:text-[#333]" icon={faUserCircle}></FontAwesomeIcon>
                </Link>
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">

              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 inset-0 ml-auto bg-white bg-opacity-75 backdrop-blur-xl">
                <button id="login" className="cursor-pointer float-right">
                  <Link to='/login'>
                    <FontAwesomeIcon className="text-black text-[1.8rem] hover:text-[#333]" icon={faUserCircle}></FontAwesomeIcon>
                  </Link>
                </button>
                <ul className="flex flex-col md:flex-row list-none lg:ml-auto md:h-auto h-screen">
                  <li className="active m-[0_1rem]"><a className="px-3 py-6 flex items-center hover:bg-gray-400 text-black rounded-md text-xl font-medium uppercase leading-snug" href="#home">home</a></li>
                  <li className="active m-[0_1rem]"><a className="px-3 py-6 flex items-center hover:bg-gray-400 text-black rounded-md text-xl font-medium uppercase leading-snug" href="#about">about</a></li>
                  <li className="active m-[0_1rem]"><a className="px-3 py-6 flex items-center hover:bg-gray-400 text-black rounded-md text-xl font-medium uppercase leading-snug" href="#course">course</a></li>
                  <li className="active m-[0_1rem]"><a className="px-3 py-6 flex items-center hover:bg-gray-400 text-black rounded-md text-xl font-medium uppercase leading-snug" href="#teacher">teacher</a></li>
                  <li className="active m-[0_1rem]"><a className="px-3 py-6 flex items-center hover:bg-gray-400 text-black rounded-md text-xl font-medium uppercase leading-snug" href="#contact">contact</a></li>

                </ul>

              </div>
            </div>
          )}
        </Transition>
      </nav>


      {/* // <!-- header section ends --> */}


      {/* <!-- home section starts  --> */}

      <section className="home flex items-center justify-center flex-col min-h-[100vh] p-[1rem_7%] pt-[6rem] relative text-center" id="home">
        <h1 className="text-[5rem] text-[#666] capitalize">education avant tout</h1>
        <p className="text-[1.4rem] text-[#999] p-[1rem_0] w-[70rem] text-center">Homme sans Education, corps sans âme.</p>
        <a href="#"><button className="btn p-[.7rem_3rem] text-[2rem] text-[#fff] bg-[#22b35e] border rounded-full mt-[1rem] cursor-pointer relative to z-0 overflow-hidden transition duration-300 ease-in-out  hover:bg-[#FFA500] hover:text-black">get started</button></a>

        <div className="shape"></div>

      </section>
      {/* 
<!-- home section ends -->

<!-- about section starts  --> */}

      <section className="about flex items-center justify-center flex-wrap  min-h-[100vh] p-[1rem_7%] pt-[6rem]" id="about">

        <div className="image flex-[1_1_40rem]">
          <img src="Study.svg" alt="" className="h-[65vh] w-[100%]" />
        </div>

        <div className="content flex-[1_1_40rem]">
          <h3 className="text-[3.5rem] text-[#666]">Pourquoi nous choisir ?</h3>
          <p className="text-[1.5rem] text-[#666] p-[1rem_0]">Essentiel dans la vie d'un enfant, l'éducation prime sur tout. Beaucoup pense que la défaillance est au niveau des bambins, à dire qu'ils sont de plus en plus distraits, incompétents, irresponsables, mais la vérité est tout autre et grâce à ce programme vous en serez persuadé.</p>
          <p className="text-[1.5rem] text-[#666] p-[1rem_0]">Nos apprenants sont loin d’être nul, sauf qu’ils ne s’adaptent pas au système archaïque qui règne, celui-ci fonctionnait avec nos parents qui avaient seulement les livres comme méthode d’enseignement. Plusieurs générations se sont écoulées, les choses ont évoluées depuis lors, on retrouve désormais l’ère des nouvelles technologies qui révolutionnent le XXIe siècle, elles dominent, améliorent, rend plus simple et fiable tous les domaines; que ce soit d’ordre financier comme la numérisation de toute transaction boursière à WALL STREET, jusqu’aux agences de voyage internationale.  </p>
          <a href="#"><button className="btn p-[.7rem_3rem] text-[2rem] text-[#fff] bg-[#22b35e] border rounded-full mt-[1rem] cursor-pointer relative to z-0 overflow-hidden transition duration-300 ease-in-out  hover:bg-[#FFA500] hover:text-black">learn more</button></a>
        </div>

      </section>

      {/* <!-- about section ends -->

<!-- course section starts  --> */}

      <section className="course min-h-[100vh] p-[1rem_7%] pt-[6rem] relative" id="course">

        <h1 className="heading text-[#fff] p-[2rem 2rem] text-[4rem] absolute top-[20rem]">Our popular courses</h1>

      </section>

      {/* <!-- course section ends -->

<!-- teacher section starts  --> */}

      <section className="teacher min-h-[100vh] p-[1rem_7%] pt-[6rem]" id="teacher">

        <h1 className="heading text-[#444] p-[1rem] text-[4rem] text-center">Nos enseignants qualifiés</h1>

        <p className="text-[19px] text-[#666] w-[65rem] m-[1rem_auto]">Être un bon enseignant est le rêve de chaque membre du corps enseignant. Mais qu’est-ce qu’un bon enseignant ? Et qu’est-ce qui différencie un meilleur prof des autres professeurs? En d’autres termes: quelles sont les qualités d’un bon enseignant?

          Vous trouverez ci-dessous les qualités et les caractéristiques d’un bon enseignant, dont certaines vous sont certainement très familières. Jetez un coup d’œil et voyez ce que vous en pensez.</p>

        <a href="#"><button className="btn p-[.7rem_3rem] text-[2rem] text-[#fff] bg-[#22b35e] border rounded-full mt-[1rem] cursor-pointer relative to z-0 overflow-hidden transition duration-300 ease-in-out  hover:bg-[#FFA500] hover:text-black">learn more</button></a>

      </section>

      {/* <!-- teacher section ends -->

<!-- contact section starts  --> */}

      <section className="contact min-h-[100vh] p-[1rem_7%] pt-[6rem] " id="contact">

        <h1 className="heading text-[#444] p-[1rem] text-[4rem] text-center">Une question ?</h1>
        <div className="grid grid-cols-2 gap-4">
          <fieldset>
            <input type="text" placeholder="Nom" name="form" id="contact_5-element-0" className="border-b  w-[50%] text-[25px] bg-transparent placeholder:text-black placeholder:text-lg" />
            <span></span>
          </fieldset>

          <fieldset>
            <input type="text" placeholder="Prénoms" name="form" id="contact_5-element-0" className="border-b w-[50%] text-[25px] bg-transparent placeholder:text-black placeholder:text-lg" />

          </fieldset>

          <fieldset>
            <input type="tel" placeholder="Téléphone" name="form" id="contact_5-element-0" className="border-b w-[50%] text-[25px] bg-transparent placeholder:text-black placeholder:text-lg" />

          </fieldset>
          <fieldset>
            <input type="email" placeholder="Courriel" name="form" id="contact_5-element-0" className="border-b w-[50%] text-[25px] bg-transparent placeholder:text-black placeholder:text-lg" />
          </fieldset>

        </div>
        <textarea rows="5" cols="50" className="border resize-none  placeholder:text-black placeholder:text-lg mt-6 w-[75%] " placeholder="Insérer un Commentaire !!!">

        </textarea>
        <button className="btn btn-info w-[10%] m-[5px] p-[10px] border rounded-[10px] text-xl bg-orange-600 font-[andika] text-white flex justify-between hover:bg-black transition duration-500 ease-in-out">VALIDER<FontAwesomeIcon className="" icon={faPaperPlane}></FontAwesomeIcon>
        </button>
        <div className="">
          <img src="pourquoi.jpg" alt="femme" className="float-right w-[50%]" />

        </div>
      </section>
      {/* <!-- contact section ends --> */}

      {/* <!-- footer section starts  --> */}

      {/* <div className="footer bg-[#333]">

        <div className="box-container flex justify-center flex-wrap">

          <div className="box m-[3.5rem]  flex-[1_1_25rem] text-center">
            <h3 className="text-[30px] text-[#fff] p-[1rem_0] font-bold">Informations </h3>
            <a href="#" className="text-[17px] block p-[.5rem_0] text-[#eee]">Avis clients</a>
            <a href="#" className="text-[17px] block p-[.5rem_0] text-[#eee]">Mentions légales</a>
            <a href="#" className="text-[17px] block p-[.5rem_0] text-[#eee]">Blog D'EAT</a>
            <a href="#" className="text-[17px] block p-[.5rem_0] text-[#eee]">le dictionnaire</a>
          </div>

          <div className="box m-[3.5rem] flex-[1_1_25rem] text-center">
            <h3 className="text-[30px] text-[#fff] p-[1rem_0] font-bold">Contact Info</h3>
            <p className="text-[17px] text-[#eee] p-[.7rem_0]"> <i className="fas fa-map-marker-alt"></i> Abidjan, Côte-d'Ivoire 400104. </p>
            <p className="text-[17px] text-[#eee] p-[.7rem_0]"> <i className="fas fa-envelope"></i> example@gmail.com </p>
            <p className="text-[17px] text-[#eee] p-[.7rem_0]"> <i className="fas fa-phone"></i> +225-456-7890 </p>
          </div>

        </div>

        <h1 className="credit p-[2rem_1rem] text-[1rem] text-[#fff] bg-[#111] text-center pb-[2rem]">created by <a href="#" className="text-orange-400">Moh ZS</a> all rights reserved. </h1>

      </div> */}

      {/* <!-- footer section ends --> */}
    </div>

  )

}

export default Home