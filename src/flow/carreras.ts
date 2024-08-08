import { addKeyword} from '@builderbot/bot';
import { flowPrincipal } from './menu';

//import {  } from './carreras/1TecComDigCon';
//1 FLOW DE OFERTAS ACADEMICAS
const flowOfertas=addKeyword(["Carreras", "menu"]).addAnswer(
    ['You can see the documentation here'].join(
        '\n'
    ),
    { capture: true },
    async(ctx, {gotoFlow, fallBack, flowDynamic})=>{
        if(!["1", "2", "3", "4","5", "6", "7", "8", "9", "10","11", "12", "13", "14", "Menu"].includes(ctx.body)){
        return fallBack("❌ Respuesta no valida, por favor seleccione un número del 1️⃣ al 1️⃣4️⃣ o Escriba *Menu* para volver");
    }
    switch (ctx.body) {
        //case "1": return gotoFlow(1TecComDigCon);
        ///case "2": return gotoFlow(2LicAntro);
        //case "3": return gotoFlow(flowCienciaEdu);
        //case "4": return gotoFlow(flowLicComSocial);
        //case "5": return gotoFlow(flowLicEducSalud);
        //case "6": return gotoFlow(flowProfEducSalud);
        //case "7": return gotoFlow(flowProfYLicFilosofia);
        //case "8": return gotoFlow(flowLicEnHistoria);
        //case "9": return gotoFlow(flowProfHistoria);
        //case "10": return gotoFlow(flowProfEnLetras);
        //case "11": return gotoFlow(flowLicLetras);
        //case "12": return gotoFlow(flowTecLicTurismo);
        //case "13": return gotoFlow(flowLicTrabajoSocial);
        //case "14": return gotoFlow(flowTecGestionProducEditorial);
        case "Menu": return gotoFlow(flowPrincipal);
    }
}
);