import { addKeyword} from '@builderbot/bot';
import { flowComunicacionDigital } from './carreras/1TecComDigCon';
import { flowPrincipal } from './menu';
import { flowAntrop } from './carreras/2LicAntro';
import { flowProfCienciaEduacion } from './carreras/3CienciaEducacion';
import { flowLicComSocial } from './carreras/4LicComSocial';
import { flowLicEducSalud } from './carreras/5LicEduSalud';
import { flowProfEducSalud } from './carreras/6ProfEduSalud';
import { flowProfYLicFilosofia } from './carreras/7ProfyLicFilosofia';
import { flowLicEnHistoria } from './carreras/8LicEnHistoria';
import { flowProfHistoria } from './carreras/9ProfHistoria';
import { flowProfEnLetras } from './carreras/10ProfEnLetras';
import { flowLicLetras } from './carreras/11LicLetras';
import { flowTecLicTurismo } from './carreras/12TecLicTurismo';
import { flowLicTrabajoSocial } from './carreras/13LicTrabajoSocial';
import { flowTecGestionProducEditorial } from './carreras/14TecGestionProducEditorial';

export const flowCarreras = addKeyword(['carreras', 'car', 'Ofertas', 'ofertas', 'academica']).addAnswer(
    [
        '📝Todas las *Carreras* de la Facultad de Humanidades',
        '📄1 Tecnicatura en Comunicación Digital Convergente',
        '📄2 Licenciatura en Antropología',
        '📄3 Licenciatura en Ciencias de la Educación',
        '📄4 Licenciatura en Comunicación Social',
        '📄5 Licenciatura en Educación para la Salud',
        '📄6 Prof. en Educación para la Salud',
        '📄7 Prof. y Lic. en Filosofía',
        '📄8 Licenciatura en Historia',
        '📄9 Profesorado en Historia',
        '📄10 Profesorado en Letras',
        '📄11 Licenciatura en Letras',
        '📄12 Tec. y Lic. en Turismo',
        '📄13 Lic. en Trabajo Social',
        '📄14 Tec. en Gestión y Producción Editorial',
        'Para más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/index.html',
        '\n*Escriba un numero* para ver el plan de estudio de esa materia.',
        '\n*Menu* Para volver al Menu principal.',
    ].join(
        '\n'
    ),
    {capture: true},
    async(ctx, {gotoFlow, fallBack, flowDynamic})=>{
        if(!["1", "2", "3", "4","5", "6", "7", "8", "9", "10","11", "12", "13", "14", "Menu"].includes(ctx.body)){
        return fallBack("❌ Respuesta no valida, por favor seleccione un número del 1️⃣ al 1️⃣4️⃣ o Escriba *Menu* para volver");
    }
    switch (ctx.body) {
        case "1": return gotoFlow(flowComunicacionDigital);
        case "2": return gotoFlow(flowAntrop);
        case "3": return gotoFlow(flowProfCienciaEduacion);
        case "4": return gotoFlow(flowLicComSocial);
        case "5": return gotoFlow(flowLicEducSalud);
        case "6": return gotoFlow(flowProfEducSalud);
        case "7": return gotoFlow(flowProfYLicFilosofia);
        case "8": return gotoFlow(flowLicEnHistoria);
        case "9": return gotoFlow(flowProfHistoria);
        case "10": return gotoFlow(flowProfEnLetras);
        case "11": return gotoFlow(flowLicLetras);
        case "12": return gotoFlow(flowTecLicTurismo);
        case "13": return gotoFlow(flowLicTrabajoSocial);
        case "14": return gotoFlow(flowTecGestionProducEditorial);
        case "Menu": return gotoFlow(flowPrincipal);
    }
}
)
