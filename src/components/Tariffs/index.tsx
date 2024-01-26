import TariffsIcon from "../../assets/svg/TariffsIcon";
import TariffsCards from "./TarrifsCards";
import { TariffsElection, TariffsH2, TariffsP, TariffsSection } from "./styled";
import Company from "../../assets/svg/Company";
import Airport from "../../assets/svg/Airport";
import Group from "../../assets/svg/Group";
import Individual from "../../assets/svg/Individual";

const Tariffs = () => {
  return (
    <TariffsSection>
      <TariffsIcon />
      <TariffsH2> Tarifas Especiales</TariffsH2>
      <TariffsP> Seleccione el plan de tarifas para obtener más</TariffsP>
      <TariffsElection>
        <TariffsCards
          title="Transporte Privado"
          description="Viaje con exclusividad y comodidad en nuestro servicio de transporte privado."
          icon={<Individual />}
          miniTitle={"Privado"}
        />
        <TariffsCards
          title="Aeropuerto"
          description="

Llegue a su destino con puntualidad y sin complicaciones. garantizamos traslados eficientes y sin estrés."
          icon={<Airport />}
          miniTitle={"Aeropuerto"}
        />
        <TariffsCards
          title="Servicio Empresas"
          description=" Ofrecemos soluciones de transporte confiables y profesionales para su organización."
          icon={<Company />}
          miniTitle={"Empresas"}
        />
        <TariffsCards
          title="Colectivo"
          description=" Nuestro servicio colectivo proporciona una opción accesible para sus trayectos diarios."
          icon={<Group />}
          miniTitle={"Colectivo"}
        />
      </TariffsElection>
    </TariffsSection>
  );
};

export default Tariffs;
