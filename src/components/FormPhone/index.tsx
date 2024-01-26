import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CochePrueba from "../../assets/img/CochePrueba.png";
import {
  InputForm,
  DivSection,
  SubmitForm,
  FormMain,
  DivFormMain,
  RequireForm,
  RequireFormSend,
} from "./style";

const FormPhone = () => {
  // Define el esquema de validación con Yup
  const validationSchema = Yup.object({
    nombre: Yup.string().required("Este campo es requerido"),
    lugarOrigen: Yup.string().required("Este campo es requerido"),
    lugarDestino: Yup.string().required("Este campo es requerido"),
    telefono: Yup.string().required("Este campo es requerido"),
    imagenSeleccionada: Yup.string().required("Selecciona una imagen"),
  });

  // Inicializa Formik
  const formik = useFormik({
    initialValues: {
      nombre: "",
      lugarOrigen: "",
      lugarDestino: "",
      telefono: "",
      imagenSeleccionada: "", // Nuevo campo para almacenar la imagen seleccionada
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Aquí puedes manejar la lógica de envío del formulario
      console.log("Formulario enviado:", values);
    },
  });

  // Efecto secundario para establecer el primer botón activo al iniciar
  useEffect(() => {
    const primeraImagen = "imagen1.jpg";
    formik.setFieldValue("imagenSeleccionada", primeraImagen);
  }, [formik.setFieldValue]);

  return (
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
      {(formik.touched.lugarDestino && formik.errors.lugarDestino) ||
      (formik.touched.nombre && formik.errors.nombre) ||
      (formik.touched.lugarOrigen && formik.errors.lugarOrigen) ||
      (formik.touched.telefono && formik.errors.telefono) ? (
        <RequireFormSend>Por favor, completa todos los campos.</RequireFormSend>
      ) : null}
    </FormMain>
  );
};

export default FormPhone;
