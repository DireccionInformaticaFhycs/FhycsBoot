import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowProfEducSalud = addKeyword(['06']).addAnswer([
    '📄 *Profesorado en Educación para la Salud*',
    'Sede: San Salvador de Jujuy y San Pedro',
    '📄 Materias de la carrera',
    '\n*PRIMER AÑO*',
    '1	Introducción a la Educación para la Salud',
    '2	Psicología Social',
    '3	Ecología Humana',
    '4	Psicología Evolutiva',
    '5	Pedagogía',
    '6	Antropología Filosófica',
    '7	Antropología Social y Cultural',

    '\n*SEGUNDO AÑO*',
    '8	Problemática Sanitaria I',
    '9 Comunicación en Salud',
    '10 Didáctica',
    '11 Salud y Salud Pública',
    '12 Tecnología Educativa',
    '13 Epidemiología Y Estadística',
    '14 Informática',

    '\n*TERCER AÑO*',
    '15 Problemática Sanitaria II',
    '16 Investigación Social Aplicada al Campo de la Salud',
    '17 Legislación Aplicada',
    '18 Sujeto del Aprendizaje',
    '19 Organización y Desarrollo de la Comunidad',
    '20 Planeamiento de la Educación para la Salud',
    '21 Salud Ocupacional',

    '\n*CUARTO AÑO*',
    '22 Seminario: Ciencia, Metodología y Educación para la Salud',
    '23 Teoría y Práctica de la Enseñanza en Educación para la Salud',
    '24 Análisis Institucional aplicado al Campor de la Salud',
    '25 Política Educacional y Legislación',
    '26 Planeamiento de la Educación para la Salud II',
    '27 Taller Formación Docente y Construcción del rol docente en la Educación para la Salud',
    '28 Taller Sistematización de Prácticas Educativas',

    '\n*QUINTO AÑO*',
    '29 Residencia',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifProfEduSalud.html',
]).addAnswer([
    '✏ Escribe *ofertas* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])

.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '6ProfEducSalud.pdf')
})