'use client'

import { useCallback, useEffect, useRef, useState } from "react";

import Data from "@data/sections/ideas.json";
import Link from "next/link";
import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Ideas.module.css";

const MODAL_TITLE_ID = "mil-praga-modal-title";

const IdeasSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const lastTriggerRef = useRef(null);
    const closeButtonRef = useRef(null);

    const isOpen = activeIndex !== null;
    const activeItem = isOpen ? Data.items[activeIndex] : null;

    const openModal = (index, event) => {
        lastTriggerRef.current = event.currentTarget;
        setActiveIndex(index);
    };

    const closeModal = useCallback(() => {
        setActiveIndex(null);

        if (lastTriggerRef.current) {
            lastTriggerRef.current.focus();
        }
    }, []);

    // escape para fechar + trava do scroll do body enquanto o modal estiver aberto
    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        if (closeButtonRef.current) {
            closeButtonRef.current.focus();
        }

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, closeModal]);

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

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
                                <div className="col-4" key={`ideas-item-${key}`}>

                                    <button
                                        type="button"
                                        onClick={(event) => openModal(key, event)}
                                        className={`${styles.trigger} mil-icon-box mil-sm-center mil-mb-30`}
                                        aria-haspopup="dialog"
                                    >
                                        <span className="mil-icon mil-icon-accent-bg mil-up mil-mb-30">
                                            <img src={item.icon} alt="" />
                                        </span>
                                        <span className={`${styles.label} mil-h6 mil-upper mil-up`} dangerouslySetInnerHTML={{__html : item.label}} />
                                    </button>

                                </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* ideas end */}

            {/* ideas modal */}
            {isOpen && (
                <div className={styles.backdrop} onClick={handleBackdropClick}>
                    <div
                        className={styles.dialog}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={MODAL_TITLE_ID}
                    >
                        <button
                            type="button"
                            ref={closeButtonRef}
                            onClick={closeModal}
                            className={styles.close}
                            aria-label="Fechar"
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
                                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                            </svg>
                        </button>

                        <span className={styles.icon}>
                            <img src={activeItem.icon} alt="" />
                        </span>

                        <h3 id={MODAL_TITLE_ID} className={styles.title}>{activeItem.label}</h3>
                        <p className={styles.text}>{activeItem.text}</p>
                    </div>
                </div>
            )}
            {/* ideas modal end */}
        </>
    );
};
export default IdeasSection;
