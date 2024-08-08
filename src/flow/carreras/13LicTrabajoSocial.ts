import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowLicTrabajoSocial = addKeyword(['13']).addAnswer([
    '📄 *Licenciatura en Trabajo Social*',
    'Sede: San Salvador de Jujuy',
    '📄 Materias de la carrera',
    '\n*PRIMER AÑO*',
    '1	Introducción al Trabajo Social',
    '2	Metodología del Trabajo Social',
    '3	Problemática Filosófica Contemporánea y Trabajo Social',
    '4	Antropología Social y Cultural',
    '5	Historia Social Argentina y Latinoamericana',
    '6	Teórias de Desarrollo, Teorías del Estado y Políticas Públicas',
    '7	Género y Derechos Humanos',

    '\n*SEGUNDO AÑO*',
    '8	Trabajo Social con Grupos I',
    '9 Trabajo Social con Grupos II',
    '10 Planeamiento y Evaluación en Trabajo Social',
    '11 Trabajo Social e Investigación Social I',
    '12 Teoría Social Clásica en Trabajo Social',
    '13 Psicología Social',
    '14 Práctica de Recursos de la Comunidad',

    '\n*TERCER AÑO*',
    '15 Trabajo Social Comunitario',
    '16 Trabajo Social e Investigación Social II',
    '17 Teorías Sociales Contemporáneas en Trabajo Social',
    '18 Sociedades Complejas y Campesinas',
    '19 Salud, Salud Pública y Trabajo Social',
    '20 Práctica de Trabajo Social con Grupos',

    '\n*CUARTO AÑO*',
    '21 Trabajo Social Familiar I',
    '22 Problemática Social Argentina, Regional y Sur Andina',
    '23 Economía Social y Políticas Económicas',
    '24 Sistemas de Protección Social',
    '25 Psicología Evolutiva',
    '26 Práctica de Trabajo Social y Comunitario',

    '\n*QUINTO AÑO*',
    '27 Trabajo Social Familiar II',
    '28 Seminario de Integración Metológica y Diseño de Tesis',
    '29 Administración y Gerenciamiento Organizaciones y Servicios Sociales',
    '30 Práctica de Trabajo Social Familiar',
    '31 TRABAJO FINAL DE TESIS: Obtención del Título LICENCIADO EN TRABAJO SOCIAL',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifLicTrabSocial.html',
    '\n*Menu* Para volver al Menu principal.',
    '\n*Carreras* Para mostrar todas las carreras.',
])
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '13LicTraSocial.pdf')
})