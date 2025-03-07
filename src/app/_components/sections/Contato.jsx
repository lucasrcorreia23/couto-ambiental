import Data from "@data/sections/contato.json";
import ContactForm from "@components/ContactForm";

const ContactSection = () => {
  return (
    <>
        {/* contact */}
        <section className="mil-soft-bg mil-relative">
            <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />

            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-60">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <div className="mil-divider-lg mil-up mil-mb-30" />

                            <ul className="mil-list mil-dark mil-up mil-mb-30">                                    
                                    <li>Timbó - SC, </li>
                                    <li>R. Belém, 272 - Das Capitais, </li>
                                    <li>CEP 89120-000</li>
                                </ul>                             
                                <h6 className="mil-upper mil-up mil-mb-30">WhatsApp</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">                                  
                                    <li class="mil-mb-10"><a class="mr-5"href="https://wa.me/554733990561">   <i className="fa-brands fa-whatsapp"> </i>  (47) 3399-0561</a></li>
                                    <li class="mil-mb-10"><a class="mr-5"href="https://wa.me/5521999181341">   <i className="fa-brands fa-whatsapp"> </i>  (21)  99918-1341
                                    </a></li>
                                    
                                    
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">E-mail</h6>
                                <ul className="mil-list mil-dark mil-up">
                                    <li>atendimento@coutosaúdeambiental.com.br</li>
                                
                                </ul>
                        </div>

                    </div>
                    <div className="col-lg-7">
                        <ContactForm subtitleOffset={1} />
                    </div>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default ContactSection;