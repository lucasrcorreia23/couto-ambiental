
import Link from "next/link";

const ServicesAbout = () => {
  return (
    <>
       
        <section id="one">
        <div className="container mil-p-0-30">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                       
                        <h2 className="mil-upper mil-up mil-mb-30" >Nossos serviços </h2>
                        <p className="mil-up mil-mb-40" >Oferecemos uma gama de serviços que incluem o controle de vetores e pragas, além de higienização e impermeabilização de estofados. Nosso compromisso é com a segurança, conforto e bem-estar da sociedade, sempre com um olhar completo sobre o ecossistema.
                        </p>
                        <div className="mil-up">
                            <Link href="/servicos" className="mil-link mil-upper">
                             Conheça nossos serviços
                                <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
                            </Link>
                        </div>
                        
                    </div>

                </div>
                <div className="col-lg-6">
                    <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                        
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src="/img/photo/sobre2.png" alt="teste" />
                                        </div>
                                    </div>                                
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* company two slider end */}
      
    </>
  );
};

export default ServicesAbout;