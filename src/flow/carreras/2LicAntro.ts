import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowAntrop = addKeyword(['02']).addAnswer([
    '📄 *Licenciatura en Antropología*',
    'Sede: San Salvador de Jujuy',
    '📄 Materias de la carrera',
    '\n*PRIMER AÑO*',
    '1 Introducción a las Ciencias Antropológicas',
    '2 Antropología Biológica I',
    '3 Geología del Cuaternario',
    '4 Antropología Social y Cultural',
    '5 Prehistoria General',

    '\n*SEGUNDO AÑO*',
    '6 Etnografía Americana',
    '7 Teoría e Historia de la Antropología',
    '8 Arqueología Americana',
    '9 Sociedades Campesinas',
    '10 Organización Social y Parentesco',

    '\n*TERCER AÑO*',
    '11 Antropología Biológica II',
    '12 Metodología y Técnica de la Investigación Arqueológica',
    '13 Arqueología Argentina',
    '14 Fundamentos de Análisis Matemáticos',
    '15 Teoría e Investigación en Antropología Social',

    '\n*CUARTO AÑO*',
    '16 Etnohistoria',
    '17 Lingüística General',
    '18 Antropología de las Sociedades Complejas',
    '19 Estadística',

    '\n*MATERIAS OPTATIVAS*',
    'Filosofía y su Problemática',
    'Psicología Social',
    'Biología del Aprendizaje',
    'Sociología General',
    'Sociología de la Educación (correlativa con Sociología General)',
    'Psicología General',
    'Historia Social',
    'Metodología y Técnica de la Investigación Histórica I (*)',
    'Metodología y Técnica de la Investigación Histórica II (*)',
    'Antropología Filosófica',
    'Epistemología',
    'Economía',
    '_(*) No son de dictado permanente_',

    '\n*IDIOMAS*',
    'Dos niveles de Inglés Técnico',

    '\n*CICLO SUPERIOR*',
    'Dos Seminarios',
    'Cuatro Seminarios relacionados con el área elegida',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifLicAntropologia.html',

]).addAnswer([
    '✏ Escribe *ofertas* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])

.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '2LicEnAntropologia.pdf')
})