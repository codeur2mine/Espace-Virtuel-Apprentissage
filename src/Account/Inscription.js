import React, { useState } from 'react';
import Formulaire from './Formulaire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faAt, faLock, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import OutsideClickHandler from 'react-outside-click-handler';



function Inscription() {

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");


  // show and hide password
  const [hide, setHide] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
// if(password !== confirmpassword) {
//   console.log('error')
// }
//   }
  const handleClick = (e) => {
    console.log(lastname)
    console.log(firstname)
    console.log(date)
    console.log(email)
    console.log(username)
    console.log(phone)
    console.log(password)
    console.log(confirmpassword)
    if(password !== confirmpassword) {
      alert('error')
    }
  }

  const togglePassword = () => {

    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  return (
    <div>
      <div hidden className="fixed inset-0 w-7/12 lg:block imgBx">
        <div className=" w-[10%] h-[100%]">
          <img src="new.png " className=" top-0 -left-24 w-[100%] h-[100%] object-cover absolute imgBx" />
        </div>
      </div>
      <div className="2xl:container h-screen m-auto">
        <div hidden role="hidden" className="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"></div>
        <div className="relative h-full ml-auto lg:w-6/12">
          <div className="m-auto py-12 px-6 sm:p-20 xl:w-12/12">
            <div className="space-y-4">
              <img src="loggo.png" className="w-[40%] absolute top-[-30px]" />
              <p className="font-medium text-lg text-gray-600">Bienvenue ?? EAT ! Enregistrez vous</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <button className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-gray-600">
                <div className="flex gap-4 justify-center">
                  <img src="google.png" className="w-5" alt="" />
                  <span className="block w-max font-medium tracking-wide text-sm text-blue-700">Google</span>
                </div>
              </button>
              <button className="py-3 px-6 rounded-xl bg-[#4267B2] hover:bg-blue-800 focus:bg-blue-800 active:bg-blue-600">
                <div className="flex gap-4 justify-center">
                  <img src="facebook.png" className="w-5 invert-[1]" alt="" />
                  <span className="block w-max font-medium tracking-wide text-sm text-white">Facebook</span>
                </div>
              </button>
              <button className="py-3 px-6 rounded-xl bg-[#1DA1F2] hover:bg-blue-400 focus:bg-blue-500 active:bg-blue-400">
                <div className="flex gap-4 justify-center">
                  <img src="twitter.png" className="w-5 invert-[1]" alt="" />
                  <span className="block w-max font-medium tracking-wide text-sm text-white">Twitter</span>
                </div>
              </button>
              <button className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                <div className="flex gap-4 items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span className="block w-max font-medium tracking-wide text-sm text-white">Github</span>
                </div>
              </button>
            </div>

            <div role="hidden" className="mt-12 border-t">
              <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Ou</span>
            </div>

            <section className="contact pt-[5rem] pb-[5rem] " id="contact">

              <form className="grid grid-cols-2 gap-8">
                <fieldset>
                  <div className="flex flex-col items-end relative m-[0_0_10px] text-[#777] font-light">
                    <span className="form-icon left-[10px] top-[35%] text-[13px] absolute">
                      <Icon icon="bx:user" />
                    </span>
                    <input
                      type="text"
                      value={lastname}
                      placeholder="Votre Pr??nom"
                      className="w-full py-3 pl-[35px] ring-1 ring-gray-300 rounded-xl text-black placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400  focus:bg-gray-300 focus:outline-offset-2 focus:outline-[#22b35e] font-bold placeholder:font-light capitalize tracking-wide"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <div className="flex flex-col items-end relative m-[0_0_10px] text-[#777] font-light">
                    <span className="form-icon left-[10px] top-[35%] text-[13px] absolute">
                      <Icon icon="bx:user" />
                    </span>
                    <input
                      type="text"
                      value={firstname}
                      placeholder="Votre Nom"
                      className="w-full py-3 pl-[35px] ring-1 ring-gray-300 rounded-xl text-black placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400  focus:bg-gray-300 focus:outline-offset-2 focus:outline-[#22b35e] font-bold placeholder:font-light capitalize tracking-wide"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <div className="flex flex-col items-end relative m-[0_0_10px] text-[#777] font-light">
                    <label className="absolute left-0 -top-5 font-bold text-sm">Date de naissance</label>
                    <input
                      type="date"
                      value={date}
                      placeholder="Votre E-mail"
                      className="w-full py-3 px-[10px] ring-1 ring-gray-300 rounded-xl text-black  bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400  focus:bg-gray-300 focus:outline-offset-2 focus:outline-[#22b35e] placeholder:font-light capitalize tracking-wide"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <div className="flex flex-col items-end relative m-[0_0_10px] text-[#777] font-light">
                    <span className="form-icon left-[10px] top-[35%] text-[13px] absolute">
                      <Icon icon="fluent:mail-16-filled" />
                    </span>
                    <input
                      type="email"
                      value={email}
                      placeholder="Votre E-mail"
                      className="w-full py-3 pl-[35px] ring-1 ring-gray-300 rounded-xl text-black placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400  focus:bg-gray-300 focus:outline-offset-2 focus:outline-[#22b35e] font-bold placeholder:font-light tracking-wide"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <div className="flex flex-col items-end relative m-[0_0_10px] text-[#777] font-light">
                    <span className="form-icon left-[10px] top-[35%] text-[13px] absolute">
                      <Icon icon="bx:user" />
                    </span>
                    <input
                      type="text"
                      value={username}
                      placeholder="Votre Username"
                      className="w-full py-3 pl-[35px] ring-1 ring-gray-300 rounded-xl text-black placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400  focus:bg-gray-300 focus:outline-offset-2 focus:outline-[#22b35e] font-bold placeholder:font-light"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <div className="flex flex-col items-end relative m-[0_0_10px] text-[#777] font-light">
                    <span className="form-icon left-[10px] top-[35%] text-[13px] absolute">
                      <Icon icon="bx:phone" />
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      placeholder="Votre N?? T??l??phone"
                      className="w-full py-3 pl-[35px] ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:outline-offset-2 focus:bg-gray-300 focus:outline-[#22b35e] font-bold placeholder:font-light"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                </fieldset>

                <fieldset>
                  <div className="flex flex-col items-end relative m-[0_0_10px] text-[#777] font-light">
                    <span className="form-icon left-[10px] top-[35%] text-[13px] absolute">
                      <Icon icon="bx:lock" />
                    </span>
                    <span onClick={togglePassword}>
                      {passwordType === "password" ? <Icon icon="bi:eye-slash" className="absolute top-[15px] text-[17px] right-[10px] cursor-pointer" /> : <Icon icon="emojione-monotone:eye" className="absolute top-[15px] text-[17px] right-[10px] cursor-pointer" />}
                    </span>
                    <input
                      type={passwordType}
                      value={password}
                      placeholder="Quel est votre Code Secret ?"
                      className="w-full py-3 pl-[35px] ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:outline-offset-2 focus:bg-gray-300 focus:outline-[#22b35e] font-bold placeholder:font-light"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <div className="flex flex-col items-end relative m-[0_0_10px] text-[#777] font-light">
                    <span className="form-icon left-[10px] top-[35%] text-[13px] absolute">
                      <Icon icon="bx:lock" />
                    </span>
                    <span onClick={togglePassword}>
                      {passwordType === "password" ? <Icon icon="bi:eye-slash" className="absolute top-[15px] text-[17px] right-[10px] cursor-pointer" /> : <Icon icon="emojione-monotone:eye" className="absolute top-[15px] text-[17px] right-[10px] cursor-pointer" />}
                    </span>
                    <input
                      type={passwordType}
                      value={confirmpassword}
                      placeholder="Confirmer votre Code Secret"
                      className="w-full py-3 pl-[35px] ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:outline-offset-2 focus:bg-gray-300 focus:outline-[#22b35e] font-bold placeholder:font-light"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </fieldset>
                <div className="flex flex-col items-end relative m-[0_0_10px] text-[#777] font-light">
                  <input
                    type="checkbox"
                    className="check left-0"

                  />
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setHide(false);
                    }}>
                    <label className="text-md text-black pl-[20%] align-center" for="checkbox" onClick={() => setHide(!hide)}>
                      J'accepte <a href="#" className="text-blue-800 font-semi-bold hover:underline "> les conditions g??n??rales d'utilisation.</a>
                    </label>

                  </OutsideClickHandler>
                </div>
              </form>
              <div>

                <button type="submit" onClick={handleClick} className="mt-[2rem] w-full px-6 py-3 rounded-xl bg-[#FF7F50] transition hover:bg-orange-900 focus:bg-orange-600 active:bg-orange-800 font-[andika]">
                  <span className="font-semibold text-white text-lg">Je m' enregistre</span>
                </button>
                <Link to='/login'>
                  <a href="#" type="reset" className="w-max p-3 -ml-3">
                    <span className="text-sm tracking-wide text-green-900 font-bold">J'ai un compte !</span>
                  </a>
                </Link>
              </div>
            </section>

            <div className="border-t pt-12">
              <div className="space-y-2 text-center">
                <span className="block text-sm tracking-wide text-gray-500">?? 2022 EaT, Corp..</span>
              </div>
            </div>
            {hide && (
              <div className="block pr-[15px] overflow-x-hidden overflow-y-auto fixed top-0 left-0 z-[1050] w-[100%] h-[100%] outline-0">
                <div className="transform-none flex items-center max-w-[720px]  relative w-auto m-[1.75rem_auto]">
                  <div className="taille relative min-h-[40px] flex flex-col	w-[100%] bg-white bg-clip-padding border rounded-sm outline-0 shadow-[0_0_10px_rgba(48,46,77,0.3)]">
                    <div className="flex items-start justify-between border-b border-[#dbdfea] ">
                      <h5 className="mb-0 leading-normal text-xl font-bold text-[#364a63] p-[10px]" >Les conditions g??n??rales d'utilisation</h5>



                    </div>
                    <div className="relative flex-[1_1_auto] p-[1.25rem] overflow-auto">
                      <p className="mt-0 mb-[1rem]">Les pr??sentes conditions g??n??rales d'utilisation (dites ?? CGU ??)
                        ont pour objet l'encadrement juridique des modalit??s
                        de mise ?? disposition de la plateforme candidature
                        uir.ac.ma (Plateforme) par l???Universit?? Internationale de Rabat (
                        UIR) et de d??finir les conditions d???acc??s et d???utilisation des services par l????? Utilisateur ??.</p>
                      <p>Toute inscription ou utilisation de la Plateforme implique l'acceptation, sans aucune r??serve ni restriction, des pr??sentes CGU par l???Utilisateur.
                        Lors de l'inscription sur la Plateforme via les Formulaires d???inscription,
                        chaque Utilisateur accepte express??ment les pr??sentes CGU en cochant
                        la case pr??c??dant le texte suivant : ?? J???ai lu et j???accepte les conditions g??n??rales d???utilisation ??.</p>
                      <h5 className="mb-[0.5rem] leading-normal text-xl font-bold text-[#364a63]">Article 1 : Mentions l??gales</h5>
                      <p className="mt-0 mb-[1rem]">L'??dition de la Plateforme est assur??e par l???Universit?? Internationale de Rabat, Soci??t?? Anonyme, au capital de 131 000 000 DH,
                        immatricul??e au RC de Sal?? sous le num??ro 15 267, dont le si??ge social est situ?? ?? Technopolis Rabat-Shore Rocade Rabat-Sal??. </p>
                      <p className="mt-0 mb-[1rem]">Num??ro de t??l??phone +212 (0)5 30 10 30 00</p>
                      <h5 className="mb-[0.5rem] leading-normal text-xl font-bold text-[#364a63]">Article 2 : Conditions d???acc??s et d???utilisation</h5>
                      <p className="mt-0 mb-[1rem]">La Plateforme est accessible gratuitement en tout lieu ?? tout Utilisateur ayant un acc??s ?? Internet.
                        Tous les frais support??s
                        par l'Utilisateur pour acc??der au service
                        (mat??riel informatique, logiciels, connexion Internet, etc.) sont ?? sa charge.</p>
                      <p className="mt-0 mb-[1rem]">L???Utilisateur non-membre n'a pas acc??s aux services r??serv??s. Pour cela, il doit s???inscrire en remplissant les formulaires en ligne. En acceptant de s???inscrire aux services r??serv??s, l???Utilisateur membre s???engage ?? fournir des informations sinc??res et exactes.</p>
                      <p className="mt-0 mb-[1rem]">Pour acc??der aux services, l???Utilisateur doit ensuite s'identifier ?? l'aide de son identifiant et de son mot de passe qui lui seront communiqu??s apr??s son inscription.</p>
                      <p className="mt-0 mb-[1rem]">Tout Utilisateur membre r??guli??rement inscrit pourra ??galement solliciter sa d??sinscription en se rendant ?? la page d??di??e sur son espace personnel. Celle-ci sera effective dans un d??lai raisonnable.</p>
                      <p className="mt-0 mb-[1rem]">Tout ??v??nement d?? ?? un cas de force majeure ayant pour cons??quence un dysfonctionnement de la Plateforme et sous r??serve de toute interruption ou modification en cas de maintenance, n'engage pas la responsabilit?? de l???UIR. Dans ces cas, l???Utilisateur accepte ainsi ne pas tenir rigueur ?? l?????diteur de toute interruption ou suspension de service, m??me sans pr??avis.</p>
                      <p className="mt-0 mb-[1rem]">En utilisant la Plateforme, l???Utilisateur s???interdit de :</p>
                      <p className="mt-0 mb-[1rem]">Poster sur la Plateforme une information ou un contenu inappropri?? ou qui serait contraire ?? l???int??r??t public ;
                        Poster ou renseigner sur la Plateforme des informations qui sont fausses, frauduleuses, mensong??res, diffamatoires, calomnieuses, etc. ;
                        Manipuler ou essayer de manipuler la Plateforme de quelque mani??re que ce soit ;
                        Diffuser des virus ou toute autre technologie de programmation informatique qui peut nuire ?? la Plateforme ou aux int??r??ts des Utilisateurs ;
                        Reprendre ou essayer de reprendre le compte d???un autre utilisateur ou effectuer n???importe quel piratage informatique de la Plateforme ou des comptes d???utilisateurs ;
                        S???immiscer ou tenter de s???immiscer dans l???administration de la Plateforme ;
                        Transf??rer son compte ou son nom d???utilisateur ?? un tiers sans l???accord de l???UIR ;
                        Modifier, copier ou enfreindre les copyrights et marques d??pos??s et figurant sur la Plateforme ;
                        Enfreindre, par l???usage de notre Plateforme, les lois, les r??glements ou les droits d???un tiers.
                        En outre, l???Utilisateur, victime d???un abus ou t??moin d???un manquement aux pr??sentes C.G.U, est pri?? de le signaler, imm??diatement et sans d??lai, ?? l???UIR par l???adresse ??lectronique communiqu??e ?? l???ARTICLE 1.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}


          </div>



        </div>

      </div>


    </div>
  )
}

export default Inscription