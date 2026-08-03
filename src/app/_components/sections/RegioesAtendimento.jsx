'use client';

import { useState } from "react";

import Data from "@data/sections/regioes.json";
import styles from "./RegioesAtendimento.module.css";

/*  A arte do mapa é o PNG enviado pelo cliente (divisas dos estados e pins já
    desenhados). Sobre ela ficam áreas de hover transparentes, uma por pin,
    posicionadas em % — as coordenadas foram medidas na própria imagem, então
    acompanham qualquer escala. É o que permite o rótulo no hover pedido no
    briefing sem abrir mão da arte aprovada.                                  */
const RegioesAtendimentoSection = () => {
    const [activeUf, setActiveUf] = useState(null);

    /* Só reagimos a hover de mouse: em telas de toque o rótulo aparece no tap. */
    const handleEnter = (event, uf) => {
        if (event.pointerType && event.pointerType !== "mouse") return;
        setActiveUf(uf);
    };

    const handleLeave = (event) => {
        if (event.pointerType && event.pointerType !== "mouse") return;
        setActiveUf(null);
    };

    const activeState = Data.states.find((state) => state.uf === activeUf) || null;

    return (
        <>
            {/* regiões de atendimento */}
            <section>
                <div className="container mil-p-0-90">
                    <div className="mil-background-grid mil-softened" />

                    <div className="mil-center mil-mb-60">
                        <h2 className="mil-upper mil-up mil-mb-30">{Data.title}</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <p className="mil-up">{Data.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                            <div className={`${styles.mapWrapper} mil-up`}>
                                <img className={styles.map} src={Data.image} alt={Data.mapLabel} />

                                {Data.states.map((state) => (
                                    <button
                                        type="button"
                                        key={`regiao-pin-${state.uf}`}
                                        className={`${styles.hotspot} ${activeUf === state.uf ? styles.isActive : ""}`}
                                        style={{ left: `${state.x}%`, top: `${state.y}%` }}
                                        aria-label={state.name}
                                        aria-pressed={activeUf === state.uf}
                                        onPointerEnter={(event) => handleEnter(event, state.uf)}
                                        onPointerLeave={handleLeave}
                                        onFocus={() => setActiveUf(state.uf)}
                                        onBlur={() => setActiveUf(null)}
                                        onClick={() => setActiveUf(state.uf)}
                                    >
                                        <span className={styles.halo} />
                                    </button>
                                ))}

                                {activeState && (
                                    <span
                                        className={styles.tooltip}
                                        style={{
                                            left: `${activeState.x}%`,
                                            top: `${activeState.y - 7}%`,
                                        }}
                                    >
                                        {activeState.name}
                                    </span>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* lista sempre visível: garante os nomes no mobile, onde não há hover */}
                    <ul className={`${styles.stateList} mil-up`}>
                        {Data.states.map((state) => (
                            <li
                                key={`regiao-item-${state.uf}`}
                                className={`${styles.stateItem} ${activeUf === state.uf ? styles.isActive : ""}`}
                                onPointerEnter={(event) => handleEnter(event, state.uf)}
                                onPointerLeave={handleLeave}
                            >
                                <span className={styles.stateUf}>{state.uf}</span>
                                {state.name}
                            </li>
                        ))}
                    </ul>

                </div>
            </section>
            {/* regiões de atendimento end */}
        </>
    );
};

export default RegioesAtendimentoSection;
