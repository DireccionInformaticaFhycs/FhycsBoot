import { addKeyword, MemoryDB ,EVENTS } from '@builderbot/bot';
import { BaileysProvider } from '@builderbot/provider-baileys'

//Flujo de Bienvenida
export const flowBienvenido = addKeyword<BaileysProvider, MemoryDB>(EVENTS.WELCOME) //este flujo se ejecuta cuando no se ingresa una palabra clave
.addAction(async (ctx, { flowDynamic }) => {
    await flowDynamic(`👋 Hola, ${ctx.name} te damos la Bienvenida a nuestro *Chatbot*`)
})
.addAnswer('✏ Escribe *Menu* para mostrarte nuestras opciones')
