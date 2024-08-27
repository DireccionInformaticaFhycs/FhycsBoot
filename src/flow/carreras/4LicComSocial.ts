import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowLicComSocial = addKeyword(['04']).addAnswer([
    '📄 *Licenciatura en Comunicación Social*',
    'Sede: San Salvador de Jujuy',
    '📄 Materias de la carrera',
    '\n*PRIMER AÑO*',
    '1	Teoría y Problemática de la Comunicación Social I',
    '2	Historia Social de la Cultura',
    '3	Filosofía y su Problemática',
    '4	Taller de Comprensión y Producción de Texto Periodístico',
    '5	Psicología Social',
    '6	Fuentes de Información y Documentación (Seminario)',
    '7	Introducción a la Problemática Periodística',
    '8	Taller de Producción Gráfica',
    
    '\n*SEGUNDO AÑO*',
    '9 Lingüística',
    '10 Seminario de Tecnología de la Comunicación Social',
    '11 Taller de Redacción Periodística',
    '12 *Taller Optativo:*',
    '*Producción Televisiva I',
    '*Tecnología y Producción Radiofónica I',
    '*Taller de Fotografía I',
    '13 Sociología de la Comunicación Social',
    '14 Geografía Económica y Política Americana',
    '15 Taller de Publicidad y Propaganda',
    '16 *Taller Optativo:*',
    '*Producción Televisiva II',
    '*Tecnología y Producción Radiofónica II',
    '*Taller de Fotografía II',
    
    '\n*TERCER AÑO*',
    '17 Economía Política y Problemática Económica Argentina',
    '18 Antropología Social y Cultural',
    '19 *Taller Optativo:*',
    '*Audio-Visual/Gráfica',
    '20 Historia Política, Económica y Socail de América y Argentina',
    '21 Estadística',
    '22 Análisis del Discurso',
    '23 Epistemología',
    'Acreditación de 2 niveles de Inglés y Otro Idioma extanjero moderno: _TÍTULO INTERMEDIO: TÉCNICO EN COMUNICACIÓN SOCIAL_',
    
    '\n*CUARTO AÑO*',
    '24 Teoría y Problmática de la Comunicación Social II',
    '25 Planificación en Comunicación Social',
    '26 Metodología de la Investigación',
    '27 Análisis de la Realidad Contemporánea Comunicacional (Seminario)',
    '28 Comunicación y Educación (Seminario)',
    '29 Comunicación Alternatica (Seminario)',
    '30 Ética y Legislación de la Información',
    '31 Seminarios de Formación Específica:',
    '*(Áreas) - Turística',
    '*Deportiva',
    '*Científica',
    '*Legislativa',
    '*Política',
    '*Educatica',
    '*Otros',
    '32 Residencia Profesional',

    '\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/ingreso/ifLicComSocial.html',

]).addAnswer([
    '✏ Escribe *ofertas* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])

.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '4LicComSocial.pdf')
})