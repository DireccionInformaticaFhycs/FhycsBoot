import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowLicEnHistoria = addKeyword(['08']).addAnswer([
    '📄 *Licenciatura en Historia*',
    'Sede: San Salvador de Jujuy',
    '📄 Materias de la carrera',
    '\n*PRIMER AÑO*',
    '1	Introducción a la Historia',
    '2	Técnicas de Estudio',
    '3	Antropología Social y Cultural',
    '4	Pensamiento y Cultura Andino',
    '5	Procesos Mundiales I',
    '6	Sociología',

    '\n*SEGUNDO AÑO*',
    '7	Historiografía',
    '8 Procesos Mundiales II',
    '9 Procesos Americanos I',
    '10 Procesos Americanos II',
    '11 Procesos Mundiales III',
    '12 Etnohistoria Andina',

    '\n*TERCER AÑO*',
    '13 Procesos de Historia Argentina y Regional I',
    '14 Metodología de Investigación Histórica I',
    '15 Procesos Americanos III',
    '16 Procesos de Historia Argentina y Regional II',
    '17 Filosofía de la Historia',
    '18 Metodología de Investigación Histórica II',
    '19 Procesos Mundiales IV',

    '\n*CUARTO AÑO*',
    '20 Seminario de Tésis',
    '21 Procesos Americanos IV',
    '22 Optativa I',
    '23 Seminario I',
    '24 Procesos de Historia Agentina y Regional III',
    '25 Seminario II',
    '26 Optativa II',
    '27 Idioma I',
    '28 Idioma II',
    '29 Tesis',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifLicHistoria.html',

]).addAnswer([
    '✏ Escribe *ofertas* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])
    
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '8LicHistoria.pdf')
})