import { createFlow } from '@builderbot/bot';

//Flow del Menu principal
import { flowBienvenido } from "./welcome.flow";
import { flowPrincipal} from "./menu";
import { flowCarreras } from "./oferta";
import { flowPosgrado } from './posgrado';
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

//Flow de Posgrado
import { flowEspEstdeGeneroyPolíticasPublicas } from './posgrado/1EspEstdeGeneroyPolíticasPublicas';
import { flowMaestriaEstdeGeneroyPolíticasPublicas } from './posgrado/2MaestriaEstdeGeneroyPolíticasPublicas';
import { flowMaestriaProContCom } from './posgrado/3MaestriaProContCom';
import { flowEspMaeEduInc } from './posgrado/4EspMaeEduInc';
import { flowEspInvEdu } from './posgrado/5EspInvEdu';
import { flowDocCienSoc } from './posgrado/6DocCienSoc';
import { flowMaeEcoPopuProcCom } from './posgrado/7MaeEcoPopuProcCom';
import { flowEspEcoPopuProcCom } from './posgrado/8EspEcoPopuProcCom';
import { flowEspDocSup } from './posgrado/9EspDocSup';
import { flowMaesTeoMetCieSoc } from './posgrado/10MaesTeoMetCieSoc';
import { flowMaeEstLitFront } from './posgrado/11MaeEstLitFront';


//Todos los flujos
export const flow =  createFlow([flowBienvenido, flowPrincipal, flowCarreras, flowPosgrado, flowContactos, flowCalAca, flowPreguntasFrec, flowTramites, flowMapa, flowComunicacionDigital, flowAntrop, flowProfCienciaEduacion, flowLicComSocial, flowLicEducSalud, flowProfEducSalud, flowLicEnHistoria, flowProfHistoria, flowProfEnLetras, flowLicLetras, flowTecLicTurismo, flowLicTrabajoSocial, flowTecGestionProducEditorial, flowEspEstdeGeneroyPolíticasPublicas, flowMaestriaEstdeGeneroyPolíticasPublicas, flowMaestriaProContCom, flowEspMaeEduInc, flowEspInvEdu, flowDocCienSoc, flowMaeEcoPopuProcCom, flowEspEcoPopuProcCom, flowEspDocSup, flowMaesTeoMetCieSoc, flowMaeEstLitFront])
