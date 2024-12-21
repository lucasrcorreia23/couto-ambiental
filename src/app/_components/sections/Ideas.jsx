'use client'

import Data from "@data/sections/ideas.json";
import Link from "next/link";
import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const IdeasSection = () => {
    return (
        <>
            {/* ideas */}
            <section>
                <div className="container mil-p-0-90">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-6">

                            <div>
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                       
                      
                  
                             
                                    <div className="mil-illustration" data-swiper-parallax-x="50" data-swiper-parallax-scale="1.3">
                                        <div className="mil-image-frame">
                                            <img src="/img/uploads/qual-praga.png" alt="{item.alt}" />
                                        </div>
                                    </div>
                        
                       
                    </div>
                            </div>

                        </div>
                        <div className="col-lg-5 mil-mt-suptitle-offset">

                            <p className="mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />

                            <div className="row">
                                {Data.items.map((item, key) => (
                                <div className="col-sm-4" key={`ideas-item-${key}`}>

                                    <div href={item.link} className="mil-icon-box mil-sm-center mil-mb-30">
                                        <div className="mil-icon mil-icon-accent-bg mil-up mil-mb-30">
                                            <img src={item.icon} alt="icon" />
                                        </div>
                                        <h6 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : item.label}} />
                                    </div>

                                </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* ideas end */}
        </>
    );
};
export default IdeasSection;