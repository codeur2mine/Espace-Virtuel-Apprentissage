import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faAt, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";





function Formulaire() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    console.log(username)
    console.log(password)
    axios.post(`http://localhost:5000/login`, {
      'username': username,
      'password': password
    })
      .then(res => {
        console.log(res);

        //Navigation vers la page Home ("/")
        navigate("/accueil", { replace: true });
      })

      .catch(function (error) {
        console.log(error);
        alert("Vérifiez votre Mot de passe ou E-mail")
      });
    axios.post(`http://localhost:5000/logout`)
      .then(res => console.log(res));
    navigate("/", { replace: true });

  }

  return (
    <div className="bg-white lg:bg-white">
      <div hidden className="fixed inset-0 w-7/12 lg:block imgBx">
        <div className=" w-[10%] h-[100%]">
          <img src="5.jpg " className=" top-0 left-0 w-[100%] h-[100%] object-cover absolute imgBx" />
        </div>
      </div>
      <div className="2xl:container h-screen m-auto">
        <div hidden role="hidden" className="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"></div>
        <div className="relative h-full ml-auto lg:w-6/12">
          <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
            <div className="space-y-4">
              <img src="loggo.png" className="w-[40%] absolute top-[-30px]" />
              <p className="font-medium text-lg text-gray-600">Bienvenue à EAT ! Enregistrez vous</p>
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

            <form action="" className="space-y-6 py-6 relative m-[0_0_10px] text-[#777] font-light">
              <div>
                <span className="form-icon left-[10px] top-[12%] text-[13px] absolute">
                  <Icon icon="bx:user" />
                </span>
                <input onChange={(event) => setUsername(event.target.value)}
                  type="text"
                  placeholder="Entrez votre username"
                  className="w-full py-3 pl-[35px] ring-1 ring-gray-300 rounded-xl text-black placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400  focus:bg-gray-300 focus:outline-offset-2 focus:outline-[#22b35e]"
                />
              </div>

              <div className="flex flex-col items-end relative m-[0_0_10px] text-[#777] font-light">
                <span className="form-icon left-[10px] top-[18%] text-[13px] absolute">
                  <Icon icon="bx:lock" />
                </span>
                <Icon icon="emojione-monotone:eye" className="absolute top-[15px] text-[17px] right-[10px] cursor-pointer" />
                <input onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="Quel est votre Code Secret ?"
                  className="w-full py-3 pl-[35px] ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:outline-offset-2 focus:bg-gray-300 focus:outline-[#22b35e]"
                />
                <button type="reset" className="w-max p-3 -mr-3">
                  <span className="text-sm tracking-wide text-red-600">Mot de passe oublié ?</span>
                </button>
              </div>

              <div>
                <button type="button" onClick={handleClick} className="w-full px-6 py-3 rounded-xl bg-[#22b35e] transition hover:bg-green-900 focus:bg-green-600 active:bg-green-800">
                  <span className="font-semibold text-white text-lg">Login</span>
                </button>
                <a href="#" type="reset" className="w-max p-3 -ml-3">
                  <span className="text-sm tracking-wide text-green-900 font-bold">Créer un compte !</span>
                </a>
              </div>
            </form>

            <div className="border-t pt-12">
              <div className="space-y-2 text-center">
                <span className="block text-sm tracking-wide text-gray-500">© 2022 EaT, Inc..</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Formulaire