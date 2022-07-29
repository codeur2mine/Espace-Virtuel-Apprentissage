import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




function Home() {
    return (
        <div>
            <header className="w-[100%] flex items-center justify-between fixed top-0 left-0 z-[1000] p-[1.5rem_7%] bg-[#FFA500] ">

                <div id="menu" className="fas fa-bars"></div>

                <img src="llogo.png" className="w-[5%]" />

                <nav className="navbar">
                    <ul className="flex items-center justify-center ">
                        <li className="active m-[0_1rem]"><a className="text-[2rem] text-white hover:text-[#444]" href="#home">home</a></li>
                        <li className="active m-[0_1rem]"><a className="text-[2rem] text-white hover:text-[#444]" href="#about">about</a></li>
                        <li className="active m-[0_1rem]"><a className="text-[2rem] text-white hover:text-[#444]" href="#course">course</a></li>
                        <li className="active m-[0_1rem]"><a className="text-[2rem] text-white hover:text-[#444]" href="#teacher">teacher</a></li>
                        <li className="active m-[0_1rem]"><a className="text-[2rem] text-white hover:text-[#444]" href="#contact">contact</a></li>
                    </ul>
                </nav>

                <div id="login" className="cursor-pointer">
                    <Link to='/login'>
                        <FontAwesomeIcon className="text-white text-[1.8rem] hover:text-[#333]" icon={faUserCircle}></FontAwesomeIcon>
                    </Link>
                </div>

            </header>

            {/* // <!-- header section ends --> */}

            {/* // <!-- login form  --> */}

            <div className="login-form h-[100%] w-[100%] fixed top-[120%] left-0 z-[1000] flex bg-[#22b35e] items-center justify-center">

                <form action="" className="w-[35rem] bg-white m-[0_2rem] p-[1rem_3rem] border rounded-[.5rem] relative ">
                    <h3 className="text-[3rem] text-[#f39c12] p-[1rem_0]">login</h3>
                    <input type="email" placeholder="username" className="box w-[100%] p-[1rem_0] m-[1rem_0] border-b text-[#333]" />
                    <input type="password" placeholder="password" className="box" />
                    <p>forget password? <a href="#">click here</a></p>
                    <p>don't have an account? <a href="#">register now</a></p>
                    <input type="submit" className="btn" value="login" />
                </form>

            </div>

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
                <textarea rows="4" cols="50" className="border placeholder:text-black placeholder:text-lg mt-6 w-[75%]" placeholder="Insérer un Commentaire !!!">

                </textarea>
                <div>
                <img src="contact-img.png" alt="femme" className="float-right"/>

                </div>
            </section>
            {/* <!-- contact section ends --> */}

            {/* <!-- footer section starts  --> */}

            <div className="footer bg-[#333]">

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

            </div>

            {/* <!-- footer section ends --> */}
        </div>

    )

}

export default Home