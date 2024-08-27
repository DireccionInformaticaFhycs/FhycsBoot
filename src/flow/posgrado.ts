import { addKeyword} from '@builderbot/bot';
import { flowPrincipal } from './menu';
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

export const flowPosgrado = addKeyword(['posgrado', 'pos']).addAnswer(
    [
        '📝Todas las *Carreras de Posgrado* de la Facultad de Humanidades',
        '📄1 Especialización en Estudios de Género y Políticas Publicas',
        '📄2 Maestría en Estudios de Género y Políticas Publicas',
        '📄3 Maestría en Problemáticas Contemporáneas de la Comunicación',
        '📄4 Especialización y Maestría en Educación Inclusiva',
        '📄5 Especialización en Investigación Educativa',
        '📄6 Doctorado en Ciencias Sociales',
        '📄7 Maestría en Economía Popular y Procesos Comuniarios',
        '📄8 Especialización en Economía Popular y Procesos Comuniarios',
        '📄9 Especialización en Docencia Superior',
        '📄10 Maestría en Teoría y Metodología de las Ciencias Sociales',
        '📄11 Maestría en Estudios Literarios de Frontera',
      
        'Para más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/index.html',
        '\n*Escriba un número* para ver el plan de estudio de esa materia.',
        '\nEscribí *Menu* Para volver al Inicio.',
    ].join(
        '\n'
    ),
    {capture: true},
    async(ctx, {gotoFlow, fallBack, flowDynamic})=>{
        if(!["1", "2", "3", "4","5", "6", "7", "8", "9", "10","11", "Menu"].includes(ctx.body)){
        return fallBack("🤔 Perdón no entendí tu mensaje, por favor seleccione un número del 1️⃣ al 1️⃣1️⃣ o Escribí *Menú* para volver a las opciones de inicio.");
    }
    switch (ctx.body) {
        case "1": return gotoFlow(flowEspEstdeGeneroyPolíticasPublicas);
        case "2": return gotoFlow(flowMaestriaEstdeGeneroyPolíticasPublicas);
        case "3": return gotoFlow(flowMaestriaProContCom);
        case "4": return gotoFlow(flowEspMaeEduInc);
        case "5": return gotoFlow(flowEspInvEdu);
        case "6": return gotoFlow(flowDocCienSoc);
        case "7": return gotoFlow(flowMaeEcoPopuProcCom);
        case "8": return gotoFlow(flowEspEcoPopuProcCom);
        case "9": return gotoFlow(flowEspDocSup);
        case "10": return gotoFlow(flowMaesTeoMetCieSoc);
        case "11": return gotoFlow(flowMaeEstLitFront);
        case "Menu": return gotoFlow(flowPrincipal);
    }
}
)
