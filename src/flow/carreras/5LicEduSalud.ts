import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowLicEducSalud = addKeyword(['05']).addAnswer([
    '📄 *Licenciatura en Educación para la Salud*',
    'Sede: San Salvador de Jujuy y San Pedro',
    '📄 Materias de la carrera',
    '\n*PRIMER AÑO*',
    '1	Introducción a la Educación para la Salud',
    '2	Psicología Evolutiva',
    '3	Antropología Filosófica',
    '4	Ecología Humana',
    '5	Psicología Social',
    '6	Pedagogía',
    '7	Antropología Social y Cultural',

    '\n*SEGUNDO AÑO*',
    '8	Problemática Sanitaria I',
    '9 Comunicación',
    '10 Didáctica',
    '11 Salud y Salud Pública',
    '12 Tecnología Educativa',
    '13 Epidemiología Y Estadística',

    '\n*TERCER AÑO*',
    '14 Problemática Sanitaria II',
    '15 Investigación Social',
    '16 Planeamiento de la Educación para la Salud',
    '17 Organización y Desarrollo de la Comunidad',
    '18 Legislación Aplicada',
    '19 Salud Ocupacional',

    '\n*CUARTO AÑO*',
    '20 Trabajo de Campo y Residencia',

    '\n*QUINTO AÑO*',
    '21 Seminario de Integración Metodológica',
    '22 Trabajo de Campo con Proyecto Final',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifLicEduSalud.html',

]).addAnswer([
    '✏ Escribe *ofertas* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])

.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '5LicEducSalud.pdf')
})