import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowEspDocSup = addKeyword(['09']).addAnswer([
    '📄 *Especialización en Docencia Superior*',

    '📄 Materias de la carrera',
    '\n*Eje Nº1. SOCIO-POLÍTICA DE LA EDUCACIÓN SUPERIOR*',
    'Debates pedagógicos contemporáneos.',
    'Política, organización y gestión de la Educación Superior.',
    'Diversidad y Educación.',
    'Prácticas de Escritura en Educación Superior.',
    
    '\n*Eje N°2. INTERVENCIÓN E INDAGACIÓN DE LA PRÁCTICA DOCENTE*',
    'Sujeto del aprendizaje en el nivel de Educación Superior.',
    'Teoría y diseño curricular en Educación Superior.',
    'Enseñanza en el nivel de Educación Superior.',
    'Análisis y reflexión de la práctica docente.',

    '\n*Eje N°3. PEDAGOGÍA-DIDÁCTICA*',
    'La evaluación de los aprendizajes en Educación Superior.',
    'Enseñanza de Educación Superior mediada por tecnologías.',
    'Investigación Educativa.',
    'Intervención pedagógica y dispositivos de formación para Educación Superior.',
    'Proyecto de Memoria Docente.',

    '\n*TRABAJO FINAL MEMORIA DOCENTE*',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/secretaria_posgrado/posgrado_articulo.php?id=29',
]).addAnswer([
    '✏ Escribe *posgrado* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])
    
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '9EspeDocSup.pdf')
})