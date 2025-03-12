"use client";

import { Formik } from 'formik';
import AppData from "@data/app.json";

const ContactForm = ( { subtitleOffset } ) => {
  return (
    <>
        {/* contact form */}
        <Formik
        initialValues = {{ email: '', name: '', tel: '', budget: '', message: '' }}
        validate = { values => {
            const errors = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }}
        onSubmit = {( values, { setSubmitting } ) => {
            console.log("Submitting form with values: ", values);
            const form = document.getElementById("contactForm");
            const status = document.getElementById("contactFormStatus");
            const data = new FormData();

            data.append('name', values.name);
            data.append('email', values.email);
            data.append('tel', values.tel);
            data.append('assunto', values.assunto);
            data.append('message', values.message);

            fetch(form.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = "<h5>Obrigado. <br/>Sua mensagem foi enviada com sucesso.</h5>";
                    status.style.display = "block"; // Mostra a mensagem
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            status.innerHTML = "<h5>Oops! Ocorreu um problema ao enviar seu formulário</h5>";
                        }
                        status.style.display = "block"; // Mostra a mensagem de erro
                    });
                }
            })
            .catch(error => {
                status.innerHTML = "<h5>Oops! Ocorreu um problema ao enviar seu formulário</h5>";
                status.style.display = "block"; // Mostra a mensagem de erro
            });

            setSubmitting(false);
        }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit} id="contactForm" action={AppData.settings.formspreeURL} className={subtitleOffset ? "mil-mt-suptitle-offset mil-mb-90 cform" : "mil-mb-90 cform"}>
            <div className="row">
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>Nome completo</span><span className="mil-required">*</span></label>
                        <input 
                            type="text" 
                            placeholder="Insira seu nome"
                            name="name" 
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name} 
                        />
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>E-mail</span><span className="mil-required">*</span></label>
                        <input 
                            type="email" 
                            placeholder="Insira aqui o seu e-mail"
                            name="email"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                        />
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>Telefone</span><span className="mil-required">*</span></label>
                        <input 
                            type="tel" 
                            placeholder="Insira seu telefone corporativo"
                            name="tel"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tel} 
                        />
                    </div>

                </div>
                <div className="col-lg-6">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>Assunto</span><span className="mil-required">*</span></label>
                        <input 
                            type="text" 
                            placeholder="Digite o assunto"
                            name="assunto" 
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.assunto} 
                        />
                    </div>

                </div>
                <div className="col-lg-12">

                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                        <label className="mil-upper"><span>Mensagem</span><span className="mil-required">*</span></label>
                        <textarea 
                            placeholder="Detalhe suas necessidades."
                            name="message" 
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message} 
                        />
                    </div>

                </div>
                <div className="col-lg-12">

                    <div className="mil-checbox-frame mil-dark-input mil-up mil-mb-30">
                        <input defaultChecked className="mil-checkbox" id="checkbox-1" type="checkbox" value="value" namge="agree" required />
                        <label htmlFor="checkbox-1" className="mil-text-sm">Estou ciente dos termos para utilização de meus dados pessoais.</label>
                    </div>

                </div>
                <div className="col-lg-5">

                    <button type="submit" className="mil-button mil-up">Enviar</button>

                </div>
                <div className="col-lg-7 form-status alert-success " id="contactFormStatus" style={{"display": "none"}} />
            </div>
            
        </form>
        )}
        </Formik>
        {/* contact form end */}
    </>
  );
};
export default ContactForm;