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
      <PageBanner pageTitle={"Nossas soluções"} breadTitle={"Serviços"} bgImage={"/img/uploads/banner-servicos.png"} />
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
                      
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                          Sanitização
                          </h2>
                        <p className="mil-up mil-mb-40" >

                        A sanitização combate vírus, bactérias, fungos e ácaros, melhorando a qualidade do ar e reduzindo crises alérgicas. Nossa técnica protege contra doenças respiratórias e mantém o ambiente livre de microrganismos invisíveis que afetam a saúde.
                          </p>
                        <div className="mil-up">
                            <Link href="/contato" className="mil-link mil-upper">
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
                                            <img src="/img/uploads/sanitizacao.png" alt="#" />
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
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Proteção</h4>
                            <p>Afasta agentes nocivos e melhora a qualidade do ar.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Bem-estar</h4>
                            <p>Ambiente mais saudável para pessoas alérgicas e sensíveis.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Eficiência</h4>
                            <p>Métodos eficazes para manter espaços limpos e seguros.</p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 2 */}

       {/* content 3 */}
    <section>
        <div id="three" className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                        
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                        Desratização
                          </h2>
                        <p className="mil-up mil-mb-40" >

                        A desratização é essencial para prevenir a presença de roedores, que podem causar danos e transmitir doenças graves. Realizada de forma segura por nossa equipe, essa solução protege seu espaço contra riscos à saúde e evita contaminações.

                          </p>
                        <div className="mil-up">
                            <Link href="/contato" className="mil-link mil-upper">
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
                                            <img src="/img/uploads/desra.png" alt="desratizacao" />
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
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Proteção</h4>
                            <p>Impede a proliferação de roedores e as doenças que transmitem.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Segurança</h4>
                            <p>Métodos seguros para ambientes residenciais e comerciais.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Controle</h4>
                            <p>Prevenção de danos estruturais e contaminações.</p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 3 */}



       {/* content 4 */}
    <section>
        <div id="four" className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                        
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                        Descupinização
                          </h2>
                        <p className="mil-up mil-mb-40" >

                        Proteja seu patrimônio contra os cupins, que destroem móveis e estruturas. Nossa descupinização utiliza métodos seguros e precisos, garantindo o controle eficaz dos cupins e evitando prejuízos. Ideal para ambientes com crianças, pets e pessoas alérgicas.

                          </p>
                        <div className="mil-up">
                            <Link href="/contato" className="mil-link mil-upper">
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
                                            <img src="/img/uploads/descupim.png" alt="Descupinização" />
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
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Preservação</h4>
                            <p>Protege móveis e estruturas de danos permanentes.
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Eficiência</h4>
                            <p>Elimina cupins com segurança e precisão.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Sustentabilidade</h4>
                            <p>Produtos que respeitam a saúde e o ambiente.</p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 4 */}

       {/* content 5 */}
    <section>
        <div id="five" className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">                          
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                        Limpeza de Caixa d'água
                          </h2>
                        <p className="mil-up mil-mb-40" >
                        Assegure água limpa e segura com a limpeza profissional de sua caixa d’água. Nossa equipe segue protocolos rigorosos para eliminar fungos, bactérias e sujeiras que comprometem a qualidade da água e a saúde de sua família.
                          </p>
                        <div className="mil-up">
                            <Link href="/contato" className="mil-link mil-upper">
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
                                        <img src="/img/uploads/limpeza.png" alt="Limpeza de caixa d'água" />
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
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Saúde</h4>
                            <p>Evita doenças relacionadas ao consumo de água contaminada.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Proteção</h4>
                            <p>Retira resíduos e impurezas da caixa d'água.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Prevenção</h4>
                            <p>Recomendada a cada 6 meses para uma água sempre pura.
                            </p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 5 */}



       {/* content 6 */}
    <section>
        <div id="six" className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">                        
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                        Higienização de Estofados
                          </h2>
                        <p className="mil-up mil-mb-40" >

                        Elimine ácaros, fungos e bactérias dos estofados e garanta um ambiente saudável e seguro. Nossa higienização profunda protege contra doenças respiratórias e renova sofás e poltronas, aumentando seu conforto e vida útil.
                          </p>
                        <div className="mil-up">
                            <Link href="/contato" className="mil-link mil-upper">
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
                                        <img src="/img/uploads/estofados.png" alt="Higienização de Estofados" />
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
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Saúde</h4>
                            <p>Remove microrganismos nocivos à saúde.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Conforto</h4>
                            <p>Mantém os estofados limpos e confortáveis.
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Preservação</h4>
                            <p>Protege e prolonga a vida dos estofados.</p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 6 */}





       {/* content 7 */}
    <section>
        <div id="seven" className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                          
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                        Impermeabilização de Estofados
                          </h2>
                        <p className="mil-up mil-mb-40" >                       
Proteja seus estofados contra manchas e sujeiras com a impermeabilização. Esse serviço evita absorção de líquidos e mantém os estofados com aparência renovada, preservando sua durabilidade e facilitando a limpeza.
                          </p>
                        <div className="mil-up">
                            <Link href="/contato" className="mil-link mil-upper">
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
                                            <img src="/img/uploads/estofados2.png" alt="estofados" />
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
            <div  className="container mil-p-60-120">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                   
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Proteção</h4>
                            <p>Evita manchas e facilita a limpeza.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Durabilidade</h4>
                            <p>Aumenta a vida útil dos estofados.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Praticidade</h4>
                            <p>Reduz a necessidade de limpezas frequentes.                            </p>
                        </div>

                    </div>
                 
                </div>
            </div>
      </section>
      {/* features end 7 */}




       {/* content 8 */}
    <section>
        <div id="eight" className="container mil-p-120-0">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                        
                          </span>
                        <h2 className="mil-upper mil-up mil-mb-30">
                        Higienização de Colchões
                          </h2>
                        <p className="mil-up mil-mb-40" >

                        Durma em um ambiente saudável com colchões livres de ácaros e impurezas. Nossa higienização de colchões protege contra alergias e doenças respiratórias, proporcionando um descanso mais seguro e de qualidade.

                          </p>
                        <div className="mil-up">
                            <Link href="/contato" className="mil-link mil-upper">
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
                                            <img src="/img/uploads/colchao.png" alt="Colchões" />
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
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Saúde</h4>
                            <p>Reduz crises alérgicas e problemas respiratórios.</p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Conforto</h4>
                            <p>Colchão sempre limpo para um sono tranquilo.
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-4">

                        <div className="mil-icon-box mil-up mil-mb-60">
                            <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src="/img/icons/5.svg" alt="Couto Branding" />
                            </div>
                            <h4 className="mil-upper mil-mb-30">Proteção</h4>
                            <p>Evita a proliferação de ácaros e bactérias.</p>
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