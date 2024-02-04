import Call from "../../assets/svg/call";
import EmailBlack from "../../assets/svg/emailBlack";
import CardInfo from "../../components/CardInfo";
import Map from "../../assets/svg/map";
import * as Yup from "yup";
import emailjs from "emailjs-com";

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
  SubTitle,
  SubmitForm,
  TitleSection,
} from "./style";
import { useFormik } from "formik";

const ContactPage = () => {
  // Define el esquema de validación con Yup
  const validationSchema = Yup.object({
    nombre: Yup.string().required("Este campo es requerido"),
    lugarOrigen: Yup.string().required("Este campo es requerido"),
    lugarDestino: Yup.string().required("Este campo es requerido"),
    telefono: Yup.string().required("Este campo es requerido"),
    imagenSeleccionada: Yup.string().required("Selecciona una imagen"),
  });
  const serviceId = "service_f5t3gel";
  const templateId = "template_2ny3bhg";
  const publicKey = "TAoGHEumcEUc906RB";

  // Inicializa Formik
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      texto: "", // Nuevo campo para almacenar la imagen seleccionada
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Aquí puedes manejar la lógica de envío del formulario
      console.log("Formulario enviado:", values);

      emailjs.init(serviceId);

      // Envía el correo electrónico
      const templateParams = {
        to_name: "Destinatario",
        from_name: "Remitente",
        message: `Nombre: ${values.nombre}\nEmail: ${values.email}\nTeléfono: ${values.telefono}\nMensaje: ${values.texto}`,
      };

      // Envía el correo usando la plantilla de EmailJS
      emailjs
        .send(publicKey, templateId, templateParams)
        .then((response) => {
          console.log("Correo electrónico enviado correctamente:", response);
        })
        .catch((error) => {
          console.error("Error al enviar el correo electrónico:", error);
        });
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
            subTitleCard={"juancarlos.blazquezv@gmail.com"}
            titleCard={"Email"}
            imgCard={<EmailBlack />}
          />

          <CardInfo
            subTitleCard={"País Vasco"}
            titleCard={"Dirección"}
            imgCard={<Map />}
          />
          <CardInfo
            subTitleCard={"+34 633556379"}
            titleCard={"Teléfono"}
            imgCard={<Call />}
          />
          <FormMain onSubmit={formik.handleSubmit}>
            {/* Campos de texto */}
            {/* Botones con imágenes */}

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
            {(formik.touched.email && formik.errors.email) ||
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
