import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowProfEnLetras = addKeyword(['10']).addAnswer([
    '📄 *Profesorado en Letras*',
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
    '12 Psicología',
    '13 Pedagogía. Organización y Administración Escolar',
    '14 Literatura Española II',
    '15 Literatura Europea I',
    '16 Literatura Latinoamericana I',
    '17 Psicología Evolutiva',

    '\n*TERCER AÑO*',
    '18 Literatura Latinoamericana II',
    '19 Literatura Argentina I',
    '20 Historia de la Lengua',
    '21 Griego I',
    '22 Didáctica',
    '23 Literatura Argentina II',
    '24 Literatura Europea II',
    '25 Griego II',

    '\n*CUARTO AÑO*',
    '26 Lógica',
    '27 Antropología Filosófica',
    '28 Lengua Extranjera Moderna Nivel I',
    '29 Lengua Extranjera Moderna Nivel II',
    '30 Práctica y Residencia',
    '31 Lengua Extranjera Moderna Nivel I: Inglés I – Francés I',
    '31 Lengua Extranjera Moderna Nivel I: Inglés I – Francés II',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifProfLetras.html',

]).addAnswer([
    '✏ Escribe *ofertas* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])
    
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '10ProfLetras.pdf')
})