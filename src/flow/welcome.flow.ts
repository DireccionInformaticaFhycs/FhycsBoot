import { addKeyword, MemoryDB ,EVENTS } from '@builderbot/bot';
import { BaileysProvider } from '@builderbot/provider-baileys'

//Flujo de Bienvenida
export const flowBienvenido = addKeyword<BaileysProvider, MemoryDB>(EVENTS.WELCOME) //este flujo se ejecuta cuando no se ingresa una palabra clave
.addAction(async (ctx, { flowDynamic }) => {
    await flowDynamic(`👋 Hola, bienvenido/a ${ctx.name} soy Huma, tu asistente virtual 🤖 de la facultad de Humanidades y Ciencias Sociales de la Unju`)
})
.addAnswer('✏ Escribí la palabra *menú*.')
