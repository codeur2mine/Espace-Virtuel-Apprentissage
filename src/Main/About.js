import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Header/Header';



function About() {
    return (
        <div>
            <Header />
            {/* About Section */}
            <section className="about section min-h-[100vh] block text-[#302e4d] bg-[#f2f2fc] opacity-1 p-[0_30px] opacity-1 font-serif" id="about">
                <div className="container pt-[60px] pb-[70px] max-w-[1500px] w-[100%] m-auto">
                    <div className="row flex flex-wrap ml-[-15px] mr-[-15px] relative pl-[8%]">
                        <div className="section-title padd-15 flex-[0_0_100%] max-w-[100%] mb-[60px] pl-[15px] pr-[15px]">
                            <h2 className="text-[40px] text-[#302e4d] relative font-bold">A propos de Moi</h2>
                        </div>
                    </div>
                    <div className="row flex flex-wrap ml-[-15px] mr-[-15px] relative pl-[8%]">
                        <div className="about-content padd-15 flex-[0_0_100%] max-w-[100%] pl-[15px] pr-[15px]">
                            <div className="row flex flex-wrap ml-[-15px] mr-[-15px] relative">
                                <div className="about-text padd-15  pl-[15px] pr-[15px">
                                    <h3 className="text-[24px] mb-[15px] font-bold text-[#302e4d]">Je suis Zana Sidi-Mohamed Coulibaly et je suis <span className="text-[#22b35e]">Etudiant</span></h3>
                                    <p className="text-[16px] leading-6 text-[#504e70]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas id adipisci
                                        odio doloribus esse quia beatae. Deserunt perferendis dignissimos inventore est
                                        suscipit nemo nobis! Quasi dicta magnam in delectus laborum. Lorem ipsum dolor
                                        sit amet consectetur, adipisicing elit. Officiis ex, unde quis soluta
                                        consectetur voluptatibus reprehenderit non temporibus dolore, iste, sunt
                                        distinctio tempora doloremque perferendis maiores odit suscipit consequatur?
                                        Non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi quo
                                        aspernatur, totam id amet qui facilis ducimus quas labore! Aut illum aspernatur
                                        ab provident a natus voluptates, quaerat fuga!</p>
                                </div>
                            </div>
                            <div className="row flex flex-wrap ml-[-15px] mr-[-15px] relative">
                                <div className="personal-info padd-15 flex-[0_0_60%] max-w-[60%] mt-[70px]">
                                    <div className="row flex flex-wrap ml-[-15px] mr-[-15px] relative">
                                        <div className="info-item padd-15 flex-[0_0_50%] max-w-[50%] pl-[15px] pr-[15px]">
                                            <p className="font-semibold p-[10px_0] text-[16px] text-[#302e4d] border-b border-[#e8dfec] ">Date de Naissance : <span className="font-normal text-[#504e70] ml-[4px] inline-block ">15 Juillet 2000</span></p>
                                        </div>
                                        <div className="info-item padd-15 flex-[0_0_50%] max-w-[50%] pl-[15px] pr-[15px]">
                                            <p className="font-semibold p-[10px_0] text-[16px] text-[#302e4d] border-b border-[#e8dfec] ">Sexe : <span className="font-normal text-[#504e70] ml-[4px] inline-block ">Masculin</span></p>
                                        </div>
                                        <div className="info-item padd-15 flex-[0_0_50%] max-w-[50%] pl-[15px] pr-[15px]">
                                            <p className="font-semibold p-[10px_0] text-[16px] text-[#302e4d] border-b border-[#e8dfec] ">Email : <span className="font-normal text-[#504e70] ml-[4px] inline-block ">coulibalyzanasidi@yahoo.com</span></p>
                                        </div>
                                        <div className="info-item padd-15 flex-[0_0_50%] max-w-[50%] pl-[15px] pr-[15px]">
                                            <p className="font-semibold p-[10px_0] text-[16px] text-[#302e4d] border-b border-[#e8dfec] ">Téléphone : <span className="font-normal text-[#504e70] ml-[4px] inline-block ">07 771 000 84</span></p>
                                        </div>
                                        <div className="info-item padd-15 flex-[0_0_50%] max-w-[50%] pl-[15px] pr-[15px]">
                                            <p className="font-semibold p-[10px_0] text-[16px] text-[#302e4d] border-b border-[#e8dfec] ">Niveau : <span className="font-normal text-[#504e70] ml-[4px] inline-block ">Master</span></p>
                                        </div>
                                        <div className="info-item padd-15 flex-[0_0_50%] max-w-[50%] pl-[15px] pr-[15px]">
                                            <p className="font-semibold p-[10px_0] text-[16px] text-[#302e4d] border-b border-[#e8dfec] ">Ville : <span className="font-normal text-[#504e70] ml-[4px] inline-block ">Abidjan</span></p>
                                        </div>
                                    </div>
                                    <div className="row flex flex-wrap ml-[-15px] mr-[-15px] relative">
                                        <div className="button padd-15 mt-[30px] pl-[15px] pr-[15px]">
                                            <a href="#" className="btn text-base font-medium p-[12px_35px] text-[#fff] rounded-[40px] inline-block border-none whitespace-nowrap bg-[#22b35e] transition-all hover:scale-105 mr-[15px] mt-[10px]">Télécharger CV</a>
                                            <a href="#contact" className="btn hire me text-base font-medium p-[12px_35px] text-[#fff] rounded-[40px] inline-block border-none whitespace-nowrap bg-[#22b35e] transition-all hover:scale-105 mr-[15px] mt-[10px]">Hire Me</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills padd-15 flex-[0_0_40%] max-w-[40%] mt-[70px] pl-[15px] pr-[15px]">
                                    <div className="row flex flex-wrap ml-[-15px] mr-[-15px] relative">
                                        <div className="skill-item padd-15 mb-[25px] flex-[0_0_100%] max-w-[100%] pl-[15px] pr-[15px]">
                                            <h5 className="leading-10 font-bold text-[16px] text-[#302e4d] capitalize">Français</h5>
                                            <div className="progress bg-[#e8dfec] h-[7px] w-[100%] relative">
                                                <div className="progress-in absolute left-[0] top-[0] h-[100%] rounded-[4px] bg-[#22b35e] w-[76%]"></div>
                                                <div className="skill-percent absolute text-[#302e4d] top-[-40px] font-normal leading-10 right-0">76%</div>
                                            </div>
                                        </div>
                                        <div className="skill-item padd-15 mb-[25px] flex-[0_0_100%] max-w-[100%] pl-[15px] pr-[15px]">
                                            <h5 className="leading-10 font-bold text-[16px] text-[#302e4d] capitalize">Maths</h5>
                                            <div className="progress bg-[#e8dfec] h-[7px] w-[100%] relative">
                                                <div className="progress-in absolute left-[0] top-[0] h-[100%] rounded-[4px] bg-[#22b35e] w-[86%]"></div>
                                                <div className="skill-percent absolute text-[#302e4d] top-[-40px] font-normal leading-10 right-0">86%</div>
                                            </div>
                                        </div>
                                        <div className="skill-item padd-15 mb-[25px] flex-[0_0_100%] max-w-[100%] pl-[15px] pr-[15px]">
                                            <h5 className="leading-10 font-bold text-[16px] text-[#302e4d] capitalize">Anglais</h5>
                                            <div className="progress bg-[#e8dfec] h-[7px] w-[100%] relative">
                                                <div className="progress-in absolute left-[0] top-[0] h-[100%] rounded-[4px] bg-[#22b35e] w-[96%]"></div>
                                                <div className="skill-percent absolute text-[#302e4d] top-[-40px] font-normal leading-10 right-0">96%</div>
                                            </div>
                                        </div>
                                        <div className="skill-item padd-15 mb-[25px] flex-[0_0_100%] max-w-[100%] pl-[15px] pr-[15px]">
                                            <h5 className="leading-10 font-bold text-[16px] text-[#302e4d] capitalize">Hist-Geo</h5>
                                            <div className="progress bg-[#e8dfec] h-[7px] w-[100%] relative">
                                                <div className="progress-in absolute left-[0] top-[0] h-[100%] rounded-[4px] bg-[#22b35e] w-[65%]"></div>
                                                <div className="skill-percent absolute text-[#302e4d] top-[-40px] font-normal leading-10 right-0">65%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row flex flex-wrap ml-[-15px] mr-[-15px] relative">
                                <div className="education padd-15 flex-[0_0_50%] max-w-[50%] mt-[30px] pl-[15xp] pr-[15px]">
                                    <h3 className="title text-[24px] mb-[30px] font-bold text-[#302e4d]">Education</h3>
                                    <div className="row flex flex-wrap ml-[-15px] mr-[-15px] relative">
                                        <div className="timeline-box padd-15 flex-[0_0_100%] max-w-[100%] pl-[15px] pr-[15px]">
                                            <div className="timeline shadow-[0_0_20px_rgba(48,46,77,0.3)]  bg-[#fdf9ff] p-[30px_15px] border-[#e8dfec] rounded-[10px] w-[100%] relative">
                                                {/* <!-- timline item --> */}
                                                <div className="timeline-item relative p-[37px] pb-[50px]">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date font-normal text-sm mb-[12px] text-[#504e70]">
                                                        <i className="fa fa-calendar"></i> 2011 - 2015
                                                    </h3>
                                                    <h4 className="timeline-title font-bold text-[18px] mb-[15px] capitalize">BEPC</h4>
                                                    <p className="timeline text-base leading-6 text-justify text-[#504e70]">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Sunt cum consequuntur sequi, laudantium facere atque odit
                                                        quidem molestiae officiis nulla facilis delectus ut
                                                        explicabo repellat est iure ipsam sed hic.
                                                    </p>
                                                </div>
                                                {/* <!-- timline item --> */}
                                                <div className="timeline-item relative p-[37px] pb-[50px]">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date font-normal text-sm mb-[12px] text-[#504e70]">
                                                        <i className="fa fa-calendar"></i> 2015 - 2018
                                                    </h3>
                                                    <h4 className="timeline-title font-bold text-[18px] mb-[15px] capitalize">BAC A1</h4>
                                                    <p className="timeline-text-base leading-6 text-justify text-[#504e70]">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Sunt cum consequuntur sequi, laudantium facere atque odit
                                                        quidem molestiae officiis nulla facilis delectus ut
                                                        explicabo repellat est iure ipsam sed hic.
                                                    </p>
                                                </div>
                                                {/* <!-- timline item --> */}
                                                <div className="timeline-item relative p-[37px] pb-[50px]">
                                                    <div className="circle-dot"> </div>
                                                    <h3 className="timeline-date font-normal text-sm mb-[12px] text-[#504e70]">
                                                        <i className="fa fa-calendar"></i> 2018 - 2021
                                                    </h3>
                                                    <h4 className="timeline-title font-bold text-[18px] mb-[15px] capitalize">LICENCE en Sciences-Politiques</h4>
                                                    <p className="timeline-text-base leading-6 text-justify text-[#504e70]">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Sunt cum consequuntur sequi, laudantium facere atque odit
                                                        quidem molestiae officiis nulla facilis delectus ut
                                                        explicabo repellat est iure ipsam sed hic.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience padd-15 flex-[0_0_50%] max-w-[50%] mt-[30px] pl-[15xp] pr-[15px]">
                                    <h3 className="title text-[24px] mb-[30px] font-bold text-[#302e4d]">Experience</h3>
                                    <div className="row flex flex-wrap ml-[-15px] mr-[-15px] relative">
                                        <div className="timeline-box padd-15 flex-[0_0_100%] max-w-[100%] pl-[15px] pr-[15px]">
                                            <div className="timeline shadow-[0_0_20px_rgba(48,46,77,0.3)]  bg-[#fdf9ff] p-[30px_15px] border-[#e8dfec] rounded-[10px] w-[100%] relative">
                                                {/* <!-- timline item --> */}
                                                <div className="timeline-item relative p-[37px] pb-[50px]">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date font-normal text-sm mb-[12px] text-[#504e70]">
                                                        <i className="fa fa-calendar"></i> 2011 - 2015
                                                    </h3>
                                                    <h4 className="timeline-title font-bold text-[18px] mb-[15px] capitalize">BEPC</h4>
                                                    <p className="timeline-text-base leading-6 text-justify text-[#504e70]">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Sunt cum consequuntur sequi, laudantium facere atque odit
                                                        quidem molestiae officiis nulla facilis delectus ut
                                                        explicabo repellat est iure ipsam sed hic.
                                                    </p>
                                                </div>
                                                {/* <!-- timline item --> */}
                                                <div className="timeline-item relative p-[37px] pb-[50px]">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date font-normal text-sm mb-[12px] text-[#504e70]">
                                                        <i className="fa fa-calendar"></i> 2015 - 2018
                                                    </h3>
                                                    <h4 className="timeline-title font-bold text-[18px] mb-[15px] capitalize">BAC A1</h4>
                                                    <p className="timeline-text-base leading-6 text-justify text-[#504e70]">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Sunt cum consequuntur sequi, laudantium facere atque odit
                                                        quidem molestiae officiis nulla facilis delectus ut
                                                        explicabo repellat est iure ipsam sed hic.
                                                    </p>
                                                </div>
                                                {/* <!-- timline item --> */}
                                                <div className="timeline-item relative p-[37px] pb-[50px]">
                                                    <div className="circle-dot"> </div>
                                                    <h3 className="timeline-date font-normal text-sm mb-[12px] text-[#504e70]">
                                                        <i className="fa fa-calendar"></i> 2018 - 2021
                                                    </h3>
                                                    <h4 className="timeline-title font-bold text-[18px] mb-[15px] capitalize">LICENCE en Sciences-Politiques</h4>
                                                    <p className="timeline-text-base leading-6 text-justify text-[#504e70]">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Sunt cum consequuntur sequi, laudantium facere atque odit
                                                        quidem molestiae officiis nulla facilis delectus ut
                                                        explicabo repellat est iure ipsam sed hic.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About