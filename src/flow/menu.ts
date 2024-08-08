import { addKeyword} from '@builderbot/bot';
import { flowCarreras } from './oferta';
import { flowContactos } from './flowContactos';
import { flowCalAca } from './calendario';
import { flowPreguntasFrec } from './preguntasFrecuentes';
import { flowTramites } from './tramites';
import { flowMapa } from './mapa';

export const flowPrincipal = addKeyword(['menu', 'Menú'])
    .addAnswer('🙌 Hola bienvenido a este *Chatbot* de la Facultad de Humanidades')
    .addAnswer(
        [
            '📌 Este es nuestro *Menú* de opciones, elije un número del *1 al 6*',
            '*1* - 📝 Oferta Académica.',
            '*2* - ☎ 📧 Teléfonos y Correos útiles.',
            '*3* - 📆 Calendario anual.',
            '*4* - 🖥️ Tramites y Gestiones.',
            '*5* - 🗺 Ubicación de Areas, Secretarias y Aulas.',
            '*6* - ❓ Preguntas  Frecuentes.',
            '*6* - Prueba con Boton.',
        ]
    .join(
        '\n'
    ),
    { capture: true },
    async(ctx, {gotoFlow, fallBack})=>{
        if(!["1", "2", "3", "4","5", "6"].includes(ctx.body)){
        return fallBack("❌ Respuesta no valida, por favor seleccione un número del 1️⃣ al 6️⃣");
    }
    switch (ctx.body) {
        case "1": return gotoFlow(flowCarreras);
        case "2": return gotoFlow(flowContactos);
        case "3": return gotoFlow(flowCalAca);
        case "4": return gotoFlow(flowTramites);
        case "5": return gotoFlow(flowMapa);
        case "6": return gotoFlow(flowPreguntasFrec);
    }
}
)