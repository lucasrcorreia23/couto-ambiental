"use client";

import styles from "./WhatsAppFloat.module.css";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/554733990561"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Fale com a Couto Saúde Ambiental pelo WhatsApp (47) 3399-0561"
      title="Fale conosco pelo WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true" />
    </a>
  );
};
export default WhatsAppFloat;
