import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Call from "../../assets/svg/call";
import EmailBlack from "../../assets/svg/emailBlack";
import CardInfo from "../../components/CardInfo";
import Map from "../../assets/svg/map";
import TitleContainer from "../../components/TitleContainer";
import {
  CardContainer,
  ContactContainer,
  DivFormMain,
  DivSection,
  FirstContainer,
  FormMain,
  InputForm,
  InputFormText,
  MainTitle,
  RequireForm,
  RequireFormSend,
  RequireFormSendTrue,
  SubTitle,
  SubmitForm,
  TitleSection,
} from "./style";

const ContactPage = () => {
  const validationSchema = Yup.object({
    nombre: Yup.string().required("Este campo es requerido"),
    email: Yup.string()
      .email("Dirección de correo inválida")
      .required("Este campo es requerido"),
    telefono: Yup.string().required("Este campo es requerido"),
    texto: Yup.string().required("Este campo es requerido"),
  });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      texto: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("https://formspree.io/f/meqyanoy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          console.log("Formulario enviado correctamente");
          setMensajeEnviado(true); // Actualiza el estado para mostrar el mensaje de envío correcto
        } else {
          console.error("Error al enviar el formulario:", response.statusText);
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      }
    },
  });

  return (
    <>
      <FirstContainer>
        <TitleContainer subTitleText={"Contacto"} titleText={"Contacto"} />
      </FirstContainer>
      <ContactContainer>
        <CardContainer>
          <CardInfo
            subTitleCard={"tu_correo@example.com"}
            titleCard={"Email"}
            imgCard={<EmailBlack />}
          />

          <CardInfo
            subTitleCard={"Tu dirección"}
            titleCard={"Dirección"}
            imgCard={<Map />}
          />
          <CardInfo
            subTitleCard={"+34 633556379"}
            titleCard={"Teléfono"}
            imgCard={<Call />}
          />
          <FormMain onSubmit={formik.handleSubmit}>
            <DivSection>
              <DivFormMain>
                <InputForm
                  type="text"
                  id="nombre"
                  placeholder="Nombre Completo..."
                  name="nombre"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nombre}
                />
                {formik.touched.nombre && formik.errors.nombre ? (
                  <RequireForm>{formik.errors.nombre}</RequireForm>
                ) : null}
              </DivFormMain>
              <DivFormMain>
                <InputForm
                  type="text"
                  id="email"
                  placeholder="Email..."
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <RequireForm>{formik.errors.email}</RequireForm>
                ) : null}
              </DivFormMain>

              <DivFormMain>
                <InputForm
                  type="text"
                  id="telefono"
                  placeholder="Numero de Teléfono..."
                  name="telefono"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.telefono}
                />
                {formik.touched.telefono && formik.errors.telefono ? (
                  <RequireForm>{formik.errors.telefono}</RequireForm>
                ) : null}
              </DivFormMain>
            </DivSection>
            <DivFormMain>
              <InputFormText
                type="text"
                id="texto"
                placeholder="Su mensaje..."
                name="texto"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.texto}
              />
            </DivFormMain>
            <DivSection>
              <SubmitForm type="submit">Enviar</SubmitForm>
            </DivSection>
            {mensajeEnviado ? (
              <RequireFormSendTrue>
                Se ha enviado el mensaje
              </RequireFormSendTrue>
            ) : (formik.touched.email && formik.errors.email) ||
              (formik.touched.nombre && formik.errors.nombre) ||
              (formik.touched.telefono && formik.errors.telefono) ? (
              <RequireFormSend>
                Por favor, completa todos los campos.
              </RequireFormSend>
            ) : null}
          </FormMain>
        </CardContainer>
      </ContactContainer>
    </>
  );
};

export default ContactPage;
