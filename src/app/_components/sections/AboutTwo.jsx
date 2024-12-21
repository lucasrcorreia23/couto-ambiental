import Data from "@data/sections/about-2.json";
import Link from "next/link";

const AboutTwoSection = () => {
    return (
        <>
            {/* about two */}
            <section>
                <div className="container mil-p-120-30">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                        <div className="col-lg-5">

                            <div className="mil-mb-90">                              
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />
                                

                                <div className="row">
                                    {Data.items.map((item, key) => (
                                    <div className="col-6 mil-mb-30" key={`about-two-item-${key}`}>

                                        <div className="mil-counter-frame mil-up">
                                            <h4 className="mil-mb-5"><span className="mil-counter" data-number={item.value}>0</span>{item.valueAfter}</h4>
                                            <p className="mil-dark" dangerouslySetInnerHTML={{__html : item.label}} />
                                        </div>

                                    </div>
                                    ))}
                                </div>
                                <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.atuacao}} />

                            </div>

                        </div>
                        <div className="col-lg-6">

                            <div className="mil-illustration mil-up mil-mb-90">
                                <div className="mil-image-frame">
                                    <img src={Data.image.url} alt={Data.image.alt} className="mil-scale" data-value-1="1" data-value-2="1.3" />
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* about two end */}
        </>
    );
};

export default AboutTwoSection;