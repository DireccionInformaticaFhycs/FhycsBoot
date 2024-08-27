import { addKeyword} from '@builderbot/bot';
import { join } from 'path';

export const flowEspMaeEduInc = addKeyword(['04']).addAnswer([
    '📄 *Especialización y Maestría en Educación Inclusiva*',
    '📄 Materias de la carrera',
    '\n*Trayecto Especialidad*',
'1.2.	Derechos humanos e inclusión: legislación y normativa',
'1.3.	Perspectiva: Diversidad cultural e interculturalidad',
'1.4.	La investigación en educación inclusiva: líneas temáticas y análisis de casos',
'2.1.	Perspectiva: Diversidad de género, desigualdades, sociedad y coeducación',
'2.2.	Perspectiva: Discapacidad, diálogos y debates',
'2.3.	Análisis institucional para la inclusión educativa',
'2.4.	Proyecto de intervención institucional',
'3.1.	Perspectivas curriculares e inclusión educativa',
'3.2.	Enfoques y estrategias didácticas: el aula como escenario para la inclusión',
'3.3.	Innovación, cambio y mejora en las instituciones inclusivas',
'3.4.	Trabajo Final de Intervención Institucional*',
    
'\n*Trayecto Maestría*',
'4.1.	Problemáticas, desigualdades sociales y educativas en contextos de diversidad para la inclusión',
'4.2.	Perspectiva: desarrollo, neurodiversidad y apoyos educativos.',
'4.3.	Herramientas para una convivencia inclusiva en escenarios educativos',
'4.4.	Análisis y reflexión de la práctica pedagógica para la inclusión',
'4.5.	Trabajo integrador: investigación e intervención**',

'\n*Observación:*',
'*Al finalizar el cursado del módulo 12 (3.4), el estudiante para graduarse como Especialista en Educación Inclusiva debe presentar un aprobar un Trabajo Final.',

'**Al finalizar el cursado del módulo 17 (4.5) el estudiante para graduarse como Magister en Educación Inclusiva debe presentar y aprobar una Tesis',

'\nPara más info, visitanos en: https://www.fhycs.unju.edu.ar/secretaria_posgrado/posgrado_articulo.php?id=122',

]).addAnswer([
    '✏ Escribe *posgrado* para mostrar todas las carreras.',
    '📌 Escribí la palabra *Menú* para volver a las opciones de inicio.'])

.addAnswer(`Más info en el archivo PDF`, {
    media: join(process.cwd(), 'assets', '4EspMaeEduInc.pdf')
})