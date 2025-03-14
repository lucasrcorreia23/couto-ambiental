"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
    {/* footer */}
    <footer className="mil-relative">
        <img src="/img/photo/footer2.jpg" className="mil-bg-img mil-parallax" alt="image" style={{"objectPosition": "top"}} data-value-1="-25%" data-value-2="23%" />

        <div className="" />
        <div className="container mil-p-120-90">
            <div className="mil-background-grid" />

            <div className="row align-items-end">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-12">

                            <div className="mil-footer-navigation mil-up mil-mb-90">
                                <nav>
                                    <ul>
                                        {AppData.footer.menu.map((item, key) => (
                                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active" : ""}>
                                            <Link href={item.link}>{item.label}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Timbó - Santa Catarina, Brasil.
                            </span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">R. Belém, 272 - Das Capitais, <br></br>CEP 89120-000 <br/>(47) 3399-0561<br/>


                            </p>
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-4">
                    <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
                        <img src={AppData.footer.logo.image} alt={AppData.footer.logo.alt} style={{"width": "130px"}} />
                    </Link>
                    <div className="mil-footer-logo mil-up">
        <a href="https://www.instagram.com/coutosaudeambiental/" target="_blank" rel="noopener noreferrer" className="mil-social-icon">
            <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/coutoimunizadora" target="_blank" rel="noopener noreferrer" className="mil-social-icon">
            <i className="fab fa-facebook"></i>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=554733990561&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="mil-social-icon">
            <i className="fab fa-whatsapp"></i>
        </a>
    </div>  
                    
                </div>
               
            </div>
        </div>
        <div className="container-fluid">

            <div className="mil-footer-bottom">
                <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
                         
            </div>

        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
