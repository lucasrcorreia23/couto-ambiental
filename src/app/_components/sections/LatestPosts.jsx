import Data from "@data/sections/latest-posts.json";
import Date from '@library/date';
import Link from "next/link";

const LatestPostsSection = ( { posts, paddingTop } ) => {
    
    return (
        <>
            {/* blog */}
            <section>
                <div className={paddingTop ? "container mil-p-60-60" : "container mil-p-0-60"}>
                    <div className="mil-background-grid mil-softened" />

                    <div className="row">
                        <div className="col-12">

                            <div className="mil-center mil-p-120-60">
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <p className="mil-up">Na Couto Saúde Ambiental, entendemos a importância de manejar a presença de morcegos e pombos em ambientes urbanos de maneira responsável e legal. Esses animais, embora possam causar incômodos, desempenham papeis ecológicos essenciais e são protegidos por legislações </p>
                            </div>

                        </div>
                        {posts.slice(0, Data.numOfItems).map((item, key) => (
                        <div className="col-lg-6" key={`blog-post-${key}`}>

                            <div className="mil-blog-card mil-mb-60">
                                <div className="mil-cover mil-up mil-long">
                                    <img src={item.image} alt={item.title} />
                                    
                                </div>
                                <div className="mil-description">
                                    
                                    <h4 className="mil-upper mil-up mil-mb-30">{item.title}</h4>
                                    <p className="mil-up">{item.short}</p>
                                </div>
                            </div>

                        </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* blog end */}
        </>
    );
};

export default LatestPostsSection;