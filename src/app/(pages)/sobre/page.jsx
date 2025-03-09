import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import AwardsSection from "@components/sections/Awards";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import ContactInfoSection from "@components/sections/ContactInfo";
import ServicesAbout from "@components/sections/ServicesAbout";
import AboutTwoSection from "@components/sections/AboutTwo";


import { getSortedServicesData } from "@library/services";

const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );
const CompanySlider = dynamic( () => import("@components/sliders/Company"), { ssr: false } );
const ProcessSlider = dynamic( () => import("@components/sliders/Process"), { ssr: false } );
const CompanyTwoSlider = dynamic( () => import("@components/sliders/CompanyTwo"), { ssr: false } );



export const metadata = {
  title: {
		default: "Sobre nós",
	},
  description: AppData.settings.siteDescription,
}


const About = () => {
  
  
  return (
    
    <>
      <PageBanner pageTitle={"Sobre nós"} breadTitle={"sobre"} bgImage={"/img/photo/sobre-3.png"} />
      <AboutTwoSection />
      <section>
      <div className="container mil-p-0-60">
              <div className="mil-background-grid mil-softened" />

              <div className="row justify-content-center">
                  <div className="col-lg-8">

                      <div className="mil-center mil-mb-120">
                          <span className="mil-suptitle mil-upper mil-up mil-mb-30">Nossa missão</span>
                          <p className="mil-text-lg mil-up">Garantir ambientes saudáveis a sociedade, amenizando prejuizos através do controle de vetores e pragas urbanas.
                          </p>
                      </div>
                      <div className="mil-center">
                          <span className="mil-suptitle mil-upper mil-up mil-mb-30">Nossa visão</span>
                          <p className="mil-text-lg mil-up">Ser reconhecida como empresa que gera saúde, bem estar e conforto, garantindo equilibrio entre seres humanos e a natureza, munidos de ciência e segurança.
                          </p>
                      </div>

                  </div>
              </div>
          </div>
      </section>
      <section>
          <div className="container mil-p-120-90">
              <div className="mil-background-grid mil-softened" />             

              <div className="mil-center mil-mb-90">                 
                  <h2 className="mil-upper mil-up">Nossos princípios</h2>
              </div>

              <div className="row">
                 
                  <div className="col-lg-4 mil-up">

                      <div className="mil-service-card mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lg mil-mb-30">
                                  <img src="/img/icons/5.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Sustentabilidade</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              <p> Praticamos ações que respeitam e preservam o meio ambiente, acreditando que o equilíbrio entre a natureza e o ser humano é o pilar de uma sociedade saudável.</p>                              
                          </div>
                      </div>

                  </div>
                  <div className="col-lg-4 mil-up">

                      <div className="mil-service-card mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lg mil-mb-30">
                                  <img src="/img/icons/5.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Ética e Empatia</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              <p> Atuamos com integridade e empatia, sempre considerando os interesses da humanidade e do meio ambiente.</p>                              
                          </div>
                      </div>

                  </div>
                  <div className="col-lg-4 mil-up">

                      <div className="mil-service-card mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lg mil-mb-30">
                                  <img src="/img/icons/5.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Inovação e Tecnologia</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              <p> Investimos continuamente em tecnologia e inovação para oferecer soluções eficazes e atualizadas.
                              </p>                              
                          </div>
                      </div>

                  </div>
                  <div className="col-lg-3 mil-up">

                      <div className="mil-service-card mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lg mil-mb-30">
                                  <img src="/img/icons/5.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Saúde e Segurança</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              <p> Garantimos a segurança e o bem-estar em todos os serviços que prestamos.
                              </p>                              
                          </div>
                      </div>

                  </div>
                  <div className="col-lg-3 mil-up">

                      <div className="mil-service-card mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lg mil-mb-30">
                                  <img src="/img/icons/5.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Empatia e Atendimento</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              <p> Valorizamos o relacionamento com nossos clientes, oferecendo um atendimento personalizado e atencioso.
                              </p>                              
                          </div>
                      </div>

                  </div>
                  <div className="col-lg-3 mil-up">

                      <div className="mil-service-card mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lg mil-mb-30">
                                  <img src="/img/icons/5.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Confiabilidade</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              <p> Construímos confiança através de resultados consistentes e de alta qualidade.
                              </p>                              
                          </div>
                      </div>

                  </div>
                  <div className="col-lg-3 mil-up">

                      <div className="mil-service-card mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lg mil-mb-30">
                                  <img src="/img/icons/5.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Conscientização</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              <p> Educamos nossos clientes e a comunidade sobre práticas sustentáveis e seguras.
                              </p>                              
                          </div>
                      </div>

                  </div>
              
              </div>
          </div>
      </section>
      {/* services end */}
      
      <ServicesAbout /> 
      
     
    </>
  );
};
export default About;
