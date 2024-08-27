import { addKeyword} from '@builderbot/bot';
import { flowCarreras } from './oferta';
import { flowContactos } from './flowContactos';
import { flowCalAca } from './calendario';
import { flowPreguntasFrec } from './preguntasFrecuentes';
import { flowTramites } from './tramites';
import { flowMapa } from './mapa';
import { flowPosgrado } from './posgrado';

export const flowPrincipal = addKeyword(['menu', 'Menú'])
    .addAnswer(
        [
            '📌 Seleccioná las opciones que te interesan, elegí un número del *1 al 7*',
            '🌐 Enlace FHyCS: https://www.fhycs.unju.edu.ar/',
            '🌐 Enlace Siu-Guarani: https://alumnos.unju.edu.ar/unju/',
            '*1* - 📝 Carrera de Grado.',
            '*2* - 📝 Carrera de Posgrado.',
            '*3* - ☎ 📧 Teléfonos y Correos útiles.',
            '*4* - 📆 Calendario anual.',
            '*5* - 🖥️ Ayuda para Trámites y Gestiones.',
            '*6* - 🗺 Ubicación de Areas, Secretarias y Aulas.',
            '*7* - ❓ Preguntas  Frecuentes.',
            
        ]
    .join(
        '\n'
    ),
    { capture: true },
    async(ctx, {gotoFlow, fallBack})=>{
        if(!["1", "2", "3", "4","5", "6", "7"].includes(ctx.body)){
        return fallBack("🤔 Perdón no entendí tu mensaje, por favor seleccione un número del 1️⃣ al 7️⃣");
    }
    switch (ctx.body) {
        case "1": return gotoFlow(flowCarreras);
        case "2": return gotoFlow(flowPosgrado);
        case "3": return gotoFlow(flowContactos);
        case "4": return gotoFlow(flowCalAca);
        case "5": return gotoFlow(flowTramites);
        case "6": return gotoFlow(flowMapa);
        case "7": return gotoFlow(flowPreguntasFrec);
    }
}
)