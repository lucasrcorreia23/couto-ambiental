import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
    title: {
        default: "Contato",
    },
    description: AppData.settings.siteDescription,
}

const Contact = () => {
  return (
    <>
        <PageBanner pageTitle={"Chama a Couto!"} breadTitle={"Contato"} bgImage={"/img/uploads/banner-contato.png"} />

        {/* about */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between">
                    <div className="col-lg-6">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">Informações de contato</h2>
                            <p className="mil-up mil-mb-40">Tem alguma dúvida sobre nossos serviços de controle de pragas, higienização ou impermeabilização? Precisa de uma solução personalizada para o seu espaço? Nossa equipe especializada está pronta para ajudar você a manter seu ambiente seguro, limpo e saudável.</p>
                        </div>

                    </div>
                    <div className="col-lg-4 mil-relative">

                        <div className="mil-contact-sidebar">

                            <img src="img/uploads/info-contato.png" alt="img" style={{"width": "100%", "height": "200px", "objectFit": "cover","border-radius":"4px"}} className="mil-mb-30" />

                            <div className="mil-sidebar-info">

                                <h6 className="mil-upper mil-up mil-mb-30">Localização</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>Brasil</li>
                                    <li>Timbó - Santa Catarina, </li>
                                    <li>R. Belém, 272 - Das Capitais, </li>
                                    <li>CEP 89120-000</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">Phone</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>(47) 3399-0561
                                    </li>
                                    <li>(47) 98847-0326</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">Email</h6>
                                <ul className="mil-list mil-dark mil-up">
                                    <li>joyce@coutoimunizadora.com.br</li>
                                    <li>hello@ruizarch.com</li>
                                </ul>
                                
                            </div>

                        </div>

                    </div>
                   
                </div>
            </div>
        </section>
        {/* about end */}

        {/* map */}
        <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.71405634277!2d-49.281770124563764!3d-26.817231976704278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94defc0254cbeddf%3A0xca11066d59e039f!2sCouto%20Sa%C3%BAde%20Ambiental!5e0!3m2!1spt-BR!2sbr!4v1731972614428!5m2!1spt-BR!2sbr" 
                    style={{"border": "0"}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
        {/* map end */}

        {/* contact */}
        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">Solicite agora o seu orçamento</h2>
                            <p className="mil-up mil-mb-30">Informações ou dúvidas? Fale com a gente!</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <ContactForm />

                    </div>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default Contact;
