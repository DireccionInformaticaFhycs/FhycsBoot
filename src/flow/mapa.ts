import { addKeyword, utils} from '@builderbot/bot';
import { join } from 'path'

export const flowMapa = addKeyword([utils.setEvent('SAMPLES')])
    .addAnswer(`*Ubicación de Areas, Secretarias y Aulas*`, { media: join(process.cwd(), 'assets', 'mapa.jpg') })
    .addAnswer([
        `*Planta Baja:*`,
        `Aula Magna, Aula 2 y Aula 5`,
        `Decanato`,
        `Despacho`,
        `Dirección Alumnos`,
        `Secretaría Extensión`,
        `Secretaría Posgrado`,
        `Laboratorio de Idiomas`,
        `Secretaría de Planificación y Area de Ambientción y Orientación Estudiantil`,
        `Asuntos Estudiantiles`,
        `Servicios Generales`
], { media: join(process.cwd(), 'assets', 'planta baja.png') })
    .addAnswer([
        `*Primer Piso*`,
        `Aula 7, 8, 9, 10 y 11`,
        `Aula Informática `,
        `Acreditación de Carreras`], { media: join(process.cwd(), 'assets', 'primer piso.png') })
    .addAnswer([
        `*Segundo Piso*`,
        `Aula 17, 18, 19, 20, 21 y 22`,
        `Gabinete 10, Sociología`,
        `Dpto. Ciencia de la Salud`], { media: join(process.cwd(), 'assets', 'segundo piso.png') })
    .addAnswer([
        `*Tercer Piso*`,
        `Aula 28, 29, 31 y 32`,
        `Secretaría de Investigación`,
        `Gabinete de Psicología Social`,
        `Gabinete de Antropología`,
        `Gabinete de Psicología`,
        `Gabinete Ciencia de la Educación`,
        `Gabinete de Lnegua`,
        `Dirección Informática`
    ], { media: join(process.cwd(), 'assets', 'tercer piso.png') })
    //.addAnswer(`Send video from URL`, {
        //media: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJ0ZGdjd2syeXAwMjQ4aWdkcW04OWlqcXI3Ynh1ODkwZ25zZWZ1dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LCohAb657pSdHv0Q5h/giphy.mp4',
    //})
    //.addAnswer(`Send audio from URL`, { media: 'https://cdn.freesound.org/previews/728/728142_11861866-lq.mp3' })
    //.addAnswer(`Send file from URL`, {
        //media: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    //})
    .addAnswer(['📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])