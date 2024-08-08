import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowProfYLicFilosofia = addKeyword(['07']).addAnswer([
    '📄 *Profesorado y Licenciatura en Filosofía*',
    'Sede: San Salvador de Jujuy',
    '📄 Materias de la carrera',
    '\n*PRIMER AÑO*',
    '1	Filosofía',
    '2	Historia de la Filosofía Antigua',
    '3	Introducción a la Historia: Historia Social y del Arte',
    '4	Lógica',
    '5	Introducción a la Literatura',
    '6	Problemática Educativa',
    '7	Teoría y Metodología de la Historia de las Ideas Latinoamericanas',

    '\n*SEGUNDO AÑO*',
    '8 Gnoseología',
    '9 Historia de la Filosofía Medieval',
    '10 Historia de la Filosofía Moderna',
    '11 Antropología Filosófica',
    '12 Ética',
    '13 Idioma Moderno: Inglés I o Francés I',
    '14 Psicología Eduacional',
    '15 Filosofía de la Educación',

    '\n*TERCER AÑO*',
    '16 Epistemología',
    '17 Historia de la Filosofía Contemporánea',
    '18 Estética',
    '19 Metafísica',
    '20 Seminario de Pensamiento Argentino y Latinoamericano',
    '21 Didactica General',
    '22 Idioma Moderno: Inglés II o Francés II',

    '\n*CUARTO AÑO*',
    '23 Filosofía de la Historia',
    '24 Filosofía del Lenguaje',
    '25 Filosofía Política',
    '26 Filosofía de la Tecnología',
    '27 Didáctica de la Filosofía',
    '28 Seminario de Pensamiento Andino',
    '29 Optativa I',
    '30 Módulo de Práctica y Residencia',
    '31 Módulo de Trabajo Final de Tesis',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifProfLicFilosofia.html',
    '\n*Menu* Para volver al Menu principal.',
    '\n*Carreras* Para mostrar todas las carreras.',
])
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '7ProfyLicFilosofía.pdf')
})