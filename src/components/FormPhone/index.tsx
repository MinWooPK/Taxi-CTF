import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CochePrueba from "../../assets/img/CochePrueba.png";
import {
  TarifaImg,
  TarifaLi,
  TarifasUl,
  InputForm,
  DivSection,
  SubmitForm,
  FormMain,
  DivFormMain,
  RequireForm,
} from "./style";

const FormPhone = () => {
  const [activeImage, setActiveImage] = useState(""); // Variable de estado para la imagen activa

  // Función para manejar el clic en los botones con imágenes
  const handleImageClick = (imageUrl: string) => {
    setActiveImage(imageUrl);
    // Actualizar el campo de formulario con el valor de la imagen
    formik.setFieldValue("imagenSeleccionada", imageUrl);
  };

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
    setActiveImage(primeraImagen);
    formik.setFieldValue("imagenSeleccionada", primeraImagen);
  }, [formik.setFieldValue]);

  return (
    <FormMain onSubmit={formik.handleSubmit}>
      {/* Campos de texto */}
      {/* Botones con imágenes */}
      <TarifasUl>
        <TarifaLi
          onClick={() => handleImageClick("imagen1.jpg")}
          className={activeImage === "imagen1.jpg" ? "active" : ""}
        >
          <TarifaImg src={CochePrueba} alt="Imagen 1" />
          Personal
        </TarifaLi>
        <TarifaLi
          onClick={() => handleImageClick("imagen2.jpg")}
          className={activeImage === "imagen2.jpg" ? "active" : ""}
        >
          <TarifaImg src={CochePrueba} alt="Imagen 2" />
          Business
        </TarifaLi>
        <TarifaLi
          onClick={() => handleImageClick("imagen3.jpg")}
          className={activeImage === "imagen3.jpg" ? "active" : ""}
        >
          <TarifaImg src={CochePrueba} alt="Imagen 3" />
          Premium
        </TarifaLi>
        <TarifaLi
          onClick={() => handleImageClick("imagen4.jpg")}
          className={activeImage === "imagen4.jpg" ? "active" : ""}
        >
          <TarifaImg src={CochePrueba} alt="Imagen 4" />
          VIP
        </TarifaLi>
      </TarifasUl>
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
      {formik.errors.lugarDestino ||
      formik.errors.nombre ||
      formik.errors.lugarOrigen ||
      formik.errors.telefono ? (
        <RequireForm>Por favor, completa todos los campos.</RequireForm>
      ) : null}
    </FormMain>
  );
};

export default FormPhone;
