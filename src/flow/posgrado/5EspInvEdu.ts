import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowEspInvEdu = addKeyword(['05']).addAnswer([
    '📄 *Especialización en Investigación Educativa*',
    '📄 Materias de la carrera',
    '\n*Formación teórica y metodológica*',

'Fundamentos de la Investigación Educativa',
'Debates pedagógicos contemporáneos',
'Perspectiva Empírico-Analítica de la Investigación Educativa',
'Perspectiva Interpretativa de la Investigación Educativa',
'Perspectiva Socio-crítica de la Investigación educativa',
'Taller I: Construcción del Proyecto de Investigación Educativa',
'Taller II: Producción del Informe Final de Investigación Educativa',

'\n*Formación temática*',
'_Seminario Optativo I:_',
'La enseñanza como práctica compleja: debates y agendas de investigación',
'Debates sociológicos y políticos en educación',
'Sujetos, aprendizaje y conocimiento',
'Formación docente y desarrollo profesional',

'\n_Seminario Optativo II:_',
'Perspectivas actuales del currículum escolar',
'Estudios socio-antropológicos de las interacciones en la escuela y el aula',
'Aproximaciones pedagógicas sobre género, sexualidad y educación',
'Sociedad, múltiples violencias y escuela',

'\n*Formación Instrumental*',
'_Seminario Optativo III:_',
'Escritura académico-científica',
'Investigación biográfico-narrativa',
'Investigación documental',
'Construcción y análisis de casos',
'\n*Trabajo Final Integrador*',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/secretaria_posgrado/posgrado_articulo.php?id=31',

]).addAnswer([
    '✏ Escribe *posgrado* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])

.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '5EspInvEdu.pdf')
})