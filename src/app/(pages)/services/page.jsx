import React, { Suspense } from "react";

import AppData from "@data/app.json";

import dynamic from "next/dynamic";

import { getSortedServicesData } from "@library/services";

import PageBanner from "@components/PageBanner";
import VisionSection from "@components/sections/Vision";
import FeaturesTwoSection from "@components/sections/FeaturesTwo";
import AboutFourSection from "@components/sections/AboutFour";
import CallToActionSection from "@components/sections/CallToAction";
import FeaturesSection from "@components/sections/Features";

import Link from "next/link";

const CompanyTwoSlider = dynamic( () => import("@components/sliders/CompanyTwo"), { ssr: false } );

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
      <PageBanner pageTitle={"Nossas soluções"} breadTitle={"Serviços"} bgImage={"/img/photo/12.jpg"} />
         
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

              <div className="mil-center mil-mb-90">
                  <span className="mil-suptitle mil-upper mil-up mil-mb-30">O que você precisa?</span>
                  <h2 className="mil-upper mil-up">Conheça nossos serviços</h2>
              </div>

              <div className="row justify-content-center">
                  {services.map((item, key) => (
                  <div className="col-lg-4 mil-up" key={`services-item-${key}`}>

                      <Link href={`/contact`} className=" mil-service-card mil-mb-30">
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
                      </Link>

                  </div>
                  ))}
              </div>
          </div>
      </section>
      {/* services end */}

      <CompanyTwoSlider />   

       <FeaturesSection />  

      <CallToActionSection />
    </>
  );
};
export default Services;

async function getAllServices() {
  const allServices = getSortedServicesData();
  return allServices;
}