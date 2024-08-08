import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowTecLicTurismo = addKeyword(['12']).addAnswer([
    '📄 *Tecnicatura y Licenciatura en Turismo*',
    'Sede: Purmamarca y El Carmen',
    '📄 Materias de la carrera',

    '\n*PRIMER AÑO*',
    '1	Inglés Turístico 1',
    '2	Geografía de Recursos Turísticos',
    '3	Introducción al Turismo',
    '4	Principios de administración y Contabilidad',
    '5	Procesos históricos Argentinos y Jujeños',
    '6	Antropología y Turismo',
    '7	Arte y Arquitectura Colonial',

    '\n*SEGUNDO AÑO*',
    '8 Inglés Turístico 2',
    '9 Productos turísticos y atractivos turísticos de la Región',
    '10 Gestión del Patrimonio',
    '11 Agencias de Viaje',
    '12 Formulación y financiamiento de proyectos turísticos',
    '13 Informática aplicada al Turismo',
    '14 Planificación estratégica de destinos turísticos',
    '15 Organización y operación de empresas turísticas',

    '\n*TERCER AÑO*',
    '16 Inglés Turístico 3',
    '17 Teoría y Técnicas de la Estructura y los procesos administrativos',
    '18 Relaciones humanas y públicas',
    '19 Derecho y legislación Turística',
    '20 Turismo Sustentable y Desarrollo Local',
    '21 Gestión de Calidad Turística',
    '22 Portugués Turístico 1',
    '23 Metodología de la Investigación 1',
    '24 Práctica profesionalizante',
    '*TÍTULO INTERMEDIO: TÉCNICO UNIVERSITARIO EN TURISMO*',

    '\n*CUARTO AÑO*',
    '25 Gestión de destinos turísticos sustentables',
    '26 Metodología de la Investigación 2',
    '27 Gestión de Servicios hoteleros',
    '28 Francés',
    '29 Portugués Turístico 2',
    '30 Gestión de Calidad Turística',
    '31 Comercialización de productos y servicios turísticos',
    '32 Gestión del uso turístico de espacios protegidos',
    '33 Taller de Tesis',
    '*TÍTULO FINAL: LICENCIADO EN TURISMO*',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifTecUnivGestyProdEditWeb.html',
    '\n*Menu* Para volver al Menu principal.',
    '\n*Carreras* Para mostrar todas las carreras.',
])
.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '12TecLicTurismo.pdf')
})