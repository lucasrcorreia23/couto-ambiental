import Data from "@data/sections/equipe.json";

import styles from "./Equipe.module.css";

const EquipeSection = () => {
  return (
    <>
        {/* equipe */}
        <section>
            <div className="container mil-p-120-90">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-center">
                    <div className="col-lg-8">

                        <div className="mil-center mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">{Data.title}</h2>
                            <p className="mil-up">{Data.description}</p>
                        </div>

                    </div>
                </div>

                {Data.groups.map((group) => (

                <div className={`row justify-content-center ${styles.group}`} key={`equipe-group-${group.id}`}>

                    {group.members.map((member, key) => (

                    <div className={`${group.columnClass} mil-up`} key={`equipe-${group.id}-item-${key}`}>

                        <div className={`${styles.card} ${group.featured ? styles.featured : ""} mil-mb-30`}>

                            <div className={styles.frame}>
                                <img src={member.image} alt={member.name} />
                            </div>

                            <div className="mil-center">
                                <h5 className={`${styles.name} mil-upper`}>{member.name}</h5>
                                <p className={styles.role}>{member.role}</p>
                            </div>

                        </div>

                    </div>

                    ))}

                </div>

                ))}

            </div>
        </section>
        {/* equipe end */}
    </>
  );
};

export default EquipeSection;
