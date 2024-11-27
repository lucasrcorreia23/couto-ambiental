import React, { Suspense } from "react";



import AppData from "@data/app.json";

import dynamic from "next/dynamic";

import { getSortedServicesData } from "@library/services";

import PageBanner from "@components/PageBanner";

import CallToActionSection from "@components/sections/CallToAction";
import FeaturesSection from "@components/sections/Features";
import ScrollToTop from "@components/ScrollToTop";

import Link from "next/link";

const CompanyTwoSlider = dynamic( () => import("@components/sliders/CompanyTwo"), { ssr: false } );

// Importa SmoothScroll dinamicamente para evitar execução no servidor
const SmoothScroll = dynamic(() => import('smooth-scroll'), { ssr: false });
// Importa o SmoothScrollWrapper
const SmoothScrollWrapper = dynamic(() => import("@components/SmoothScrollWrapper"), { ssr: false })

export const metadata = {
  title: {
    default: "Serviços",
  },
  description: AppData.settings.siteDescription,
}

async function Services() {
  const services = await getAllServices();
 
  

  
  return (
    <>
    <SmoothScrollWrapper /> {/* Inicializa o scroll suave no cliente */}
      <PageBanner pageTitle={"Nossas soluções"} breadTitle={"Serviços"} bgImage={"/img/photo/12.jpg"} />
      <ScrollToTop />
      {/* services */}
      <section>
          <div className="container mil-p-120-90">
              <div className="mil-background-grid mil-softened" />

              <div className="row justify-content-center">
                  <div className="col-lg-8">

                      <div className="mil-center mil-mb-120">
                          <span className="mil-suptitle mil-upper mil-up mil-mb-30">Controle de pragas e higienização</span>
                          <p className="mil-text-lg mil-up">Cuidar da saúde e segurança dos ambientes onde vivemos e trabalhamos é essencial. A Couto Saúde Ambiental oferece soluções completas em controle de pragas e higienização, com serviços especializados e profissionais qualificados. Com 25 anos de experiência, garantimos um ambiente livre de riscos para você, sua família e seu negócio.
                          </p>
                      </div>

                  </div>
              </div>

              <div id="back" className="mil-center mil-mb-90">
                  <span className="mil-suptitle mil-upper mil-up mil-mb-30">O que você precisa?</span>
                  <h2 className="mil-upper mil-up">Conheça nossos serviços</h2>
              </div>

              <div className="row justify-content-center">
                  {services.map((item, key) => (
                  <div className="col-lg-4 mil-up" key={`services-item-${key}`}>

                      <a href={item.link.startsWith('#') ? item.link : `#${item.link}`} className=" mil-service-card mil-mb-30">
                          <div className="mil-card-number">{key<10 ? "0" + (key+1) + "." : (key+1) + "."}</div>
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lg mil-mb-30">
                                  <img src={item.icon} alt={item.title} />
                              </div>
                              <h4 className="mil-upper mil-mb-20">{item.title}</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              <p className="mil-service-text">{item.short}</p>
                              <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg">
                                  <img src="/img/icons/1.svg" alt="icon" />
                              </div>
                          </div>
                      </a>

                  </div>
                  ))}
              </div>
          </div>
      </section>
      {/* services end */}

      <CompanyTwoSlider />  
       <FeaturesSection /> 

    {/* content 2 */}
    <section>
        <div id="two" className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                          texto
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                          Sanitização
                          </h2>
                        <p className="mil-up mil-mb-40" >

                          texto
                          </p>
                        <div className="mil-up">
                            <Link href="#" className="mil-link mil-upper">
                                Saiba mais
                                <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                        
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src="/img/photo/8.jpg" alt="#" />
                                        </div>
                                    </div>
                              
                       
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* content end 2 */}

     {/* features 2 */}
     <section>
            <div className="container mil-p-60-120">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                   
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 2 */}

       {/* content 3 */}
    <section>
        <div className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                          texto
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                          texto
                          </h2>
                        <p className="mil-up mil-mb-40" >

                          texto
                          </p>
                        <div className="mil-up">
                            <Link href="#" className="mil-link mil-upper">
                                Saiba mais
                                <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                        
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src="/img/photo/8.jpg" alt="#" />
                                        </div>
                                    </div>
                              
                       
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* content end 3 */}



     {/* features 3 */}
     <section>
            <div className="container mil-p-60-120">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                   
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 3 */}



       {/* content 4 */}
    <section>
        <div className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                          texto
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                          texto
                          </h2>
                        <p className="mil-up mil-mb-40" >

                          texto
                          </p>
                        <div className="mil-up">
                            <Link href="#" className="mil-link mil-upper">
                                Saiba mais
                                <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                        
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src="/img/photo/8.jpg" alt="#" />
                                        </div>
                                    </div>
                              
                       
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* content end 4 */}

     {/* features 4 */}
     <section>
            <div className="container mil-p-60-120">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                   
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 4 */}

       {/* content 5 */}
    <section>
        <div className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                          texto
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                          texto
                          </h2>
                        <p className="mil-up mil-mb-40" >

                          texto
                          </p>
                        <div className="mil-up">
                            <Link href="#" className="mil-link mil-upper">
                                Saiba mais
                                <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                        
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src="/img/photo/8.jpg" alt="#" />
                                        </div>
                                    </div>
                              
                       
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* content end 5 */}

     {/* features 5 */}
     <section>
            <div className="container mil-p-60-120">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                   
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 5 */}



       {/* content 6 */}
    <section>
        <div className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                          texto
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                          texto
                          </h2>
                        <p className="mil-up mil-mb-40" >

                          texto
                          </p>
                        <div className="mil-up">
                            <Link href="#" className="mil-link mil-upper">
                                Saiba mais
                                <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                        
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src="/img/photo/8.jpg" alt="#" />
                                        </div>
                                    </div>
                              
                       
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* content end 6 */}

     {/* features 6 */}
     <section>
            <div className="container mil-p-60-120">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                   
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 6 */}





       {/* content 7 */}
    <section>
        <div className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                          texto
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                          texto
                          </h2>
                        <p className="mil-up mil-mb-40" >

                          texto
                          </p>
                        <div className="mil-up">
                            <Link href="#" className="mil-link mil-upper">
                                Saiba mais
                                <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                        
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src="/img/photo/8.jpg" alt="#" />
                                        </div>
                                    </div>
                              
                       
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* content end 7 */}

     {/* features 7 */}
     <section>
            <div className="container mil-p-60-120">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                   
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 7 */}




       {/* content 8 */}
    <section>
        <div className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                          texto
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                          texto
                          </h2>
                        <p className="mil-up mil-mb-40" >

                          texto
                          </p>
                        <div className="mil-up">
                            <Link href="#" className="mil-link mil-upper">
                                Saiba mais
                                <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                        
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src="/img/photo/8.jpg" alt="#" />
                                        </div>
                                    </div>
                              
                       
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* content end 8 */}

     {/* features 8 */}
     <section>
            <div className="container mil-p-60-120">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                   
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="#" alt="teste" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Controle e eliminação de pragas para evitar danos e infestações.</p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 8 */}




      <CallToActionSection />
    </>
  );
};
export default Services;

async function getAllServices() {
  const allServices = getSortedServicesData();
  return allServices;
}