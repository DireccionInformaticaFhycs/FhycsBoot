import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowProfHistoria = addKeyword(['09']).addAnswer([
    '📄 *Profesorado en Historia*',
    'Sede: San Salvador de Jujuy',
    '📄 Materias de la carrera',
    '\n*PRIMER AÑO*',
    '1	Introducción a la Historia',
    '2	Técnicas de Estudio',
    '3	Antropología Social y Cultural',
    '4	Procesos Mundiales I',
    '5	Sociología',
    '6	Pensamiento y Cultura Andino',
    

    '\n*SEGUNDO AÑO*',
    '7	Historiografía',
    '8 Procesos Mundiales II',
    '9 Procesos Americanos I',
    '10 Procesos Americanos II',
    '11 Procesos Mundiales III',
    '12 Etnohistoria Andina',

    '\n*TERCER AÑO*',
    '13 Procesos de Historia Argentina y Regional I',
    '14 Psicología Educacional',
    '15 Procesos Americanos III',
    '16 Optativa I',
    '17 Procesos de Historia Argentina y Regional II',
    '18 Filosofía de la Historia',
    '19 Planeamiento de la Educación',
    '20 Procesos Mundiales IV',

    '\n*CUARTO AÑO*',
    '21 Práctica y Residencia',
    '22 Procesos Americanos IV',
    '23 Didáctica General',
    '24 Optativa II',
    '25 Procesos de Historia Agentina y Regional III',
    '26 Didáctica de la Historia',
    '27 Investigación Educativa en Historia',
    '28 Idioma I',
    '29 Idioma II',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifProfHistoria.html',
]).addAnswer([
    '✏ Escribe *ofertas* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])
    
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '9ProfHistoria.pdf')
})