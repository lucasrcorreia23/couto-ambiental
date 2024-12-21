import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";

import AboutSection from "@components/sections/About";
import IdeasSection from "../_components/sections/Ideas";

import ContactSection from "../_components/sections/Contato";
import ServicesTwoSection from "../_components/sections/ServicesTwo";
import TestimonialrealSlider from "../_components/sliders/Testimonialdepoim";
import HowWeWorkSection from "@components/sections/HowWeWork";
import CoresSection from "@components/sections/Cores";
import AdvantagesSection from "@components/sections/Advantages";
import LatestPostsSection from "@components/sections/LatestPosts";

const HeroTwoSlider = dynamic( () => import("@components/sliders/HeroTwo"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );

export const metadata = {
  title: {
		default: "Início",
	},
  description: AppData.settings.siteDescription,
}

async function Home3() {
  const posts = await getAllPosts();

  return (
    <>
      <HeroTwoSlider /> 
      <PartnersSlider />  
      <AboutSection />
      <IdeasSection />
      <TestimonialSlider/>
      
      <ServicesTwoSection />
      

<Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <AdvantagesSection />
      <section>
          <div className="container mil-p-0-90">
              <div className="mil-background-grid mil-softened" />             

              <div className="mil-center mil-mb-90">                 
                  <h2 className="mil-upper mil-up">Setores de atuação</h2>
              </div>

              <div className="row">
                 
                  <div className="col-lg-4 mil-up">

                      <div className="mil-service-card h-full mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lgx mil-mb-30">
                                  <img src="/img/icons//setores/1.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Industria de Alimentos</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                             </div>
                      </div>

                  </div>
                  <div className="col-lg-4 mil-up">

                      <div className="mil-service-card h-full mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lgx mil-mb-30">
                                  <img src="/img/icons/setores/2.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Administradores e Facilities</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              </div>
                      </div>

                  </div>
                  <div className="col-lg-4 mil-up">

                      <div className="mil-service-card h-full mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lgx mil-mb-30">
                                  <img src="/img/icons/setores/3.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Indústrias Farmacêuticas</h4>
                              <div className="mil-divider-sm mil-mb-20" />                                                           
                          </div>
                      </div>

                  </div>
                  <div className="col-lg-3 mil-up">

                      <div className="mil-service-card h-full mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lgx mil-mb-30">
                                  <img src="/img/icons/setores/4.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Bares, Cafeterias e Restaurantes</h4>
                              <div className="mil-divider-sm mil-mb-20" />                                                           
                          </div>
                      </div>

                  </div>
                  <div className="col-lg-3 mil-up">

                      <div className="mil-service-card h-full mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lgx mil-mb-30">
                                  <img src="/img/icons/setores/5.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Supermercados e Comércio de Alimentos</h4>
                              <div className="mil-divider-sm mil-mb-20" />                                                        
                          </div>
                      </div>

                  </div>
                  <div className="col-lg-3 mil-up">

                      <div className="mil-service-card h-full mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lgx mil-mb-30">
                                  <img src="/img/icons/setores/6.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Transporte</h4>
                              <div className="mil-divider-sm mil-mb-20" />                                                            
                          </div>
                      </div>

                  </div>
                  <div className="col-lg-3 mil-up">

                      <div className="mil-service-card h-full mil-mb-30">
                          
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lgx mil-mb-30">
                                  <img src="/img/icons/setores/7.svg" alt="brand" />
                              </div>
                              <h4 className="mil-upper mil-mb-20">Outros setores</h4>
                              <div className="mil-divider-sm mil-mb-20" />                                                            
                          </div>
                      </div>

                  </div>
                  
              
              </div>
          </div>
      </section>
      <TestimonialrealSlider/>
      <ContactSection />    
           
     
    </>
  );
};
export default Home3;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}