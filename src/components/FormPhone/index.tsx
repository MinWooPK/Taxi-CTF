import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  InputForm,
  DivSection,
  SubmitForm,
  FormMain,
  DivFormMain,
  RequireForm,
  RequireFormSend,
  RequireFormSendTrue,
} from "./style";

const FormPhone = () => {
  const validationSchema = Yup.object({
    nombre: Yup.string().required("Este campo es requerido"),
    lugarOrigen: Yup.string().required("Este campo es requerido"),
    lugarDestino: Yup.string().required("Este campo es requerido"),
    telefono: Yup.string().required("Este campo es requerido"),
  });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      lugarOrigen: "",
      lugarDestino: "",
      telefono: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Envía el formulario por Formspree
      fetch("https://formspree.io/f/xwkglyjk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Formulario enviado correctamente");
            setMensajeEnviado(true); // Actualiza el estado para mostrar el mensaje de envío correcto
          } else {
            console.error(
              "Error al enviar el formulario:",
              response.statusText
            );
          }
        })
        .catch((error) => {
          console.error("Error al enviar el formulario:", error);
        });
    },
  });

  return (
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
            id="lugarOrigen"
            placeholder="Lugar de Recogida..."
            name="lugarOrigen"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lugarOrigen}
          />
          {formik.touched.lugarOrigen && formik.errors.lugarOrigen ? (
            <RequireForm>{formik.errors.lugarOrigen}</RequireForm>
          ) : null}
        </DivFormMain>
        <DivFormMain>
          <InputForm
            type="text"
            placeholder="Lugar de Destino..."
            id="lugarDestino"
            name="lugarDestino"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lugarDestino}
          />
          {formik.touched.lugarDestino && formik.errors.lugarDestino ? (
            <RequireForm>{formik.errors.lugarDestino}</RequireForm>
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
      <DivSection>
        <SubmitForm type="submit">Enviar</SubmitForm>
      </DivSection>
      {mensajeEnviado ? (
        <RequireFormSendTrue>Se ha enviado el mensaje</RequireFormSendTrue>
      ) : (formik.touched.lugarDestino && formik.errors.lugarDestino) ||
        (formik.touched.nombre && formik.errors.nombre) ||
        (formik.touched.lugarOrigen && formik.errors.lugarOrigen) ||
        (formik.touched.telefono && formik.errors.telefono) ? (
        <RequireFormSend>Por favor, completa todos los campos.</RequireFormSend>
      ) : null}
    </FormMain>
  );
};

export default FormPhone;
