import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowMaestriaProContCom = addKeyword(['03']).addAnswer([
    '📄 *Maestría en Problemáticas Contemporáneas de la Comunicación*',
    '📄 Materias de la carrera',
    '\n*Ciclo de Estudio Fijo*',

    '1	Teorías de la Comunicación y la Cultura',
    '2	Metodología de la Investigación en Comunicación 1 (Orientación: Medios)',
    '3	Discursos, Prácticas y Dinámicas de Transformación Social',
    '4	Metodología de la Investigación en Comunicación 2 (Orientación: Prácticas Socio-Cultural)',
    '5	Medios, Mediaciones y Mediatizaciones',
    '6	Seminarios de tesis',
    
    '\n*Ciclo Personalizado*',
    '1 Legislación y Derecho a la Comunicación',
    '2 Desigualdad, Diferencia y Derechos Humanos en Procesos Comunicacionales Contemporáneas',
    '3 Resistencia y Movimientos Sociales en América Latina',
    '4 Estado, Política y Construcción de lo Público',
    '5 Matrices Culturales y del Pensamiento Latinoamericano',
    '6 Estudios de Frontera',
    '7 Representaciones, Política e Identidad',
    '8 Planificación y Gestión de la Comunicación en Contextos Multiculturales',
    '9 Lenguajes en la Era Digital',

    '\n*Cada estudiante deberá cursar y aprobar solo cuatro (4) módulos del ciclo personalizado.*',
    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/secretaria_posgrado/posgrado_articulo.php?id=40',

]).addAnswer([
    '✏ Escribe *posgrado* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])

.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '3MaestriaProContCom.pdf')
})