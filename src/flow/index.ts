import { createFlow } from '@builderbot/bot';

//Flow del Menu principal
import { flowBienvenido } from "./welcome.flow";
import { flowPrincipal} from "./menu";
import { flowCarreras } from "./oferta";
import { flowContactos } from './flowContactos';
import { flowCalAca } from './calendario';
import { flowPreguntasFrec } from './preguntasFrecuentes';
import { flowTramites } from './tramites';
import { flowMapa } from './mapa';

//Flow de las carreras
import { flowComunicacionDigital } from './carreras/1TecComDigCon';
import { flowAntrop } from './carreras/2LicAntro';
import { flowProfCienciaEduacion } from './carreras/3CienciaEducacion';
import { flowLicComSocial } from './carreras/4LicComSocial';
import { flowLicEducSalud } from './carreras/5LicEduSalud';
import { flowProfEducSalud } from './carreras/6ProfEduSalud';
import { flowLicEnHistoria } from './carreras/8LicEnHistoria';
import { flowProfHistoria } from './carreras/9ProfHistoria';
import { flowProfEnLetras } from './carreras/10ProfEnLetras';
import { flowLicLetras } from './carreras/11LicLetras';
import { flowTecLicTurismo } from './carreras/12TecLicTurismo';
import { flowLicTrabajoSocial } from './carreras/13LicTrabajoSocial';
import { flowTecGestionProducEditorial } from './carreras/14TecGestionProducEditorial';


//Todos los flujos
export const flow =  createFlow([flowBienvenido, flowPrincipal, flowCarreras, flowContactos, flowCalAca, flowPreguntasFrec, flowTramites, flowMapa, flowComunicacionDigital, flowAntrop, flowProfCienciaEduacion, flowLicComSocial, flowLicEducSalud, flowProfEducSalud, flowLicEnHistoria, flowProfHistoria, flowProfEnLetras, flowLicLetras, flowTecLicTurismo, flowLicTrabajoSocial, flowTecGestionProducEditorial])
