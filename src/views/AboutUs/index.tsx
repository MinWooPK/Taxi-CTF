import { useState, useEffect } from "react";

import CardAnimation from "../../components/CardAnimation";
import Information from "../../components/Information";
import TitleContainer from "../../components/TitleContainer";
import {
  Button,
  Caption,
  CardContainer,
  Dot,
  DotsContainer,
  FirstContainer,
  Slide,
  SlideshowContainer,
  TitleSlide,
} from "./style";
import Award from "../../assets/svg/Award";
import GoodHand from "../../assets/svg/GoodHand";
import TravelAbout from "../../assets/svg/TravelAbout";
import taxi1 from "../../assets/img/taxi1.jpg";
import taxi2 from "../../assets/img/taxi2.jpg";
import taxi3 from "../../assets/img/taxi3.jpg";
import taxi4 from "../../assets/img/taxi4.jpg";
import taxi5 from "../../assets/img/taxi5.jpg";
import taxi6 from "../../assets/img/taxi6.jpg";
import taxi7 from "../../assets/img/taxi7.jpg";
import taxi8 from "../../assets/img/taxi8.jpg";

const AboutUsPage = () => {
  const slides = [
    { src: taxi1, caption: "" },
    { src: taxi2, caption: "" },
    { src: taxi3, caption: "" },
    { src: taxi4, caption: "" },
    { src: taxi5, caption: "" },
    { src: taxi6, caption: "" },
    { src: taxi7, caption: "" },
    { src: taxi8, caption: "" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones para cambiar la diapositiva
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Cambiar automáticamente cada 2 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <>
      <FirstContainer>
        <TitleContainer
          subTitleText={"Información"}
          titleText={"Información"}
        />
      </FirstContainer>
      <Information />
      <SlideshowContainer>
        <TitleSlide>Viaja con comodidad con nuestro taxi</TitleSlide>
        {slides.map((slide, index) => (
          <Slide key={index} active={index === currentIndex}>
            {/* <NumberText>{`${index + 1} / ${slides.length}`}</NumberText> */}
            <img
              src={slide.src}
              style={{ width: "100%", maxHeight: "332px" }}
              alt={`Slide ${index + 1}`}
            />
            <Caption>{slide.caption}</Caption>
          </Slide>
        ))}
        <Button onClick={prevSlide} position="left">
          &#10094;
        </Button>
        <Button onClick={nextSlide} position="right">
          &#10095;
        </Button>
      </SlideshowContainer>
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotsContainer>
      <CardContainer>
        <CardAnimation
          titleText={"Fiabilidad"}
          subTitleText={
            "Tu elección de confianza para cada viaje. Nuestros conductores expertos y tecnología de vanguardia garantizan llegadas puntuales sin excepción."
          }
          imgCard={<TravelAbout />}
        />
        <CardAnimation
          titleText={"Loyalty"}
          subTitleText={
            "Tu satisfacción es nuestra prioridad. Apreciamos tu elección y trabajamos incansablemente para ofrecerte la mejor experiencia en cada trayecto."
          }
          imgCard={<Award />}
        />
        <CardAnimation
          titleText={"Experiencia"}
          subTitleText={
            "Nuestros años de experiencia en la carretera aseguran un viaje cómodo, seguro y sin contratiempos."
          }
          imgCard={<GoodHand />}
        />
        {/* <CardAnimation
          titleText={"Soporte"}
          subTitleText={
            "Aceleramos sus procesos empresariales proporcionándole asistencia profesional. Resolvemos sus problemas y proporcionamos soluciones al instante."
          }
          imgCard={<Support />}
        /> */}
      </CardContainer>
    </>
  );
};

export default AboutUsPage;
