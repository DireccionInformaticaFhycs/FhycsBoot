import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowLicLetras = addKeyword(['11']).addAnswer([
    '📄 *Licenciatura en Letras*',
    'Sede: San Salvador de Jujuy',
    '📄 Materias de la carrera',
    '\n*PRIMER AÑO*',
    '1	Introducción a la Literatura',
    '2	Introducción a la Historia: Historia Social y del Arte',
    '3	Filosofía',
    '4	Gramática I',
    '5	Latín I',
    '6	Gramática II',
    '7	Latin II',
    '8 Literaturas Clásicas',

    '\n*SEGUNDO AÑO*',
    '9 Lingüistica',
    '10 Literatura Española I',
    '11 Teoría y Crítica Literaria',
    '12 Literatura Española II',
    '13 Literatura Europea I',
    '14 Literatura Latinoamericana I',

    '\n*TERCER AÑO*',
    '15 Literatura Latinoamericana II',
    '16 Literatura Argentina I',
    '17 Historia de la Lengua',
    '18 Griego I',
    '19 Literatura Argentina II',
    '20 Literatura Europea II',
    '21 Griego II',

    '\n*CUARTO AÑO*',
    '22 Lógica',
    '23 Antropología Filosófica',
    '24 Taller Literario',
    '25 Literateratura del NOA',
    '26 Lengua Extranjera Nivel I',
    '27 Lengua Extranjera Nivel II',

    '\n*QUINTO AÑO*',
    '28 Metodología de la Investigación',
    '29 Filosofía del Lenguaje',
    '30 Teoría y Crítica Literaria II',
    '31 Seminario vinculado a Temáticas Literarias',
    '32 Seminario vinculado a Temáticas Lingüisticas, Semánticas o Gramaticales.',
    '33 Tesina Final',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifLicLetras.html',
    '\n*Menu* Para volver al Menu principal.',
    '\n*Carreras* Para mostrar todas las carreras.',
])
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '11LicLetras.pdf')
})